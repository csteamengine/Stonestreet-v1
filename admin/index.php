<?php
/**
 * Created by PhpStorm.
 * User: adm_gcs
 * Date: 7/1/2016
 * Time: 9:10 AM
 */

include "../includes/php/general.php";
include "../includes/php/base.php";

if(isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true){
    $logged_in = true;
}else{
    $logged_in = false;
}


if($logged_in && get_value('action') != null){
    $action = get_value('action');
    switch($action){
        case 'home':

            break;
        case 'add_projects':


            $project_title = get_value('project_title');
            $project_description = get_value('project_description');
            $project_text = get_value('project_text');
            $type_select = get_value('type_select');
            $check_title = "SELECT * FROM projects WHERE title ='".$project_title."'";
            $query_title = mysqli_query($conn,$check_title);
            if(mysqli_num_rows($query_title) ==0){
                if($_FILES['file']['name'] != ""){
                    $target_dir = "../includes/images/projects/";
                    $target_file = $target_dir . basename($_FILES["file"]["name"]);
                    $uploadOk = 1;
                    $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
                    // Check if image file is a actual image or fake image
                    if(isset($_POST["submit"])) {
                        $check = getimagesize($_FILES["file"]["tmp_name"]);
                        if($check !== false) {
                            $uploadOk = 1;
                        } else {
                            echo "File is not an image.";
                            $uploadOk = 0;
                        }
                    }
                    // Check if file already exists
                    if (file_exists($target_file)) {
                        $i = 1;
                        $test_file = $target_file."_".$i;

                        while(file_exists($test_file)){
                            $i++;
                            $test_file = $target_file."_".$i;
                        }
                        $target_file = $test_file;
                        $uploadOk = 1;
                    }
                    // Allow certain file formats
                    if(strtolower($imageFileType) != "jpg" && strtolower($imageFileType) != "png" && strtolower($imageFileType) != "jpeg" && strtolower($imageFileType) != "gif" ) {
                        $uploadOk = 0;
                    }
                    // Check if $uploadOk is set to 0 by an error
                    if ($uploadOk == 0) {
                        // if everything is ok, try to upload file
                    } else {
                        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                            //Success
                            $url = get_value('project_url');

                            $sql = "INSERT INTO projects (title, text, description,image,category,url,active) VALUES ('".$project_title."','".$project_text."','".$project_description."','".$_FILES['file']['name']."','".$type_select."','".$url."','yes')";
                            $query = mysqli_query($conn, $sql);
                            if($url == ""){
                                $url_query = "UPDATE projects SET url='/portfolio/project_view.php?id=".mysqli_insert_id($conn)."' WHERE id=".mysqli_insert_id($conn);
                                $url_insert = mysqli_query($conn,$url_query);
                            }

                        }
                    }
                }else{
                    $url = get_value('project_url');

                    $sql = "INSERT INTO projects (title, text, description,category,url,active) VALUES ('".$project_title."','".$project_text."','".$project_description."','".$type_select."','".$url."','yes')";
                    $query = mysqli_query($conn, $sql);

                    if($url == ""){
                        $url_query = "UPDATE projects SET url='/portfolio/project_view.php?id=".mysqli_insert_id($conn)."' WHERE id=".mysqli_insert_id($conn);
                        $url_insert = mysqli_query($conn,$url_query);
                    }
                }
            }

            break;
        case 'gallery':

            break;
        case 'about':

            break;
        case 'contact':

            break;
        case 'snippets':

            break;
        case 'logout':
            $_SESSION['logged_in'] = false;
            break;
        case 'edit_project':
            $id = get_value('project_id');
            $title = get_value('project_title');
            $description = get_value('project_description');
            $text = get_value('project_text');
            $file = get_value('file_name');
            $type_select = get_value('type_select');

            if($_FILES['file']['name'] != "" && $file != $_FILES['file']['name']){
                $target_dir = "../includes/images/projects/";
                $target_file = $target_dir . basename($_FILES["file"]["name"]);
                $uploadOk = 1;
                $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
                // Check if image file is a actual image or fake image
                if(isset($_POST["submit"])) {
                    $check = getimagesize($_FILES["file"]["tmp_name"]);
                    if($check !== false) {
                        $uploadOk = 1;
                    } else {
                        echo "File is not an image.";
                        $uploadOk = 0;
                    }
                }
                // Check if file already exists
                if (file_exists($target_file)) {
                    $i = 1;
                    $test_file = $target_file."_".$i;

                    while(file_exists($test_file)){
                        $i++;
                        $test_file = $target_file."_".$i;
                    }
                    $target_file = $test_file;
                    $uploadOk = 1;
                }
                // Allow certain file formats
                if(strtolower($imageFileType) != "jpg" && strtolower($imageFileType) != "png" && strtolower($imageFileType) != "jpeg" && strtolower($imageFileType) != "gif" ) {
                    $uploadOk = 0;
                }
                // Check if $uploadOk is set to 0 by an error
                if ($uploadOk == 0) {
                    // if everything is ok, try to upload file
                } else {
                    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                        //Success
                        $sql = "UPDATE projects SET title='".mysqli_real_escape_string($conn, $title)."', text='".mysqli_real_escape_string($conn, $text)."', description='".mysqli_real_escape_string($conn, $description)."', image = '".mysqli_real_escape_string($conn, $_FILES['file']['name'])."',category='".$type_select."',url='".get_value('project_url')."', active = 'yes' WHERE id=".mysqli_real_escape_string($conn, $id);
                        $query = mysqli_query($conn, $sql);
                    }
                }
            }else{
                $sql = "UPDATE projects SET title='".mysqli_real_escape_string($conn, $title)."', text='".mysqli_real_escape_string($conn, $text)."', description='".mysqli_real_escape_string($conn, $description)."', image = '".mysqli_real_escape_string($conn, $file)."',url = '".mysqli_real_escape_string($conn, get_value('project_url'))."', active = 'yes' WHERE id=".mysqli_real_escape_string($conn, $id);
                $query = mysqli_query($conn, $sql);
            }

            break;
        case 'edit_home_projects':
            $sql = "SELECT * FROM projects";
            $query = mysqli_query($conn, $sql);

            while($result = mysqli_fetch_assoc($query)){

                if(get_value($result['id']) == $result['id']){
                    $insert = "UPDATE projects SET main_page = 'yes' WHERE id = ".$result['id'];
                    $insert_query = mysqli_query($conn, $insert);
                }else{
                    $insert = "UPDATE projects SET main_page = 'no' WHERE id=".$result['id'];
                    $insert_query = mysqli_query($conn, $insert);
                }
            }

            break;
        case 'edit_most_recent_project':
            $sql = "UPDATE most_recent SET project_id = ".get_value('most_recent')." WHERE id=1";
            $query = mysqli_query($conn, $sql);

            break;
        case 'delete_project':
            $sql = "DELETE FROM projects WHERE id=".get_value('id');
            $query = mysqli_query($conn, $sql);

            $sql = "SELECT * FROM most_recent";
            $query = mysqli_query($conn, $sql);
            $result = mysqli_fetch_assoc($query);
            if($result['project_id'] == get_value('id')){
                $sql = "SELECT * FROM projects";
                $query = mysqli_query($conn, $sql);
                if(mysqli_num_rows($query) > 0){
                    $result = mysqli_fetch_assoc($query);
                    $sql = "UPDATE most_recent SET project_id = ".$result['id']." WHERE id=1";
                    $query = mysqli_query($conn, $sql);
                }
            }

            break;
        case 'hide_life_photos':
            $sql = "SELECT * FROM life_images";
            $query = mysqli_query($conn, $sql);
            while($result = mysqli_fetch_assoc($query)){
                if(get_value('select_'.$result['id']) == 'yes'){
                    $sql2 = "UPDATE life_images SET active = 'yes' WHERE id=".$result['id'];
                    $query2 = mysqli_query($conn, $sql2);
                }else if(get_value('select_'.$result['id']) == 'no'){
                    $sql2 = "UPDATE life_images SET active = 'no' WHERE id=".$result['id'];
                    $query2 = mysqli_query($conn, $sql2);
                }
            }


            break;
        case 'add_life_images':
            if($_FILES['file']['name'] != ""){

                $target_dir = "../includes/images/PicsOfMe/";
                $target_file = $target_dir . basename($_FILES["file"]["name"]);
                $uploadOk = 1;
                $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
                // Check if image file is a actual image or fake image
                if(isset($_POST["submit"])) {
                    $check = getimagesize($_FILES["file"]["tmp_name"]);
                    if($check !== false) {
                        $uploadOk = 1;
                    } else {
                        echo "File is not an image.";
                        $uploadOk = 0;
                    }
                }
                // Check if file already exists
                if (file_exists($target_file)) {
                    $i = 1;
                    $test_file = $target_file."_".$i;

                    while(file_exists($test_file)){
                        $i++;
                        $test_file = $target_file."_".$i;
                    }
                    $target_file = $test_file;
                    $uploadOk = 1;
                }
                // Allow certain file formats
                if(strtolower($imageFileType) != "jpg" && strtolower($imageFileType) != "png" && strtolower($imageFileType) != "jpeg" && strtolower($imageFileType) != "gif" ) {
                    $uploadOk = 0;
                }
                // Check if $uploadOk is set to 0 by an error
                if ($uploadOk == 0) {
                    // if everything is ok, try to upload file
                } else {
                    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                        //Success
                        $sql = "INSERT INTO life_images (file_name, active) VALUES ('".$_FILES['file']['name']."', 'yes')";
                        $query = mysqli_query($conn, $sql);
                    }
                }
            }


            break;
        case 'delete_life_photos':
            $sql = "SELECT * FROM life_images";
            $query = mysqli_query($conn, $sql);
            while($result = mysqli_fetch_assoc($query)){
                if(get_value('delete_select_'.$result['id']) == 'yes'){
                    $sql2 = "DELETE FROM life_images WHERE id=".$result['id'];
                    $query2 = mysqli_query($conn, $sql2);
                }
            }
            break;
        case 'resume_upload':
            if($_FILES['file']['name'] != ""){
                $sql = "SELECT resume FROM users";
                $query = mysqli_query($conn, $sql);
                $result = mysqli_fetch_assoc($query);

                $target_dir = "../includes/files/";
                $target_file = $target_dir . basename($_FILES["file"]["name"]);
                $uploadOk = 1;
                $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
                // Check if image file is a actual image or fake image
                if(isset($_POST["submit"])) {
                    $check = getimagesize($_FILES["file"]["tmp_name"]);
                    if($check !== false) {
                        $uploadOk = 1;
                    } else {
                        echo "File is not an image.";
                        $uploadOk = 0;
                    }
                }
                
                // Allow certain file formats
                if(strtolower($imageFileType) != "jpg" && strtolower($imageFileType) != "png" && strtolower($imageFileType) != "jpeg" && strtolower($imageFileType) != "gif" && strtolower($imageFileType) != "pdf") {
                    $uploadOk = 0;
                }
                // Check if $uploadOk is set to 0 by an error
                if ($uploadOk == 0) {
                    // if everything is ok, try to upload file
                } else {
                    unlink("../includes/files/".$result['resume']);
                    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                        //Success

                        $sql = "UPDATE users SET resume = '".mysqli_real_escape_string($conn,$_FILES['file']['name'])."' WHERE id=1";
                        $query = mysqli_query($conn, $sql);

                    }
                }
            }
            break;
        case 'snippets_upload':
            $title = str_replace(" ","_", get_value('title'));
            if(mkdir('../snippets/'.$title)){
                foreach ($_FILES['files']['name'] as $i => $name) {
                    if (strlen($_FILES['files']['name'][$i]) > 1) {
                        if (move_uploaded_file($_FILES['files']['tmp_name'][$i], '../snippets/'.$title."/".$name)) {

                        }
                    }
                }
            }

        break;
    }
}else if(!$logged_in && get_value('action') == 'login'){
    $username= get_value('username');
    $password = get_value('password');

    $sql = "SELECT * FROM users WHERE username = '".mysqli_real_escape_string($conn, $username)."'";
    $query = mysqli_query($conn, $sql);
    if(mysqli_num_rows($query) > 0){
        $result = mysqli_fetch_assoc($query);
        if(password_verify($password, $result['password'])){
            $logged_in = true;
            $_SESSION['logged_in'] = true;
        }
    }

}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin | StoneStreet</title>
    <link rel="icon" type="image/x-icon" href="../faviconblack.png" />
    <link rel="stylesheet" href="admin.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="../includes/js/jquery-2.2.4.min.js" type="application/javascript"></script>
