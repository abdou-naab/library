/**
 * the popup and the blur thing
 */
const addBtn = document.querySelector(".btn-add");
const modal = document.querySelector("form");
const firstField = document.querySelector("#title");
const container = document.querySelector(".container");

addBtn.addEventListener("click", (e) => {
  modal.style.display = "grid";
  container.classList.toggle("modal-open");
  firstField.focus();
  addBtn.disabled = true;
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (
    container.classList.contains("modal-open") &&
    !modal.contains(e.target) &&
    !addBtn.contains(e.target)
  ) {
    modal.style.display = "none";
    container.classList.toggle("modal-open");
    addBtn.disabled = false;
  }
});

/**
 * adding books
 */
