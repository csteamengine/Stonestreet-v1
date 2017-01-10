<?php
/**
 * Created by PhpStorm.
 * User: adm_gcs
 * Date: 8/17/2016
 * Time: 10:41 AM
 */
include "../includes/php/base.php";

$sql = "SELECT * FROM projects WHERE id=".$_GET['id'];
$query = mysqli_query($conn, $sql);
$result = mysqli_fetch_assoc($query);



?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home | StoneStreet</title>
    <link rel="icon" type="image/x-icon" href="/faviconblack.png" />
    <link rel="stylesheet" href="project_view.css">
    <link rel="stylesheet" href="../includes/css/shared.css">
    <link rel="stylesheet" href="../includes/css/header.css">
    <link rel="stylesheet" href="../includes/css/footer.css">
</head>
<body id="body">
<?php
include "../includes/php/header.php";
?>
<div id="content">
        <div id="project">
            <div class="main_image" style="background-image: url('../includes/images/projects/<?= $result['image'] ?>')" >
                <a href="<?= $result['url'] ?>" target="_blank"></a>
            </div>
            
            <h1><?= $result['title'] ?></h1>
            <p><?= $result['text'] ?></p>
        </div>
</div>

<?php
include "../includes/php/footer.php";
?>


</body>
</html>