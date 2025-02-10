import { modale } from "./modele.js";

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  console.log(e.target);

  /* object js */

  modale.btn_open.addEventListener("click", (e) => {
    e.stopPropagation();
    modale.elementParent.classList.add("appear-modal");
  });

  modale.btn_closed.addEventListener("click", (e) => {
    e.stopPropagation();
    modale.elementParent.classList.remove("appear-modal");
  });

  modale.closed.addEventListener("click", (e) => {
    e.stopPropagation();
    modale.elementParent.classList.remove("appear-modal");
  });

  /* pas de fermeture sur figure */
  modale.elementFigure.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    modale.elementParent.classList.remove("appear-modal"); /* click exterieur */
  });
});
