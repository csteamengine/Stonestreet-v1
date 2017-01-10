<?php
/**
 * Created by PhpStorm.
 * User: adm_gcs
 * Date: 6/30/2016
 * Time: 3:56 PM
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>About | StoneStreet</title>
    <link rel="icon" type="image/x-icon" href="/faviconblack.png" />

    <link rel="stylesheet" href="about.css">
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
        <div id="ID-Me">
            <img src="/includes/images/PicsOfMe/MeBeach.jpg" >
            <h1>Gregory Steenhagen</h1>
            <hr>
            <p>Software Engineering Major at Iowa State University<br>President of the ISU Web Development Club</p>
        </div>
        <div id="Text">
            <h1>About Me</h1>
            <hr>
            <p>My name is Gregory Steenhagen and I am a software engineering major at Iowa State University. I grew up just 15 minutes
                north of Ames in Roland. I graduated from Roland-Story high school where I participated in football, basketball, track, and baseball
                all four years. I was in band, chorus, jazz band, and the musicals all four years as well. I was always interested in computers, but it took until college for me to
                figure out what I wanted to do with my life. I have always been a Cyclone fan and I always knew I wanted to attend Iowa State, so that choice was easy for me.
            </p>
            <p>I started college as a Mechanical Engineering major and quickly decided to switch to software, after I realized computers
                were what I truly enjoyed working with. After switching, a friend and I started the Web Development Club of which I am now
                the President. </p>
        </div>
        <div id="Languages">
            <h1>Languages</h1>
            <hr>
            <div id="grid">
                <div class="gridContent">Java</div>
                <div class="gridContent">C++</div>
                <div class="gridContent">C</div>
                <div class="gridContent">Python</div>
                <div class="gridContent">Dart</div>
                <div class="gridContent">HTML</div>
                <div class="gridContent">JavaScript</div>
                <div class="gridContent">CSS</div>
                <div class="gridContent">MySQL</div>
                <div class="gridContent">PHP</div>
            </div>
        </div>

    </div>
</div>
<?php
include "../includes/php/footer.php";
?>
<script type="application/javascript" src="/includes/js/shared.js"></script>
<script src="/includes/js/mobileDetect.js"></script>
</body>
</html>
