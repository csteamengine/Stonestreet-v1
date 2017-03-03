<?php
/**
 * Created by PhpStorm.
 * User: gregory
 * Date: 9/19/16
 * Time: 2:15 PM
 */

include "../includes/php/base.php";
include "../includes/php/general.php";


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Document meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Experience | StoneStreet</title>
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
        <h1>Experience</h1>
        <div class="grid">
            <div class="grid_item">
                <h1>Saltech Systems</h1>
                <div class="sub-section">
                    <h3>Responsibilities</h3>
                    <ul>
                        <li>Full stack web development for clients all across the United States and Canada</li>
                        <li>Track down and fix bugs for existing client applications.</li>
                        <li>Develop and maintain a database for client information</li>
                    </ul>
                </div>
                <hr>
                <div class="sub-section">
                    <h3>Team</h3>
                    <ul>
                        <li>Development Team</li>
                    </ul>
                </div>
                <hr>
                <div class="sub-section">
                    <h3>Technology Used</h3>
                    <ul>
                        <li>Coldfusion</li>
                        <li>JavaScript</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <hr>
                <div class="sub-section">
                    <h3>Lessons Learned</h3>
                    <ul>
                        <li>Importance of data security.</li>
                        <li>Server side programming with Coldfusion</li>
                        <li>Implementation of a MVC using Fusebox.</li>
                    </ul>
                </div>
            </div>
            <div class="grid_item">
                <h1>Iowa State University Admissions</h1>
                <div class="sub-section">
                    <h3>Responsibilities</h3>
                    <ul>
                        <li>Maintain and develop the Iowa State Admissions website.</li>
                        <li>Provide application support for Admissions staff.</li>
                        <li>Develop new applications for Admissions staff.</li>
                    </ul>
                </div>
                <hr>
                <div class="sub-section">
                    <h3>Team</h3>
                    <ul>
                        <li>Development Team</li>
                    </ul>
                </div>
                <hr>
                <div class="sub-section">
                    <h3>Technology Used</h3>
                    <ul>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <hr>
                <div class="sub-section">
                    <h3>Lessons Learned</h3>
                    <ul>
                        <li>Ajax calls to a RESTful web service.</li>
                        <li>Development of a custom built RESTful web service using PHP.</li>
                        <li>Securing a database with sensitive information.</li>
                    </ul>
                </div>
            </div>
            <div class="grid_item">
                <h1>PR-Tracker</h1>
                <div class="sub-section">
                    <h3>Responsibilities</h3>
                    <ul>
                        <li>Sole Developer</li>
                    </ul>
                </div>
                <hr>
                <div class="sub-section">
                    <h3>Technology Used</h3>
                    <ul>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <hr>
                <div class="sub-section">
                    <h3>Lessons Learned</h3>
                    <ul>
                        <li>Data abstraction to allow for maximum different events.</li>
                        <li>Account login with Facebook.</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>


<script src="../includes/js/mobileDetect.js"></script>
<script type="application/javascript" src="/includes/js/shared.js"></script>
<script type="application/javascript" src="experience.js"></script>
</body>
<?php
include "../includes/php/footer.php";
?>
</html>