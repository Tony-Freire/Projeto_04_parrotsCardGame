iniciarJogo();
const imagens=
[
    "images/bobrossparrot.gif",
]

function iniciarJogo() {
    let numeroCartas;
 
    while (!numeroCartas)
    {
        numeroCartas = Number(prompt("Com quantas cartas você deseja jogar? Escolha um número par entre 4 e 14"));
       
        if ((numeroCartas % 2) != 0 || numeroCartas<4||numeroCartas>14) 
        {
            numeroCartas = null;
        }     
    }
      alert("O jogo vai começar com " + numeroCartas + " cartas!");
      adicionaCartas(numeroCartas);
         
}
function virarCarta(obj)
{
   alert("aqui a carta vai virar")
   let carta =  obj.querySelector("li");
     obj.innerHTML= `<img src=${imagens[0]} alt="" srcset="">`
  
}
function adicionaCartas(numero) 
{
    const gameContent = document.querySelector(".capsula-game");
    for (let i = 0; i < numero; i++) 
    {
        gameContent.innerHTML = gameContent.innerHTML + 
        '<li class="card" onclick="virarCarta(this)">' +  
            '<img src="images/front.png" alt="" srcset="">' +
        '</li>'  
    }      
}