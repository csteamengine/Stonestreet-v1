<?php
/**
 * Created by PhpStorm.
 * User: adm_gcs
 * Date: 6/30/2016
 * Time: 3:50 PM
 */


include "includes/php/base.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Home | StoneStreet</title>
    <link rel="icon" type="image/x-icon" href="includes/images/faviconblack.png" />
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="includes/css/shared.css">
    <link rel="stylesheet" href="includes/css/header.css">
    <link rel="stylesheet" href="includes/css/footer.css">
    <script src="/includes/js/jquery-2.2.4.min.js" type="application/javascript"></script>

</head>
<body>
<?php
include "includes/php/header.php";
?>
<div id="content">
    <div id="subcontent">
        <div id="about_me" class="text_item">
            <h1>A little about me</h1>
            <p>
                I am a Software engineering major at Iowa State University and I'm currently in my Senior year. I am the President
                and a founding member of the ISU Web Development Club. As a kid I always had an interest in computers, and
                Iowa State gave me the opportunity to make them my career.
            </p>
        </div>
        <hr class="divider">
        <h1 class="section_title" >Most Recent Projects</h1>
        <div id="recent_projects" class="grid text_item">
            <?php
            $sql = "SELECT * FROM projects WHERE main_page ='yes'";
            $query = mysqli_query($conn, $sql);
            while($result = mysqli_fetch_assoc($query)){
                ?>
                <div class="grid_item" style="background-image: url('/includes/images/projects/<?= $result['image'] ?>')">
                    <a class="taphover" href="<?= $result['url'] ?>">
                        <div class="hover_overlay"></div>
                        <h2 id="proj_<?= $result['id'] ?>" class="gridTitle"><?= $result['title'] ?></h2>
                        <h4 class="grid_date"><?= substr($result['created'],0,4) ?></h4>
                    </a>
                </div>

                <?php
            }
            ?>
        </div>
        <hr class="divider">
        <h1 class="section_title">Most Recent Accomplishment</h1>
        <div id="recent_accomplishment" class="text_item">

            <?php
            $sql = "SELECT * FROM most_recent mr INNER JOIN projects pr WHERE mr.project_id = pr.id";
            $query = mysqli_query($conn, $sql);
            $result = mysqli_fetch_assoc($query);


            ?>
            <div id="accomp" class="grid_item" style="background-image: url('/includes/images/projects/<?= $result['image'] ?>')">
                <a class="taphover" href="#">
                    <div class="hover_overlay" id="accompOverlay"></div>
                    <h2 id="accompTitle" class="gridTitle"><?= $result['title'] ?></h2>
                    <h4 class="grid_date"><?= substr($result['created'],0,4) ?></h4>
                </a>
            </div>
            <p>
                <?= $result['description'] ?>
            </p>
        </div>
        <hr class="divider">
        <h1 class="section_title">A Look Into My Life</h1>
        <div id="photos" class="grid text_item">
            <?php
            $sql = "SELECT * FROM life_images WHERE active = 'yes'";
            $query = mysqli_query($conn, $sql);
            while($result = mysqli_fetch_assoc($query)){
                ?>
                <div class="grid_item grid_item_small" style="background-image: url('/includes/images/PicsOfMe/<?= $result['file_name'] ?>')"></div>

                <?php
            }
            ?>
        </div>

    </div>
</div>



<script src="includes/js/mobileDetect.js"></script>
<script type="application/javascript" src="main.js"></script>
<script type="application/javascript" src="/includes/js/shared.js"></script>
<script>
    $('a.taphover').on('touchend', function (e) {
        'use strict'; //satisfy code inspectors
        var link = $(this); //preselect the link
        if (link.hasClass('hover')) {
            return true;
        } else {
            link.addClass('hover');
            $('a.taphover').not(this).removeClass('hover');
            e.preventDefault();
            return false; //extra, and to make sure the function has consistent return points
        }
    });
</script>
</body>
<?php
include "includes/php/footer.php";
?>
</html>
