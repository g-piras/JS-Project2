/**
 * @file : removeItems.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 *
 */

/**
 * This file contains the configuration Object with all the rules of the supermarket manager
 * @module removeItems
 */

/**
 * function that changes the status of the item to removed or the previous one
 * @param {String} className - the class of the table
 * @param {Node} element - the item clicked
 * @param {String} placeholder - the placeholder of the previous state
 * @returns placeholder
 */
export const printRemove = (className, element, placeholder) => {
  let tdStatus = element.querySelector(
    `.${className} tbody tr td:nth-child(3)`
  );
  tdStatus.classList.toggle("removed");
  if (tdStatus.textContent !== "Removed") {
    placeholder = tdStatus.textContent;
    tdStatus.textContent = "Removed";
  } else {
    tdStatus.textContent = placeholder;
  }
  return placeholder;
};

/**
 * function that hides the item removed from the next weeks table
 * @param {*} className - the class of the table
 * @param {*} idItem - the number of the id of the item
 * @param {*} index - the index of the week of the global array taken by parsing the idTable number
 * @param {*} runWeeks - the number of weeks to be run by the program
 */
export const hideItem = (className, idItem, index, runWeeks) => {
  for (let i = index + 1; i < runWeeks; i++) {
    let tdTable = document.querySelectorAll(
      `#${className}-${i} tbody tr td:nth-child(1)`
    );
    tdTable.forEach((element) => {
      if (element.textContent === idItem) {
        element.parentElement.classList.toggle("hidden");
      }
    });
  }
};
