import { globalValues as glb } from "../global.mjs";
import { configurationObject as cnf } from "../config.mjs"; // configuration object

export const resetTable = () => {
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
};
