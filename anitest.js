var tcont = "<tr width=300 height=50></tr>"; //putting the stuff in the table
var tcontent = "<td width=50 height=50><button></button></td>"; //putting the stuff in the trs
var ts = document.getElementsByTagName("tr");
var done = [""];
var obj, q;
var o = 1;
var i = -1;
var buttons = document.getElementsByTagName("button");
document.getElementsByTagName("table")[0].innerHTML = tcont.repeat(14); //also putting the sutff in the table (14 collumns)
for (w = 0; w < ts.length; w++) { //also putting the stuff in the trs
  ts[w].innerHTML = tcontent.repeat(18); //(18 rows)
}
function vanish() {
  obj = Math.floor(Math.random() * 252); //random number between 0 and 14 * 18, or 252
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
  if(i == 251) { //if counter = number of shapes, reset everything and stop the repeating timer
    clearInterval(q);
    o = 1 - o;
    done = [""];
    obj = 0;
    i = -1;
  }
}
