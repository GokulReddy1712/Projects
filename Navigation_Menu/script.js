const bar = document.querySelector(".fa-solid fa-bars")
const menu = document.querySelector(".menu")

bar.addEventListener("click",()=>{
    menu.classList.toggle("show-menu")
})
