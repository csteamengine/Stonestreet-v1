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

$sql = "SELECT * FROM projects WHERE id=".$id;
$query = mysqli_query($conn, $sql);
if(mysqli_num_rows($query) > 0){
    $result = mysqli_fetch_assoc($query);
}else{
    echo "There was a problem completing your request.";
    exit;
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Focus | StoneStreet</title>
    <link rel="icon" type="image/x-icon" href="/faviconblack.png" />

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
        <p id="description"><?= $result['text'] ?></p>
    </div>
</div>
<?php
include "../includes/php/footer.php";
?>
<script src="/includes/js/mobileDetect.js"></script>
<script type="application/javascript" src="/includes/js/shared.js"></script>
</body>
</html>
