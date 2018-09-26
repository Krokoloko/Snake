//vars
let snek, input, pause, squares, tiles, ratio, debug;
let test = new Tile(0,0,0,0,null);
console.log(test);
//delicates
let OnScreenResize;

let config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
console.log(config.width + ", " + config.height);
let game = new Phaser.Game(config);

function preload(){
  debug = true;
  squares = 1;
  let pass = true;
  while(pass){
    ratio = config.width*config.height/squares;
    if(ratio < 20){
      pass = !pass;
    }else{
      squares++;
    }
  }
  pause = false;
  input = new Input(87,83,68,65,13);
  snek = new Snake((config.width/(ratio/2)/2)*(ratio/2),(config.height/(ratio/2)/2)*(ratio/2),{x:0,y:0});

  input.OnUp = function(){
    snek.direction = {x:0,y:ratio/2};
    console.log('up');
  }
  input.OnDown = function(){
    snek.direction = {x:0,y:-ratio/2};
    console.log('down');
  }
  input.OnRight = function(){
    snek.direction = {x:ratio/2,y:0};
    console.log('right');
  }
  input.OnLeft = function(){
    snek.direction = {x:-ratio/2,y:0};
    console.log('left');
  }
  input.OnPause = function(){
    pause = !pause;
  }

  tiles = [];
  for (let i = 0; i < squares/config.height*2; i++) {
    tiles.push([])
    for (let j = 0; j < squares/config.width*2; j++) {
      let tile = new Tile(i*(ratio/2),j*(ratio/2),ratio/2,ratio/2,null);
      tile.graphics = this.add.graphics(tile.x,tile.y);
      tile.draw = function(){
        this.graphics.clear();
        this.graphics.beginPath();
        this.graphics.fillStyle(this.color);
        this.graphics.fillRect(this.x,this.y,this.width,this.height);
        this.graphics.strokeRect(this.x,this.y,this.width,this.height);
        this.graphics.closePath();
      }
      let wModulo = tiles.length % 2;
      let hModulo = tiles[i].length % 2;
      tiles[i].push(tile);
      if(tiles.length % wModulo === 0 && tiles[i].length % hModulo===0){
        tiles[i][j].color = 0xC0C0C0;
      }else tiles[i][j].color = 0xFfFfF0;
    }
  }
  console.log(tiles.length*tiles[0].length);
  console.log('preloaded');

}

function create(){

  console.log('created');
}
function update(){

  for(let i = 0;i < tiles.length;i++){
    for (let j = 0; j < tiles[i].length; j++) {
      tiles[i][j].update();
    }
  }
  debug = false;
}

setTimeout(function()
{
  if(pause)
  {
    snek.move();
  }
}, 600);
