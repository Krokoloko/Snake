class Input
{
  constructor(up,down,right,left,pause)
  {
    self.up = up;
    self.down = down;
    self.right = right;
    self.left = left;
    self.pause = pause;
    self.OnRight;
    self.OnLeft;
    self.OnUp;
    self.OnDown;
    self.OnPause;
  }
  setEvent()
  {
    document.body.addEventListener('keydown', function(e)
    {
      switch (e.keyCode)
      {
        case self.up:
          console.log("up");
          self.OnUp();
          break;

        case self.down:
          console.log("down");
          self.OnDown();
          break;

        case self.right:
          console.log("right");
          self.OnRight();
          break;

        case self.left:
          console.log("left");
          self.OnLeft();
          break;

        case self.pause:
          console.log("pause");
          self.OnPause();
          break;
        default:
        console.log("no key");
          break;

      }
    })
  }
}
