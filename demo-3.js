let page = {
  init: function () {
    let inputs = document.querySelectorAll("input, select");
    for (let i of inputs) {
      i.addEventListener("focus", function (e) {
        e.target.classList.add("focus");
      });

      i.addEventListener("blur", function (e) {
        e.target.classList.remove("focus");
      });
    }

    document.getElementById("name").addEventListener("input", (e) => {
      // l'evento da intercettare è input che intercetta anche il "copia e incolla"
      // mentre l'evento change si scatena quando il fuoco esce dal campo e quindi non è molto appropriato
      // mentre l'evento input non supporta il "copia e incolla" e quindi non è molto appropriato
      if (e.target.value == "") {
        e.target.classList.remove("ok");
        e.target.classList.add("error");
      } else {
        e.target.classList.add("ok");
        e.target.classList.remove("error");
      }
    });

    document.getElementById("surname").addEventListener("input", function (e) {
      // l'evento da intercettare è input che intercetta anche il "copia e incolla"
      // mentre l'evento change si scatena quando il fuoco esce dal campo e quindi non è molto appropriato
      // mentre l'evento input non supporta il "copia e incolla" e quindi non è molto appropriato
      if (e.target.value == "") {
        e.target.classList.remove("ok");
        e.target.classList.add("error");
      } else {
        e.target.classList.add("ok");
        e.target.classList.remove("error");
      }
    });

    document.getElementById("email").addEventListener("input", function (e) {
      if (!page.validateEmail(e.target.value)) {
        e.target.classList.remove("ok");
        e.target.classList.add("error");
      } else {
        e.target.classList.add("ok");
        e.target.classList.remove("error");
      }
    });

    document.getElementById("cf").addEventListener("input", function (e) {
      let type = document.getElementById("type").value;
      if (
        (type == "pf" && page.validateCF(e.target.value)) ||
        (type == "pg" && page.validateCFNum(e.target.value))
      ) {
        e.target.classList.remove("error");
        e.target.classList.add("ok");
      } else {
        e.target.classList.remove("ok");
        e.target.classList.add("error");
      }
    });

    document.querySelector("form").addEventListener("submit", function (e) {
      alert("submit");
      return false; // evita di sottomettere il form - MA NON FUNZIONA...!!!!!!
    });
  },

  validateEmail: function (email) {
    return String(email)
      .toLocaleLowerCase()
      .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    /*
      ^: Inizia la stringa.
      [a-zA-Z0-9._%+-]+: Accetta caratteri alfanumerici, punti, trattini bassi, percentuali, più e trattini, uno o più volte.
      @: Deve esserci una chiocciola.
      [a-zA-Z0-9.-]+: Accetta caratteri alfanumerici, punti e trattini, uno o più volte.
      \.: Punto.
      [a-zA-Z]{2,}: Accetta caratteri alfabetici per il dominio (almeno due caratteri).
      $: Termina la stringa.
    */
  },

  validateCF: function (cf) {
    return cf.toString().length == 16;
  },

  validateCFNum: function (cfnum) {
    return cfnum.toString().match(/^[0-9]{11}$/);
  },
};

document.addEventListener("DOMContentLoaded", page.init);
