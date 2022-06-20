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
    fn.goPreviousWeek(index);
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
    fn.goNextWeek(index);
  });
})();
//BONUS 1
const sortById = (arrayCopy, index, idName, lang) => {
  arrayCopy[index].sort((a, b) => (a.id > b.id ? 1 : -1));
  fn.changePrint(idName, arrayCopy[index], lang);
};
const sortByProduct = (arrayCopy, index, idName, lang) => {
  arrayCopy[index].sort((a, b) => (a.name > b.name ? 1 : -1));
  fn.changePrint(idName, arrayCopy[index], lang);
};
const sortByStatus = (arrayCopy, index, idName, lang) => {
  arrayCopy[index].sort((a, b) => (a.status > b.status ? 1 : -1));
  fn.changePrint(idName, arrayCopy[index], lang);
};
const sortByExpDate = (arrayCopy, index, idName, lang) => {
  arrayCopy[index].sort((a, b) =>
    a.expirationDate > b.expirationDate ? 1 : -1
  );
  fn.changePrint(idName, arrayCopy[index], lang);
};
const sortByCheck = (arrayCopy, index, idName, lang) => {
  arrayCopy[index].sort((a, b) => (a.check > b.check ? 1 : -1));
  fn.changePrint(idName, arrayCopy[index], lang);
};

let nameId = document.querySelectorAll(".products .ID");
let nameProduct = document.querySelectorAll(".products .Name");
let statusProduct = document.querySelectorAll(".products .Status");
let expDateProduct = document.querySelectorAll(".products .Expiration-date");
let checkProduct = document.querySelectorAll(".products .Check");

nameId.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortById(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
nameProduct.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortByProduct(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
statusProduct.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortByStatus(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
expDateProduct.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortByExpDate(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
checkProduct.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortByCheck(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});

let nameIdFiltered = document.querySelectorAll(".filtered-products .ID");
let nameProductFiltered = document.querySelectorAll(".filtered-products .Name");
let statusProductFiltered = document.querySelectorAll(".filtered-products .Status");
let expDateProductFiltered = document.querySelectorAll(".filtered-products .Expiration-date");
let checkProductFiltered = document.querySelectorAll(".filtered-products .Check");

nameIdFiltered.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortById(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
nameProductFiltered.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortByProduct(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
statusProductFiltered.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortByStatus(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
expDateProductFiltered.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortByExpDate(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
checkProductFiltered.forEach((element) => {
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    sortByCheck(fn.globalArrayItemsCopy, index, idTable, cnf.language);
  });
});
// BONUS 2
