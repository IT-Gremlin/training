// script.js = what the page DOES.
// Lines starting with // are comments. The computer ignores them.


// 1. Find the button on the page (the one with id="toggle")
//    and save it in a box called "btn" so we can use it.
const btn = document.getElementById('toggle');


// 2. Tell the button: "when someone clicks you, run this code".
btn.addEventListener('click', () => {

  // 3. Add the class "light" to the body. If it's already there, take it off.
  //    That's what "toggle" means: on, off, on, off...
  //    The CSS for body.light then changes the colours.
  document.body.classList.toggle('light');

});
