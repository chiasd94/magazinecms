<?php
  header("Access-Control-Allow-Origin: *");
  $conn = mysqli_connect("localhost:3306","root","");
  mysqli_select_db($conn,"MagazineCMS");
  if (mysqli_connect_errno())
  {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>
