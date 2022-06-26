/**
 * @file : flags.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 *
 */

/**
 * This file contains all the flags used in the program to sort the items
 * @module flags
 */
/**
 * OBJECT FOR ASCENDING DESCENDING ITEMS ORDER TABLE
 * @property {boolean} id - value used to sort by id (ascending or descending)
 * @property {boolean} name - value used to sort by name (ascending or descending)
 * @property {boolean} status - value used to sort by status (ascending or descending)
 * @property {boolean} expirationDate - value used to sort by expirationDate (ascending or descending)
 * @property {boolean} check - value used to sort by check (ascending or descending)
 */
export const flagObj = {
  id: false,
  name: true,
  status: true,
  expirationDate: true,
  check: true,
};
/**
 * OBJECT FOR ASCENDING DESCENDING ITEMS ORDER FILTERED TABLE
 * @property {boolean} id - value used to sort by id (ascending or descending)
 * @property {boolean} name - value used to sort by name (ascending or descending)
 * @property {boolean} status - value used to sort by status (ascending or descending)
 * @property {boolean} expirationDate - value used to sort by expirationDate (ascending or descending)
 * @property {boolean} check - value used to sort by check (ascending or descending)
 */
export const flagFilterdObj = {
  id: false,
  name: true,
  status: true,
  expirationDate: true,
  check: true,
};
