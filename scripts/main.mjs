/**
 * @file : main.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 *
 * This file contains the configuration Object with all the rules of the supermarket manager
 */

import { configurationObject as cnf } from "./config.mjs"; // configuration object
import { globalValues as glb } from "./global.mjs"; // global object that will be used to store the global values
import { resetTable } from "./reset/reset.mjs"; // reset Table when changing settings
import * as fn from "./library.mjs"; // functions used in the program
import * as vld from "./validation/form-validator.mjs"; // functions used in the program
import * as fnflg from "./sorting/library_sorting.mjs"; // functions used in the program to sort the columns
import * as fnrm from "./itemRemove/removeItems.mjs"; // function used to remove the items from the table

const startProgram = () => {
  // RESET ITEMS
  resetTable();
  /* it sets the starting week of the program as a new date
   to which are summed a configurated number of days */
  cnf.startWeek.setDate(cnf.startWeek.getDate() + cnf.startingDate);
  /* it sets a maximum expiration date for the items as a new date to which are summed
   the amount of weeks during which the program runs plus an extra week */
  glb.maxExpDate.setDate(
    glb.maxExpDate.getDate() + (cnf.dayWeek * cnf.runWeeks + cnf.dayWeek)
  );

  // CREATE TABLES BASED ON HOW MANY WEEKS THERE ARE
  for (let i = 0; i < cnf.runWeeks; i++) {
    fn.createTable(`products`, i);
    fn.createTable(`filtered-products`, i);
  }
  /* CREATES TITLES > CREATES ITEMS FOR EACH WEEK > CHANGES STATUS > PRINTS ITEMS > DEEPCOPY ARRAY
   REMOVES ITEMS > DEEPCOPY FILTERED ARRAY >  PRINTS AGAIN AND GOES TO NEXT WEEK */
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

  //BONUS 1 - SORTING
  // PARAMETERS FOR THE SORTING FUNCTION PRODUCTS TABLE
  let thTables = document.querySelectorAll("table tr th");
  thTables.forEach((element) => {
    element.addEventListener("click", () => {
      fnflg.pickSorting(element, cnf.language);
    });
  });
  // END BONUS 1

  // BONUS 2 - REMOVING ITEMS
  let trTable = document.querySelectorAll(".products tbody tr");
  let trFilteredTable = document.querySelectorAll(
    ".filtered-products tbody tr"
  );
  trTable.forEach((element) => {
    let placeholder;
    element.addEventListener("click", () => {
      let idTable = element.parentElement.parentElement.id;
      let index = parseInt(idTable.match(/\d/g).join(""));
      placeholder = fnrm.printRemove("products", element, placeholder);
      let idItem = element.querySelector(
        ".products tbody tr td:nth-child(1)"
      ).textContent;
      fnrm.hideItem("products", idItem, index, cnf.runWeeks);
      fnrm.hideItem("filtered-products", idItem, index, cnf.runWeeks);
    });
  });

  trFilteredTable.forEach((element) => {
    let placeholder;
    element.addEventListener("click", () => {
      let idTable = element.parentElement.parentElement.id;
      let index = parseInt(idTable.match(/\d/g).join(""));
      placeholder = fnrm.printRemove("filtered-products", element, placeholder);
      let idItem = element.querySelector(
        ".filtered-products tbody tr td:nth-child(1)"
      ).textContent;
      fnrm.hideItem("products", idItem, index, cnf.runWeeks);
      fnrm.hideItem("filtered-products", idItem, index, cnf.runWeeks);
    });
  });
  //END BONUS 2
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

  // BUTTON MOVE PREVIOUS WEEK
  glb.arrowLeft.addEventListener("click", () => {
    glb.index--;
    if (glb.index === 0) {
      glb.arrowLeft.setAttribute("disabled", "disabled");
    } else {
      if (glb.index === cnf.runWeeks - 2) {
        console.log("hello");
        glb.arrowRight.removeAttribute("disabled");
      }
    }
    fn.changeShowingWeek(glb.index);
  });
  // BUTTON MOVE NEXT WEEK
  glb.arrowRight.addEventListener("click", () => {
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
