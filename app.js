
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left = left - 100;
    if(left>=0)
    {
        character.style.left = left + "px";   
    }
}

function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left = left + 100;
    if(left<300)
    {
        character.style.left = left + "px";  
    } 
}

document.addEventListener("keydown", event => {
    if(event.key === "ArrowLeft")
        {
            moveLeft();
        }
    if(event.key === "ArrowRight")
        {
            moveRight();
        }

});

var counter = 0;
var block = document.getElementById("block");
block.addEventListener('animationiteration', () => {
    var random = Math.floor( Math.random() * 3);
    let left = random * 100;
    block.style.left = left + "px";
    counter++;
});

setInterval(function(){
    var characterleft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blocktop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if (characterleft == blockleft && blocktop < 500 && blocktop >300)
    {
    
        alert("Game Over, Score:"+counter);
        counter = 0;
        block.style.animation = none;

    }
    
},1);