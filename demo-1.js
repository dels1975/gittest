/*
 Bubbling di un evento

cliccando sullo span, si sta cliccando anche su p e su div
gli event handler, se definiti, sono eseguiti a partire dallo span (elemento più in basso nella gerarchia) e risalendo nella gerarchia: bubbling

Propagazione di un evento:
    - Capturing: l'evento viene intercettato e propagato fino all'elemento target
    - Target: l'evento raggiunge l'elemento target
    - Bubbling: l'evento risale lungo la gerarchia; in questa fase, di default, sono eseguiti gli handler
*/
document.getElementById("word").addEventListener("click", function (e) {
  alert("CLICK SU SPAN");
});

document.getElementById("parag").addEventListener(
  "click",
  function (e) {
    alert("CLICK SU PARAGRAFO");
  }
  //true // di default false; con true, l'evento viene intercettato nella fase di Capturing e non di Bubbling
);

document.getElementById("container").addEventListener("click", function (e) {
  alert("CLICK SU CONTAINER");
});

/* 
per bloccare la propagazione degli eventi (sia in fase di Capturing che in fase di Bubbling) c'è un metodo:
e.stopPropagation();

Non è comunque una Best Pratics in quanto certe volte può essere utile il Bubbling degli eventi
(può interferire, per esempio, con librerie esterne che permettono di monitorare per ragioni di miglioramento
della UX tutto ciò che fa l'utente, dove clicca, dove si trova il puntatore etc.)

L'alternativa è quella di utilizzare due proprietà dell'evento: target (l'elemento target del DOM iniziale dell'evento) e currentTarget (il target corrente)
esempio:
if (e.target == e.currentTarget)
alert("Click SU ...")
*/

document.getElementById("word2").addEventListener("click", function (e) {
  if (e.target == e.currentTarget) alert("CLICK SU SPAN");
});

document.getElementById("parag2").addEventListener("click", function (e) {
  if (e.target == e.currentTarget) alert("CLICK SU PARAGRAFO");
});

document.getElementById("container2").addEventListener("click", function (e) {
  if (e.target == e.currentTarget) alert("CLICK SU CONTAINER");
});

// inibire le azioni di default del Browser
// esempio disabilitare il menù contestuale al click del tasto destro:

document.body.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // disabilita il comportamento di default del browser
  alert("Menù contestuale disabilitato"); // esegue il comportamento custom impostato
});
