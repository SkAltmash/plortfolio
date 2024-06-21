let memuicon = document.querySelector("#memuicon");
let nav = document.querySelector(".nav");

memuicon.onclick =()=>{
  memuicon.classList.toggle("fa-xmark");
  nav.classList.toggle('active');
  
}
const  typed = new Typed('.multipley-text',{
  strings:['Frontend Developer','Web Designer','Codder'],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop:true,

});