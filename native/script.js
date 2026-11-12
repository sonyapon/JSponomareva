const formCard = document.querySelector("#form-card");
const btnMax = document.querySelector("#btn-max");
const btnHse = document.querySelector("#btn-hse");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const showPassword = document.querySelector("#show-password");
const remember = document.querySelector("#remember");
const message = document.querySelector("#message");
const  CORRECTeMAIL = "sonya@y.ru"
const CORRECTpESSWORD = "12345678"
const savedName = localStorage.getItem("savedEmail");
if (savedName) {
    email.value = savedName
    remember.checked = true
    // greeting.textContent = "С возвращением, " + savedName;
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


const changeColor = (text, type) => {
    message.textContent = text;
    message.className = type;
};

formCard.addEventListener("submit", function (event) {

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
 if (email.value.trim() === CORRECTeMAIL && password.value===CORRECTpESSWORD){
    changeColor("все вейп", "success")
    if (remember.checked ===true){
        localStorage.setItem("savedEmail", email.value);
    }else{
        localStorage.removeItem("savedEmail")
    }
 }else{
    changeColor("Неверная почта или пароль","error")
 }
});
