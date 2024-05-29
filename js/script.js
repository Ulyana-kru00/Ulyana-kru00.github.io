let switchMode = document.getElementById("switchMode");
let theme = document.getElementById("theme");
const savedTheme = localStorage.getItem('theme'); 
if (savedTheme) { 
    theme.href = savedTheme; 
} 
switchMode.onclick = function(){
    if(theme.getAttribute("href") == "/styles/style.css"){
        theme.href = "/styles/secondVar.css";
    }
    else{
        theme.href = "/styles/style.css";
    }
    localStorage.setItem('theme', theme.href); 
}

window.onload = function(){
    let preloader = document.getElementById ('preloader');
    preloader.classList.add('hide-preloader');
    setTimeout(function() {
        preloader.classList.add('preloader-hidden');
    },950)
}
