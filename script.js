let url='https://script.google.com/macros/s/AKfycbzX6jqpSB8h_mjELQn4Fx99_3w2iGYat8cGoNdhAeUjDHp-GcKciKZ_lgoQw-B6-BER/exec';
let form=document.querySelector('#form');
form.addEventListener("submit",(e)=>{
  e.target.button1.innerHTML="জমা হচ্ছে";
  let d=new FormData(form);
  fetch(url,{
    method:"POST",
    body:d
  }) .then((res)=>res.text())
  .then((finalRes)=>{
    e.target.button1.innerHTML="জমা দিন";
    document.getElementById("resp").innerHTML=finalRes;
    form.reset();
    setTimeout(()=>{
      document.getElementById("resp").innerHTML='';
    },5000)
    console.log(finalRes)
  
  })

e.preventDefault();
})