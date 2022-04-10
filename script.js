iniciarJogo();

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
function adicionaCartas(numero) 
{
    const gameContent = document.querySelector(".capsula-game");
    for (let i = 0; i < numero; i++) 
    {
        gameContent.innerHTML = gameContent. innerHTML + 
        '<div class="card">' +  
            '<img src="images/front.png" alt="" srcset="">' +
        '</div>'  
    }      
}