# project-02-group-01
This project is a dynamic web page that has the purpose of displaying a navigable weekly list of supermarket products with their ID, name, status, expiration date and checks.

---

- [project-02 - group 01](#project-02---group-01)
  - [Usage](#usage)
  - [Configuration and technical characteristics](#configuration-and-technical-characteristics)
  - [Files and project structure](#files-and-project-structure)
  - [Features delivered](#features-delivered)
  - [General features](#general-features)
  - [Bonuses delivered](#bonuses-delivered)
    - [Bonus 1](#bonus-1)
    - [Bonus 2](#bonus-2)
  - [Browser compatibility](#browser-compatibility)
  - [External resources](#external-resources)
  - [License and contact information](#license-and-contact-information)
  - [Authors](#authors)
  - [Changelog and version history](#changelog-and-version-history)

---

## Usage  

This project works with modules, so is necessary to run the `index.html` file with the live server.  
When the program starts, the page will show a container with two tables: one with all the weekly products, and the other only with the products that are not old, removed, or expired.  
The program uses some default configuration values (start date, days to wait, weeks, items per week, item week life and language) but these can be changed in the settings panel by the user, clicking on the button in the top right corner of the page. The save button is to click only when all the data is inserted correctly, otherwise the panel will show error messages and the program will restart. The reset button is to reset all the input data inserted and to clear all the error messages.  
On the sides of the container there are two arrows that are used to change the week.

---

## Configuration and technical characteristics
The configuration values that can be modified by the user are:
 - Start date: the date from which the program will start.
 - days to wait: the number of days to add to the starting date before which the program will start.
 - weeks: the number of weeks that the program will show;
 - items per week: the number of items that will be added every week;
 - item week life: the number of weeks after which the product becomes old;
 - language: the language used to display the dates (only italian and english are available).

Attention! The values inserted by the user in the settings panel are saved only if all the data is inserted and correctly. If the "save settings" button is clicked, the program will restart.

---

## Files and project structure
```
📦JS-Project2
 ┣ 📂docs - JSDOC files
 ┣ 📂images - images used in the index.html file
 ┃ ┣ 📜arance.jpeg
 ┃ ┣ 📜market.png
 ┃ ┣ 📜Predawn.jpg
 ┃ ┗ 📜settings-icon.svg
 ┣ 📂scripts - all JavaScript files
 ┃ ┣ 📂itemRemove - bonus 2
 ┃ ┃ ┗ 📜removeItems.mjs
 ┃ ┣ 📂reset - reset of the program
 ┃ ┃ ┗ 📜reset.mjs
 ┃ ┣ 📂sorting - bonus 1
 ┃ ┃ ┣ 📜flags.mjs
 ┃ ┃ ┗ 📜library_sorting.mjs
 ┃ ┣ 📂validation - validation of settings panel
 ┃ ┃ ┗ 📜form-validator.mjs
 ┃ ┣ 📜config.mjs - file with the configuration values
 ┃ ┣ 📜global.mjs - file with the global variables
 ┃ ┣ 📜library.mjs - file with the functions used in the program
 ┃ ┗ 📜main.mjs - file with the main program
 ┣ 📂styles
 ┃ ┣ 📜reset.css
 ┃ ┗ 📜style.css - style for index.html file
 ┣ 📜index.html - main file of the program
 ┣ 📜jsdoc.config.json - configuration file for JSDOC
 ┣ 📜LICENSE.txt - license information
 ┣ 📜package-lock.json - file with the dependencies of the JSDOC
 ┣ 📜package.json - file with the information of the JSDOC
 ┗ 📜README.md - file with the information of the project
```

---

## Features delivered

Below are described all the feature delivered.

In **/project-01-group-04/scripts/manager.js**:      
  - Feature 1: **creation of the configuration object**   
      ~~~
      const configurationObject = {};
      ~~~  
    We have created an object to store all the manager settings as required. The properties inside the object are:     
      - ~~~
        language
        ~~~          
          It sets the language format for every date in the project (required by bonus 3).  

        ---
      - ~~~
        itemLifeSpan
        ~~~     
          It represents for how many weeks the items are on the shelves. It is used to distinguish between the items that are "valid" and the items that are "old".
          
        ---
      - ~~~
        runWeeks
        ~~~      
          It represents for how many weeks the program runs.

        ---
      - ~~~
        newItems
        ~~~         
          It is the number of new goods that arrive every week.

        ---  
      - ~~~
        startingDate
        ~~~      
          It represents the number of days that we added to the current date to have a starting date of the program.
        
        ---
      - ~~~
        minUpdateListSeconds and maxUpdateListSeconds  
        ~~~      
          As required the console log output is printed with a random delay. This delay is randomized between a range of seconds. **`minUpdateListSeconds`** represents the minimum of seconds to consider, and **`maxUpdateListSeconds`** represents the maximum.
        
        ---
      - ~~~
        paddingCharacter
        ~~~      
          It is the padding character used to pad the console log output.

        ---
        ---

In **/project-01-group-04/scripts/library.js** all the features are arrow functions:

  - Feature 1: 
    ~~~
    let randomNumber = (min, max) => {}
    ~~~
    This function generates a random number within a given range. It has two parameters, a minimum number and a maximum number that delimitate the range of possible numbers. It has two parameters: `min`, which represents the minimum integer number allowed, and `max`, which represents the maximum integer number allowed. It utilizes the MATH functions `Math.ceil()` that rounds up a number to its nearest integer, `Math.floor()` that rounds down a number to its nearest integer, and `Math.random()`that returns a random number.

    ---
  - Feature 2:
    ~~~
    let chooseItem = () => {}
    ~~~
    This function gets a random item from an array of possible choices:
     - We have created an array of strings (the items). 
     - Then the function uses the `randomNumber()` function to gets a number, within the range that starts from 0 and ends with the array length - 1. 
     - The random number is used as the index of the array and the function returns the value in the array that corresponds to that index. 

    ---
  - Feature 3:
    ~~~
    let ID = () => {}
    ~~~
    This function generates an unique ID that will be assigned in every item, starting from a given global number (sumID = 1). In the function we have declared a new variable, `uniqueId`, and assigned to it the value of `sumID`. Then the function increases the value of `sumID`, and returns the value of `uniqueId`. 

    ---
  - Feature 4: 
    ~~~
    let randomDate = (start, end) => {}
    ~~~
      This function has two parameters, `start`, a date object that represents the minimum date allowed (inclusive), and `end`, an other date object that represents the maximum date allowed (inclusive). Within the function a new local variable is created called `date`. This variable has a new date object assigned to it which is randomly generated through the use of `start`, `end` and the MATH function `Math.random()` that returns a random number.

    ---
  - Feature 5:
    ~~~
    let createNewItem = (startingDate) => {}
    ~~~
      This function has one parameter, `startingDate`, a date object that represents every week that passes in the program. In the function a new variable is declared: `item`, an object with these properties:
      - id -> its value, a number, is the returned value from the function `ID()`
      - name -> its value, a string, is the returned value from the function `chooseItem()`
      - expirationDate -> its value, a date object, is calculated using the function `randomDate`. The parameters passed are 
      > startingDate.setDate(startingDate.getDate()-10) as the START. With the getDate method we find the day of the program starting date, and we deduct 10 (a configurated number used to have new items that are already expired). Then with the method setDate() we set the day of the parameter as the value found. 
      > maxExpDate as the END, that is the maximum date allowed, it being the ending date of the program plus a week.
      - check -> its value is -1, because we check its value every time before printing the output of the program, starting from 0

    ---
  - Feature 6:
    ~~~
    let changeStatus = (startWeek) => {}
    ~~~
      This function is used to change the status of every item in the global array. The possible status are
      - "new", the item has arrived this week
      - "valid", the item is not expired and has been on the shelf for less than N (it is the configuration object property **itemLifeSpan**) weeks
      - "old", the item is not expired but has been on the shelf for more than N weeks
      - "expired", the item has expired (the date is older than the current week date)
      It has one parameter, `startWeek`, that is a date object indicating the current week in the program (it will be incremented every 7 days in the main.js). In the function there is a for loop that iterate through the global array of items. Inside the loop there is an if statement that checks if the current week in greater than the expiration date of the item (it uses the method `getTime()`). If so, the function changes the status property of the item in "expired". Otherwise, it checks another if statement: if the check property of the item is equal or greater than the number of week a product can stay on the shelves, the status is changed in "old". If the check property is lesser or if it is different than -1, the status is changed in "valid".      
      At the end the function increments the value of the check property. 

    ---
  - Feature 7:
    ~~~
    let removeItem = () => {{}
    ~~~
      This function removes an item from the global array, if its status is "old" or "expired". Inside the function there is a for loop used to iterate through the global array. Inside there is an if statement: if the property *status* of every item object is equal to the string "old" or "expired", the function removes it with the *splice* method. Then it sets the value of the variable *i* (used for the statements of the for loop) to -1 to start again from the index 0 of the array.

    ---
  - Feature 8:
    ~~~
    let paddingString = (word, paddingLength, character) => {}
    ~~~
      This function's aim is the padding of every string that will be printed in the console log output (thus the items' name and status). It has three parameters: 
      - *word*, a string that will be padded
      - *paddingLength*, the final length of the string after the padding
      - *character*, the character choosen to pad. It is configurated by the manager. 
      In the function we have declared a new variable, *difference*, ad we have assigned to it the result value of the difference between the final *paddingLenght* and the initial word length. The we have calculated the *sidePadding* by dividing *difference* per 2. This value represents how many character we have to add to each side of the word to padding it. The last new variable is *remainder*, the remainder of the division. If it is 0, the function uses the method *padEnd()* to add the character (using the value of *sidePadding*) choosen at the end of the word. Otherwise, the function does the same procedure but at the end it add +1 to have the same output of the words with an even length.        
      In every case, it uses the method *padStart()* to add the defined number of characters at the beginning of the word.      
      At the end the function returns the string padded, replacing all the spaces inside it (if any) with the choosen character. 

    ---
  - Feature 9:
    ~~~
    let paddingID = (identificator) => {}
    ~~~
      This function pads the unique ID of every item. It has one parameter, *identificator*, a number, that represents the unique ID. In the function we have declared a new variable, *padID*, that is the result of the following concatenation: `"00" + identificator`. So now every id has the same length.      
      At the end the function returns *padID* as a string, after applying the method *slice()* to return only the section starting at index -1 until index -3 (in this way padded two-digits number have the same length of one-digit numbers).

    ---
  - Feature 10:
    ~~~
    let paddingDate = (d) => {}
    ~~~
      This function pads every date in the program, given a date format in the configuration object. The function has one parameter, the date object to be padded. Inside there is an if statement: if the property "language" of the configuration object is equal to the string "IT", the function declares a new variable, an array of strings, containing the months in Italian. Then it sets a new variable, *days*, as the result of a concatenation: the day of the month of the passed date (sliced to get only the last two digits and concatenated with a string "0" before the number) plus the name of the month (taken from the array), plus the year of the specificied date. 
      Otherwise, if the property "language" of the configuration object is equal to the string "EN", the function does the same procedure but using an array of the months in English. At the end the function replaces all the empty spaces (if any) with the padding character configurated in the manager object, and it returns the string. 

    ---
  - Feature 11:
    ~~~
    let check = (num) => {}
    ~~~
      This function checks a number, its parameter. It will be used in the console log output to print the checks of every item as required. In the function: 
      - we have declared a new variable, *control*
      - we have written an if statement. If the number passed to the function is different than 1, we assigne to *control* the string " checks". Otherwise, we assigne the string " check ".        
      At the end the function returns the string *controL*.

    ---
  - Feature 12:
    ~~~
    let print = () => {}
    ~~~
    This function prints the supermarket list with all the rules required. It uses the functions:
    - paddingID()
    - paddingString()
    - paddingDate()
    - check()
    Inside the function we have used the *map()* method, that calls a defined callback function on each element of the global array of items. So, for each element of the array it checks with if statement the status of every item, to change the colored output with the CSS (more info on the bonus section), and for every if statement it logs the id of the items, padded using the function *paddingID*, and with the CSS style assigned to it (explained in the bonus section), and it concatenates this string with:
    - the name of every item, padded using the function *paddingString*
    - the expiration date, padded using the function *paddingDate*
    - the status, padded using the function *paddingString*
    - the check of every item, using the function *check* to change the output based on the number of checks
  
    ---
    ---

In **/project-01-group-04/scripts/variables.js** there are no features delivered, but only the declaration of all the used variables that are not configurated by the manager.        

  ---
  ---

In **/project-01-group-04/scripts/main.js**:
  - Feature 1: **scheduling of the function print to delay the console log output**     
    ~~~
    let mySetInterval = () => {} 
    ~~~
    In the function *mySetInterval()* we have written a for loop that iterates through the number of weeks the program runs. Inside the for loop we have used *setTimeout()* to schedule for one time an anonymous function. In this function there are:
    - a for loop to iterate through all the new items created every week and to generate new items every week, using the *createNewItem()* function with as parameter *startWeek* (the first time of the loop it's the current date plus a number of days configurated by the manager). 
    - a series of console log to format the output (an empty space and then a series of "-" characters) and a console log of the actual week of the program -> *startWeek*, padded with the function *paddingDate()*
    - then there is the call to the function *changeStatus()* to change the property status in that week (always *startWeek*)
    - the call to the function *print()*
    - the call to the function *removeItem()*
    - a series of console log to format the output (an empty space, then the string "Filtered", to indicate the expired and old items that will be listed below the string, and a series of "-" characters)
    - again the call to the function *print()*
    - the edit of *startWeek*, adding to it 7 days (the variable *dayWeeK*) to go on with the program every week

    This anonymous function is scheduled to start after a random number of seconds, between a range of milliseconds set in the configuration object, calculated using the function *randomNumber()*.     

    At the end the function *mySetInterval* is called.

    ---

---

## Bonuses delivered
Bonus 1 and Bonus 2, described below.  
Attention!  
All two bonuses cannot be used at the same time. If the user removes a product clicking on it, if he also wants to sort the columns, the product will return with the previous status.

### Bonus 1
Sort each column of the list when the user clicks on the column title:

---

### Bonus 2
Items can have an additional state "removed" which means that the item has been manually removed by the supermarket manager

---

## Browser compatibility

The index.html file has been validated on [The W3C Markup Validation Service](https://validator.w3.org/).  
The style.css file has benn validated on [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).     

Browser Compatibility:
- Chrome V102.0.5005.115 (64bit): tested and working.
- Firefox V
- Edge V
- Opera V
- Brave V

---

## External resources     

- [Choose a license](https://choosealicense.com/)
- [Google font](https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap)

---
>## Contect information
>- marco.parisi@edu.itspiemonte.it
>- lorenzo.trabbia@edu.itspiemonte.it
>- giampietro.piras@edu.itspiemonte.it
>- lorenzo.lombardo2@edu.itspiemonte.it
>---
___
## License 

License: there is a file LICENSE.txt that contains an open source license. The template is taken from an online generator, for more info check the link in the external resources section. 

## Authors     

- Marco Parisi 
- Lorenzo Trabbia 
- Giampietro Piras 
- Lorenzo Lombardo 

---

## Changelog and version history  
For this project we used a mix of git version control and cloud backups via Google Drive. The git history is embedded in the project folder and be verified (note that some people may have less commits than others, this is due to the mixed usage of the two different tools, and is something that should be improved for future projects).
