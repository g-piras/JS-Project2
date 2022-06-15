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
  for (let i = 0; i < cnf.runWeeks; i++) {
    fn.createTable(`products-${i}`, cnf.startWeek, cnf.language);
    fn.createTable(`filtered-products-${i}`, cnf.startWeek, cnf.language);
    for (let j = 0; j < cnf.newItems; j++) {
      fn.createNewItem(cnf.startWeek, cnf.maxExpDate);
    }
    fn.changeStatus(cnf.startWeek, cnf.itemLifeSpan);
    fn.print(`.products-${i}`, cnf.language);
    fn.removeItem();
    fn.print(`.filtered-products-${i}`, cnf.language);
    cnf.startWeek.setDate(cnf.startWeek.getDate() + cnf.dayWeek);
  }
})();
