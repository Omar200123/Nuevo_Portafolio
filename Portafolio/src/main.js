import './less/style.less';

const modoBtn = document.getElementById("modoBtn");

if (modoBtn) {
    modoBtn.addEventListener("click", () => { 
        document.body.classList.toggle("dark"); 
        if (document.body.classList.contains("dark")) {
             modoBtn.textContent = "☀️"; 
        } else { 
            modoBtn.textContent = "🌙"; 
        } 
    });
}

window.addEventListener("load", () => { 
    console.log("Portafolio cargado correctamente."); 
});