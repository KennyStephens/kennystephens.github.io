$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

function closeMobileMenu() {
    // $("#mainListDiv").removeClass("show_list");
    document.getElementById('mainListDiv').classList.remove("show_list");
}

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

document.querySelector('html').style.scrollPaddingTop = '65px';