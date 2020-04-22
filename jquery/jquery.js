$(document).ready(function () {

    //Selectors
    $("p").css("fontSize", "20px");
    $(".title").css("color", "#b00b69");
    $(".anchor").css({
        "backgroundColor": "#b00b69",
        "borderRadius": "3px",
        "textDecoration": "none",
        "padding": "5px 10px",
        "color": "white"
    });
    $("form > *").attr("disabled", true);

    //DOM
    $("a").prepend("↖");
    $("a").attr("target", "_blank")
    $("a").each(function () {
        $(this).attr("href", function (_, value) {
            return value.replace("http:", "https:")
        });
    });

    //Добавим кнопку Отменить, при нажати на которую убираются стрелки с ссылоок
    let cancel = $('<button id="cancel">Отменить действия</button>')
    $('body').append(cancel);
    cancel.css({
        "position": "fixed",
        "top": 0,
        "right": 0
    })
    cancel.click(function () {
        $("a").each(function () {
            $(this).text(function (_, text) {
                return text.replace(/^↖/, "")
            });
        });

        $("form > *").attr("disabled", false);
    });

    /*JQUERY EFFECTS https://www.w3schools.com/jquery/jquery_ref_effects.asp */
    $("#fadeOut").click((e) => {
        $(e.target).closest("tr").find("p").fadeOut();
    });

    $("#fadeIn").click((e) => {
        $(e.target).closest("tr").find("p").fadeIn();
    });

    $("#fadeTo").click((e) => {
        $(e.target).closest("tr").find("p").fadeTo(1000, 0.8, "linear", () => alert('success'));
    });

    $("#fadeToggle").click((e) => {
        $(e.target).closest("tr").find("p").fadeToggle();
    });

    $("#slideDown").click((e) => {
        $(e.target).closest("tr").find("p").slideDown();
    });

    $("#toggle").click((e) => {
        $(e.target).closest("tr").find("p").toggle();
    });
});

//prop - ключ, props[prop] - значение
/*
Рекурсивно создаём список. Если очередной элемент - текстовый, просто добавляем его к списку,
Иначе создаём новый список, передав туда текущий объект

Например:
req = {
  glossary: {
    title: "example glossary"
    GlossDiv: {
      title: "S"
    }
  }
}
Вызываем makeList
glossary - Объект, пожтому пишем его название и вызываем функцию makeList, передав туда уже не req,
а только glossary. В нём есть title, который просто переносим, а есть объект GlossDiv, который мы вставляем через makeList
*/
function makeList(props) {
    let ul = $('<ul></ul>');
    for (prop in props) {
        let li = $('<li></li>');
        if (typeof (props[prop]) !== 'object') {
            li.text(props[prop]);
        } else {
            li.text(prop);
            li.append(makeList(props[prop]));
        }
        ul.append(li);
    }
    return ul;
}

/* AJAX */
$("#ajax").click(() => {
    $.ajax({
        url: "https://inxaoc.github.io/example/ajax-1.html"
    }).done((page) => {
        let content = $("<div></div>");
        $(content).html(page);
        $("body").append(content);
        $([document.documentElement, document.body]).animate({
            scrollTop: $(content).offset().top
        }, 1000);
    });
});

$.ajax({
    url: "https://inxaoc.github.io/example/ajax.json"
}).done((result) => {
    let req = { ...result };
    console.log(req);
    $("body").append(makeList(req));
});
