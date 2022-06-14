import { configurationObject as cnf } from "./config.mjs"; // configuration object
import * as fn from "./library.mjs"; // functions used in the program

//used to print the weekly items after said time
let printTimer =
  fn.randomNumber(cnf.minUpdateListSeconds, cnf.maxUpdateListSeconds) * 1000;

/**
 * Function that delays the output of the program
 * It uses the functions setTimeout(), createNewItem(), changeStatus(),
 * print(), removeItem(), randomDate()
 */
let mySetInterval = () => {
  //it sets the starting week of the program as a new date to which are summed a configurated number of days
  cnf.startWeek.setDate(cnf.startWeek.getDate() + cnf.startingDate);

  //it sets a maximum expiration date for the items as a new date to which are summed the amount of weeks during which the program runs plus an extra week
  cnf.maxExpDate.setDate(
    cnf.maxExpDate.getDate() + (cnf.dayWeek * cnf.runWeeks + cnf.dayWeek)
  );
  for (let i = 0; i < cnf.runWeeks; i++) {
    setTimeout(() => {
      for (let j = 0; j < cnf.newItems; j++) {
        fn.createNewItem(cnf.startWeek, cnf.maxExpDate);
      }
      console.log(" ");
      console.log("Week of " + cnf.startWeek);
      console.log(
        "-----------------------------------------------------------------"
      );
      fn.changeStatus(cnf.startWeek, cnf.itemLifeSpan);
      fn.print();
      fn.removeItem();
      console.log(" ");
      console.log("Filtered");
      console.log(
        "-----------------------------------------------------------------"
      );
      fn.print();
      cnf.startWeek.setDate(cnf.startWeek.getDate() + cnf.dayWeek);
    }, i * printTimer);
  }
};

mySetInterval();
