
const imagens=
 [
  "images/bobrossparrot.gif",
  "images/explodyparrot.gif",   
  "images/fiestaparrot.gif" ,   
  "images/metalparrot.gif",
  "images/revertitparrot.gif",
  "images/tripletsparrot.gif",
  "images/unicornparrot.gif"   
 ]
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
function virarCarta(obj)
{
   alert("aqui a carta vai virar")
   
   
}
function adicionaCartas(numero) 
{
    const gameContent = document.querySelector(".capsula-game");
    
    const carta = imagens.slice(0, (numero/2));
    for (let i = 0; i < numero/2; i++) 
    {
        carta.push(carta[i]);
    }
    for (let i = 0; i < carta.length; i++) {
        carta.sort(random);        
    }
    for (let i = 0; i < numero; i++) 
    {
        gameContent.innerHTML +=  
        `<li class="card" onclick="virarCarta(this)">   
            <img src="images/front.png" class = "front-img" alt="" srcset="">
            <img src=${carta[i]} alt="" srcset=""> 
          `
            +   
        '</li>'  
    } 


}
function random() {
    return Math.random() - 0.5;
}