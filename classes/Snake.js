class Snake {
  constructor(x,y,direct,width,height) {
    this.direction = direct;
    this.directionHistory = [];
    this.length = [];
    this.width = width;
    this.height = height;

    this.length.push(new Tile(x,y,width,height));
  }

  move(){
    this.directionHistory.push(this.direction);
    this.length.forEach(function(value,i){
      value.x += this.directionHistory[i].x;
      value.y += this.directionHistory[i].y;
    });
    if(this.directionHistory.length > this.length.length){
      this.directionHistory.pop();
    }
  }
  setCollision(){
    this.length.forEach(function(value,i){
      value.OnCollisionEnter = function(tiles){

      }
    }
  }
}
