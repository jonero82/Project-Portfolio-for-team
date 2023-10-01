<?php

include 'config.php';

session_start();

$user_id = $_SESSION['user_id'];

if(!isset($user_id)){
   header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>about</title>

   <!--font awesome cdn link-->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

   <!--css file link-->
   <link rel="stylesheet" href="style.css">

</head>
<body>
   
<?php include 'header.php'; ?>

<div class="heading">
   <p> <a href="index.php">Home</a> / About </p>
</div>

<section class="about">

   <div class="flex">

      <div class="image">
         <img src="assets/about.jpg" alt="about us image">
      </div>

      <div class="content">
         <h3>About Farmers Market</h3>
         <p>Farmers Market is a web based application that allows the general public to buy farm produce directly from the farm.</p>
         <p><strong>Mission:</strong> Our mission is to bridge the gap between the consumers and the farmers. 
            Creating a platform that allow people to buy directly from the 
            farm will help in mitigating the effect of inflation on the general public.</p>
         <p><strong>Vision:</strong> Our vision is to be among the leading successful e-commerces in the 
            world that brings comfort and happiness to its users.</p>
         <a href="contact.php" class="btn">contact us</a>
      </div>

   </div>

</section>

<section class="reviews">

   <h1 class="title">client's reviews</h1>

   <div class="box-container">

      <div class="box">
         <img src="assets/client1.jpg" alt="client image">
         <p>Since i started using Farmers Market everything have become easy and smooth for me.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Dr. Safuriyawu Ahmed</h3>
      </div>

      <div class="box">
         <img src="assets/client2.jpg" alt="client image">
         <p>Since i started using Farmers Market everything have become easy and smooth for me.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Aminu Binta</h3>
      </div>

      <div class="box">
         <img src="assets/client3.jpg" alt="client image">
         <p>Since i started using Farmers Market everything have become easy and smooth for me.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Mrs Anderson</h3>
      </div>

   </div>

</section>

<section class="authors">

   <h1 class="title">Team Members</h1>

   <div class="box-container">

      <div class="box">
         <img src="assets/abiodun.jpg" alt="team image">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>Abiodun Ogunremi</h3>
      </div>

      <div class="box">
         <img src="assets/kasheem.jpg" alt="team image">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>Abdulazeez Kasheem</h3>
      </div>

      <div class="box">
         <img src="assets/joy.jpg" alt="team image">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>Rejoice Gono</h3>
      </div>

      <div class="box">
         <img src="assets/mathiew.jpg" alt="">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>Ndubuisi Matthew</h3>
      </div>
   </div>

</section>


<?php include 'footer.php'; ?>

<!--javascript file link-->
<script src="script.js"></script>

</body>
</html>