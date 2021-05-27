/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const usersList = document.querySelector(\"#users-list\");\nconst restaurantsList = document.querySelector(\"#restaurants-list\");\nconst reservationsList = document.querySelector(\"#reservations-list\");\n\nrestaurantsList.addEventListener(\"click\", async (ev) => {\n  if (ev.target.tagName === \"LI\") {\n    const restaurantId = ev.target.getAttribute(\"data-id\");\n    const userId = window.location.hash.slice(1);\n    await fetch(`/api/users/${userId}/reservations`, {\n      body: JSON.stringify({ restaurantId }),\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n    });\n    loadReservations();\n  }\n});\n\nlet users;\n\nconst renderUsers = () => {\n  const userId = window.location.hash.slice(1);\n  const html = users\n    .map((user) => {\n      return `\n          <li class='${userId === user.id ? \"selected\" : \"\"}'>\n            <a href='#${user.id}'>\n            ${user.name}\n            </a>\n          </li>\n        `;\n    })\n    .join(\"\");\n  usersList.innerHTML = html;\n};\n\nconst loadUsers = async () => {\n  const response = await fetch(\"/api/users\");\n  users = await response.json();\n  renderUsers();\n};\n\nconst loadRestaurants = async () => {\n  const response = await fetch(\"/api/restaurants\");\n  const data = await response.json();\n  const html = data\n    .map((restaurant) => {\n      return `\n        <li data-id='${restaurant.id}'>\n          ${restaurant.name}\n        </li>\n      `;\n    })\n    .join(\"\");\n  restaurantsList.innerHTML = html;\n};\n\nconst loadReservations = async () => {\n  const userId = window.location.hash.slice(1);\n  const response = await fetch(`/api/users/${userId}/reservations`);\n  const reservations = await response.json();\n  const html = reservations\n    .map((reservation) => {\n      return `\n        <li>\n          ${reservation.restaurant.name}\n        </li>\n      `;\n    })\n    .join(\"\");\n  reservationsList.innerHTML = html;\n};\n\nloadUsers();\nloadRestaurants();\nloadReservations();\n\nwindow.addEventListener(\"hashchange\", () => {\n  renderUsers();\n  loadReservations();\n});\n\n\n//# sourceURL=webpack://acme-reservation-planner-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;