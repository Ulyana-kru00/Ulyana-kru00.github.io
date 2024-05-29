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

Document.addEventListener("DOMContentLoaded", function(event) { 
    // Скрываем анимацию и показываем контент после загрузки страницы 
    document.querySelector('.loader-wrapper').style.display = 'none'; 
    document.querySelector('.content').style.display = 'block'; 
  });
