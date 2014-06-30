$(document).ready(function(){
    $("img").on("mouseenter", function(){
        $(this).fadeTo("fast", "10");
    });
    $("img").on("mouseleave", function(){
        $(this).fadeTo("fast", "0.5");
    });
 	$("img").on("click", function(){
 		window.open($(this).attr("src"), "popupWindow", "width=600px,height=600px,scrollbars=yes");
 	});
});
