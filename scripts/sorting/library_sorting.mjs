/**
 * @file : library_sorting.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 *
 * This file contains the function used to sort the items
 */

import * as flg from "./flags.mjs"; //object that will be used to store the boolean values of the sort
import { globalValues as glb } from "../global.mjs"; // global object that will be used to store the global values
import { paddingDate, check } from "../library.mjs"; // functions taken from the main function sections

/**
 * function that picks the coorect sorting function based on the column and table clicked and calls it
 * @param {Node} element - the column th clicked
 * @param {string} language - used for the padding of the date 
 */
export const pickSorting = (element, language) => {
  let targetColumn = element.classList[0];
  let idTable = element.parentElement.parentElement.parentElement.id;
  let index = parseInt(idTable.match(/\d/g).join(""));
  if (
    element.parentElement.parentElement.parentElement.classList[0].includes(
      "filtered-products"
    )
  ) {
    sortByElement(
      glb.globalArrayItemsCopyFiltered,
      index,
      idTable,
      language,
      targetColumn,
      flg.flagFilterdObj
    );
  } else {
    sortByElement(
      glb.globalArrayItemsCopy,
      index,
      idTable,
      language,
      targetColumn,
      flg.flagObj
    );
  }
};

// SORTING FUNCTION
/**
 *  function that sorts the items based on the column clicked
 * @param {Array} arrayCopy - the array of items to be sorted
 * @param {Number} index - the index of the week in the array created by parsing the targeted colum
 * @param {String} idName - the id of the table
 * @param {String} lang - the language used to chose how to parse the date
 * @param {String} targetColumn - the name of the column clicked
 * @param {Object} referenceObj - the object that will be used to store the boolean values of the sort
 */
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
  changePrint(idName, arrayCopy[index], lang);
};

/**
 * function that reprints the item sorted in the table based on the column clicked
 * @param {String} idName - the id of the table
 * @param {Array} week - the array of items to be printed
 * @param {string} lang - the language used to chose how to parse the date
 */
const changePrint = (idName, week, lang) => {
    let tBody = document.querySelector(`#${idName} tbody`);
    tBody.textContent = "";
    week.forEach((element) => {
      let tr = document.createElement("tr");
      for (let key in element) {
        let td = document.createElement("td");
        if (key === "check") {
          td.textContent = element[key] + check(element[key]);
        } else if (key === "expirationDate") {
          let d = new Date(element[key]);
          td.textContent = paddingDate(d, lang);
        } else {
          td.textContent = element[key];
        }
        tr.appendChild(td);
      }
      tBody.appendChild(tr);
    });
  };