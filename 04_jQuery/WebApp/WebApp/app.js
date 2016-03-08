/// <reference path="jquery-2.2.1.js" />

//var $ = jQuery;
//$("kjhjhfdjkfd")

//var nodeList = document.querySelectorAll("li");

//var list = $("list");
//console.log(list.length);
//for (var i = 0; i < list.length; i++) {
//    console.log(list[i].innerHTML);
//}

//$("span.female").text("hello jquery!");
//$("ul > .female").text("hello jquery!");
//$("li:not(.female)").text("hello jquery!");

//var list = $("li").text("hello jquery!");
//list.css("color", "Green");

//$(".female").text("hello jquery!");
//$(":not(.female)").css("color", "red");

//$("#brock")
//    .find(".female")
//        .text("this is the child");

$("li")
    .text('hai!')
    .filter(".female")
        .css('color', "blue")
        .end()
    .css('background-color', 'pink');

$("ul").on("click", "li", function (e) {
    //console.log(e.target.innerText + " was clicked!");
    //console.log(this.innerHTML + " was clicked!");
    //$(this).css('background-color', "blue");
    //$(this).removeClass("female");
    $(this).toggleClass("selected");
});

$("#removeButton").click(function () {
    $(".selected")
        .slideUp()
        .slideDown()
        .fadeOut(function () {
            $(this).remove();
        })
});

$("#addButton").click(function () {
    $("<li>")
        .text($("#name").val()).appendTo("ul");

    //var name = $("#name").val();
    //var li = $("<li>");
    //li.text(name);
    //var ul = $("ul");
    //ul.append(li);
});

//window.requestAnimationFrame(function () {
//});
