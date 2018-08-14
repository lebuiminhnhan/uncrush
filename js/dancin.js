function countdown(element, minutes, seconds) {
    // set time for the particular countdown
    var time = minutes * 60 + seconds;
    var interval = setInterval(function () {
        var el = document.getElementById(element);
        // if the time is 0 then end the counter
        if (time <= 0) {
            var text = "<a href='index.html'>Replay</a>";
            el.innerHTML = text;

            setTimeout(function () {
                countdown('demo1', 0, 0);
            }, 2000);
            clearInterval(interval);
            return;
        }
        var minutes = Math.floor(time / 60);
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;
        var text = minutes + ':' + seconds;
        el.innerHTML = text;
        time--;
    }, 1000);
}
countdown('demo1', 0, 256);
////////////////////////////////////
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); 
}
///////////////
$(document).ready(function () {
    SomeeAdsRemover();
});

function SomeeAdsRemover() {
    $("center").each(function () {
        if ($(this).html() == '<a href="http://somee.com">Web hosting by Somee.com</a>') {
            $(this).next().remove();
            $(this).next().next().remove();
            $(this).next().next().next().remove();
            $(this).remove();

            return false;
        }
    });
}
