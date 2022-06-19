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
    fn.createTitles(cnf.startWeek, cnf.language);
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

  // BUTTON MOVE NEXT WEEK
  let arrowLeft = document.querySelector(".arrow-left");
  let arrowRight = document.querySelector(".arrow-right");
  let index = 0;
  arrowLeft.addEventListener("click", () => {
    goPreviousWeek(cnf.runWeeks);
  });
  arrowRight.addEventListener("click", () => {
    goNextWeek(cnf.runWeeks);
  });

  //BUTTON HANDLER
  const goPreviousWeek = (weekNumber) => {
    index--;
    if (index === 0) {
      arrowLeft.setAttribute("disabled", "disabled");
    } else {
      if (index === weekNumber - 2) {
        arrowRight.removeAttribute("disabled");
      }
    }
    let table = document.querySelector(`.products-${index}`);
    let filterTable = document.querySelector(`.filtered-products-${index}`);
    let title = document.querySelector(`.title-products-${index}`);
    let filterTitle = document.querySelector(
      `.title-filtered-products-${index}`
    );

    let allTitles = document.querySelectorAll("h5");
    let allTables = document.querySelectorAll("table");

    allTables.forEach((element) => element.classList.remove("active"));
    allTitles.forEach((element) => element.classList.remove("active"));

    table.classList.add("active");
    title.classList.add("active");
    filterTable.classList.add("active");
    filterTitle.classList.add("active");

    return index;
  };

  const goNextWeek = (weekNumber) => {
    index++;
    if (index === weekNumber - 1) {
      arrowRight.setAttribute("disabled", "disabled");
    } else {
      if (index === 1) {
        arrowLeft.removeAttribute("disabled");
      }
    }
    let table = document.querySelector(`.products-${index}`);
    let filterTable = document.querySelector(`.filtered-products-${index}`);
    let title = document.querySelector(`.title-products-${index}`);
    let filterTitle = document.querySelector(
      `.title-filtered-products-${index}`
    );

    let allTitles = document.querySelectorAll("h5");
    let allTables = document.querySelectorAll("table");

    allTables.forEach((element) => element.classList.remove("active"));
    allTitles.forEach((element) => element.classList.remove("active"));

    table.classList.add("active");
    title.classList.add("active");
    filterTable.classList.add("active");
    filterTitle.classList.add("active");

    return index;
  };
})();

let table = document.querySelector(`.products-0`);

table.onclick = () => {
  const sortByStatus = () => {
    fn.globalArrayItemsCopy[0].sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log(fn.globalArrayItemsCopy[0]);
    fn.changePrint(`.products-0`, fn.globalArrayItemsCopy[0]);
  };
  let idProduct = document.querySelector(".ID");
  let nameProduct = document.querySelector(".Name");
  let statusProduct = document.querySelector(".Status");
  let expDateProduct = document.querySelector(".Expiration-date");
  let checkProduct = document.querySelector(".Check");

  nameProduct.addEventListener("click", sortByStatus);
};
