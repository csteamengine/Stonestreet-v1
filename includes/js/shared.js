/**
 * Created by gregory on 9/19/16.
 */
window.onload = function(){
    toggle_menu();
}

window.onresize = function(){
  toggle_menu();
};

function toggle_menu(){
    if(window.innerWidth < 700 || document.body.classList.contains('mobile')){
        $('#header_grid').addClass('mobile');
        $('#mobile_menu').show();
        $('#s_logo').addClass('mobile');
    }else{
        $('#header_grid').removeClass('mobile');
        $('#mobile_menu').hide();
        $('#s_logo').removeClass('mobile');
    }
}