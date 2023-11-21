// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata 
// si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// generare funzione che crea un quadrato
// creare una tabella 10x10
// al click del bottone inserire in ogni cella un numero progressivo da 1 a 100

let buttonElement = document.querySelector ('button');
let mainContainerElement = document.querySelector('div.main-container')

for (let i = 1; i <= 100; i++) {
  mainContainerElement.appendChild(creazioneQuadrato(i));

  const quadrato = creazioneQuadrato();
  const contenutoQuadrato = i;
  quadrato.innerHTML += `<span> ${contenutoQuadrato} </span`;

  mainContainerElement.appendChild(quadrato)

}

buttonElement.addEventListener('click', function(){



})







// FUNZIONI

/**funzione che vuole andare a creare un quadrato
 * elemento div a cui è stato assegnato una classe quadrato
 * @returns elemento singolo quadrato
 */
function creazioneQuadrato() {
  let elementoArticle = document.createElement('article');
  elementoArticle.classList.add('quadrato');
  
  return elementoArticle;
}
