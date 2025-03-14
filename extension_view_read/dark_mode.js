document.addEventListener("DOMContentLoaded",()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.querySelectorAll("*").forEach(el =>{
        el.style.backgroundColor = "black";
        if (el.textContent.trim().length > 0) {
            el.style.color = "white";
        }
    })
});