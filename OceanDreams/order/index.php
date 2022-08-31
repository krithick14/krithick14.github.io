<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="text/javascript">
      var path="../mov_src/<?php echo $movie; ?>/"
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="../assets/images/icon.png" type="image/png">
    <title>CineFlix</title>
    <meta name="description" content="CineFlix-Latest Movies">
    <meta charset="utf-8">
    <meta name="mobile-web-app-capable" content="yes" />

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"> </script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./display.css">
    <script type="text/javascript" src="display.js"></script>
  </head>
  <body>
    <header>
      <img src="../assets/images/logo.png"/>;
    </header>
    <div class="video-container">
      <iframe id="yt-trailer" width="1000px" height="400px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="contents">
      <h1 class="title" id="title"></h1>
      <p class="year" id="year"></p>
    </div>
  </body>
</html>

