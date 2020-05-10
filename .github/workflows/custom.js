var startPosition = 0;
var pagePosition = 0;
var scrollY = 0;
var scrollPrevented = false;

$(document).on('vmousedown', '.dragme', function(event) {
var startPosition = pagePosition;
$(document).on('vmousemove', function(event2) {
scrollY = event2.pageY;
pagePosition = startPosition + scrollY - event.pageY;
if (pagePosition > $("#menu").height()) {
    pagePosition = $("#menu").height();
} else if (pagePosition < 0) {
    pagePosition = 0;
}
if (scrollPrevented == false) {
    scrollPrevented = true;
    $(document).on('touchmove', function(ev) {
        ev.preventDefault();
    });
}
$("#menu").css({
    'z-index': '-1'
});
menuSlide();
$("#menu").show();
});
});

$(document).on('vmouseup', function() {
if (scrollPrevented == true) {
$('body').unbind('touchmove');
scrollPrevented = false;
}
$(document).off('vmousemove', stopScroll());
});

function menuSlide() {
var newHeight = $(window).height() - pagePosition;
$("#page1").css({
top: pagePosition,
height: newHeight
}).page();

$("#page2").css({
top: pagePosition,
height: newHeight
}).page();
}

function stopScroll() {
if (pagePosition > $("#menu").height() / 2) {
pagePosition = $("#menu").height();
$("#menu").show();
$("#menu").css({
    'z-index': '1500'
});
} else {
pagePosition = 0;
$("#menu").hide();
$("#menu").css({
    'z-index': '-1'
});
}
menuSlide();
}

$("#menu").css({
position: "absolute",
width: $(window).width(),
height: $(window).height * .3,
left: 0,
'z-index': '-1',
'min-height': 'initial'
}).page();

$(document).on("click", ".page1", function(){
$("#menu").css({
'z-index': '-1'
});

pagePosition = 0;
menuSlide();
$("#menu").hide();
$.mobile.changePage("#page1", {transition:"slide",
                           reverse: true}); 
});

$(document).on("click", ".page2", function(){

pagePosition = 0;
menuSlide();
$("#menu").hide();
$.mobile.changePage("#page2", {transition:"slide"}); 
});
