const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar"); // Replace ".sidebar" with your actual sidebar selector
console.log(bars);
const closebutton = document.querySelector(".fa-circle-xmark")

bars.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});
closebutton.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar")
})
