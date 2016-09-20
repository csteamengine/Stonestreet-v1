/**
 * Created by adm_gcs on 9/20/2016.
 */

function select_div(section){
    $('.list_option').each(function(){
        $(this).removeClass('selected_list');
    });
    $('.category').each(function(){
        $(this).removeClass('selected');
    });
    $('#'+section).addClass('selected');
    $('#'+section+"_option").addClass('selected_list');
}