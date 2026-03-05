const faq=document.querySelectorAll(".faq-btn");

faq.forEach(button=>{
button.addEventListener("click",()=>{

const content=button.nextElementSibling;

content.style.display=
content.style.display==="block"?"none":"block";

});
});
