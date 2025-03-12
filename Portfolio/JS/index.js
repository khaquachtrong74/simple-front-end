// functions
function draw(){
    const canvas = document.getElementById("tutorial");
    if(canvas.getContext){
        const ctx = canvas.getContext("2d");
        var rectWidth = 100;
        var rectHeight = 50;

        var rect1 = {x: 150, y: 80 }; // start
        var rect2 = {x: 350, y: 80 }; // process
        var rect3 = {x: 550, y: 80 }; // rule
        var rect4 = {x: 550, y: 380}; // goal
        var rect5 = {x: 150, y: 380}; // motivation
        var rect6 = {x: 325, y: 230, width: rectWidth+50}; // ambiguous


        ctx.fillStyle = 'rgb(12, 16, 28)';
        ctx.font = "20px Arial"
        // Draw Rect
        ctx.fillRect(rect1.x, rect1.y, rectWidth, rectHeight);
        ctx.fillRect(rect2.x, rect2.y, rectWidth, rectHeight);
        ctx.fillRect(rect3.x, rect3.y, rectWidth, rectHeight);
        ctx.fillRect(rect4.x, rect4.y, rectWidth, rectHeight);
        ctx.fillRect(rect5.x, rect5.y, rectWidth, rectHeight);
        ctx.fillRect(rect6.x, rect6.y, rect6.width, rectHeight);

        // Fill text
        ctx.fillStyle = "white";
        ctx.fillText("Start", rect1.x+rectWidth/3.5,rect1.y+rectHeight/1.75);
        ctx.fillText("Process", rect2.x+rectWidth/8,rect2.y+rectHeight/1.75);
        ctx.fillText("Rules", rect3.x+rectWidth/4,rect3.y+rectHeight/1.75);
        ctx.fillText("Goals", rect4.x+rectWidth/4, rect4.y+rectHeight/1.75);
        ctx.fillText("Motivation", rect5.x+5, rect5.y+rectHeight/1.75);
        ctx.fillText("Ambiguous", rect6.x+rectWidth/5, rect6.y+rectHeight/1.7);
        // Draw path between rect1 and rect2 
        ctx.beginPath();
        ctx.lineWidth=2;
        // start to process
        ctx.moveTo(rect1.x + rectWidth, rect1.y + rectHeight/2);
        ctx.lineTo(rect2.x, rect2.y + rectHeight/2);
        // process to rules
        ctx.moveTo(rect2.x + rectWidth, rect2.y+rectHeight/2);
        ctx.lineTo(rect3.x, rect3.y+rectHeight/2);
        // rule to goals
        ctx.moveTo(rect3.x + rectWidth/2, rect3.y + rectHeight);
        ctx.lineTo(rect4.x + rectWidth/2, rect4.y);
        // Motivation to start
        ctx.moveTo(rect5.x+rectWidth/2,rect5.y);
        ctx.lineTo(rect1.x+rectWidth/2, rect1.y+rectHeight);
        // Motivation to ambiguos
        ctx.moveTo(rect5.x+rectWidth, rect5.y);
        ctx.lineTo(rect6.x, rect6.y+rectHeight);
        // Goals to ambiguos
        ctx.moveTo(rect4.x, rect4.y);
        ctx.lineTo(rect6.x + rect6.width, rect6.y+rectHeight);
        // Process to ambiguos
        ctx.moveTo(rect2.x+rectWidth/2, rect2.y+rectHeight);
        ctx.lineTo(rect6.x+rect6.width/2,rect6.y);
        ctx.stroke();
        
    }
    else{
        // canvas-unsuported code here
    }
}

function animateLineText(obj){
    const headers = document.querySelectorAll(obj);
    const lines = document.querySelectorAll(".line");
    headers.forEach((header, index)=>{
        header.addEventListener("mouseover",()=>{
            lines[index].style.width= '100%';
        })
        header.addEventListener("mouseout", ()=>{
            lines[index].style.width= '0%';
        })
    })
}

function smothScroll(){
    document.querySelectorAll("a.smooth-scroll").forEach(a => {
        a.addEventListener("click",function(e){
            e.preventDefault(); // Ngăn cho trình duyệt di chuyển theo mặc định
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
window.onload = ()=>{ 
    draw(); 
    smothScroll();
    animateLineText("h1.roadmap-h1");
}