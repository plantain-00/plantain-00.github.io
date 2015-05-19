/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var math = __webpack_require__(1);
	document.write(math.add(1, 3));

	$.get("./templates/users.handlebars", {}, function (template) {
	    var userListTemplate = Handlebars.compile(template);

	    var userList = [{
	        name: "John",
	        age: 12,
	        gender: true
	    }, {
	        name: "Tom",
	        age: 23,
	        gender: false
	    }];

	    $("#userList").html(userListTemplate(userList));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	function add(a, b) {
	    return a + b;
	}
	exports.add = add;

/***/ }
/******/ ]);