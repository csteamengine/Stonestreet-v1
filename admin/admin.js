/**
 * Created by adm_gcs on 7/1/2016.
 */


function check_form(id){
    if(document.getElementById('life_images_'+id).classList.contains('active')){
        document.getElementById('life_images_'+id).classList.remove('active');
        $('#select_'+id).prop('value','no');
    }else{
        document.getElementById('life_images_'+id).classList.add('active');
        $('#select_'+id).prop('value','yes');
    }
}
function check_delete_form(id){
    if(document.getElementById('delete_life_images_'+id).classList.contains('active')){
        document.getElementById('delete_life_images_'+id).classList.remove('active');
        $('#delete_select_'+id).prop('value','no');
    }else{
        document.getElementById('delete_life_images_'+id).classList.add('active');
        $('#delete_select_'+id).prop('value','yes');
    }
}


function show_delete_life_images() {
    $('#delete_life_images').show();
    $('#cancel_delete_life_images').show();
    $('#show_delete_life_images').hide();
}

function cancel_delete_life_images(){
    $('#delete_life_images').hide();
    $('#show_delete_life_images').show();
    $('#cancel_delete_life_images').hide();
}

function show_add_images(){
    $('#add_life_images_form').show();
}

function hide_add_images(){
    $('#add_life_images_form').hide();

}

function showHome(){
    remove_selected();
    document.getElementById('home_li').classList.add('selected');
    document.getElementById('home').classList.add('selected');
}
function showProjects(){
    remove_selected();
    document.getElementById('projects_li').classList.add('selected');
    document.getElementById('projects').classList.add('selected');
}
function  showGallery() {
    remove_selected();
    document.getElementById('gallery_li').classList.add('selected');
    document.getElementById('gallery').classList.add('selected');
}
function showAbout(){
    remove_selected();
    document.getElementById('about_li').classList.add('selected');
    document.getElementById('about').classList.add('selected');
}
function showContact() {
    remove_selected();
    document.getElementById('contact_li').classList.add('selected');
    document.getElementById('contact').classList.add('selected');
}
function showSnippets(){
    remove_selected();
    document.getElementById('snippets_li').classList.add('selected');
    document.getElementById('snippets').classList.add('selected');
}
function remove_selected(){
    document.getElementById('home_li').classList.remove('selected');
    document.getElementById('home').classList.remove('selected');
    document.getElementById('projects_li').classList.remove('selected');
    document.getElementById('projects').classList.remove('selected');
    document.getElementById('gallery_li').classList.remove('selected');
    document.getElementById('gallery').classList.remove('selected');
    document.getElementById('about_li').classList.remove('selected');
    document.getElementById('about').classList.remove('selected');
    document.getElementById('contact_li').classList.remove('selected');
    document.getElementById('contact').classList.remove('selected');
    document.getElementById('snippets_li').classList.remove('selected');
    document.getElementById('snippets').classList.remove('selected');

}

function show_add_project(){
    $('#project_form').show();
    $('#show_button').hide();
}
function hide_add_project(){
    $('#project_form').hide();
    $('#show_button').show();
}
function show_delete(id){
    $('#delete_'+id).show();
    $('#delete_project_button_'+id).hide();
    $('#edit_project_button_'+id).hide();

}
function hide_delete(id){
    $('#delete_'+id).hide();
    $('#delete_project_button_'+id).show();
    $('#edit_project_button_'+id).show();

}
function show_edit(id){
    $('#edit_'+id).show();
    $('#edit_project_button_'+id).hide();
    $('#div_'+id).css('height','400px');
    $('#div_'+id).css('width','400px');
}
function hide_edit(id){
    $('#edit_'+id).hide();
    $('#edit_project_button_'+id).show();
    $('#div_'+id).css('height','200px');
    $('#div_'+id).css('width','200px');
}
function show_edit_snippet(id){
    $('#edit_snippet_'+id).show();
    $('#edit_snippet_button_'+id).hide();
    $('#snippet_'+id).css('height','400px');
    $('#snippet_'+id).css('width','400px');
}
function hide_edit_snippet(id){
    $('#edit_snippet_'+id).hide();
    $('#edit_snippet_button_'+id).show();
    $('#snippet_'+id).css('height','200px');
    $('#snippet_'+id).css('width','200px');
}
function show_delete_snippet(id){
    $('#delete_snippet_'+id).show();
    $('#delete_snippet_button_'+id).hide();
    $('#edit_snippet_button_'+id).hide();
}
function hide_delete_snippet(id){
    $('#delete_snippet_'+id).hide();
    $('#delete_snippet_button_'+id).show();
    $('#edit_snippet_button_'+id).show();
}

function show_add_snippet(){
    $('#upload_snipppets_form').show();
    $('#show_add_snippet_button').hide();
}
function hide_add_snippet(){
    $('#upload_snipppets_form').hide();
    $('#show_add_snippet_button').show();
}