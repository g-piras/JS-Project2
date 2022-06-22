/**
 * @file : library.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 *
 * This file contains all the functions used in the project
 */
import { globalValues as glb } from "./global.mjs"; // global object that will be used to store the global values
/*
 * Function that gets a random number within a given range
 * @param {number} min - the minimum number of the range
 * @param {number} max - the maximum number of the range
 * @returns {number} the random number
 */
export const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

/**
 * Function that gets a random item from an array of possible choices
 * @returns {string} the random item chosen
 */
const chooseItem = () => {
  const possibileItems = [
    "Asparagus",
    "Apples",
    "Avacado",
    "Alfalfa",
    "Almond",
    "Arugala",
    "Artichoke",
    "Applesauce",
    "Antelope",
    "Albacore Tuna",
    "Apple Juice",
    "Avocado Roll",
    "Bruschetta",
    "Bacon",
    "Black Beans",
    "Bagels",
    "Baked Beans",
    "Bbq",
    "Bison",
    "Barley",
    "Beer",
    "Bisque",
    "Bluefish",
    "Bread",
    "Broccoli",
    "Burrito",
    "Babaganoosh",
    "Cabbage",
    "Cake",
    "Carrots",
    "Carne Asada",
    "Celery",
    "Cheese",
    "Chicken",
    "Catfish",
    "Chips",
    "Chocolate",
    "Chowder",
    "Clams",
    "Coffee",
    "Cookies",
    "Corn",
    "Cupcakes",
    "Crab",
    "Curry",
    "Cereal",
    "Chimichanga",
    "Dates",
    "Dips",
    "Duck",
    "Dumplings",
    "Donuts",
    "Eggs",
    "Enchilada",
    "Eggrolls",
    "English Muffins",
    "Edimame",
    "Eel Sushi",
    "Fajita",
    "Falafel",
    "Fish",
    "Franks",
    "Fondue",
    "French Toast",
    "French Dip",
    "Garlic",
    "Ginger",
    "Gnocchi",
    "Goose",
    "Granola",
    "Grapes",
    "Green Beans",
    "Guancamole",
    "Gumbo",
    "Grits",
    "Graham Crackers",
    "Ham",
    "Halibut",
    "Hamburger",
    "Honey",
    "Huenos Rancheros",
    "Hash Browns",
    "Hot Dogs",
    "Haiku Roll",
    "Hummus",
    "Ice Cream",
    "Irish Stew",
    "Indian Food",
    "Italian Bread",
    "Jambalaya",
    "Jelly",
    "Jerky",
    "Jalapeño",
    "Kale",
    "Kabobs",
    "Ketchup",
    "Kiwi",
    "Kidney Beans",
    "Kingfish",
    "Lobster",
    "Lamb",
    "Linguine",
    "Lasagna",
    "Meatballs",
    "Moose",
    "Milk",
    "Milkshake",
    "Noodles",
    "Oreo",
    "Pizza",
    "Pepperoni",
    "Porter",
    "Pancakes",
    "Quesadilla",
    "Quiche",
    "Reuben",
    "Spinach",
    "Spaghetti",
    "Tater Tots",
    "Toast",
    "Venison",
    "Waffles",
    "Wine",
    "Walnuts",
    "Yogurt",
    "Ziti",
    "Zucchini",
  ];
  return possibileItems[randomNumber(0, possibileItems.length - 1)];
};

/**
 * Function that gets an unique ID (that will be assigned to every item), starting from a given global number (1)
 * @returns the unique ID
 */
// funzione +1 ID ITEM
const ID = () => {
  let uniqueId = glb.sumID;
  glb.sumID++;
  return uniqueId;
};

/**
 * Function that gets a random date, given a range of dates within which to choose
 * @param {date} start the minimum date allowed
 * @param {date} end the maximum date included
 * @returns {date} a random date between start and end (included)
 */
const randomDate = (start, end) => {
  let date = new Date(+start + Math.random() * (end - start));
  return date;
};

export const createNewWeek = (startingDate, maxExpDate, itemsNum, index) => {
  const week = [];
  for (let i = 0; i < itemsNum; i++) {
    week.push(createNewItem(startingDate, maxExpDate));
  }
  if (index > 0) {
    glb.globalArrayItems.push(glb.globalArrayItems[index - 1].concat(week));
  } else {
    glb.globalArrayItems.push(week);
  }
};

export const createCopyGlobalArray = (index) => {
  const WeekClone = JSON.parse(JSON.stringify(glb.globalArrayItems[index]));
  glb.globalArrayItemsCopy.push(WeekClone);
};

export const createCopyGlobalArrayFiltered = (index) => {
  const WeekClone = JSON.parse(JSON.stringify(glb.globalArrayItems[index]));
  glb.globalArrayItemsCopyFiltered.push(WeekClone);
};

/**
 * Function that creates the object item and places it inside the global array of items
 * It uses the functions ID() and chooseItem()
 * @param {date} startingDate the programs current date, used to generate a valid expiration date
 */
const createNewItem = (startingDate, maxExpDate) => {
  let item = {
    id: ID(),
    name: chooseItem(),
    status: "new",
    expirationDate: randomDate(
      new Date(startingDate).setDate(new Date(startingDate).getDate()),
      maxExpDate
    ),
    check: -1,
  };
  return item;
};

/**
 * Function that changes the status of every item in the global array
 * @param {object} startWeek - every week the program runs
 */
