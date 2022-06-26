# project-02-group-01
This project is a dynamic web page that has the purpose of displaying a navigable weekly list of supermarket products with their ID, name, status, expiration date and checks.

---

- [Market project - group *](#market-project---group-)
  - [Usage](#usage)
  - [Configuration and technical characteristics](#configuration-and-technical-characteristics)
    - [Additional technicalities](#additional-technicalities)
  - [Files and project structure](#files-and-project-structure)
  - [Features delivered](#features-delivered)
  - [General features](#general-features)
  - [Bonuses delivered](#bonuses-delivered)
    - [Bonus 1](#bonus-1)
    - [Bonus 2](#bonus-2)
  - [Browser compatibility //TODO](#browser-compatibility-todo)
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

Below are described all the features that were delivered in accordance with the project documentation.

---

## General features


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

All the html files have been validated on [The W3C Markup Validation Service](https://validator.w3.org/).
All the css files have been validated on [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).

Browser Compatibility:
 - Chrome v103.0.5060.53: tested and fully compatible;
 - Firefox
 - Edge
 - Opera
 - Brave

---

## External resources

[Jsdoc template](https://github.com/braintree/jsdoc-template)  
[Google font](https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap)

---

## License and contact information

License: there is a file LICENSE that contains an open source license.
The template is taken from an online generator, to have more info
check the link in the [External resources](#external-resources) section.



Contact information:

-   marco.parisi@edu.itspiemonte.it
-   lorenzo.trabbia@edu.itspiemonte.it
-   giampietro.piras@edu.itspiemonte.it
-   lorenzo.lombardo2@edu.itspiemonte.it

---

## Authors

-   Marco Parisi, developer
-   Lorenzo Trabbia, developer
-   Giampietro Piras, developer
-   Lorenzo Lombardo, developer

---

## Changelog and version history

For this project we used a mix of git version control and cloud backups via Google Drive. The git history is embedded in the project folder and be verified (note that some people may have less commits than others, this is due to the mixed usage of the two different tools, and is something that should be improved for future projects).
