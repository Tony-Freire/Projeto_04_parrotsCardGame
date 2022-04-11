
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
let jogadas =0;

function iniciarJogo() 
{
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
      console.log("foi");
      setInterval(venceu,1000,numeroCartas);
      
      
         
}
function virarCarta(obj)
{
   
    if(!obj.classList.contains("selecionado"))
    {
      const cardSelecionados = document.querySelectorAll(".selecionado");
       if(cardSelecionados.length!==2)
          {
          obj.classList.add("selecionado") 
          } 
    }        
         setInterval(verificaMatch,1000);
         
             
         
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
           <div class= "front-img face">
           <img src="images/front.png"  alt="" srcset="">
              </div>
           <div class="back-img face">
           <img src=${carta[i]} alt="" srcset=""> 
            </div>           
          `
            +   
        '</li>'  
    } 
    
}
function verificaMatch()
{
    let cardSelecionado = document.querySelectorAll(".selecionado"); 
    
    if (cardSelecionado[0] && cardSelecionado[1]) 
    {
       if (cardSelecionado[0].innerHTML===cardSelecionado[1].innerHTML) 
         {
            for (let i = 0; i < cardSelecionado.length; i++) 
            {
                cardSelecionado[i].classList.add("match");   
                cardSelecionado[i].classList.remove("selecionado");
                           
            }
        }
         else
        {
            setTimeout(abaixarCarta,1000,cardSelecionado);
                                           
        }
        cardSelecionado=[];
    }
    jogadas++
    
       
}
function venceu(num) {
	let match = document.querySelectorAll(".match");
     console.log("teste");
	if (match.length === num) 
    {
		alert("Parabéns! Você ganhou em " + jogadas + " jogadas.");
		location.reload();
	}
}

function abaixarCarta(card)
{
    for(let i=0; i<card.length;i++)
    {
        card[i].classList.remove("selecionado");
    }
}


function random() {
    return Math.random() - 0.5;
}
