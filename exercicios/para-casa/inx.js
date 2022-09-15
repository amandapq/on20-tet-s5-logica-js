
let email = prompt("Insira aqui seu e-mail");
console.log(email);

let senha = prompt("Digite aqui sua senha");
console.log(senha);

//caso uma das respostas não esteja correta, deverá ser mostrada mensagem de erro, e perguntar novamente as informações

if(email== "teste@reprograma.com" && senha == "teste123")
{
alert("Bem-Vinde!!");
}
else {
    alert("E-mail ou senha inválido(s)");
}

while (email != "teste@reprograma.com" || senha != "teste123")
{
alert("E-mail ou senha inválidos");
email = prompt("Digite novamente seu e-mail")
senha = prompt("Digite novamente sua senha")
}

