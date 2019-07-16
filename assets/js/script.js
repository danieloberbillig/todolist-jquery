// Check off todo by clicking
// needs ul.on -> to take user created li in consideration 
// li.click would only work for existing li

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});


// click on x to delete todo
$("ul").on("click", "span", function (evt) {
    $(this).parent().fadeOut(500, function () {
        // li is parent of span
        // remove in callback to finish fading first
        // this === span
        $(this).remove();
        // this === li
    });

    evt.stopPropagation();
    // avoid bubbling up and add completed class to line
});

$("input[type='text']").keypress(function (evt) {
if (evt.which === 13) {
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append('<li><span><i class="far fa-trash-alt"></i></span>' + todoText + '</li>');
}
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})