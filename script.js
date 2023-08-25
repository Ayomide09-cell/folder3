const wrapper = document.querySelector(".section-part");
const sections = document.querySelectorAll(".model");
const forwardArrow = document.getElementById("forward-arrow");
const backwardArrow = document.getElementById("backward-arrow");
// let screenWidth = window.innerWidth;
// let screenWidth = 100%

// forwardArrow.addEventListener("click", () => {
//     const sectionsArray =Array.from(sections);
//     sectionsArray.forEach((item) =>{
//         // item.style.transform ="translateX(0)"; 
//         // item.style.transform = `translateX(-${screenWidth}px)`;
//         wrapper.style.transform = `translateX(${-100 * index})`
//         console.log("you clicked forward arrow")
//     });
// });


forwardArrow.addEventListener("click", () => {
    const sectionsArray =Array.from(sections);
    sectionsArray.forEach((item, index) =>{
        // item.style.transform ="translateX(0)"; 
        // item.style.transform = `translateX(-${screenWidth}px)`;
        item.style.transform = `translateX(${-100 * index})`
        console.log("you clicked forward arrow")
    });
});

backwardArrow.addEventListener("click", () => {
    const sectionsArray =Array.from(sections);
    sectionsArray.forEach((item, index) =>{
        // item.style.transform ="translateX(0)"; 
        // item.style.transform = `translateX(-${screenWidth}px)`;
        item.style.transform = `translateX(${100 * index})`
        console.log("you clicked backward arrow")
    });
});




// backwardArrow.addEventListener("click", () => {
//     const sectionsArray = Array.from(sections);
//     sectionsArray.forEach((item) =>{
//         // item.style.transform = `translateX(-${screenWidth}px)`;
//         item.style.transform ="translateX(0)"; 
        
//         console.log("you clicked backward arrow")
//     });
// });

