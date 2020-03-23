let main_form = document.createElement("div")
document.body.appendChild(main_form)

let h = document.createElement("h2")
document.body.appendChild(h)

let forma = document.createElement("form")
forma.classList.add("rect")
main_form.appendChild(forma)
for (let i = 0; i < 2; i++) {
    let par = document.createElement("input")
    par.type = "number"
    forma.appendChild(par)
}
let t = document.createElement("p")
t.innerText = "Введите кол-во строк и столбцов"
forma.prepend(t)

CreateBlocks()
let temp_input = document.createElement("input")
temp_input.type = "submit"
temp_input.value = "Создать"
forma.appendChild(temp_input)
forma.onsubmit = function(e) {
    CreateTable(e.target.elements[0].value, e.target.elements[1].value)
    forma.classList.add("hidden")
    forma.reset()
    document.getElementsByClassName("functions")[0].classList.remove("hidden")
    return false
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function CreateBlocks() {
    let functions = document.createElement("div")
    functions.classList.add("functions")
    functions.classList.add("hidden")
    main_form.appendChild(functions)

    let div1 = document.createElement("div")
    functions.appendChild(div1)
    let p1 = document.createElement("p")
    p1.innerHTML = "Изменить границы таблицы"
    div1.appendChild(p1)

    let shirina = document.createElement("input")
    shirina.type = "text"
    shirina.maxLength = 3
    shirina.oninput = function() { but1.innerText = "Применить " + shirina.value + " px" + " и рамка " + letiant.value }
    div1.appendChild(shirina)

    const border = ["none", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
    let letiant = document.createElement("select")
    div1.appendChild(letiant)
    for (let i = 0; i < border.length; i++) {
        let opt = document.createElement("option")
        opt.innerText = border[i]
        letiant.appendChild(opt)
        letiant.onchange = function() { but1.innerText = "Применить " + shirina.value + " px" + " и рамка " + letiant.value }
    }

    let but1 = document.createElement("button")
    but1.innerText = "Применить"
    but1.onclick = function() {
        let text = but1.parentNode.querySelector("input").value
        let borderStyle = but1.parentNode.querySelector("select").value
        document.querySelector("table").style.borderStyle = borderStyle
        document.querySelector("table").style.width = text + "px"
    }
    div1.appendChild(but1)


    let div2 = document.createElement("div")
    functions.appendChild(div2)
    let p2 = document.createElement("p")
    p2.innerText = "Добавить заголовок"
    div2.appendChild(p2)

    let zag = document.createElement("input")
    zag.type = "text"
    div2.appendChild(zag)

    let but2 = document.createElement("button")
    but2.innerText = "Добавить"
    but2.onclick = function() { h.innerText = zag.value }
    div2.appendChild(but2)


    let div3 = document.createElement("div")
    functions.appendChild(div3)
    let p3 = document.createElement("p")
    p3.innerText = "Удалить строку"
    div3.appendChild(p3)

    let str = document.createElement("input")
    str.type = "text"
    div3.appendChild(str)

    let but3 = document.createElement("button")
    but3.innerText = "Удалить"
    but3.onclick = function() {
        if (str.value > 0 && str.value - 1 < document.getElementsByTagName("tr").length) {
            document.getElementsByTagName("tr")[str.value - 1].remove()
        } else { alert("Значение некорректно") }
    }
    div3.appendChild(but3)


    let div4 = document.createElement("div")
    functions.appendChild(div4)
    let p4 = document.createElement("p")
    p4.innerText = "Случайный выбор"
    div4.appendChild(p4)

    let but4 = document.createElement("button")
    but4.innerText = "Magic"
    but4.onclick = function() {
        let i = randomInteger(0, document.getElementsByTagName("tr").length - 1)
        let j = randomInteger(0, document.getElementsByTagName("tr")[0].getElementsByTagName("td").length - 1)
        let rand = document.getElementsByTagName("tr")[i].childNodes[j]
        rand.style.backgroundColor = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.color = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.fontSize = randomInteger(15, 25) + "pt"
        rand.innerHTML = ""
        let form_letiable_but = document.createElement("form")
        rand.appendChild(form_letiable_but)
        let text = document.createElement("textarea")
        text.rows = randomInteger(5, 15)
        text.cols = randomInteger(5, 15)
        form_letiable_but.appendChild(text)
        form_letiable_but.appendChild(document.createElement("br"))
        let temp_input = document.createElement("input")
        temp_input.type = "submit"
        temp_input.value = "Сохранить"
        form_letiable_but.appendChild(temp_input)
        form_letiable_but.onsubmit = function(e) {
            e.target.parentNode.innerText = e.target.elements[0].value
            return false
        }
    }
    div4.appendChild(but4)

    let div5 = document.createElement("div")
    functions.appendChild(div5)
    let p5 = document.createElement("p")
    p5.innerText = "Удалить таблицу"
    div5.appendChild(p5)
    let but5 = document.createElement("button")
    but5.innerText = "Удалить"
    but5.onclick = function() {
        document.getElementsByTagName("table")[0].remove()
        forma.classList.remove("hidden")
        let inputs = functions.getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ""
        };
        but1.innerText = "Применить"
        h.innerText = ""
        functions.classList.add("hidden")
    }
    div5.appendChild(but5)

    return false
}

function CreateTable(str, stb) {
    let text_area_tables = document.createElement("table")
    for (let i = 0; i < str; i++) {
        let stroka = document.createElement("tr")
        for (let j = 0; j < stb; j++) {
            let column = document.createElement("td")
            stroka.appendChild(column)
            let form_letiable = document.createElement("form")
            column.appendChild(form_letiable)
            let surface_for_text = document.createElement("textarea")
            surface_for_text.rows = 10
            surface_for_text.cols = 20
            form_letiable.appendChild(surface_for_text)
            form_letiable.appendChild(document.createElement("br"))
            let temp_input = document.createElement("input")
            temp_input.type = "submit"
            temp_input.value = "Сохранить"
            form_letiable.appendChild(temp_input)
            form_letiable.onsubmit = function(e) {
                e.target.parentNode.innerText = e.target.elements[0].value
                return false
            }
        }
        text_area_tables.appendChild(stroka)
    }
    document.body.appendChild(text_area_tables)
}