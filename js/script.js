let switchMode = document.getElementById("switchMode");
let theme = document.getElementById("theme");
const savedTheme = localStorage.getItem('theme'); 
if (savedTheme) { 
    theme.href = savedTheme; 
} 
switchMode.onclick = function(){
    if(theme.getAttribute("href") == "assets/css/web.css"){
        theme.href = "assets/css/secondVar.css";
    }
    else{
        theme.href = "assets/css/web.css";
    }
    localStorage.setItem('theme', theme.href); 
}