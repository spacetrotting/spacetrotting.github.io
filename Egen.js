var Hemma = true;
var currentMenu = 0:

function Hem() {
    if (!Hemma) {
        document.getElementById("citat").style.visibility = "visible";
        document.getElementById("underline").style.transition = "opacity 1s linear";
        document.getElementById("underline").style.opacity = 1;
        
        document.getElementById("huvudmeny").style.webkitAnimationName = "faktaMenyNer";
        document.getElementById("huvudmeny").style.animationName = "faktaMenyNer";
        document.getElementById("huvudmeny").style.animationDuration = "0.5s";
        var elm = document.getElementById("huvudmeny");
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
        
        
        document.getElementById("logga").style.transition = "opacity 0.5s linear 1s";
        document.getElementById("logga").style.opacity = 1;
        
        // CONTENT
        document.getElementById("content").style.transition = "all 1s linear";
        document.getElementById("content").style.opacity = 0;
        document.getElementById("content").style.marginTop = "40vh";
        
        Hemma = true;
        currentMenu = 0;
    }
    
}

function LeaveHome(string) {
    if (Hemma) {
        document.getElementById("underline").style.transition = "opacity 1s linear";
        document.getElementById("underline").style.opacity = 0;
        document.getElementById("citat").style.visibility = "hidden";
        document.getElementById("logga").style.transition = "opacity 1s linear";
        document.getElementById("logga").style.opacity = 0;
    }
    
    if (string == "relativitetsteori") {
        document.getElementById("rubrik").innerHTML = "Relativitetsteori";
        if (Hemma) {
            document.getElementById("content").style.marginTop = "40vh";
            document.getElementById("content").style.marginLeft = "10vw";
        }
    } else if (string == "forntidsresor") {
        document.getElementById("rubrik").innerHTML = "Forntidsresor";
        if (Hemma) {
            document.getElementById("content").style.marginTop = "5vh";
            document.getElementById("content").style.marginLeft = "-95vw";
        }
    } else if (string == "framtidsresor") {
        document.getElementById("rubrik").innerHTML = "Framtidsresor";
        if (Hemma){
            document.getElementById("content").style.marginTop = "5vh";
            document.getElementById("content").style.marginLeft = "95vw";
        }
    } else if (string == "om") {
        document.getElementById("rubrik").innerHTML = "Om";
        if (Hemma) {
            document.getElementById("content").style.marginTop = "5vh";
            document.getElementById("content").style.marginLeft = "10vw";
        }
    }
}

function Relativitetsteori() {
    
    if (Hemma) {
    document.getElementById("huvudmeny").style.webkitAnimationName = "faktaMenyUpp";
    document.getElementById("huvudmeny").style.animationName = "faktaMenyUpp";
    document.getElementById("huvudmeny").style.animationDuration = "0.5s";
    //document.getElementById("huvudmeny").style.marginTop = "3%";
    var elm = document.getElementById("huvudmeny");
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
 
    
    document.getElementById("content").style.transition = "all 0.7s linear 1s";
    document.getElementById("content").style.opacity = 1;
    document.getElementById("content").style.marginTop = "5vh";
    document.getElementById("content").style.marginLeft = "10vw";
        
    Hemma = false;
    }
}

function KnappBakgrund () {
    
    document.getElementById("maintext").innerHTML = "Här kommer information om bakgrunden angående relativitetsteori återfinnas";
    
}

function KnappUtredning () {
    
    document.getElementById("maintext").innerHTML = "Här kommer information om utredningen angående relativitetsteori återfinnas";
}

function KnappSammanfattning () {
    
    document.getElementById("maintext").innerHTML = "Här kommer information om sammanfattningen angående relativitetsteori återfinnas";
}