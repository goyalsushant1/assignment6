$(function () {
    $("img").css("display", "none");
    $('#0').css("display", "block");
    var len = $("img").length
    console.log(len);
    slideshow();
    var count = 1;
    function slideshow() {
        if (count == len - 1) {
            $("img").css("display", "none");
            $('#' + count).css("display", "block");
            count = 0;
        } else {
            $("img").css("display", "none");
            $('#' + count).css("display", "block");
            count++;
        }
        setTimeout(slideshow, 500)
    }
})