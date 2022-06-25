/**
 * @file : global.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 * 
 * This file contains gobal values used in the program
 */

/**
 * @property {Array} globalArrayItems - array containg an array of items for each week
 * @property {Array} globalArrayItemsCopy - deep copy of the globalArrayItems not filtered
 * @property {Array} globalArrayItemsCopyFiltered - deep copy of the globalArrayItems filtered
 * @property {Number} sumID - used to give a unique ID to each item
 * @property {Date} maxExpDate - the maximum expiration date of the items
 * @property {Node} arrowLeft - button used to switch to the previous week
 * @property {Node} arrowRight - button used to switch to the next week
 */
export const globalValues = {
  globalArrayItems: [],
  globalArrayItemsCopy: [],
  globalArrayItemsCopyFiltered: [],
  sumID: 1,
  maxExpDate: new Date(),
  arrowLeft: document.querySelector(".previous-week"),
  arrowRight: document.querySelector(".next-week"),
  index: 0,
};
