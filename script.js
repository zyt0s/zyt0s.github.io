
window.onload=function(){
    const jaButton = document.getElementById("ja");
    const neinButton = document.getElementById("nein");
    const page = document.getElementById("page");
    const page2 = document.getElementById("page2");
    page2.style.display="none";

    jaButton.addEventListener("click", function() {
        page.style.display="none";
        page2.style.display="inline";
     });
     }