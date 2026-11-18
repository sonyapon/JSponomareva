const formCard = document.querySelector("#form-card");
const btnMax = document.querySelector("#btn-max");
const btnHse = document.querySelector("#btn-hse");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const showPassword = document.querySelector("#show-password");
const remember = document.querySelector("#remember");
const message = document.querySelector("#message");
const  CORRECTeMAIL = "s@y.ru";
const CORRECTpASSWORD = "12345678";
const savedEmail = localStorage.getItem("savedEmail");
const submitButton = document.querySelector(".submit-button");

if (savedEmail) {
    email.value = savedEmail
    remember.checked = true
}

showPassword.addEventListener('click', function() {
    
    if (password.type === 'password') {
        password.type = 'text';
        showPassword.textContent = "Скрыть";
        showPassword.setAttribute('aria-pressed','true')
    } else {
        password.type = 'password';
        showPassword.textContent = "Показать";
        showPassword.setAttribute('aria-pressed','false')
    }
    
});

function handleSubmit(event) {
event.preventDefault();
    if (email.value.trim() ===""){
        changeColor("пустая почта", "error");
      return;
    }

if  (password.value.trim() ===""){
     changeColor("пустой пароль", "error");
    return;
}

if (!email.value.includes("@") && !email.value.includes("+")){
    
     changeColor("неправильный логин", "error");
  return;
}

if (password.value.length>40){
    changeColor("слишком длинный пароль", "error");
  return;
}

if (password.value.length<8){    
     changeColor("лишком короткий пароль", "error");
  return;
}
 if (email.value.trim() === CORRECTeMAIL && password.value===CORRECTpASSWORD){
    changeColor("все верно!", "success")
    createFire()
    if (remember.checked ===true){
        localStorage.setItem("savedEmail", email.value.trim());
    }else{
        localStorage.removeItem("savedEmail")
    }
 }else{
    changeColor("Неверная почта или пароль","error")
 }
}

const changeColor = (text, type) => {
    message.textContent = text;
    message.className = type;
};

formCard.addEventListener("submit", handleSubmit) ;

function runAway(event) {
    btnMax.style.width = btnMax.offsetWidth + "px";
    btnMax.style.height = btnMax.offsetHeight + "px";
    btnMax.style.position = "fixed";
    
    const maxX = window.innerWidth - btnMax.offsetWidth;
    const maxY = window.innerHeight - btnMax.offsetHeight;
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
    
    btnMax.style.left = x + "px";
    btnMax.style.top = y + "px";
}
btnMax.addEventListener("mouseenter", runAway);
btnHse.addEventListener("click", () => changeColor("Вход через ВШЭ пока недоступен", "error"));

function createFire() {
  const rect = submitButton.getBoundingClientRect();

    for (let i = 0; i < 25; i++) {
        const fire = document.createElement("div");
        fire.className = "fire";
        fire.textContent = "💥";
        fire.setAttribute("aria-hidden", "true");

        fire.style.left = rect.left + Math.random() * rect.width + "px";
        fire.style.top = rect.top + "px";
        fire.style.setProperty("--dx", (Math.random() * 120 - 60) + "px");
        fire.style.animationDuration = 1 + Math.random() * 1.2 + "s";
        fire.addEventListener("animationend", () => fire.remove());

        document.body.append(fire);
    }
}