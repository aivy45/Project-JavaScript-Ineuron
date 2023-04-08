// hex to rgb 

function hexConvbtn() {
  const hexValue = document.getElementById("hexCInp").value;
    const h1 = document.getElementById("hexCOut");
   
    if(hexValue.length!=6)
    {
         alert("please enter 6 digit value");
         return;
    }

    let R=0,G=0,B=0;
    for(let i=0; i<hexValue.length; i++)
    {
      if(i<2)
      {
        if(i%2==0)
        {
            R=parseInt(hexValue[i],16);
            R=R*16;
        }
        else{
            let r=parseInt(hexValue[i],16);
            R =R+r;
        }    
      } 

      else if(i==2 || i==3)
      {
       if(i%2==0)
        {
            G=parseInt(hexValue[i],16);
            G=G*16;
        }
        else{
            let g=parseInt(hexValue[i],16);
            G =G+g;
        }
      }
      else{
        if(i%2==0)
        {
            B=parseInt(hexValue[i],16);
            B=B*16;
        }
        else{
            let b=parseInt(hexValue[i],16);
            B =B+b;
        }
      }
    }
    let rgbValue = R.toString()+G.toString()+B.toString();
    h1.innerText=`rgb( ${R},${G},${B} )`;



    }



    // rgb to hex code
    function rgbConvbtn() {
  
      const redC = document.getElementById("RCInput").value;
      const greenC = document.getElementById("GCInput").value;
      const blueC = document.getElementById("BCInput").value;

      const hexAns = document.getElementById("rgbCOut");
     
      let finalAns = "#";

      // for red 
      let R1 = redC/16;
      let finalR1 = Math.floor(redC/16);
      let finalR2 = (R1-finalR1)*16;

      // for green 
      let G1 = greenC/16;
      let finalG1 = Math.floor(greenC/16);
      let finalG2 = (G1-finalG1)*16;

      // for blue 
      let B1 = blueC/16;
      let finalB1 = Math.floor(blueC/16);
      let finalB2 =  (B1-finalB1)*16;


      
      let colors = {
        10:"a", 11:"b", 12:"c", 13:"d", 14:"e", 15:"f",
      };
      
   
      // for red 
      if(finalR1 >9)
      {
        finalR1 = colors[finalR1];

      }
      if(finalR2 > 9)
      {
        finalR2 = colors[finalR2];

      }

      // for green 
      if(finalG1 >9)
      {
        finalG1 = colors[finalG1];

      }
      if(finalG2 > 9)
      {
        finalG2 = colors[finalG2];

      }

      // for blue 
      if(finalB1 >9)
      {
        finalB1 = colors[finalB1];

      }
      if(finalB2 > 9)
      {
        finalB2 = colors[finalB2];

      }


      finalAns += finalR1 + finalR2 + finalG1 + finalG2 + finalB1 + finalB2;
      hexAns.textContent = finalAns;
      }
      


// fill color by hex code 
function hexFindbtn() {
 
  const hexInput = document.getElementById("hexInput").value;
  
  const colorBox = document.getElementById("color-box");
  colorBox.style.background = hexInput;
  console.log(hexInput);


  }

// from rbg color picker 
  function RGBFindbtn() {
  const colorBox = document.getElementById("rgb-color-box");
  const Rcolor = document.getElementById("RInput").value;
  const Gcolor = document.getElementById("GInput").value;
  const Bcolor = document.getElementById("BInput").value;

  const finalColor = `rgb(${Rcolor}, ${Gcolor}, ${Bcolor})`;
  colorBox.style.backgroundColor = finalColor;
  console.log(finalColor);

    }


    // random picker button 
    function randompickerbtn() {
   const colorBox = document.getElementById("randomPicker");
   const colorValue = document.getElementById("randomValuePara");

   let color = "0123456789ABCDEF"
   let finalColor="#";
   for(let i=0; i<6; i++)
   {
      finalColor+= color[Math.floor(Math.random()*16)];
   }
   colorBox.style.background = finalColor;
   colorValue.innerText = finalColor;


      }
  
// function randompickerbtn() {
  
// }

// function hexFindbtn() {
// }

// function RGBFindbtn() {
  
// }

// function RangeSelector() {
  
// }

// // hex to rgb converter

// String.prototype.convertToRGB = function () {
  
// };

// function hexConvbtn() {
  
// }

// function rgbConvbtn() {
  
// }
