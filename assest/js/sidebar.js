const btn = document.querySelector(".crtbtn");
const side = document.querySelector(".sidebar");

const sidelink = document.querySelectorAll('.humberger a');

console.log(sidelink);

btn.addEventListener("click", function () {
  side.classList.toggle("show");
  btn.classList.toggle("open");
});

sidelink[0].addEventListener('click' , function(event){
  side.classList.toggle("show");
  btn.classList.toggle("open");
});
sidelink[1].addEventListener('click' , function(event){
  side.classList.toggle("show");
  btn.classList.toggle("open");
});
sidelink[2].addEventListener('click' , function(event){
  side.classList.toggle("show");
  btn.classList.toggle("open");
});
sidelink[3].addEventListener('click' , function(event){
  side.classList.toggle("show");
  btn.classList.toggle("open");
});