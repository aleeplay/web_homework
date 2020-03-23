"use strict";
var text_in = document.write("qwerty1");
var text = document.body.innerText;
document.write("<br/>");
document.writeln(text.split(" ").length, " ", text.split(" ").join("").length);
document.write("<br/>");

var hrefLocal = document.location.href;
var hrefInternet =
  "https://sun9-27.userapi.com/c854016/v854016214/20d7ff/7e_nWnPqmqM.jpg";
var hrefWithQueryParams =
  "https://vk.com/audiosQueryParams?section=all&playlistId=1";
var hrefLocalInfo = getHrefInfo(hrefLocal);
var hrefInternetInfo = getHrefInfo(hrefInternet);

document.write(hrefLocal);
document.write("<br/>");
document.write(hrefLocalInfo.protocol, " ", hrefInternetInfo.protocol);
document.write("<br/>");
document.write(
  hrefLocalInfo.fileExtension,
  " ",
  hrefInternetInfo.fileExtension
);
document.write("<br/>");
console.log(getQueryParams(hrefWithQueryParams));

function getHrefInfo(href) {
  var newHref = {
    protocol: href.substring(0, href.indexOf(":")),
    fileExtension: href.substring(href.lastIndexOf(".") + 1, href.length)
  };
  return newHref;
}

function getQueryParams(href) {
  var queryParams = {};
  href
    .substring(href.indexOf("?") + 1, href.length)
    .split("&")
    .forEach(param => {
      const paramKeyValue = param.split("=");
      queryParams[paramKeyValue[0]] = paramKeyValue[1];
    });
  return queryParams;
}

var anchorHref = "https://yandex.ru";

console.log(
  "Количество anchors в html: ",
  document.body.getElementsByTagName("a").length
);
for (var i = 0; i < 4; i++) {
  var anchor = document.createElement("a");
  anchor.href = anchorHref.concat(`/${i}`);
  anchor.innerText = `Ссылка ${i + 1}`;
  anchor.style.marginRight = "5px";
  document.body.append(anchor);
}

document.write("<br/>");
for (var i = 0; i < 2; i++) {
  var img = document.createElement("img");
  img.id = `value ${i + 1}`;
  img.src =
    "https://sun9-27.userapi.com/c854016/v854016214/20d7ff/7e_nWnPqmqM.jpg";
  img.style.height = 30 + i * 10 + "px";
  img.alt = `Ссылка ${i + 1}`;
  img.style.marginRight = "5px";
  document.body.append(img);
}

document.write("<br/>");
document.write(
  "Количество anchors равно " + document.body.getElementsByTagName("a").length
);
console.log(
  "Количество anchors через JS " +
    document.body.getElementsByTagName("a").length
);

document.write("<br/>");
document.write(
  "Количество link-ов равно ",
  document.getElementsByTagName("link").length
);
console.log(
  "Количество link-ов в html: ",
  document.getElementsByTagName("link").length
);

document.write("<br/>");
document.write(document.body.getElementsByTagName("a").item(0).innerText);

document.write("<br/>");
document.write(
  "Количество картинок " + document.body.getElementsByTagName("img").length
);

document.write("<br/>");
document.write(
  "Ширина первой картинки ".concat(
    document.body.getElementsByTagName("img").item(0).width
  )
);

var images = document.querySelectorAll("img");
var maxWidth = images[0].width;
images.forEach(img => {
  if (img.width > maxWidth) {
    maxWidth = img.width;
  }
});

document.write("<br/>");
document.write("ширина самой широкой картинки равна ", maxWidth);
console.log("ширина самой широкой картинки равна ", maxWidth);

var imagesHeightSum = 0;
images.forEach(img => {
  imagesHeightSum += img.height;
});
document.write("<br/>");
document.write("Сумма высот картинкок равна ", imagesHeightSum);
console.log("Сумма высот картинкок равна ", imagesHeightSum);


var forms = [];
for (var i = 0; i < 12; i++) {
  var form = document.createElement("form");
  form.name = `formName${i + 1}`;
  form.id = `formValue${i + 1}`;
  forms.push(form);
  document.body.append(form);
}

var evenFormsNames = forms
  .filter(form => form.id.substring(9, form.id.length) % 2 == 0)
  .map(evenForm => evenForm.id)
  .join(", ");

document.write(evenFormsNames);
console.log(evenFormsNames);

var formsHTML = document.body.getElementsByTagName("form");
console.log(formsHTML);
for (var i = 0; i < formsHTML.length; i++) {
  var inputText = document.createElement("input");
  var inputPass = document.createElement("input");
  var inputRadio = document.createElement("input");
  inputText.type = "text";
  inputText.style.margin = "5px";
  inputPass.type = "password";
  inputPass.style.margin = "5px";
  inputRadio.type = "radio";
  inputRadio.style.margin = "5px";
  formsHTML[i].appendChild(inputText);
  formsHTML[i].appendChild(inputPass);
  formsHTML[i].appendChild(inputRadio);
}

for (var i = 0; i < formsHTML.length; i++) {
  var button = document.createElement("button");
  button.type = "button";
  button.innerText = "name";
  button.style.margin = "5px";
  button.onclick = () => alert(button.innerText);
  formsHTML[i].appendChild(button);
}

for (var i = 0; i < formsHTML.length; i++) {
  var button = document.createElement("button");
  button.type = "button";
  button.innerText = "???";
  button.style.margin = "5px";
  button.onclick = () => alert(button.parentNode.id);
  formsHTML[i].appendChild(button);
}

for (var i = 0; i < formsHTML.length; i++) {
  var button = document.createElement("button");
  button.type = "reset";
  button.innerText = "drop";
  button.style.margin = "5px";
  formsHTML[i].appendChild(button);
}

for (var i = 0; i < formsHTML.length; i++) {
  var button = document.createElement("button");
  button.type = "button";
  button.innerText = "count fields";
  button.style.margin = "5px";
  button.onclick = () => {
    alert(`Количество полей равно ${button.parentNode.childNodes.length}`);
  };
  formsHTML[i].appendChild(button);
}

document.body.querySelectorAll("button").forEach(button => {
  button.style.padding = "15px";
  button.style.borderRadius = "10px";
  button.style.border = "1px solid rgba(121, 121, 119, 4)";
  button.style.cursor = "pointer";
  button.onmouseover = () => {
    button.style.backgroundColor = "#b895fb";
    button.style.color = "white";
  };
  button.onmouseout = () => {
    button.style.color = "black";
    button.style.backgroundColor = "#f0f0f0";
  };
  var image = document.createElement("img");
  image.style.width = "20px";
  image.style.height = "20px";
  image.style.verticalAlign = "bottom";
  switch (button.innerText) {
    case "name":
      image.src = "pic1.png";
      break;
    case "???":
      image.src = "img2.png";
      break;
    case "drop":
      image.src = "img3.png";
      break;
    case "count fields":
      image.src = "img4.png";
      break;
  }
  button.prepend(image);
});
