element1 = document.getElementById("1");
element2 = document.getElementById("2");
element3 = document.getElementById("3");
element4 = document.getElementById("4");
element5 = document.getElementById("5");
element6 = document.getElementById("6");

element1.style.width = "30%";
element1.style.height = "30%";
element2.style.width = "30%";
element2.style.height = "30%";
element3.style.width = "30%";
element3.style.height = "30%";
element4.style.width = "30%";
element4.style.height = "30%";
element5.style.width = "30%";
element5.style.height = "30%";
element6.style.width = "30%";
element6.style.height = "30%";

function zoom(slika) {
    var element = document.getElementById(slika);
    if (element.style.width == "30%") {
        element.style.width = "80%";
        element.style.height = "80%";
    }
    else {
        element.style.width = "30%";
        element.style.height = "30%";
    }
}
