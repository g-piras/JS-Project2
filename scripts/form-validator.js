/**
 * @file : library.js
 * @authors : Lorenzo Lombardo, Marco Parisi, Giampietro Piras, Lorenzo Trabbia
 * @project : Market
 * 
 * This file checks the data settings submitted by the user
 */


//all the inputs
let startDate = document.getElementById("start-date");
let daysToWait = document.getElementById("days-to-wait");
let weeks = document.getElementById("weeks");
let itemsPerWeek = document.getElementById("items-per-week");
let itemWeekLife = document.getElementById("item-week-life");

let settings = document.querySelector('.settings-panel');

/**
 * This function checks if a value is empty or not
 * @param {*} valueToCheck - the value to check
 * @returns {boolean} true if the input is empty, false otherwise
 */
let isRequired = (valueToCheck) => {
    if (valueToCheck === "")
        return true;
    else
        return false;
};

/**
 * This function checks if a value is a correct number
 * @param {number} numValueToCheck - the value to check
 * @returns {boolean} true if the input is a correct number, false otherwise
 */
let isNumberValid = (numValueToCheck) => {
    let numericRegEx = /^[0-9]*$/;
    return numericRegEx.test(numValueToCheck);
};

/**
 * This function checks if a value is a correct date
 * @param {object} dateValueToCheck - the value to check
 * @returns {boolean} true if the input is a correct date, false otherwise
 */
let isDateValid = (dateValueToCheck) => {
    let dateRegEx = /^\d{4}[-\/]\d{2}[-\/]\d{2}$/;
    return dateRegEx.test(dateValueToCheck);
};

/**
 * This function prints an error message in the DOM
 * @param {object} input - DOM element on which the error message will be shown
 * @param {string} message - error message to print in the DOM
 */
let showError = (input, message) => {
    let spanError = document.createElement("span");
    spanError.textContent = message;
    spanError.className = "error-message";
    input.before(spanError);
};


/**
 * This function do some checks on the "start date" value
 * @returns {boolean} true if the input is valid, false otherwise
 */
let checkStartDate = () => {
    let valid = false;

    let toCheck = startDate.value;
    if (isRequired(toCheck)) {
        showError(startDate, "Enter the start date of the program");
    }
    
    else if (!isDateValid(toCheck)) {
        showError(startDate, "The value entered is not valid");
    }
    else {
        // showSuccess(daysToWait);
        valid = true;
    }
    return valid;
};

/**
 * This function do some checks on the "days to wait" value
 * @returns {boolean} true if the input is valid, false otherwise
 */
let checkDaysToWait = () => {
    let valid = false;

    let toCheck = daysToWait.value;

    if (isRequired(toCheck)) {
        showError(daysToWait, "Enter the number of days to wait");
    }
    else if (!isNumberValid(parseInt(toCheck))) {
        showError(daysToWait, "The value entered is not valid");
    }
    else {
        // showSuccess(daysToWait);
        valid = true;
    }
    return valid;
};

/**
 * This function do some checks on the "weeks" value
 * @returns {boolean} true if the input is valid, false otherwise
 */
let checkWeeks = () => {
    let valid = false;

    let toCheck = weeks.value;

    if (isRequired(toCheck)) {
        showError(weeks, "Enter the number of weeks");
    }
    else if (!isNumberValid(parseInt(toCheck))) {
        showError(weeks, "The value entered is not valid");
    }
    else {
        // showSuccess(weeks);
        valid = true;
    }
    return valid;
};

/**
 * This function do some checks on the "items per week" value
 * @returns {boolean} true if the input is valid, false otherwise
 */
let checkItemsPerWeek = () => {
    let valid = false;

    let toCheck = itemsPerWeek.value;

    if (isRequired(toCheck)) {
        showError(itemsPerWeek, "Enter the number of items per week");
    }
    else if (!isNumberValid(parseInt(toCheck))) {
        showError(itemsPerWeek, "The value entered is not valid");
    }
    else {
        // showSuccess(itemsPerWeek);
        valid = true;
    }
    return valid;
};

/**
 * This function do some checks on the "items per week" value
 * @returns {boolean} true if the input is valid, false otherwise
 */
let checkItemWeekLife = () => {
    let valid = false;

    let toCheck = itemWeekLife.value;

    if (isRequired(toCheck)) {
        showError(itemWeekLife, "Enter the number of weeks within which the product is valid");
    }
    else if (!isNumberValid(parseInt(toCheck))) {
        showError(itemWeekLife, "The value entered is not valid");
    }
    else {
        // showSuccess(itemWeekLife);
        valid = true;
    }
    return valid;
};

let clearErrorMessages = () => {
    let errorMessages = document.getElementsByClassName("error-message");
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].remove();
    }
};

//mettere evento in evento nell'evento qua sotto

settings.addEventListener('input', function (e) {
    clearErrorMessages();
    switch (e.target.id) {
        case 'start-date':
            checkStartDate();
            break;
        case 'days-to-wait':
            checkDaysToWait();
            break;
        case 'weeks':
            checkWeeks();
            break;
        case 'items-per-week':
            checkItemsPerWeek();
            break;
        case 'item-week-life':
            checkItemWeekLife();
            break;
    }
    console.log("CE L'ABBIAMO FATTA");
});