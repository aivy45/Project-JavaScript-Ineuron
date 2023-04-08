const courses=[
    {
        name: 'Complete JS course',
        price: '2.3',
    },
    {
        name: 'Complete React course',
        price: '3.1',
    },
    {
        name: 'Complete MERN course',
        price: '2.5',
    },
    {
        name: 'Complete Angular course',
        price: '2.2',
    },
    {
         name: 'Complete Django course',
         price: '5.1',
    },
];

// In this project we have to generate li and their text with the help of js and 
// even merge all those li into ul in html section
// example we have to generate:  <li class="course">React Course <span class="float-right">$ 2.1</span></li>
// so here we are going to make li then span then their
// li h1 span div span  - they all are element
// anything written inside the element known as textNode
// to add class use li.classList.add("name_of_class");
// to add textNode on element(to add anything on element// <> (<></> this thing is added) </> (li.appendChild(ul) )   ) we have to append it by li.appendChile(name);
function generateList(){
    const ul= document.querySelector(".list-group");
    ul.innerHTML="";
   courses.forEach((course)=>{
       const li = document.createElement("li");           // <li></li>
       li.classList.add("list-group-item");               // <li class="list-group-item"></li>
       const name = document.createTextNode(course.name); //complete js course
       li.appendChild(name);                              // <>complete js course</>
       
       const span  =document.createElement("span");
       span.classList.add("float-right");
       const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);   
        ul.appendChild(li);
   } )
};

// generateList();  // means load every time
window.addEventListener("load" , generateList); // means only load once

// sorting the price when click on button

const button = document.querySelector(".btn-sort");
button.addEventListener("click" , ()=>{
    courses.sort((a,b)=> (a.price-b.price)); 
generateList();
});
//even now courses are sorted but it won't show any changes because 
// we have to call again courses-item
const button1 = document.querySelector(".btn-sort1");
button1.addEventListener("click" , ()=>{
    courses.sort((a,b)=> (b.price-a.price)); 
generateList();
});
