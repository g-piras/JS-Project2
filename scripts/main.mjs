import { configurationObject as cnf } from "./config.mjs"; // configuration object
import { globalValues as glb } from "./global.mjs"; // global object that will be used to store the global values
import * as fn from "./library.mjs"; // functions used in the program
import * as vld from "./form-validator.mjs"; // functions used in the program

/**
 * Function that delays the output of the program
 * It uses the functions setTimeout(), createNewItem(), changeStatus(),
 * print(), removeItem(), randomDate()
 */
const startProgram = () => {
  //RESETS TO RESTART THE TABLE ON CLICK
  let container = document.querySelector(".container-products");
  container.textContent = "";
  glb.globalArrayItems = [];
  glb.globalArrayItemsCopy = [];
  glb.globalArrayItemsCopyFiltered = [];
  glb.index = 0;
  glb.sumID = 1;
  glb.arrowLeft = document.querySelector(".previous-week");
  glb.arrowLeft.disabled = true;
  glb.arrowRight = document.querySelector(".next-week");
  glb.arrowRight.disabled = false;
  glb.maxExpDate = new Date(JSON.parse(JSON.stringify(cnf.startWeek)));
  //it sets the starting week of the program as a new date to which are summed a configurated number of days
  cnf.startWeek.setDate(cnf.startWeek.getDate() + cnf.startingDate);
  //it sets a maximum expiration date for the items as a new date to which are summed the amount of weeks during which the program runs plus an extra week
  glb.maxExpDate.setDate(
    glb.maxExpDate.getDate() + (cnf.dayWeek * cnf.runWeeks + cnf.dayWeek)
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
      glb.maxExpDate,
      cnf.newItems,
      i,
      cnf.runWeeks
    );
    fn.changeStatus(cnf.startWeek, cnf.itemLifeSpan, glb.globalArrayItems[i]);
    fn.print(`.products`, cnf.language, glb.globalArrayItems[i], i);
    fn.createCopyGlobalArray(i);
    fn.removeItem(glb.globalArrayItems[i]);
    fn.createCopyGlobalArrayFiltered(i);
    fn.print(`.filtered-products`, cnf.language, glb.globalArrayItems[i], i);
    cnf.startWeek.setDate(cnf.startWeek.getDate() + cnf.dayWeek);
  }


  //BONUS 1
  // OBJECT FOR ASCENDING DESCENDING ITEMS ORDER TABLE
  const flagObj = {
    id: false,
    name: true,
    status: true,
    expirationDate: true,
    check: true,
  };
  // OBJECT FOR ASCENDING DESCENDING ITEMS ORDER FILTERED TABLE
  const flagFilterdObj = {
    id: false,
    name: true,
    status: true,
    expirationDate: true,
    check: true,
  };
  // SORTING FUNCTION
  const sortByElement = (
    arrayCopy,
    index,
    idName,
    lang,
    targetColumn,
    referenceObj
  ) => {
    if (referenceObj[targetColumn] === true) {
      arrayCopy[index].sort((a, b) =>
        a[targetColumn] > b[targetColumn] ? 1 : -1
      );
      referenceObj[targetColumn] = false;
    } else {
      arrayCopy[index].sort((a, b) =>
        a[targetColumn] < b[targetColumn] ? 1 : -1
      );
      referenceObj[targetColumn] = true;
    }
    fn.changePrint(idName, arrayCopy[index], lang);
  };
  // PARAMETERS FOR THE SORTING FUNCTION PRODUCTS TABLE
  let tablesId = document.querySelectorAll(".products tr th");
  tablesId.forEach((element) => {
    element.addEventListener("click", () => {
      let targetColumn = element.classList[0];
      let idTable = element.parentElement.parentElement.parentElement.id;
      let index = parseInt(idTable.match(/\d/g).join(""));
      sortByElement(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        targetColumn,
        flagObj
      );
    });
  });
  // PARAMETERS FOR THE SORTING FUNCTION FILTERED PRODUCTS TABLE
  let tablesFilterId = document.querySelectorAll(".filtered-products tr th");
  tablesFilterId.forEach((element) => {
    element.addEventListener("click", () => {
      let targetColumn = element.classList[0];
      let idTable = element.parentElement.parentElement.parentElement.id;
      let index = parseInt(idTable.match(/\d/g).join(""));
      sortByElement(
        glb.globalArrayItemsCopyFiltered,
        index,
        idTable,
        cnf.language,
        targetColumn,
        flagFilterdObj
      );
    });
  });

  // BONUS 2
  let trTable = document.querySelectorAll(".products tbody tr");
  let trFilteredTable = document.querySelectorAll(
    ".filtered-products tbody tr"
  );
  trTable.forEach((element) => {
    let placeholder;
    element.addEventListener("click", () => {
      let idTable = element.parentElement.parentElement.id;
      let index = parseInt(idTable.match(/\d/g).join(""));
      placeholder = fn.printRemove("products", element, placeholder);
      let idItem = element.querySelector(
        ".products tbody tr td:nth-child(1)"
      ).textContent;
      fn.hideItem("products", idItem, index, cnf.runWeeks);
      fn.hideItem("filtered-products", idItem, index, cnf.runWeeks);
    });
  });

  trFilteredTable.forEach((element) => {
    let placeholder;
    element.addEventListener("click", () => {
      console.log(element);
      let idTable = element.parentElement.parentElement.id;
      let index = parseInt(idTable.match(/\d/g).join(""));
      placeholder = fn.printRemove("filtered-products", element, placeholder);
      let idItem = element.querySelector(
        ".filtered-products tbody tr td:nth-child(1)"
      ).textContent;
      fn.hideItem("products", idItem, index, cnf.runWeeks);
      fn.hideItem("filtered-products", idItem, index, cnf.runWeeks);
    });
  });
};

//IIFE
(() => {

  //START PROGRAM AUTOMATICALLY AT LOADING OF THE PAGE
  window.addEventListener("load", startProgram);
  //when the submit button is clicked
  vld.submitButton.addEventListener("click", vld.validateForm);
  vld.submitButton.addEventListener("click", startProgram);

  //when the reset button is clicked
  vld.resetButton.addEventListener("click", vld.resetForm);

  //when the settings button is clicked
  vld.settingsButton.addEventListener("click", vld.togglePanel);

  // BUTTONS 
  // BUTTON MOVE PREVIOUS WEEK
  glb.arrowLeft.addEventListener("click", () => {
    console.log(glb.index)
    glb.index--;
    if (glb.index === 0) {
      glb.arrowLeft.setAttribute("disabled", "disabled");
    } else {
      if (glb.index === cnf.weekNumber - 2) {
        glb.arrowRight.removeAttribute("disabled");
      }
    }
    fn.changeShowingWeek(glb.index);
  });
  // BUTTON MOVE NEXT WEEK
  glb.arrowRight.addEventListener("click", () => {
    console.log(glb.index)
    glb.index++;
    if (glb.index === cnf.runWeeks - 1) {
      glb.arrowRight.setAttribute("disabled", "disabled");
    } else {
      if (glb.index === 1) {
        glb.arrowLeft.removeAttribute("disabled");
      }
    }
    fn.changeShowingWeek(glb.index);
  });
})();
