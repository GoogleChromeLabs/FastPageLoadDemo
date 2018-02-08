//insert time of day greeting from computer time
window.onload = function() {
    var hr = new Date().getHours();
    var greeting = "Good morning";
    if (hr > 11) {
        greeting = "Good afternoon";
    }
    if (hr > 17) {
        greeting = "Good evening";
    }
    h2 = document.getElementById("greethead");
    h2.innerHTML = greeting + h2.innerHTML;
}

//show bonus article chosen by radio button
function bonusart() {
    //get list of radio buttons [0-3]
    var radiogroup = document.getElementsByName("gq");
    //check each button, turn its article off or on
    if (radiogroup[0].checked) {
        document.getElementById("bonus0").style.display = "block";
    } else {
        document.getElementById("bonus0").style.display = "none";
    }
    if (radiogroup[1].checked) {
        document.getElementById("bonus1").style.display = "block";
    } else {
        document.getElementById("bonus1").style.display = "none";
    }
    if (radiogroup[2].checked) {
        document.getElementById("bonus2").style.display = "block";
    } else {
        document.getElementById("bonus2").style.display = "none";
    }
    if (radiogroup[3].checked) {
        document.getElementById("bonus3").style.display = "block";
    } else {
        document.getElementById("bonus3").style.display = "none";
    }
}
