const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const countainer = document.querySelector(".countainer");

sign_up_btn.addEventListener('click', ()=>{ 
    countainer.classList.add("sign-up-mode")
});

sign_in_btn.addEventListener('click', ()=>{ 
    countainer.classList.remove("sign-up-mode")
});