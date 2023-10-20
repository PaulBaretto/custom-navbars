<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nav Style 1</title>
       <!-- font-ubuntu -->
       <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">   
       <!-- fontawesome -->
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/style2.css">
    <?php //include 'menu.php';  ?>
</head>
<body>

    <!-- Header -->
    <header class="nav1-header" id="nav1-header">
        
        <div class="nav-container">

            <div class="nav-wrap">  

                <!-- Logo -->
                <div class="nav-logo-sticky">
                  <a href="#"> <img src="assets/images/logoipsum_2.svg" alt="" class="nav-logo-image"> </a>
                </div>
                <!-- Logo -->

                <!-- Left Menu -->
                <div class="nav-row nav-row-left">
                    
                    <nav class="nav-menu">
                    <ul class="nav-list">
                        <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Home</a></li>
                        <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">About</a></li>
                        <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Features</a></li>
                        <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Testimonials</a></li>
                        <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Contact Us</a></li>
                    </ul>
                    </nav>

                </div>
                <!-- Left Menu End  -->

                <!-- Logo -->
                <div class="nav-logo">
                 <a href="#"> <img src="assets/images/logoipsum_2.svg" alt="" class="nav-logo-image"> </a>
                </div>
                <!-- Logo -->

                <!-- right Menu -->
                <div class="nav-row nav-row-right">
                    <div class="nav-right-bar">

                        <!-- Nav Search -->
                        <div class="nav-search nav-mobile-search">
                            <form action="" class="nb-page-search">
                                <input type="search" id="nb_search" name="nb_search">
                                <label for="submit" class="nb-btn-style-3" id="nb-search-send"><i class="fa-solid fa-magnifying-glass"></i></label>
                                <input type="submit" id="submit" hidden>
                            </form>
                        </div>
                        <!-- Nav Search End -->

                        <div class="nav-btn-extra nav-menu">
                            <ul class="nav-list">
                                <li class="nav-item"><a href="#" class="nb-item-link nb-btn-style-1 font-style-1">
                                    Log In / Sign Up
                                </a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <!-- right Menu End -->

                <!-- Hamburger -->    
                <div class="nav-mobile-btn">
                    <button class="nb-toggler nb-collapsed lg-none sm-block" type="button">
                        <span class="nbbar-toggler-icon"><i class="fa-solid fa-bars" id="test"></i></span>
                    </button>
                </div>
                <!-- Hamburger End -->

                <!-- Moble Start -->    
                <div class="nav-mobile-canvas" hidden id="nav-mobile-canvas">
                    <nav class="nav-menu">
                        <div class="nav-menu-wrap1">
                        <ul class="nav-list">
                            <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Home</a></li>
                            <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">About</a></li>
                            <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Features</a></li>
                            <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Testimonials</a></li>
                            <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Contact Us</a></li>
                        </ul>
                            <div class="nav-btn-extra nav-menu">
                                <ul class="nav-list">
                                    <li class="nav-item"><a href="#" class="nb-item-link nb-btn-style-1 font-style-1">
                                        log-in/ Sign Up
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="nav-menu-wrap2">
                            <div class="sm-social-contacts lg-none sm-block">
                                <span><i class="fa-brands fa-instagram"></i></span>
                                <span><i class="fa-brands fa-facebook"></i></span>
                                <span><a href="tel:+910000000000">+000-000-0000</a></span>
                            </div>
                        </div>
                    </nav>
                </div>
                <!-- Moble End -->

            </div>
        </div>

    </header>
    <!-- Header End -->


    <script src="assets/js/main.js"></script>

</body>
</html>