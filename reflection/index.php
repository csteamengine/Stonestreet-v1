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

    <title>Reflection | StoneStreet</title>
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
        <h1>Reflection</h1>
        <div class="grid">
            <div class="grid_item">
                <h3>How do you think ISU has prepared you to:</h3>
                <ul>
                    <li><h4>Design systems or processes?</h4></li>
                    <p>Many of my classes not only focus on the functionality of the project but also require the architecture of the project to we well thought out. I feel like ISU has given me the
                     skills to design systems and processes that are scalable and efficient.</p>
                    <li><h4>Formulate and solve engineering problems?</h4></li>
                    <p>With a curriculum full of problem solving courses, I feel confident that I have the skills to formulate a solution to a wide array of engineering problems.</p>
                    <li><h4>Impact engineering solutions in a global/societal context?</h4></li>
                    <p>Most of the classes at Iowa State have had a focus on outputting multiple projects in a short period of time, which in my opinion has not prepared me with the skills to
                    identify engineering problems at a global/societal context. As we have very little time to come up with projects and even less time to complete them,
                    we don't have the opportunity to think of problems at a global level.</p>
                </ul>
            </div>
            <div class="grid_item">
                <h3>What things have you done at ISU to prepare you to:</h3>
                <ul>
                    <li><h4>Work in groups?</h4></li>
                    <p>Most of my classes in the SE curriculum focus on building the ability to work as a group. Nearly every project class is a group project class, and as such, I feel that ISU has prepared me
                    well to work in groups.</p>
                    <li><h4>Recognize contemporary issues?</h4></li>
                    <p>Sadly, I don't think that we have spent enough time diagnosing contemporary issues in class, as we have to churn out projects so fast. We basically
                    have to come up with projects as fast as we can, and go with it.</p>
                    <li><h4>Understand professional and ethical responsibilities?</h4></li>
                    <p>In classes like ComSci 309 and Com Sci 339, we actually discussed many different scenarios where ethical and professional responsibilities come into question, and how to handle them correctly. I feel confident that I have the
                    skills to navigate the professional world ethically and effectively.</p>
                </ul>
            </div>
            <div class="grid_item">
                <h3>In class projects & problem solving tasks, did you draw upon information, research, or experiences beyond what was provided in class to successfully complete your work?</h3>
                <p>One of the most valuable resources at Iowa State, is your classmates. Many students have had experience with a wide array of technologies, and one student hasn't, then another student likely has.
                With such a great resource at my fingertips, one of the most useful sources of information was the experiences that myself and my classmates have had outside of class. For example, in ComSci 319, we did a large section on PHP, which I had already
                learned from my job at Iowa State doing web development. That extra knowledge helped to reduce the stress of the semester.</p>
            </div>
            <div class="grid_item">
                <h3>How did learning activities outside of the classroom (required 124.5 credits) – such as Student Orgs, Career or Study Abroad Fairs, Undergraduate Research Experience (REU), or other university programs – help you to understand the importance of Lifelong Learning?</h3>
                <p>For a brief time, I was the president of the web development club here on campus, and if that taught me anything, it is that everyone loves to learn. Students are extremely busy as it is, and still we had a large
                group of students that regularly attended meetings, for no reason other than they wanted to learn web development. Even students that aren't in a computer related field showed up, and that truly showed me how much people value knowledge.
                That experience has taught me how valuable knowledge is, and I am truly grateful that I was able to have it.</p>
            </div>
            <div class="grid_item">
                <h3>Have you started to undertake any new learning to improve your ability to apply skills or knowledge to new problems and to develop confidence in taking risks? Please explain.</h3>
                <p>Yes, just this year, I have begun to look into how to solve scalability issues with modularizing the software that I create. I have made an effort to improve my personal projects so they could handle a large customer base, and I have begun to look into new
                technologies that are built to specifically handle that exact problem, such as Java Spring Boot.</p>
            </div>
            <div class="grid_item">
                <h3>In the context of the first four questions, if you were to do your undergraduate work again, what things would you change?</h3>
                <p>In the event that I could go back and start it all over, I would definitely choose a minor. Something that would set me apart from all the other SE's that have the exact same set of classes behind them. I would also
                save some gen ed classes for my later semesters, as taking 4+ problem solving courses for 3 semesters in a row is incredibly taxing both mentally and physically. Lastly, I would have planned ahead enough to begin the concurrent graduate degree before it was too late.</p>
            </div>
        </div>


    </div>
</div>


<script src="../includes/js/mobileDetect.js"></script>
<script type="application/javascript" src="/includes/js/shared.js"></script>
<script type="application/javascript" src="reflection.js"></script>
</body>
<?php
include "../includes/php/footer.php";
?>
</html>