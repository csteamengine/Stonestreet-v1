/**
 * Created by gregory on 9/19/16.
 */
window.onload = function(){
    toggle_mobile();
};

window.onresize = function(){
  toggle_mobile();
};
$('#mobile_menu').click(function(){
    toggle_menu();
});

function toggle_mobile(){
    if(window.innerWidth < 700 || document.body.classList.contains('mobile')){
        $('#header_grid').addClass('mobile');
        $('#header_grid').hide();
        $('#mobile_menu').show();
        $('#s_logo').addClass('mobile');
    }else{
        $('#header_grid').removeClass('mobile');
        $('#mobile_menu').hide();
        $('#header_grid').show();
        $('#s_logo').removeClass('mobile');
    }
}
function toggle_menu(){
    if($('#header_grid').is(':visible')){
        $('#header_grid').hide();
    }else{
        $('#header_grid').show();
    }
}