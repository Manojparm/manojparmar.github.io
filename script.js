let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for( tablink of tablinks){
         tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemeu(){
    sidemenu.style.right="-200px"
}

 let effe=document.getElementById("mybtn1");
function effects(){
    effe.style.background="black";
}

let closee=document.getElementById("sidemenu");
function hello1(){
    closee.style.right="-200px"
}