import { configurationObject as cnf } from "./config.mjs"; // configuration object
import * as fn from "./library.mjs"; // functions used in the program

/**
 * Function that delays the output of the program
 * It uses the functions setTimeout(), createNewItem(), changeStatus(),
 * print(), removeItem(), randomDate()
 */
(() => {
  //it sets the starting week of the program as a new date to which are summed a configurated number of days
  cnf.startWeek.setDate(cnf.startWeek.getDate() + cnf.startingDate);
  //it sets a maximum expiration date for the items as a new date to which are summed the amount of weeks during which the program runs plus an extra week
  cnf.maxExpDate.setDate(
    cnf.maxExpDate.getDate() + (cnf.dayWeek * cnf.runWeeks + cnf.dayWeek)
  );
  // CREATE TABLES BASED ON HOW MANY WEEKS THERE ARE
  for (let i = 0; i < cnf.runWeeks; i++) {
    fn.createTable(`products`, i);
    fn.createTable(`filtered-products`, i);
  }
  // CREATES TITLES, PRINTS TABLES, CREATES ITEMS; CHANGES STATUS; REMOVES ITEMS, CREATES TWO ARRAY (FILTERED + NOT FILTERED) AND CHANGES WEEK DATE
  for (let i = 0; i < cnf.runWeeks; i++) {
    fn.createTitles(cnf.startWeek, cnf.language, i);
    fn.createNewWeek(
      cnf.startWeek,
      cnf.maxExpDate,
      cnf.newItems,
      i,
      cnf.runWeeks
    );
    fn.changeStatus(cnf.startWeek, cnf.itemLifeSpan, fn.globalArrayItems[i]);
    fn.print(`.products`, cnf.language, fn.globalArrayItems[i], i);
    fn.createCopyGlobalArray(i);
    fn.removeItem(fn.globalArrayItems[i]);
    fn.createCopyGlobalArrayFiltered(i);
    fn.print(`.filtered-products`, cnf.language, fn.globalArrayItems[i], i);
    cnf.startWeek.setDate(cnf.startWeek.getDate() + cnf.dayWeek);
  }

  // BUTTON MOVE PREVIOUS WEEK
  let arrowLeft = document.querySelector(".arrow-left");
  let arrowRight = document.querySelector(".arrow-right");
  let index = 0;
  arrowLeft.addEventListener("click", () => {
    index--;
    if (index === 0) {
      arrowLeft.setAttribute("disabled", "disabled");
    } else {
      if (index === cnf.weekNumber - 2) {
        arrowRight.removeAttribute("disabled");
      }
    }
    goPreviousWeek(index);
  });
  // BUTTON MOVE NEXT WEEK
  arrowRight.addEventListener("click", () => {
    index++;
    if (index === cnf.runWeeks - 1) {
      arrowRight.setAttribute("disabled", "disabled");
    } else {
      if (index === 1) {
        arrowLeft.removeAttribute("disabled");
      }
    }
    goNextWeek(index);
  });

  //BUTTON HANDLER
  const goPreviousWeek = (index) => {
    let allTitles = document.querySelectorAll(".title-products");
    let allTables = document.querySelectorAll(".products");
    let allTablesFiltered = document.querySelectorAll(".filtered-products");
    let allTitlesFiltered = document.querySelectorAll(
      ".title-filtered-products"
    );

    allTables.forEach((element) => element.classList.remove("active"));
    allTitles.forEach((element) => element.classList.remove("active"));
    allTablesFiltered.forEach((element) => element.classList.remove("active"));
    allTitlesFiltered.forEach((element) => element.classList.remove("active"));

    allTables[index].classList.add("active");
    allTitles[index].classList.add("active");
    allTablesFiltered[index].classList.add("active");
    allTitlesFiltered[index].classList.add("active");
  };

  const goNextWeek = (index) => {
    let allTitles = document.querySelectorAll(".title-products");
    let allTables = document.querySelectorAll(".products");
    let allTablesFiltered = document.querySelectorAll(".filtered-products");
    let allTitlesFiltered = document.querySelectorAll(
      ".title-filtered-products"
    );

    allTables.forEach((element) => element.classList.remove("active"));
    allTitles.forEach((element) => element.classList.remove("active"));
    allTablesFiltered.forEach((element) => element.classList.remove("active"));
    allTitlesFiltered.forEach((element) => element.classList.remove("active"));

    allTables[index].classList.add("active");
    allTitles[index].classList.add("active");
    allTablesFiltered[index].classList.add("active");
    allTitlesFiltered[index].classList.add("active");
  };
})();

const sortByProduct = (index) => {
  fn.globalArrayItemsCopy[index].sort((a, b) => (a.name > b.name ? 1 : -1));
  changePrint(index);
}
const sortByStatus = (index) => {
  fn.globalArrayItemsCopy[index].sort((a, b) => (a.status > b.status ? 1 : -1));
}
const sortByExpDate = (index) => {
  fn.globalArrayItemsCopy[index].sort((a, b) => (getTime(a.expirationDate) > getTime(b.expirationDate) ? 1 : -1));
}
const sortByCheck = (index) => { 
  fn.globalArrayItemsCopy[index].sort((a, b) => (a.check > b.check ? 1 : -1));
}
let table = document.querySelectorAll(`.products`);


table[0].onclick = () => {
    let idProduct = document.querySelector(".ID");
    let nameProduct = document.querySelector(".Name");
    let statusProduct = document.querySelector(".Status");
    let expDateProduct = document.querySelector(".Expiration-date");
    let checkProduct = document.querySelector(".Check");

    nameProduct.addEventListener("click", () => {sortByProduct(0)});
    statusProduct.addEventListener("click", () => {sortByStatus(0)});
    expDateProduct.addEventListener("click", () => {sortByExpDate(0)});
    checkProduct.addEventListener("click", () => {sortByCheck(0)});
};
