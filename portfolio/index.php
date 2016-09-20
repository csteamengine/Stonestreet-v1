<?php
/**
 * Created by PhpStorm.
 * User: gregory
 * Date: 9/19/16
 * Time: 2:15 PM
 */

include "../includes/php/base.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Document meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Portfolio | StoneStreet</title>
    <link rel="icon" type="image/x-icon" href="../includes/images/faviconblack.png" />
    <link rel="stylesheet" href="style.css">
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
        <div id="list">
            <p id="websites_option" class="list_option selected_list" onclick="select_div('websites')">Websites</p>
            <p id="software_option" class="list_option" onclick="select_div('software')">Software</p>
            <p id="hardware_option" class="list_option" onclick="select_div('hardware')">Hardware</p>
            <p id="other_option" class="list_option" onclick="select_div('other')">Other</p>
        </div>
        <div class="category grid selected" id="websites" hidden>

            <?php
            $sql = "SELECT * FROM projects WHERE active = 'yes' && category='website'";
            $query = mysqli_query($conn,$sql);
            while($result = mysqli_fetch_assoc($query)) {
                ?>
                <a href="<?= $result['url'] ?>" target="_blank">
                    <div class="grid_item">
                        <h3><?= $result['title'] ?></h3>
                        <h4><?= substr($result['created'],0,4) ?></h4>
                    </div>
                </a>
                <?php
            }
            ?>

            <div class="grid_item">
                <h3>More To Come...</h3>
                <h4>Check Back Soon!</h4>
            </div>
        </div>
        <div class="category grid" id="software" hidden>
            <?php
            $sql = "SELECT * FROM projects WHERE active = 'yes' && category='software'";
            $query = mysqli_query($conn,$sql);
            while($result = mysqli_fetch_assoc($query)) {
                ?>
                <a href="<?= $result['url'] ?>">
                    <div class="grid_item">
                        <h3><?= $result['title'] ?></h3>
                        <h4><?= substr($result['created'],0,4) ?></h4>
                    </div>
                </a>
                <?php
            }
            ?>
            <div class="grid_item">
                <h3>More To Come...</h3>
                <h4>Check Back Soon!</h4>
            </div>
        </div>
        <div class="category grid" id="hardware" hidden>
            <?php
            $sql = "SELECT * FROM projects WHERE active = 'yes' && category='hardware'";
            $query = mysqli_query($conn,$sql);
            while($result = mysqli_fetch_assoc($query)) {
                ?>
                <a href="<?= $result['url'] ?>">
                    <div class="grid_item">
                        <h3><?= $result['title'] ?></h3>
                        <h4><?= substr($result['created'],0,4) ?></h4>
                    </div>
                </a>
                <?php
            }
            ?>
            <div class="grid_item">
                <h3>More To Come...</h3>
                <h4>Check Back Soon!</h4>
            </div>
        </div>
        <div class="category grid" id="other" hidden>
            <?php
            $sql = "SELECT * FROM users";
            $query = mysqli_query($conn, $sql);
            $result = mysqli_fetch_assoc($query);
            ?>
            <a download="<?= $result['resume'] ?>" href="../includes/files/<?= $result['resume'] ?>"  >
                <div class="grid_item">
                    <h3>My Resume</h3>
                    <h4>Click to Download</h4>
                </div>
            </a>
        </div>
    </div>
</div>


<script src="../includes/js/mobileDetect.js"></script>
<script type="application/javascript" src="/includes/js/shared.js"></script>
<script type="application/javascript" src="portfolio.js"></script>
</body>
<?php
include "../includes/php/footer.php";
?>
</html>