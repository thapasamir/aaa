var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i).style.fontsize="3rem;";
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()