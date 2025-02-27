const mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click",()=>{
    const destopMenu = document.getElementById("desktop_menu");
    destopMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})