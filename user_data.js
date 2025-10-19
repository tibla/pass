let password_use = "1"
let email_user = "1"
switch(password_nickname , email_user){
  case password:
    alert("Добро пожаловать\n Ваш пароль " + password_use)
    break
  case email_user:
    alert("Ваша почта " + email_user)
    break
  default:
    alert("у вас что-то не так")
}