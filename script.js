// document.addEventListener("DOMContentLoaded", (e) => {
//   let dropdown = document.querySelector(".dropdownContainer");
//   let dropdownButton = document.querySelector(".dropdown-button");
//   const dropdownItems = document.querySelector(".dropdown-item");

//   dropdownButton.addEventListener("click", (e) => {
//     dropdown.classList.toggle("open");
//   });

//   dropdownItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       dropdownItems.forEach(function (menu) {
//         menu.classList.remove("selected");
//       });
//       item.classList.add("selected");

//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".dropdown-button");
  const items = document.querySelectorAll(".dropdown-item");
  const list = document.querySelector(".dropdown-list");
  const label = document.querySelector(".selected-label")

  button.addEventListener("click", () => {
    list.classList.toggle("hidden");
  });
  items.forEach((item) => {
    item.addEventListener("click", () => {
      label.textContent = item.textContent;

      list.classList.add("hidden");
    });
  });
});
