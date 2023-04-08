const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// const accordianBody;
const mainDiv= document.querySelector(".accordian_body");


faqData.forEach((item)=>{
  //creating all the elements
  let faq = document.createElement("section");
  let faq_header = document.createElement("div");
  let show_btn = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  h3.textContent = item.question;
  p.textContent = item.answer;

  // adding classes
  faq.classList.add("faq");
  faq_header.classList.add("faq_header");
  show_btn.classList.add("show_btn");
  p.classList.add("hidden");

  // appending it
  faq_header.appendChild(h3);
  faq_header.appendChild(show_btn);
  faq.appendChild(faq_header);
  faq.appendChild(p);
  mainDiv.appendChild(faq);


  let open=true;
  show_btn.addEventListener("click", ()=>{
    if(open==true)
    {
      p.style.display="block";
      open=false;
    }
    else{
      p.style.display="none";
      open = true;
    }
  });



});











// const faqs = [];

// function showFaq() {
  
// }

// function createFaq() {
  
// }

// function btnStatusUpdate() {
  
// }


