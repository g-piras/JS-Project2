import { configurationObject as cnf } from "./config.mjs"; // configuration object

/**
 * @file : form-validator.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 * 
 * This file checks the data settings submitted by the user
 */

//all the inputs and buttons
let startDate = document.getElementById("start-date");
let daysToWait = document.getElementById("days-to-wait");
let weeks = document.getElementById("weeks");
let itemsPerWeek = document.getElementById("items-per-week");
let itemWeekLife = document.getElementById("item-week-life");

let submitButton = document.getElementById("submit-button");
let resetButton = document.getElementById("reset-button");


/**
 * This function prints the error message in the corresponding div
 * @param {string} input - the id of the div into which print the error
 * @param {string} message - the message to print
 */
function printError(input, message) {
    document.getElementById(input).textContent = message;
}


/**
 * This function checks if all the data submitted is valid
 * @returns {boolean} - true if the data is correct, false otherwise
 */
function validateForm() {

    let startDateErr = true;
    let daysToWaitErr = true;
    let weeksErr = true;
    let itemsPerWeekErr = true;
    let itemWeekLifeErr = true;

    //regular expressions to use
    let dateRegEx = /^\d{4}[-\/]\d{2}[-\/]\d{2}$/;
    let numericRegEx = /^[0-9]*$/;

    //check validity of "start date" value
    if (startDate.value === "") {
        printError("startDateErr", "Enter the start date of the program");
    }
    else {
        if (!dateRegEx.test(startDate.value)) {
            printError("startDateErr", "Enter a valid date");
        }
        else {
            printError("startDateErr", "");
            startDateErr = false;
        }
    }

    //check validity of "days to wait" value
    if (daysToWait.value === "") {
        printError("daysToWaitErr", "Enter the number of days to wait");
    }
    else {
        if (!numericRegEx.test(daysToWait.value)) {
            printError("daysToWaitErr", "Enter a valid number");
        }
        else {
            printError("daysToWaitErr", "");
            daysToWaitErr = false;
        }
    }

    //check validity of "weeks" value
    if (weeks.value === "") {
        printError("weeksErr", "Enter the number of weeks");
    }
    else {
        if (!numericRegEx.test(weeks.value)) {
            printError("weeksErr", "Enter a valid number");
        }
        else {
            printError("weeksErr", "");
            weeksErr = false;
        }
    }

    //check validity of "items per week" value
    if (itemsPerWeek.value === "") {
        printError("itemsPerWeekErr", "Enter the number of items per week");
    }
    else {
        if (!numericRegEx.test(itemsPerWeek.value)) {
            printError("itemsPerWeekErr", "Enter a valid number");
        }
        else {
            printError("itemsPerWeekErr", "");
            itemsPerWeekErr = false;
        }
    }

    //check validity of "item week life" value
    if (itemWeekLife.value === "") {
        printError("itemWeekLifeErr", "Enter the number of weeks within which the product is valid");
    }
    else {
        if (!numericRegEx.test(itemWeekLife.value)) {
            printError("itemWeekLifeErr", "Enter a valid number");
        }
        else {
            printError("itemWeekLifeErr", "");
            itemWeekLifeErr = false;
        }
    }

    if ((startDateErr || daysToWaitErr || weeksErr || itemsPerWeekErr || itemWeekLifeErr)) {
        return false;
    }
    else {
        //update the configuration object with the new values
        cnf.language = document.getElementById("language").value;
        cnf.startWeek = startDate.value;
        cnf.startingDate = daysToWait.value;
        cnf.runWeeks = weeks.value;
        cnf.newItems = itemsPerWeek.value;
        cnf.itemLifeSpan = itemWeekLife.value;
    }
}

/**
 * This function resets the form by clearing all the inputs and the errors
 */
function resetForm() {
    startDate.value = "";
    daysToWait.value = "";
    weeks.value = "";
    itemsPerWeek.value = "";
    itemWeekLife.value = "";

    let errors = document.querySelectorAll(".error-message");
    for (let i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }
}


submitButton.addEventListener('click', validateForm);
resetButton.addEventListener('click', resetForm);

