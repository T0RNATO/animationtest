if(window.location.href.includes("?") == true) {
  var y = window.location.href.split("?");
  y = y[1].split("x");
  var width = y[0];
  var height = y[1];  
}
else if(window.location.href.includes("?") == false){
  var width = 26;
  var height = 14;
}
document.getElementsByTagName("table").width = width * 50;
document.getElementsByTagName("table").height = height * 50;
var tcont = `<tr width=${width * 50} height=50></tr>`; //putting the stuff in the table
var tcontent = "<td width=50 height=50><button name='a'></button></td>"; //putting the stuff in the trs
var ts = document.getElementsByTagName("tr");
var done = [""];
var obj, q;
var o = 1;
var i = -1;
var buttons = document.getElementsByTagName("button");
document.getElementsByTagName("table")[0].innerHTML = tcont.repeat(height); //also putting the sutff in the table
for (w = 0; w < ts.length; w++) { //also putting the stuff in the trs
  ts[w].innerHTML = tcontent.repeat(width); //(26 rows)
}
function vanish() {
  obj = Math.floor(Math.random() * (height * width)); //random number
  if(done.includes(obj) == false) { //if i haven't already done that number
    done.push(obj); //add the number to the list of numbers I've done
    if(o == 0) {
      buttons[obj].style.opacity = 1.0; //and toggle the opacity
    }
    else if(o == 1) {
      buttons[obj].style.opacity = 0.0;
    }
    ++i; //add one to the counter
  }
  if(i == (height * width) - 1) { //if counter = number of shapes, reset everything and stop the repeating timer
    clearInterval(q);
    o = 1 - o;
    done = [""];
    obj = 0;
    i = -1;
  }
}
function go() {
  width = document.getElementById('W').value;
  height = document.getElementById('H').value;
  window.location.replace(`https://t0rnato.github.io/animationtest/?${width}x${height}`); 
}
function enter(event) {
  var x = event.which || event.keyCode;
  if(x == 13) {
    go();
  }
}
