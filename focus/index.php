<?php
/**
 * Created by PhpStorm.
 * User: adm_gcs
 * Date: 6/30/2016
 * Time: 3:56 PM
 */
include "../includes/php/general.php";
include "../includes/php/base.php";
$id = get_value('id');

$sql = "SELECT *
        FROM projects proj 
        LEFT JOIN project_images images
        ON proj.id = images.projectID
        WHERE proj.id=".$id;
$query = mysqli_query($conn, $sql);
if(mysqli_num_rows($query) > 0){
    $result = mysqli_fetch_assoc($query);
}else{
    echo "There was a problem completing your request.";
    exit;
}

$collabSQL = "SELECT * FROM collaborators WHERE projectID = ".$id;
$collabQuery = mysqli_query($conn, $collabSQL);


$techSQL = "SELECT * FROM projectTechnologies projTech
INNER JOIN technologies tech
ON projTech.projectTechnologiesID = tech.technologiesID
WHERE projectID = ".$id;
$techQuery = mysqli_query($conn, $techSQL);





?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Focus | StoneStreet</title>

    <link rel="stylesheet" href="focus.css">
    <link rel="icon" type="image/x-icon" href="../includes/images/faviconblack.png" />
    <link rel="stylesheet" href="../includes/css/shared.css">
    <link rel="stylesheet" href="../includes/css/header.css">
    <link rel="stylesheet" href="../includes/css/footer.css">
    <script src="../includes/js/jquery-2.2.4.min.js" type="application/javascript"></script>

</head>
<body>
<?php
include "../includes/php/header.php";
?>
<div id="content">
    <div id="subcontent">
        <?php
        if($result['url'] != "" && $result['url'] != null) {

            ?>

            <div id="project_image" style="background: url('../includes/images/projects/<?= $result['image'] ?>') center no-repeat; background-size: cover">
                <a class="link" href="<?= $result['url'] ?>" target="_blank"></a>
            </div>


            <?php
        }else {
            ?>
            <div id="project_image" style="background: url('../includes/images/projects/<?= $result['image'] ?>') center no-repeat">
            </div>
            <?php
        }
        ?>

        <h1 id="project_title"><?= $result['title'] ?></h1>
        <p id="description" style="padding-bottom: 20px;"><?= $result['text'] ?></p>
        <?php
            if(mysqli_num_rows($collabQuery) > 0){
                ?>
                <h1>Role</h1>
                <div class="grid" style="list-style: none; margin: 0;">
                    <p style="padding-bottom: 20px; color: rgba(0,0,0,.6);width: 60%; margin: 0 auto;"><?= $result['projectRole'] ?></p>
                </div>
                <h1>Collaborators</h1>
                <div class="grid" style="list-style: none; padding-bottom: 10px; margin: 0;">
                <?php
                while($collabResult = mysqli_fetch_assoc($collabQuery)){
                    ?>
                    <h3 class="grid_item"><?= $collabResult['firstName'] ?> <?= $collabResult['lastName'] ?></h3>
                    <p class="grid_item" style="margin-top: -15px; color: rgba(0,0,0,.6);"><?= $collabResult['contribution'] ?></p>
                    <?php

                }
                ?>
                </div>
                <?php
            }

        ?>
        <?php
        if(mysqli_num_rows($techQuery) > 0){
            ?>
            <h1>Technologies</h1>
            <div class="grid" style="list-style: none; margin: 0;">
                <?php
                while($techResult = mysqli_fetch_assoc($techQuery)){
                    ?>
                    <h3 class="grid_item"><?= $techResult['name'] ?></h3>
                    <p class="grid_item" style="margin-top: -15px; color: rgba(0,0,0,.6);"><?= $techResult['description'] ?></p>
                    <?php

                }
                ?>
            </div>
            <?php
        }
        ?>
        <?php
            if($result['lessonsLearned'] != ""){
                ?>
                <h1>Lessons Learned</h1>
                <div class="grid" style="list-style: none; margin: 0;">
                    <p style="padding-bottom: 20px; color: rgba(0,0,0,.6);width: 60%; margin: 0 auto;"><?= $result['lessonsLearned'] ?></p>
                </div>
            <?php
            }
        ?>
        <?php
        if($result['githubRepo'] != ""){
            ?>
            <h1>Links</h1>
            <div class="grid_icons" style="list-style: none; margin: 0; ">
                <div class="grid_item_icon" >
                    <a href="<?= $result['githubRepo'] ?>" target="_blank">
                        <img src="/includes/images/icons/github.png" style="padding-bottom: 20px; height: 100%; width: 100%; margin: 0 auto; ">
                    </a>
                </div>
                <?php
                    if($result['url'] != "") {
                        ?>
                        <div class="grid_item_icon" >
                            <a href="<?= $result['url'] ?>" target="_blank">
                                <img src="/includes/images/icons/website.png" style="padding-bottom: 20px; height: 100%; width: 100%; margin: 0 auto; ">
                            </a>
                        </div>
                        <?php
                    }
                ?>
            </div>
            <?php
        }
        ?>
    </div>
</div>
<?php
include "../includes/php/footer.php";
?>
<script src="/includes/js/mobileDetect.js"></script>
<script type="application/javascript" src="/includes/js/shared.js"></script>
</body>
</html>
