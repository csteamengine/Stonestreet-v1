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
            <div id="course3" class="grid_item">
                <h2>Computer Science 228</h2>
                <div >
                    <p>Computer Science 228 was my first exposure to data structures, and fairly basic, yet well known algorithms. This class forced me to begin thinking outside the box, and it was, I believe, the most influential classes I took at Iowa State. It provided me with the knowledge to percieve problems with code that I had never considered up to that points, and armed me with the tools to fix them. I believe this class helped me to become a better overall thinker, and it taught me to look at a problem in different ways, besides head-on.</p>
                </div>
            </div>
        </div>

        <div class="grid">
            <div class="grid_item">
                <h2>What are your current short term (within next one or two years) and long-term (next five to ten years) goals? You may include your ideal career in engineering or your preferred working environment.</h2>
                <div>
                    <h3>Short Term</h3>
                    <p>My short term goals are to get on my feet after college. I currently have a job at Saltech Systems, that I plan to keep for a while to help me get financially stable. I would like to get a new car, a house, and get married within the first couple years after college.</p>
                </div>
                <div >
                    <h3>Long Term</h3>
                    <p>I would like a chance to work for one of the big software companies such as Google, Microsoft, or Amazon, for a few years at least so I can learn what it is like out in the big industry. I like working for companies that have a good atmosphere, and I love working with people that have a good sense of humor. My dream, is to start my own company doing something software related, but since that is incredibly difficult, I think in the meantime I would be more than happy to work for a company, provided I enjoy working there.</p>
                </div>
            </div>
            <div class="grid_item">
                <h2>What have you learned in your general education electives that allow you to evaluate and formulate engineering solutions with problem solving and innovation beyond the technical aspects in problem solving? How do general education classes help you to think about an engineering problem?</h2>
                <div >
                    <p>When you only take core classes, you don't get much outside perspective. All you learn, is core programming techniques, and that is all the skills you have to solve problems. In my general education classes, I learned to think differently, which allows me to percieve problems in more than just the traditional programming mindset. Some of my general education classes have taught me how to think globally, which expands my abilities to solve global issues, instead of just the ones I see in front of me.</p>
                </div>
            </div>
            <divclass="grid_item">
                <h2>Describe specific instances where you used knowledge/skills from general elective courses for innovation in engineering problems. What impact does meshing technical engineering skills and general electives-based innovation have in an economic, global, or societal context? </h2>
                <div >
                    <p>One thing I learned from a psychology class, is how people think when they are using a computer. This knowledge helps me to develop websites and software to suit a user's wants, rather than just their needs. We also learned, that often times users don't know what they want. One quote that I feel encompasses this idea, is “If I had asked people what they wanted, they would have said faster horses.” by Henry Ford. </p>
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