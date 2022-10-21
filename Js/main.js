let contactForm = document.getElementById("contact-form");
let backdrop =  document.getElementById('contactUs');
let closeBtn = document.querySelector(".form-container .closebtn");


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function openNav() {
    contactForm.style.width = "50%";
   backdrop.style.display = "block";
   closeBtn.style.display = "block";
}

function closeNav() {
    contactForm.style.width = "0"
    backdrop.style.display = "none"
    closeBtn.style.display = "none";
}

