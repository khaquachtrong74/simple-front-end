function draw(){
    const canvas = document.getElementById("tutorial");
    if(canvas.getContext){
        const ctx = canvas.getContext("2d");

        var rect1 = { x: 50, y: 50, width: 100, height:100};
        var rect2 = {x: 250, y: 100, width: 100, height: 50};
        var rect3 = {x: 500, y: 150, width: 50, height:50};
        var rect4 = {x: 500, y: 350, width: 100, height: 50};

        ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
        ctx.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);
        ctx.fillRect(rect3.x, rect3.y, rect3.width, rect3.height);
        ctx.fillRect(rect4.x, rect4.y, rect4.width, rect4.height);
        // Draw path between rect1 and rect2 
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.lineWidth=2;
        ctx.moveTo(rect1.x + rect1.width, rect1.y + rect1.height/2);
        ctx.lineTo(rect2.x, rect2.y + rect2.height/2);
        ctx.moveTo(rect2.x + rect2.width, rect2.y+rect2.height/2);
        ctx.lineTo(rect3.x, rect3.y+rect3.height/2);
        ctx.moveTo(rect3.x + rect3.width/2, rect3.y + rect3.height);
        ctx.lineTo(rect4.width/2+ rect4.x, rect4.y + rect4.height);
        ctx.stroke();
        
    }
    else{
        // canvas-unsuported code here
    }
}
//window.addEventListener("load", draw);
window.onload = ()=>{ 
    draw();
}