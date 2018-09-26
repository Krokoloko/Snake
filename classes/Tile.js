console.log("tile");
class Tile
{
  constructor(x,y,width,length, color)
  {
    this.x = x;
    this.y = y;
    this.gridPos;
    this.width = width;
    this.height = length;
    this.draw = function (){};
    this.color = color||0xff0fff;
  }
  OnCollisionEnter(tiles)
  {
    for (var i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[i].length; j++) {
        if(tiles[i][j]){
          tiles[i][j]
        }
      }
    }
    return false;
  }

  update()
  {
    this.draw();
  }
}
