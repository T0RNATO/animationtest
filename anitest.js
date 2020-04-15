var tcontent = "<td width=50 height=50><button></button></td>";
var tcont = "<tr width=300 height=50></tr>";
var ts = document.getElementsByTagName("tr");
var done = [""];
var obj, q;
var o = 1;
var i = -1;
var buttons = document.getElementsByTagName("button");
document.getElementsByTagName("table")[0].innerHTML = tcont.repeat(12);
for (w = 0; w < ts.length; w++) {
  ts[w].innerHTML = tcontent.repeat(12);
}
function vanish() {
  obj = Math.floor(Math.random() * 144);
  if(done.includes(obj) == false) {
    done.push(obj);
    if(o == 0) {
      buttons[obj].style.opacity = 1.0;
    }
    else if(o == 1) {
      buttons[obj].style.opacity = 0.0;
    }
    ++i;
  }
  if(i == 143) {
    clearInterval(q);
    o = 1 - o;
    done = [""];
    obj = 0;
    i = -1;
  }
}
