let openbtn = document.querySelector('.bi-list');
let closebtn = document.querySelector('.bi-x-lg');
let menu = document.querySelector('.navbar_menu'); 


openbtn.addEventListener("click", () => {
    openbtn.classList.toggle("hide");
    closebtn.classList.toggle("hide");
    menu.classList.toggle("hidden"); 
});


closebtn.addEventListener("click", () => {
    openbtn.classList.toggle("hide");
    closebtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});
