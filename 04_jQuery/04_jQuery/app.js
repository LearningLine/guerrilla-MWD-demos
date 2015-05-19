/// <reference path="jquery-2.1.4.js" />

//$(document).on("ready", function () {
//$(document).ready(function () {
$(function () {

    //var $ = jQuery;
    //jQuery("")
    //$("")

    //var list = $("li");
    //for (var i = 0; i < list.length; i++) {
    //    console.log(list[i].innerHTML);
    //}

    //var text = $("#brock").text();
    //console.log(text);

    //$("li").text("hello jQuery!");
    //$("li").attr("title", "wow this is cool");
    //$("li.female, #brock").css("color", "green");
    //$("li[title*='nice']").css("color", "green");

    //$("#people > .female").css("color", "green");

    //$("#people > .female").css("color", "green");
    //var colors = $("#brock").css("color");
    //console.log(colors, typeof colors);
    //$("#people > .female").css("color", colors);

    //$("li:nth-child(3n+1)").css('background-color', 'lime');

    //function foo() {
    //    return {
    //        name: "Brock"
    //    };
    //}

    //$("li")
    //    .css('color', 'red')
    //    .text('hi')
    //    .attr('title', 'yay')
    //    .filter('.female')
    //        .css('font-style', 'italic')
    //        .end()
    //    .text('all li')
    //;

    $("#hire")
        .click(function () {
            //document.getElementById('name').value;
            $("<li>")
                .text($('#name').val())
                .appendTo("#people");
        });

    $("#fire")
        .click(function () {
            var doomed = $("#people .selected");
            var map = doomed.map(function () {
                var pk = this.dataset['pk'];
                return pk;
            }).get();

            console.log(map);

            doomed.fadeOut().slideDown("slow").slideUp(500, function () {
                $(this).remove();
            });

        });

    $("ul")
        .on("click", "li", function () {
            $(this).toggleClass('selected');
            //console.log(this.innerHTML);
            //this.css("back")
            //this.className = "selected";
            //if ($(this).hasClass("selected")) {
            //    $(this).removeClass('selected');
            //}
            //else {
            //    $(this).addClass('selected');
            //}
            //if ($(this).hasClass("selected")) {
            //    $(this).removeClass('selected');
            //}
            //$("#people .selected").removeClass('selected');
            //$(this)
            //    //.data("someProp", {name:"Brock"})
            //    .parent()
            //        .find(".selected")
            //        .removeClass("selected")
            //        .end()
            //    .end()
            //    .addClass('selected');
            //$("li[data-smart]")
        });

});
