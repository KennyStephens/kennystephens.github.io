$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show-list");
    $("#mainListDiv").fadeIn();
});

function closeMobileMenu() {
    document.getElementById('mainListDiv').classList.remove("show-list");

}

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

document.querySelector('html').style.scrollPaddingTop = '70px';