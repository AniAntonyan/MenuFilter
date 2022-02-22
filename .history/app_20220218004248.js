import { menu } from "./data.js";

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  //add display buttons here
 
  }
console.log(displayMenuButtons());

const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(filterBtn => {
  filterBtn.addEventListener("click", () =>{
    const value = filterBtn.getAttribute("data-id");
    if (value === "all"){
      return diplayMenuItems(menu);
    }
    const filterArr = menu.filter(item => item.category === value);
    
    let card = filterArr.map(function (item){
      return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
    }).join("");
    sectionCenter.innerHTML = card;
  })
});

let searchText = "";
let search = document.querySelector("input");
search.addEventListener("keyup", (e)=>{
  searchText=e.target.value;
  let searchArr = menu.filter(item =>{
    return item.desc.indexOf(searchText)!==-1;
  })
  diplayMenuItems(searchArr);
})

// let list = [];
// let searchText = "";

// const input = document.querySelector("input");
// input.addEventListener("keyup", (e) => {
//     searchText = e.target.value;
//     refresh();
// });
// let id;

function refresh() {
    if (id !== undefined) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        render();
    }, 1000);
}
const root = document.querySelector("#root");
// function render() {
//     root.innerHTML = "";
//     list.filter((name) => {
//             return name.indexOf(searchText) !== -1;
//         })
//         .map(name => {
//             const div = document.createElement("div");
//             div.innerHTML = name;
//             return div;
//         }).forEach(element => {
//             root.appendChild(element);
//         });
// }
// render();