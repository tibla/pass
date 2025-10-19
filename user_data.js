let password_use = "123"
let email_user = "123"
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