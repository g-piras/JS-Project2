/**
 * @file : manager.js
 * @authors : Gabriele Bovolenta, Luna Diatto, Eloise Giorda, Marco Parisi, Diego Vaschetto
 * @project : Expiry List
 *
 * This file contains the configuration Object with all the rules of the supermarket manager
 */

export const configurationObject = {
  //used for bonus 3
  language: "IT",

  //the number of weeks the items are on the shelves
  itemLifeSpan: 2,

  //the number of weeks the program runs
  runWeeks: 10,

  //START CHANGES
  //useful to add a week every time we create new items
  dayWeek: 7,

  //the maximum expiration date of the items (will be incremented, it starts as the current date)
  maxExpDate: new Date(),

  //the starting date for the program (will be incremented to a slightly future date, it starts as the current date)
  startWeek: new Date(),
  // END CHANGES

  //the number of new items every week
  newItems: 5,

  //the number of days used to delay the current date (current date + startingDate = starting date of the program)
  startingDate: 10,

  //we will print every week with a random delay, between the minimum and maximum seconds below
  minUpdateListSeconds: 3,
  maxUpdateListSeconds: 6,

  //the padding character used for the padding of the output
  paddingCharacter: ".",
};
