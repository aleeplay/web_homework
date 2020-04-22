$(window).on('load', function() {
    if (!checkParams()) {
        alert("Пустые параметры")
    } else {
        CreateBlocks()
        CreateTable(...checkParams())
    }
});

function checkParams() {
    let params = {}
    let request = location.search.substr(1).split("&")
    request.map(param => {
        param = param.split("=")
        params[param[0]] = param[1]
    })
    if (params.cols > 0 && params.rows > 0) {
        return [params.rows, params.cols]
    }
    return false;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function CreateBlocks() {
    let h = $("<h2></h2>")
    $(".container-fluid").append(h)
    let functions = $(`<div class="functions row d-flex flex-wrap justify-content-around"></div>`)
    $(".container-fluid").append(functions)

    let div1 = $(`<div class="col bg-light"><div class="card-body"></div></div>`)
    functions.append(div1)
    div1.find(".card-body").append(`<p class="card-title">Изменить границы таблицы</p>`)

    let shirina = $(`<input class="form-control" type="text"/>`)
    shirina.attr("maxLength", 3)
    shirina.on("input", function() { but1.text("Применить " + shirina.val() + " px" + " и рамка " + letiant.val()) })
    div1.find(".card-body").append(shirina)

    const border = ["none", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
    let letiant = $(`<select class="form-control"></select>"`)
    div1.find(".card-body").append(letiant)
    letiant.change(function() { but1.text("Применить " + shirina.val() + " px" + " и рамка " + letiant.val()) })
    for (let i = 0; i < border.length; i++) {
        let opt = $(`<option>${border[i]}</option>`)
        letiant.append(opt)
    }

    let but1 = $(`<button class="btn btn-success">Применить</button>`)
    but1.click(function() {
        let text = $(but1).parent().find("input").val()
        let borderStyle = $(but1).parent().find("select").val()
        console.log(text, borderStyle)
        document.querySelector("table").style.borderStyle = borderStyle
        document.querySelector("table").style.borderWidth = text + "px"
    })
    div1.find(".card-body").append("<hr/>")
    div1.find(".card-body").append(but1)


    let div2 = $(`<div class="col bg-light"><div class="card-body"></div></div>`)
    functions.append(div2)
    div2.find(".card-body").append(`<p class="card-title">Добавить заголовок</p>`)

    let zag = $(`<input class="form-control" type="text"/>`)
    div2.find(".card-body").append(zag)

    let but2 = $(`<button class="btn btn-success">Добавить</button>`)
    but2.click(function() { h.text(zag.val()) })
    div2.find(".card-body").append("<hr/>")
    div2.find(".card-body").append(but2)

    let div3 = $(`<div class="col bg-light"><div class="card-body"></div></div>`)
    functions.append(div3)
    div3.find(".card-body").append(`<p class="card-title">Удалить строку</p>`)

    let str = $(`<input class="form-control" placeholder="Строка" type="text"/>`)
    div3.find(".card-body").append(str)
    div3.find(".card-body").append("столбец")

    let std = $(`<input class="form-control" placeholder="Столбец" type="text"/>`)
    div3.find(".card-body").append(std)
    div3.find(".card-body").append("<hr/>")
    let but3 = $(`<button class="btn btn-success">Удалить</button>`)
    but3.click(function() {
        if (str.val() > 0 && str.val() < document.getElementsByTagName("tr").length) {
            document.getElementsByTagName("tr")[str.val()].remove()
        } else if (std.val() > 0 && std.val() < document.querySelector("tr").getElementsByTagName("td").length) {
            Array.from(document.getElementsByTagName("tr")).map(tr => {
                tr.querySelectorAll("td")[std.val()].remove()
            })
        } else { alert("Значение некорректно") }
    })
    div3.find(".card-body").append(but3)


    let div4 = $(`<div class="col bg-light"><div class="card-body"></div></div>`)
    functions.append(div4)
    div4.find(".card-body").append(`<p class="card-title">Случайный выбор</p>`)

    let but4 = $(`<button class="btn btn-success">Magic</button>`)
    but4.click(function() {
        let i = randomInteger(1, document.getElementsByTagName("tr").length - 1)
        let j = randomInteger(1, document.getElementsByTagName("tr")[0].getElementsByTagName("td").length - 1)
        let rand = document.getElementsByTagName("tr")[i].childNodes[j]
        rand.style.backgroundColor = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.color = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.fontSize = randomInteger(15, 25) + "pt"
        rand.innerHTML = ""
        if (Math.random() > 0.5) {
            createForm($(rand))
        }
    })
    div4.find(".card-body").append(but4)

    let div5 = $(`<div class="col bg-light"><div class="card-body"></div></div>`)
    functions.append(div5)
    div5.find(".card-body").append(`<p class="card-title">Очистить таблицу</p>`)
    let but5 = $(`<button class="btn btn-success">Удалить</button>`)
    but5.click(function() {
        let str = document.querySelectorAll("table tr")
        for (let i = 1; i < str.length; i++) {
            let std = str[i].querySelectorAll("td")
            for (let j = 1; j < std.length; j++) {
                $(std[j]).css({ "backgroundColor": "inherit", "color": "inherit", "fontSize": "inherit" })
                createForm($(std[i]))
            }
        }

        $(".functions input").val("")
        but1.innerText = "Применить"
        h.text("")
        $(".functions").addClass("hidden")
    })
    div5.find(".card-body").append(but5)

    return false
}

function createForm(root) {
    root.html("")
    let form_letiable = $(`<div class="form-group"><form class="form-inline"><textarea class="form-control-sm mr-2"></textarea><button class="btn btn-success"><span>Сохранить</span></button></form></div>`)
    $(form_letiable).submit(function(e) {
        $(e.target).parent().text(e.target.elements[0].value)
        return false
    })
    root.append(form_letiable)
}

function CreateTable(str, stb) {
    let wrapper = $(`<div class="table-responsive"><style>.table-responsive {width: auto} table .col{width: 100px}</style></div>`)
    let text_area_tables = $(`<table class="table table-bordered"></table>`)
    for (let i = 0; i <= str; i++) {
        let stroka = $(`<tr></tr>`)
        for (let j = 0; j <= stb; j++) {
            let column = $(`<td class="col"></td>`)
            stroka.append(column)
            if (i == 0 && j == 0) {
                column.css("background", "#eee")
                column.removeClass("col")

            } else if (i == 0) {
                column.css("background", "#eee")
                column.text("abcdefghijklmnopqrstuvwxyz" [j - 1])
            } else if (j == 0) {
                column.css("background", "#eee")
                column.removeClass("col")
                column.text(i)
            } else {
                createForm(column)
            }
        }
        text_area_tables.append(stroka)
    }
    wrapper.append(text_area_tables)
    $(".container-fluid").append(wrapper)
}