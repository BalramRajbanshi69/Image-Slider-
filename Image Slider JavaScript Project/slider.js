let scrollContainer = document.querySelector(".gallary");
let backbtn = document.getElementById("back-btn");
let nextbtn = document.getElementById("next-btn");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

});

nextbtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backbtn.addEventListener("click", ()=>{
     scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});