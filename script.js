document.onmousemove = function (even) {
   let x = even.x;
   let y = even.y;
   console.log(x + 'x' + y);
   if (x < 380) {
      x / 2
      document.querySelector('.img_human').style.transform = "translate(50px,0px)"
      document.querySelector('.img_leaves').style.transform = "translate(50px,0px)"

   }
   if (x > 440 && x <600) {
      document.querySelector('.img_human').style.transform = "translate(0px,0px)"
      document.querySelector('.img_leaves').style.transform = "translate(0px,0px)"
   }

   if (x > 720) {
      document.querySelector('.img_human').style.transform = "translate(-50px,0px)"
      document.querySelector('.img_leaves').style.transform = "translate(-50px,0px)"
   }


}