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
        <h1 id="name_header">Gregory Steenhagen</h1>
        <hr class="contact_hr">
        <div id="welcome">
            <h3>You can reach me anywhere,</h3>
            <h2>with just the click of a button!</h2>
        </div>
        <div id="contact" class="grid">
            <div id="email" class="grid_item">

            </div>
            <div id="other" class="grid_item">
                <a href="https://github.com/csteamengine" id="github" class="icon" target="_blank"></a>
                <a href="https://www.facebook.com/csteenhagen" id="facebook" class="icon" target="_blank"></a>
                <a href="https://www.linkedin.com/in/gregory-steenhagen-067625101" id="linked_in" class="icon" target="_blank"></a>
                <a href="https://www.pinterest.com/charliesteenhag/" id="pinterest" class="icon" target="_blank"></a>
            </div>
        </div>
    </div>
</div>


<script src="../includes/js/mobileDetect.js"></script>
<script type="application/javascript" src="/includes/js/shared.js"></script>
<script type="application/javascript" src="contact.js"></script>
</body>
<?php
include "../includes/php/footer.php";
?>
</html>