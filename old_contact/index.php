<?php
/**
 * Created by PhpStorm.
 * User: gregory
 * Date: 9/19/16
 * Time: 2:15 PM
 */

include "../includes/php/base.php";
include "../includes/php/general.php";

$action = get_value('action');

if(isset($action)){
    switch($action){
        case 'email':
            $to = "csteen1005@gmail.com";
            $name = get_value('name');
            $subject = "Stonestreet Software -- ".get_value('subject');
            $reply_to = get_value('_replyto');
            $headers = "From: ".$reply_to."\r\n";

            $message = $name."\n".get_value('message');

            mail($to,$subject,$message,$headers);

            break;
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Document meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Contact | StoneStreet</title>
    <link rel="icon" type="image/x-icon" href="../includes/images/faviconblack.png" />
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../includes/css/shared.css">
    <link rel="stylesheet" href="../includes/css/header.css">
    <link rel="stylesheet" href="../includes/css/footer.css">
    <script src="../includes/js/jquery-2.2.4.min.js" type="application/javascript"></script>
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
</head>

<body>
<?php
include "../includes/php/header.php";
?>
<div id="content">
    <div id="subcontent">
        <h1 id="myName">Gregory Steenhagen</h1>
        <hr id="underName">
        <div id="welcome">
            <h3>You can reach me anywhere,</h3>
            <h2>with just the click of a button!</h2>
        </div>
        <div id="contactButtons">
            <img id="linkedInIcon" src="../includes/images/icons/LinkedInIcon.png" onclick="linkedInClicked()">
            <img id="githubIcon" src="../includes/images/icons/GithubIcon.png" onclick="githubClicked()">
            <img class="selected" id="emailIcon" src="../includes/images/icons/EmailIcon.png" onclick="emailClicked()">
            <img id="facebookIcon" src="../includes/images/icons/FacebookIcon.png" onclick="facebookClicked()">
            <img id="pinterestIcon" src="../includes/images/icons/1459880778_pinterest-hexagon-gloss-social-media.png" onclick="pinterestClicked()">
        </div>
        <div id="sections">
            <div id="linkedInSection" class="bubble">
                <div class="arrow-up"></div>
                <h1>Linked in</h1>
                <div id="lIn">
                    <blockquote class="embedly-card" data-card-key="e6dbe3844fb94139859f883bee3e5912" data-card-controls="0" data-card-branding="0" data-card-type="article"><h4><a href="https://www.linkedin.com/in/gregory-steenhagen-067625101">Gregory Steenhagen | LinkedIn</a></h4><p>I develop web applications for the Iowa State admissions office to aid in the process of admiting new students.</p></blockquote>
                    <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
                </div>
            </div>
            <div id="githubSection" class="bubble">
                <div class="arrow-up"></div>
                <h1>Github</h1>
                <h3>Follow me on Github</h3>
                <div class="github-card" data-github="csteamengine" data-width="400" data-height="317" data-theme="medium"></div>
                <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
<!--                <div id="githubUser">-->
<!--                    <div id="githubUser" class="github-card" data-user="csteamengine"></div>-->
<!--                </div>-->
<!--                <div id="githubRepo">-->
<!--                    <div id="githubRepo" class="github-card" data-user="csteamengine" data-repo="Stonestreet"></div>-->
<!--                </div>-->
<!--                <script src="http://lab.lepture.com/github-cards/widget.js"></script>-->
            </div>

            <div id="emailSection" class="selected bubble">
                <div class="arrow-up"></div>
                <h1>Email</h1>
                <div id="emailInfo">
                    <h2>My Email: gcs@iastate.edu</h2>
                    <p>I will do my best to respond to your emails in a timely manner.</p>
                </div>
                <form id="contactForm" action="/contact" method="POST">
                    <input type="hidden" name="action" value="email">
                    <input id="nameInput" type="text" name="name" title="Name" placeholder="Name">
                    <input id="subjectInput" type="text" name="subject" title="Subject" placeholder="Subject">
                    <input id="emailInput" type="email" name="_replyto" title="Email" placeholder="Email">
                    <textarea id="messageInput" name="message" rows="7" title="Message" placeholder="Message"></textarea>
                    <input id="submitInput" type="submit" value="Send">
                </form>
            </div>

            <div id="facebookSection" class="bubble">
                <div class="arrow-up"></div>
                <h1>Facebook</h1>
                <div id="fb" class="fb-page"  data-href="https://www.facebook.com/StonestreetSoftwareDevelopment/" data-tabs="timeline,events" data-width="330" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                    <div class="fb-xfbml-parse-ignore">
                        <blockquote cite="https://www.facebook.com/StonestreetSoftwareDevelopment/">
                            <a href="https://www.facebook.com/StonestreetSoftwareDevelopment/">Stonestreet Software Development</a>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div id="pinterestSection" class="bubble">
                <div class="arrow-up"></div>
                <h1>Pinterest</h1>
                <h3 id="follow">Follow my web design board</h3>
                <div id="pinterest">
                    <a data-pin-do="embedBoard" href="https://www.pinterest.com/charliesteenhag/web-design/"data-pin-scale-width="80" data-pin-scale-height="250" data-pin-board-width="300">
                        Follow Charlie's board Web design on Pinterest.</a>
                    <!-- Please call pinit.js only once per page -->
                    <script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script>
                </div>
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