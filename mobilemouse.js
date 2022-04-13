var el = document.getElementById("somediv");
document.addEventListener("mousemove", getMouse);

var divpos = {
       x: 0,
       y: 0
};

requestAnimationFrame(followMouse);

var mouse = {
       x: 0,
       y: 0
};

function getMouse(e) {
       mouse.x = e.pageX;
       mouse.y = e.pageY;
}

function followMouse() {
       requestAnimationFrame(followMouse);
      
       var distX = mouse.x - divpos.x;
       var distY = mouse.y - divpos.y;

       divpos.x += distX / 12;
       divpos.y += distY / 12;

       el.style.left = divpos.x + "px";
       el.style.top = divpos.y + "px";

}