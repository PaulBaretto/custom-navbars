<?php 

function menuList(){ ?>
<ul class="nav-list">
    <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Home</a></li>
    <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">About</a></li>
    <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Features</a></li>
    <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Testimonials</a></li>
    <li class="nav-items"><a href="#" class="nb-item-link nb-btn-style-2 font-style-1">Contact Us</a></li>
</ul>
<?php return; } 

 
function paulMan() {
    $paul = "Hi my name is Paul.";
    $text = "<p>$paul</p>";
    //echo $text;
    return $text;
}

?>
