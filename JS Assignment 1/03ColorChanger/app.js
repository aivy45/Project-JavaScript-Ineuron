let canvas = document.getElementById("canvas");
let btn = document.getElementById("button");


const randomColor = ()=>{
  let val="0123456789ABCDEF";
  let cons="#";


  for(let i=0; i<6; i++)
  {
    cons+= val[Math.floor(Math.random()*16)];
  }
  return cons;
};

let getColor=()=>{
    canvas.style.backgroundColor= randomColor();
};

btn.addEventListener("click", getColor);

