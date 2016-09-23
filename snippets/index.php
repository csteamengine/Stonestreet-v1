<?php
/**
 * Created by PhpStorm.
 * User: adm_gcs
 * Date: 7/8/2016
 * Time: 10:11 AM
 */

include "../includes/php/base.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Snippets | Stonestreet</title>
    <link rel="icon" type="image/x-icon" href="/faviconblack.png" />


    <link rel="icon" type="image/x-icon" href="../includes/images/faviconblack.png" />
    <link rel="stylesheet" href="snippets.css">
    <link rel="stylesheet" href="../includes/css/shared.css">
    <link rel="stylesheet" href="../includes/css/header.css">
    <link rel="stylesheet" href="../includes/css/footer.css">
    <script src="../includes/js/jquery-2.2.4.min.js" type="application/javascript"></script>
</head>

<body>
<?php include "../includes/php/header.php" ?>
<div id="content">
   <div id="subcontent">
       <div id="grid">
           <?php
           $sql = "SELECT * FROM snippets WHERE active = 'yes'";
           $query = mysqli_query($conn, $sql);
           while($result = mysqli_fetch_assoc($query)){
               ?>
               <div class="gridItem">
                   <a href="<?= $result['url'] ?>">
                       <div class="overlay">
                           <h2 class="title"><?= $result['title'] ?></h2>
                           <h5><?= $result['brief'] ?></h5>
                       </div>
                   </a>
               </div>
               <?php
           }
           ?>

           <div class="gridItem">
               <a href="#">
                   <div class="overlay comingSoon">
                       <h2 class="title">Coming Soon!</h2>
                       <h5>Check back later for more!</h5>
                   </div>
               </a>
           </div>

       </div>
   </div>
</div>

<?php include "../includes/php/footer.php" ?>
<script type="application/javascript" src="/includes/js/shared.js"></script>

<script src="../includes/js/mobileDetect.js"></script>
</body>

</html>
