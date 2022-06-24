/**
 * @file : reset.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 *
 * This file contains the configuration Object with all the rules of the supermarket manager
 */
import { globalValues as glb } from "../global.mjs"; // import the global values
import { configurationObject as cnf } from "../config.mjs"; // configuration object

/**
 * function that resets various values to their default values
 */
export const resetTable = () => {
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
};
