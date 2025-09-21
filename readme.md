# Custom Dropdown Menu

This project implements a **custom dropdown menu** using HTML, TailwindCSS, and vanilla JavaScript.  
It was created as a practice exercise (based on a [roadmap.sh](https://roadmap.sh) frontend challenge).

---

## Live site:
https://erenshoyo.github.io/RoadmapSH-Project-Custom-DropDown-/ 


## Features

- Default state with placeholder text (`Select an item`).
- Dropdown opens/closes when the button is clicked.
- Items are displayed in a list with hover effects.
- When an item is clicked:
  - The selected item’s text is shown in the label area.
  - The dropdown closes automatically.
- Built with **TailwindCSS** for styling.

---

## Project Structure


---

## How It Works

### HTML
- The dropdown consists of a **button** (`.dropdown-button`) and a **list of items** (`.dropdown-list`).
- A **label area** (`.selected-label`) displays the currently chosen item.

### CSS (via Tailwind)
- Utility classes handle spacing, borders, alignment, and visibility.
- The `hidden` class is toggled to show/hide the dropdown list.

### JavaScript
- Event listeners are added after the DOM is loaded.
- Clicking the button toggles the dropdown visibility:
  ```js
  button.addEventListener("click", () => {
    list.classList.toggle("hidden");
  });

## Project URL:
https://roadmap.sh/projects/custom-dropdown
