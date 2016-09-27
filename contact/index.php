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
</head>

<body>
<?php
include "../includes/php/header.php";
?>
<div id="content">
    <div id="subcontent">
        <h2>Need someone to design your next website?</h2>

        <hr class="contact_hr">
        <h1>Drop me a line!</h1>
        <div id="other">
            <a href="https://github.com/csteamengine" id="github" class="icon" target="_blank"></a>
            <a href="https://www.facebook.com/csteenhagen" id="facebook" class="icon" target="_blank"></a>
            <a href="https://www.linkedin.com/in/gregory-steenhagen-067625101" id="linked_in" class="icon" target="_blank"></a>
            <a href="https://www.pinterest.com/charliesteenhag/" id="pinterest" class="icon" target="_blank"></a>
        </div>
        <div id="contact" class="grid">
            <div id="contact_info" class="grid_item">
                <h1>Gregory Steenhagen</h1>
                <hr>
                <h2>gcs@iastate.edu</h2>
                <h2>csteen1005@gmail.com</h2>
                <h2>(515) 520-0549</h2>
                <p>I will do my best to respond to your emails in a timely manner.</p>
            </div>
            <div id="email" class="grid_item">
                <form id="contact_form" action="/contact/" method="POST">
                    <input type="hidden" name="action" value="email">
                    <input class="form_input" id="nameInput" type="text" name="name" title="Name" placeholder="Name">
                    <input class="form_input" id="subjectInput" type="text" name="subject" title="Subject" placeholder="Subject">
                    <input class="form_input"  id="emailInput" type="email" name="_replyto" title="Email" placeholder="Email">
                    <textarea class="form_input"  id="messageInput" name="message" rows="7" title="Message" placeholder="Message" ></textarea>
                    <input class="form_input"  id="submitInput" type="submit" value="Send">
                </form>
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