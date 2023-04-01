const backGround = document.getElementsByTagName("body");
function changeBackgroundColor(event) {
  var myColor = event.target.value;
  backGround[0].style.backgroundColor = myColor;
}