</head>
<body id="body">
<?php
if($logged_in){
    ?>


    <form id="logout" action="/admin/" method="post">
        <input type="hidden" name="action" value="logout">
        <input type="submit" value="Logout">
    </form>
    <ul id="header_list">
        <li id="home_li" class="admin_list  selected" onclick="showHome()">Home</li>
        <li id="projects_li" class="admin_list" onclick="showProjects()">Projects</li>
        <li id="gallery_li" class="admin_list" onclick="showGallery()">Gallery</li>
        <li id="about_li" class="admin_list" onclick="showAbout()">About</li>
        <li id="contact_li" class="admin_list" onclick="showContact()">Contact</li>
        <li id="snippets_li" class="admin_list" onclick="showSnippets()">Snippets</li>
    </ul>
    
    
    
    <div class="divs selected" id="home">
        <h1>Home</h1>
        <div id="home_page">
            <div id="home_projects">
                <h2>All Projects</h2>
                <form id="edit_home_projects" method="post" action="/admin/">
                    <input type="hidden" name="action" value="edit_home_projects">
                    <?php
                    $sql = "SELECT * FROM projects";
                    $query = mysqli_query($conn,$sql);
                    while($result = mysqli_fetch_assoc($query)){
                        ?>
                        <label><input type="checkbox" name="<?= $result['id'] ?>" value="<?= $result['id'] ?>"  <?= $result['main_page'] == 'yes' ? "checked" : "" ?> ><?= $result['title'] ?></label><br>
                        <?php
                    }
                    ?>
                    <input type="submit" value="Submit">
                </form>
            </div>
            <div id="most_recent_project">
                <h2>Most recent</h2>
                <form id="most_recent_project_form" method="post" action="/admin/">
                    <input type="hidden" name="action" value="edit_most_recent_project">
                    <?php
                    $sql = "SELECT * FROM projects";
                    $query = mysqli_query($conn, $sql);
                    $sql2 = "SELECT * FROM most_recent";
                    $query2 = mysqli_query($conn, $sql2);
                    $result2 = mysqli_fetch_assoc($query2);

                    while($result = mysqli_fetch_assoc($query)){
                        ?>
                        <label><input type="radio" name="most_recent" value="<?= $result['id'] ?>" <?= $result['id'] == $result2['project_id'] ? "checked" : "" ?> ><?= $result['title'] ?> </label><br>
                        <?php

                    }
                    ?>
                    <input type="submit" value="Submit">
                    <br>
                </form>
            </div>
        </div>
        <form id="life_photos_form" method="post" action="/admin/">
            <div id="life_photos">
                <input type="hidden" name="action" value="hide_life_photos">
                <?php
                $sql = "SELECT * FROM life_images";
                $query = mysqli_query($conn, $sql);

                while($result = mysqli_fetch_assoc($query)){
                    ?>
                    <div class="gridContent <?= $result['active'] == 'yes' ? 'active' : '' ?>" id="life_images_<?= $result['id'] ?>" style="background-image: url('/includes/images/PicsOfMe/<?= $result['file_name'] ?>')" onclick="check_form(<?= $result['id'] ?>)"></div>
                    <input type="hidden" id="select_<?= $result['id'] ?>" name="select_<?= $result['id'] ?>" value="<?= $result['active'] ?>" >

                    <?php
                }

                ?>
                <div class="gridContent" id="add_more_images" onclick="show_add_images()">
                    <h3>Add Images</h3>
                </div>
            </div>
            <input type="submit" value="Submit" id="add_life_images_submit">
        </form>
        <form id="life_photos_form_delete" method="post" action="/admin/">
            <div id="life_photos_delete">
                <input type="hidden" name="action" value="delete_life_photos">
                <?php
                $sql = "SELECT * FROM life_images";
                $query = mysqli_query($conn, $sql);

                while($result = mysqli_fetch_assoc($query)){
                    ?>
                    <div class="gridContent" id="delete_life_images_<?= $result['id'] ?>" style="background-image: url('/includes/images/PicsOfMe/<?= $result['file_name'] ?>')" onclick="check_delete_form(<?= $result['id'] ?>)"></div>
                    <input type="hidden" id="delete_select_<?= $result['id'] ?>" name="delete_select_<?= $result['id'] ?>" value="no" >

                    <?php
                }

                ?>

            </div>
            <input type="submit" value="Delete Selected" id="add_life_images_submit">
        </form>
        <form id="add_life_images_form" method="post" action="/admin/" enctype="multipart/form-data" style="display:none">
            <input type="hidden" name="action" value="add_life_images">
            <input type="file" name="file">
            <input type="submit" value="Submit">
            <a href="#" onclick="hide_add_images()">Cancel</a>
        </form>
    </div>
    

    <div class="divs " id="projects">
        <h1>Projects</h1>
        <button id="show_button" onclick="show_add_project()">Add Project</button>
        <form id="project_form" action="/admin/" method="POST" enctype="multipart/form-data" style="display:none">
            <input type="hidden" name="action" value="add_projects">
            <input type="file" name="file" id="project_file">
            <input type="text" name="project_title" id="project_title" placeholder="Title">
            <input type="text" name="project_description" id="project_description" placeholder="Description">
            <input type="text" name="project_url" id="project_url" placeholder="Project URL">
            <select id="type_select" name="type_select">
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
                <option value="website">Website</option>
                <option value="other">Other</option>
            </select>
            <textarea name="project_text" id="project_text" placeholder="Text"></textarea>
            <input type="submit" value="Submit" name="submit">
            <a href="#" onclick="hide_add_project()">Cancel</a>
        </form>
        <div id="other_projects">
            <?php
            $sql = "SELECT * FROM projects";
            $query = mysqli_query($conn, $sql);
            while($result = mysqli_fetch_assoc($query)){
                ?>

                <div class="project_tile" id="div_<?= $result['id'] ?>" style="<?= $result['image'] != "" ? 'background-image: url(\'../includes/images/projects/'.$result['image'].'\')' : '' ?>">
                    <?php if($result['image'] == ""){
                        ?>
                        <h3 class="no_image_title"><?= $result['title'] ?></h3>
                        <?php

                    } ?>
                    <div class="content" id="content_<?= $result['id'] ?>">
                        <h1><?= $result['title'] ?></h1>
                        <button class="edit_project_button" id="edit_project_button_<?= $result['id'] ?>" onclick="show_edit(<?= $result['id'] ?>)">Edit</button>
                        <button class="delete_project_button" id="delete_project_button_<?=  $result['id']?>" onclick="show_delete(<?= $result['id'] ?>)">Delete</button>
                        <form id="edit_<?= $result['id'] ?>" method="post" action="/admin/" style="display:none" class="edit_form" enctype="multipart/form-data">
                            <input type="hidden" name="action" value="edit_project">
                            <input type="hidden" name="project_id" value="<?= $result['id'] ?>">
                            <input type="hidden" name="file_name" value="<?= $result['image'] ?>">
                            <input type="file" name="file" id="project_file_edit">
                            <input class="edit_input" type="text" name="project_title" id="project_title_edit" placeholder="Title" value="<?= $result['title'] ?>">
                            <input class="edit_input" type="text" name="project_description" id="project_description_edit" placeholder="Description" value="<?= $result['description'] ?>">
                            <input class="edit_input" type="text" name="project_url" id="project_url" placeholder="Project URL" value="<?=  $result['url'] ?>">
                            <select id="type_select" name="type_select">
                                <option value="hardware" <?= $result['category'] == 'hardware' ? "selected" : "" ?>>Hardware</option>
                                <option value="software" <?= $result['category'] == 'software' ? "selected" : "" ?>>Software</option>
                                <option value="website" <?= $result['category'] == 'website' ? "selected" : "" ?>>Website</option>
                                <option value="other" <?= $result['category'] == 'other' ? "selected" : "" ?>>Other</option>
                            </select>
                            <textarea class="edit_text" name="project_text" id="project_text_edit" placeholder="Text" ><?= $result['text'] ?></textarea>
                            <input type="submit" value="Submit" name="submit">
                            <a href="#" onclick="hide_edit(<?= $result['id'] ?>)" style="color: white">Cancel</a>
                        </form>
                        <form id="delete_<?= $result['id'] ?>" method="post" action="/admin/" style="display:none" class="delete_form">
                            <input type="hidden" name="action" value="delete_project">
                            <input type="hidden" name="id" value="<?=  $result['id']?>">
                            <input type="submit" value="Confirm">
                            <a href="#" onclick="hide_delete(<?= $result['id'] ?>)" style="color: white">Cancel</a>
                        </form>
                    </div>
                </div>
                <?php
            }
            ?>
        </div>
        <div id="resume">
            <h2>Upload New Resume</h2>
            <form id="resume_upload" action="/admin/" method="post" enctype="multipart/form-data">
                <input type="hidden" name="action" value="resume_upload">
                <input type="file" name="file" id="project_file_edit">
                <input type="submit" value="Upload">
            </form>
        </div>
    </div>
    <div class="divs" id="gallery">
        <h1>Gallery</h1>
        <form action="/admin/" method="POST">
            <input type="hidden" name="action" value="gallery">

        </form>
    </div>
    <div class="divs" id="about">
        <h1>About</h1>
        <form action="/admin/" method="POST">
            <input type="hidden" name="action" value="about">

        </form>
    </div>
    <div class="divs" id="contact">
        <h1>Contact</h1>
        <form action="/admin/" method="POST">
            <input type="hidden" name="action" value="contact">

        </form>
    </div>
    <div class="divs" id="snippets">
        <h1>Snippets</h1>
        <div id="upload_snipppets_form" style="display: none">
            <form action="/admin/" method="POST" enctype="multipart/form-data">
                <input type="hidden" name="action" value="snippets_upload">
                <input class="edit_input" type="text" name="title" placeholder="Title">
                <textarea class="edit_text" name="description" placeholder="Description"></textarea>
                <input type="file" name="files[]" id="files" multiple="" directory="" webkitdirectory="" mozdirectory=""><br><br>
                <input class="button" type="submit" value="Upload" />
                <a href="#" id="hide_add_snippet_button" onclick="hide_add_snippet()">Cancel</a>
            </form>
        </div>
        <a href="#" id="show_add_snippet_button" onclick="show_add_snippet()">Add Snippet</a>
        <div id="snippets_inner">
            <?php
            //TODO need to be able to add directory or at least code to be inserted into directory that I create.
            //maybe require that the code be condensed into one php or html page.
            $sql = "SELECT * FROM snippets";
            $query = mysqli_query($conn, $sql);
            while($result = mysqli_fetch_assoc($query)){
                ?>

                <div class="project_tile" id="snippet_<?= $result['id'] ?>" >
                    <h1 id="snippet_title"><?= $result['title'] ?></h1>
                    <div class="content" id="snippet_<?= $result['id'] ?>">
                        <h1 ><?= $result['title'] ?></h1>
                        <button class="edit_project_button" id="edit_snippet_button_<?= $result['id'] ?>" onclick="show_edit_snippet(<?= $result['id'] ?>)">Edit</button>
                        <button class="delete_project_button" id="delete_snippet_button_<?=  $result['id']?>" onclick="show_delete_snippet(<?= $result['id'] ?>)">Delete</button>
                        <form id="edit_snippet_<?= $result['id'] ?>" action="/admin/" method="post" style="display: none;">
                            <input  type="hidden" name="action" value="snippets_upload">
                            <input class="edit_input" type="text" name="title" placeholder="Title" value="<?= $result['title'] ?>">
                            <input class="edit_input" type="text" name="url" placeholder="Url" value="<?= $result['title'] ?>">
                            <textarea class="edit_text" name="description" placeholder="Description" ><?= $result['description'] ?></textarea>
                            <input class="button" type="submit" value="Upload" />
                            <a href="#" onclick="hide_edit_snippet(<?= $result['id'] ?>)" style="color: white">Cancel</a>
                        </form>
                        <form id="delete_snippet_<?= $result['id'] ?>" action="/admin/" method="post" style="display: none;">
                            <input type="hidden" name="action" value="delete_snippet">
                            <input type="submit" value="Confirm">
                            <a href="#" onclick="hide_delete_snippet(<?= $result['id'] ?>)" style="color: white">Cancel</a>
                        </form>
                    </div>
                </div>
                <?php
            }
            ?>
        </div>

    </div>



    <script type="application/javascript" src="admin.js"></script>
    <img id="S" src="../includes/images/OneSLogo.png">
    <script src="../includes/js/mobileDetect.js"></script>

<?php

}else{
    ?>
    <form id="login_form" method="post" action="/admin/">
        <input type="hidden" name="action" value="login">
        <input type="text" name="username" id="username" placeholder="username">
        <input type="password" name="password" id="password" placeholder="password">
        <input type="submit" value="Login">
    </form>

<?php



}

?>

</body>
</html>

