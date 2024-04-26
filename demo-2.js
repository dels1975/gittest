let libri = document.querySelectorAll("div > ul > li");
for (let l of libri) {
  l.addEventListener("click", function (e) {
    // bloccare il Bubbling, evitando di usare e.stopPropagation()
    // non funziona con e.target == e.currentTarget perchè all'interno dell'li c'è un h2
    // quindi quando clicco l'evento si riferisce all'h2
    if (e.target.matches("ul > li > ul > li")) return;
    // Se il controllo condizionale if (e.target.matches("ul > li > ul > li")) restituisce true,
    // significa che l'evento di click è stato scatenato da un elemento li di secondo livello,
    // all'interno della struttura gerarchica del DOM. In altre parole, l'evento è stato
    // scatenato da un elemento <li> che è figlio diretto di un altro elemento <li>.
    // In questo caso, la condizione return; interrompe immediatamente l'esecuzione della
    // funzione associata all'evento, senza eseguire il codice successivo.
    l.querySelector("ul").classList.toggle("hidden");
  });
}

let capitoli = document.querySelectorAll("div > ul > li > ul >li");
for (let c of capitoli) {
  c.addEventListener("click", function (e) {
    // e.stopPropagation();
    let sommario = c.dataset.summary;
    alert("Sommario: " + sommario);
  });
}
