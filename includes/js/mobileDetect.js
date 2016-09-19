/**
 * Created by Charlie on 4/1/16.
 */
var check;

function detectmob() {
    var bool;
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        bool = true;
    }
    else {
        bool = false;
    }
    return bool;
}
check = detectmob();
if(check == true){
    document.getElementById('footer').classList.add('mobile');
    document.body.classList.add('mobile');
    document.getElementById('webdevMe').classList.add('mobile');
    document.getElementById('homeSection').classList.add('mobile');
    document.getElementById('Navbar').classList.add('mobile');
}