
window.onload=function(){
    const jaButton = document.getElementById("ja");
    const neinButton = document.getElementById("nein");
    const page = document.getElementById("page");
    const page2 = document.getElementById("page2");
    var count = 0;

    jaButton.addEventListener("click", function() {
        page.style.display="none";
        page2.style.display="inline";
     });
     neinButton.addEventListener("click", function() {
        if(count == 0){
            jaButton.style.padding="25px 35px";
            neinButton.value="Wirklich :(";
            neinButton.style.padding="15px 25px";
            neinButton.style.fontSize="15px"
            neinButton.style.margin="4px"
            count = 1;
            console.log(count);
            return;
        }
        if(count == 1){
            jaButton.style.padding="35px 45px";
            neinButton.value="überlegs dir...";
            neinButton.style.padding="12.5px 22.5px";
            neinButton.style.fontSize="15px"
            neinButton.style.margin="4px"
            count = 2;
            return;
        }
        if(count == 2){
            jaButton.style.padding="45px 55px";
            neinButton.value="Bitte :(";
            neinButton.style.padding="12.5px 22.5px";
            neinButton.style.fontSize="15px"
            neinButton.style.margin="4px"
            count = 3;
            return
        }
        if(count == 3){
            neinButton.style.display="none";
            return
        }
        
     })
     }