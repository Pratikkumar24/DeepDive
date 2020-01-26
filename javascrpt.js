function dropdownmenu() {
    var x = document.getElementById("dropdownclick");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else
        x.className = "topnav";
}