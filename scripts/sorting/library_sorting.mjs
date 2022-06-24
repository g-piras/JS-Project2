import * as flg from "./flags.mjs"; // functions used for bonus 1 to choose the order
import { globalValues as glb } from "../global.mjs"; // global object that will be used to store the global values
import { paddingDate, check } from "../library.mjs"; // functions used in the program

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