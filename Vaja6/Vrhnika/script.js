function zoom(slika) {
    var element = document.getElementById(slika);
    if (element.style.width == "100%") {
        element.style.width = "150%";
    }
    if (element.style.width == "150%") {
        element.style.width = "100%";
    }
}
