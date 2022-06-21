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
  //it sets the starting week of the program as a new date to which are summed a configurated number of days
  glb.startWeek.setDate(glb.startWeek.getDate() + cnf.startingDate);
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
    fn.createTitles(glb.startWeek, cnf.language, i);
    fn.createNewWeek(
      glb.startWeek,
      glb.maxExpDate,
      cnf.newItems,
      i,
      cnf.runWeeks
    );
    fn.changeStatus(glb.startWeek, cnf.itemLifeSpan, glb.globalArrayItems[i]);
    fn.print(`.products`, cnf.language, glb.globalArrayItems[i], i);
    fn.createCopyGlobalArray(i);
    fn.removeItem(glb.globalArrayItems[i]);
    fn.createCopyGlobalArrayFiltered(i);
    fn.print(`.filtered-products`, cnf.language, glb.globalArrayItems[i], i);
    glb.startWeek.setDate(glb.startWeek.getDate() + cnf.dayWeek);
  }

  // BUTTON MOVE PREVIOUS WEEK
  glb.arrowLeft.addEventListener("click", () => {
    glb.index--;
    if (glb.index === 0) {
      glb.arrowLeft.setAttribute("disabled", "disabled");
    } else {
      if (glb.index === cnf.weekNumber - 2) {
        glb.arrowRight.removeAttribute("disabled");
      }
    }
    fn.goPreviousWeek(glb.index);
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
    fn.goNextWeek(glb.index);
  });
};

(() => {
  //when the submit button is clicked
  vld.submitButton.addEventListener("click", vld.validateForm);
  vld.submitButton.addEventListener("click", startProgram);

  //when the reset button is clicked
  vld.resetButton.addEventListener("click", vld.resetForm);

  //when the settings button is clicked
  vld.settingsButton.addEventListener("click", vld.togglePanel);
})();

//BONUS 1
let nameId = document.querySelectorAll(".products .ID");
let nameProduct = document.querySelectorAll(".products .Name");
let statusProduct = document.querySelectorAll(".products .Status");
let expDateProduct = document.querySelectorAll(".products .Expiration-date");
let checkProduct = document.querySelectorAll(".products .Check");

let nameIdFiltered = document.querySelectorAll(".filtered-products .ID");
let nameProductFiltered = document.querySelectorAll(".filtered-products .Name");
let statusProductFiltered = document.querySelectorAll(
  ".filtered-products .Status"
);
let expDateProductFiltered = document.querySelectorAll(
  ".filtered-products .Expiration-date"
);
let checkProductFiltered = document.querySelectorAll(
  ".filtered-products .Check"
);

const sortById = (arrayCopy, index, idName, lang, cresc) => {
  if (cresc === true) {
    arrayCopy[index].sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    arrayCopy[index].sort((a, b) => (a.id < b.id ? 1 : -1));
  }
  fn.changePrint(idName, arrayCopy[index], lang);
};
const sortByProduct = (arrayCopy, index, idName, lang, cresc) => {
  if (cresc === true) {
    arrayCopy[index].sort((a, b) => (a.name > b.name ? 1 : -1));
  } else {
    arrayCopy[index].sort((a, b) => (a.name < b.name ? 1 : -1));
  }
  fn.changePrint(idName, arrayCopy[index], lang);
};
const sortByStatus = (arrayCopy, index, idName, lang, cresc) => {
  if (cresc === true) {
    arrayCopy[index].sort((a, b) => (a.status > b.status ? 1 : -1));
  } else {
    arrayCopy[index].sort((a, b) => (a.status < b.status ? 1 : -1));
  }
  fn.changePrint(idName, arrayCopy[index], lang);
};
const sortByExpDate = (arrayCopy, index, idName, lang, cresc) => {
  if (cresc === true) {
    arrayCopy[index].sort((a, b) =>
      a.expirationDate > b.expirationDate ? 1 : -1
    );
  } else {
    arrayCopy[index].sort((a, b) =>
      a.expirationDate < b.expirationDate ? 1 : -1
    );
  }
  fn.changePrint(idName, arrayCopy[index], lang);
};
const sortByCheck = (arrayCopy, index, idName, lang, cresc) => {
  if (cresc === true) {
    arrayCopy[index].sort((a, b) => (a.check > b.check ? 1 : -1));
  } else {
    arrayCopy[index].sort((a, b) => (a.check < b.check ? 1 : -1));
  }
  fn.changePrint(idName, arrayCopy[index], lang);
};

nameId.forEach((element) => {
  let cresc = false;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === false) {
      sortById(glb.globalArrayItemsCopy, index, idTable, cnf.language, cresc);
      cresc = true;
    } else {
      sortById(glb.globalArrayItemsCopy, index, idTable, cnf.language, cresc);
      cresc = false;
    }
  });
});
nameProduct.forEach((element) => {
  let cresc = true;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === false) {
      sortByProduct(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = true;
    } else {
      sortByProduct(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = false;
    }
  });
});
statusProduct.forEach((element) => {
  let cresc = true;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === true) {
      sortByStatus(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = false;
    } else {
      sortByStatus(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = true;
    }
  });
});
expDateProduct.forEach((element) => {
  let cresc = true;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === true) {
      sortByExpDate(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = false;
    } else {
      sortByExpDate(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = true;
    }
  });
});
checkProduct.forEach((element) => {
  let cresc = true;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === true) {
      sortByCheck(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = false;
    } else {
      sortByCheck(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = true;
    }
  });
});

nameIdFiltered.forEach((element) => {
  let cresc = false;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === true) {
      sortById(glb.globalArrayItemsCopy, index, idTable, cnf.language, cresc);
      cresc = false;
    } else {
      sortById(glb.globalArrayItemsCopy, index, idTable, cnf.language, cresc);
      cresc = true;
    }
  });
});
nameProductFiltered.forEach((element) => {
  let cresc = true;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === false) {
      sortByProduct(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = true;
    } else {
      sortByProduct(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = false;
    }
  });
});
statusProductFiltered.forEach((element) => {
  let cresc = true;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === true) {
      sortByStatus(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = false;
    } else {
      sortByStatus(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = true;
    }
  });
});
expDateProductFiltered.forEach((element) => {
  let cresc = true;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === true) {
      sortByExpDate(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = false;
    } else {
      sortByExpDate(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = true;
    }
  });
});
checkProductFiltered.forEach((element) => {
  let cresc = true;
  element.addEventListener("click", () => {
    let idTable = element.parentElement.parentElement.parentElement.id;
    let index = parseInt(idTable.match(/\d/g).join(""));
    if (cresc === true) {
      sortByCheck(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = false;
    } else {
      sortByCheck(
        glb.globalArrayItemsCopy,
        index,
        idTable,
        cnf.language,
        cresc
      );
      cresc = true;
    }
  });
});

// BONUS 2
let trTable = document.querySelectorAll(".products tbody tr");
let trFilteredTable = document.querySelectorAll(".filtered-products tbody tr");
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