export const changeStatus = (startWeek, itemLife, week) => {
  week.forEach((item) => {
    if (startWeek.getTime() > item.expirationDate.getTime()) {
      item.status = "expired";
    } else {
      if (item.check >= itemLife) {
        item.status = "old";
      } else if (item.check < itemLife && item.check !== -1) {
        item.status = "valid";
      }
    }
    item.check++;
  });
};

/**
 * Function that remove an item from the global array, if its status is "old" or "expired"
 */
export const removeItem = (week) => {
  for (let i = 0; i < week.length; i++) {
    let item = week[i];
    if (item.status === "old" || item.status === "expired") {
      week.splice(i, 1);
      i = -1;
    }
  }
};

/**
 * Function that checks a number
 * @param {number} num - the number to be checked
 * @returns {string} " checks" if the number is not 1, " check " otherwise
 */
const check = (num) => {
  let control;
  if (num !== 1) {
    control = " checks";
  } else {
    control = " check ";
  }
  return control;
};

/**
 * Function that pads every date in the program
 * @param {object} d - the date to be padded, given a date format in the configuration object (bonus 3)
 * @returns {object} the date padded
 */
const paddingDate = (d, lang) => {
  let days;
  if (lang === "IT") {
    const mesi = [
      "GEN",
      "FEB",
      "MAR",
      "APR",
      "MAG",
      "GIU",
      "LUG",
      "AGO",
      "SET",
      "OTT",
      "NOV",
      "DIC",
    ];
    days =
      ("0" + d.getDate()).slice(-2) +
      " " +
      mesi[d.getMonth()] +
      " " +
      d.getFullYear();
  } else if (lang === "EN") {
    const month = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    days =
      month[d.getMonth()] +
      " " +
      ("0" + d.getDate()).slice(-2) +
      " " +
      d.getFullYear();
  }
  return days;
};

// NEW FUNCTIONS
/* PRINT CONTENT */
export const print = (tableClass, lang, week, i) => {
  let table = document.querySelectorAll(tableClass);
  let tBody = document.createElement("tbody");
  week.forEach((element) => {
    let tr = document.createElement("tr");
    for (let key in element) {
      let td = document.createElement("td");
      if (key === "check") {
        td.textContent = element[key] + check(element[key]);
      } else if (key === "expirationDate") {
        td.textContent = paddingDate(element[key], lang);
      } else {
        td.textContent = element[key];
      }
      tr.appendChild(td);
      tBody.appendChild(tr);
    }
    table[i].appendChild(tBody);
  });
};

/* PRINT TABLES  */
export const createTable = (tableClass, index) => {
  let container = document.querySelector(".container-products");
  let title = document.createElement("h5");
  let table = document.createElement("table");
  table.setAttribute("class", tableClass);
  table.setAttribute("id", `${tableClass}-${index}`);
  title.setAttribute("class", `title-${tableClass}`);
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  const keys = ["id", "name", "status", "expirationDate", "check"];
  for (let key in keys) {
    let th = document.createElement("th");
    th.textContent = keys[key];
    th.setAttribute("class", keys[key]);
    thead.appendChild(tr);
    tr.appendChild(th);
  }
  table.appendChild(thead);
  container.appendChild(title);
  container.appendChild(table);
  if (index === 0) {
    table.classList.add("active");
    title.classList.add("active");
  }
};
/* FOR TITLES */
export const createTitles = (dateWeek, lang, index) => {
  let title = document.querySelectorAll(".title-products");
  let filteredTitle = document.querySelectorAll(".title-filtered-products");

  title[index].textContent = "Week of " + paddingDate(dateWeek, lang);
  filteredTitle[index].textContent = "Products filtered";
};

//BUTTON HANDLER
export const goPreviousWeek = (index) => {
  let allTitles = document.querySelectorAll(".title-products");
  let allTables = document.querySelectorAll(".products");
  let allTablesFiltered = document.querySelectorAll(".filtered-products");
  let allTitlesFiltered = document.querySelectorAll(".title-filtered-products");

  allTables.forEach((element) => element.classList.remove("active"));
  allTitles.forEach((element) => element.classList.remove("active"));
  allTablesFiltered.forEach((element) => element.classList.remove("active"));
  allTitlesFiltered.forEach((element) => element.classList.remove("active"));

  allTables[index].classList.add("active");
  allTitles[index].classList.add("active");
  allTablesFiltered[index].classList.add("active");
  allTitlesFiltered[index].classList.add("active");
};

export const goNextWeek = (index) => {
  let allTitles = document.querySelectorAll(".title-products");
  let allTables = document.querySelectorAll(".products");
  let allTablesFiltered = document.querySelectorAll(".filtered-products");
  let allTitlesFiltered = document.querySelectorAll(".title-filtered-products");

  allTables.forEach((element) => element.classList.remove("active"));
  allTitles.forEach((element) => element.classList.remove("active"));
  allTablesFiltered.forEach((element) => element.classList.remove("active"));
  allTitlesFiltered.forEach((element) => element.classList.remove("active"));

  allTables[index].classList.add("active");
  allTitles[index].classList.add("active");
  allTablesFiltered[index].classList.add("active");
  allTitlesFiltered[index].classList.add("active");
};

// PRINT AGAIN FOR BONUS 1
export const changePrint = (idName, week, lang) => {
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

//BONUS 2
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
