/**
 * @file : confight.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 *
 */

/**
 * This file contains the configuration Object with all the rules of the supermarket manager
 * @module config
 */
/**
 * @property {string} language - the language used to chose how to print the months
 * @property {number} itemLifeSpan - the number of weeks the item will be in the supermarket
 * @property {number} runWeeks - the number of weeks the supermarket will run
 * @property {number} dayWeek - the number of days in a week
 * @property {number} newItems - the number of new items generated each week
 * @property {number} startingDate - the number of days used to delay the chosen date (current date + startingDate = starting date of the program)
 * @property {Date} startWeek - the date of choosing at which the startingDate will be added
 */
export const configurationObject = {
  language: "IT",
  itemLifeSpan: 2,
  runWeeks: 10,
  dayWeek: 7,
  newItems: 5,
  startingDate: 10,
  startWeek: new Date(),
};
