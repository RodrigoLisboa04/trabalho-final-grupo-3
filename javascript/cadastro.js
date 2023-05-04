const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  console.log("acionando botao")
  event.preventDefault()

  checkInputUsername();
  checkInputEmail();
 // checkInputPassword();
})

function checkInputUsername() {
  const usernameValue = username.Value;

  //caso o usuário não digite nada, aparecer mensagem de erro
  if(username.Value === ""){
    errorinput(username, "Preencha um username!")
  }else{
    const formItem = username.parentElement;
    formItem.classList = "form-cont"
  }
}

function checkInputEmail() {
  const emailValue = email.Value;

  if(emailValue ==="") {
    errorinput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form=cont"
  }
}
.form-cont.error input {
    border-color: #9e6bb6;
}
.form-cont.error a {
    color:#ca5daf;
    visibility: visible;
}