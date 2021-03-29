//Functions
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

//Selecting elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//Open modal buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

//Close modal on X button
btnCloseModal.addEventListener("click", closeModal);

//Close modal on overlay click
overlay.addEventListener("click", closeModal);

//Close modal on esc key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
