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

    <title>Education | StoneStreet</title>
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
        <h1>Education</h1>
        <div class="grid">
            <div id="course1" class="grid_item">
                <h2>Software Engineering 329</h2>
                <div >
                    <p>SE 329 was a very project-oriented class, where we had to complete 4 group projects with the same group throughout the semester. This class taught me time management, as well as requirements planning, as we had very little time to complete each project. This class helped to build my group working skills, by forcing me to depend on my group members to get their assigned tasks done for each project.</p>
                </div>
            </div>
            <div id="course2" class="grid_item">
                <h2>Computer Science 327</h2>
                <div >
                    <p>Computer Science 327 was my first exposure to C and C++, two languages that are among the most used languages out there. Throughout the semester we had one individual project to work on, with ten or so graded checkpoints. This class helped to teach me how to pace myself when programming. It is easy to get carried away in one sitting, and we so focussed on finishing early, that you mess something up in the long run. Since often times, code that is written further down the line often relies on the early code, it is important to get it right the first time. This is a value that I think can be applied to not just programming, but also any project that you are undergoing. To build a house, you will need a strong foundation.</p>
                </div>
            </div>
            <div id="course2" class="grid_item">
                <h2>Computer Science 228</h2>
                <div >
                    <p>Computer Science 228 was my first exposure to data structures, and fairly basic, yet well known algorithms. This class forced me to begin thinking outside the box, and it was, I believe, the most influential classes I took at Iowa State. It provided me with the knowledge to percieve problems with code that I had never considered up to that points, and armed me with the tools to fix them. I believe this class helped me to become a better overall thinker, and it taught me to look at a problem in different ways, besides head-on.</p>
                </div>
            </div>
        </div>
    </div>
</div>


<script src="../includes/js/mobileDetect.js"></script>
<script type="application/javascript" src="/includes/js/shared.js"></script>
<script type="application/javascript" src="education.js"></script>
</body>
<?php
include "../includes/php/footer.php";
?>
</html>