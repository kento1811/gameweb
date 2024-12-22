const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH  = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 600;

const player_img = new Image();
player_img.src = './assets/js/shadow_dog.png';
const sprite_width = 575;
const sprite_height = 523;
let frameX  = 0;
let frameY = 0;
let gameFrame  = 0;
let playerState = 'run';
const staggerFrame = 5;


const AnimateState = {
    'idle' :
    {
        frame: 7,
        index: 0
    },
    'jump' :
    {
        frame: 7,
        index: 1
    },
    'fall' :
    {
        frame: 7,
        index: 2
    },
    'run' :
    {
        frame: 9,
        index: 3
    },
    'dizzy':
    {
        frame: 11,
        index: 4
    },
    'sit' :
    {
        frame: 5,
        index: 5
    },
    'roll' :
    {
        frame: 7,
        index: 6
    },
    'bite' :
    {
        frame: 7,
        index: 7
    },
    'ko' :
    {
        frame: 12,
        index: 8
    },
    'getHit' :
    {
        frame: 4,
        index: 9
    },
}

function animationChange(s){
    frameX = frameX + 1 < AnimateState[s].frame ? ++frameX : 0;
    frameY = AnimateState[s].index;
}

function animate(){
    ctx.clearRect(0 , 0, CANVAS_WIDTH ,CANVAS_HEIGHT);
    if(gameFrame % staggerFrame == 0){
    animationChange(playerState);
    gameFrame = 0;
    }
    ctx.drawImage(player_img,sprite_width * frameX ,sprite_height * frameY ,sprite_width, sprite_height , 0 ,0 ,CANVAS_WIDTH, CANVAS_HEIGHT);
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();
