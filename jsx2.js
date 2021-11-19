// навигация
window.onscroll = function() {scrollFunction1()};
    
function scrollFunction1() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

// конец навигации