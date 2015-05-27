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

	__webpack_require__(1);

	var body = $("html,body");

	var width = 160;
	var height = 120;

	var ratio = height / width;

	$(function () {
	    $(".anchor").click(function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var top = $($(this).attr("href")).offset().top - 70;
	        body.animate({
	            scrollTop: top
	        }, 500);
	    });

	    $(".nav-1").hover(function () {
	        var ul = $(this).children("ul");
	        if (ul != undefined) {
	            ul.css("display", "block").css("opacity", 0)
	                .stop(true)
	                .animate({
	                    opacity: 1
	                }, {
	                    duration: 500
	                });
	        }
	    }, function () {
	        var ul = $(this).children("ul");
	        if (ul != undefined) {
	            ul.stop(true)
	                .animate({
	                    opacity: 0
	                }, {
	                    duration: 500,
	                    complete: function () {
	                        ul.css("display", "none");
	                    }
	                });
	        }
	    });

	    $("article section ul li a").hover(function (e) {
	        var isTopRightCorner = ratio * (e.pageX - $(this).offset().left) + $(this).offset().top > e.pageY;
	        var isTopLeftCorner = $(this).offset().top - ratio * (e.pageX - $(this).offset().left - width) > e.pageY;

	        var cover = $(this).children("div");

	        if (isTopRightCorner && isTopLeftCorner) {//from top
	            cover.css("top", "0").css("left", "0").css("height", "0").css("width", width + "px");
	            cover.stop(true).animate({
	                "height": height + "px"
	            }, 200);
	        } else if (isTopLeftCorner) {//from left
	            cover.css("top", "0").css("left", "0").css("height", height + "px").css("width", "0");
	            cover.stop(true).animate({
	                "width": width + "px"
	            }, 200);
	        } else if (isTopRightCorner) {// from right
	            cover.css("top", "0").css("left", width + "px").css("height", height + "px").css("width", "0");
	            cover.stop(true).animate({
	                "left": "0",
	                "width": width + "px"
	            }, 200);
	        } else {//from bottom
	            cover.css("top", height + "px").css("left", "0").css("height", "0").css("width", width + "px");
	            cover.stop(true).animate({
	                "top": "0",
	                "height": height + "px"
	            }, 200);
	        }
	        $(this).children("span").stop(true).animate({
	            "font-size": "18px",
	            "padding-left": "5px",
	            "padding-right": "5px"
	        }, 200);
	    }, function (e) {
	        var isTopRightCorner = ratio * (e.pageX - $(this).offset().left) + $(this).offset().top > e.pageY;
	        var isTopLeftCorner = $(this).offset().top - ratio * (e.pageX - $(this).offset().left - width) > e.pageY;

	        var cover = $(this).children("div");

	        if (isTopRightCorner && isTopLeftCorner) {//from top
	            cover.stop(true).animate({
	                "top": "0",
	                "height": "0"
	            }, 200);
	        } else if (isTopLeftCorner) {//from left
	            cover.stop(true).animate({
	                "left": "0",
	                "width": "0"
	            }, 200);
	        } else if (isTopRightCorner) {// from right
	            cover.stop(true).animate({
	                "left": width + "px",
	                "width": "0"
	            }, 200);
	        } else {//from bottom
	            cover.stop(true).animate({
	                "top": height + "px",
	                "height": "0"
	            }, 200);
	        }
	        $(this).children("span").stop(true).animate({
	            fontSize: "16px",
	            "padding-left": "15px",
	            "padding-right": "15px"
	        }, 200);
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, "* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Segoe UI Webfont\", \"Microsoft YaHei\", Arial, sans-serif;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\nnav {\n  background-color: #000000;\n  z-index: 1;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n}\n.nav-1 {\n  float: left;\n}\n.nav-1 ul {\n  position: absolute;\n  display: none;\n  background-color: #000000;\n}\n.nav-1 ul li {\n  clear: both;\n  width: 100%;\n}\n.anchor {\n  display: block;\n  padding: 15px 20px;\n  font-size: 16px;\n  color: white;\n  transition: font-size 0.5s;\n  -moz-transition: font-size 0.5s;\n  -webkit-transition: font-size 0.5s;\n  -o-transition: font-size 0.5s;\n}\n.anchor:link {\n  color: white;\n}\n.anchor:hover {\n  text-decoration: underline;\n  background-color: #e5e5e5;\n  font-size: 18px;\n  color: #000000;\n}\n.anchor:active {\n  text-decoration: underline;\n}\narticle {\n  position: absolute;\n  left: 100px;\n  right: 100px;\n  top: 70px;\n  margin-bottom: 50px;\n  border: 1px #000000 solid;\n  border-radius: 5px;\n  padding: 25px;\n  background-color: #fbfbfb;\n}\narticle section {\n  margin: 20px 0;\n  border: 1px #000000 solid;\n  border-radius: 5px;\n  padding: 25px;\n}\narticle section ul li {\n  float: left;\n  border: 1px black solid;\n  border-radius: 3px;\n  margin: 10px;\n  text-align: center;\n}\narticle section ul li a {\n  width: 160px;\n  height: 120px;\n  padding: 15px;\n  color: #000000;\n  display: block;\n  position: relative;\n}\narticle section ul li a div {\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 120px;\n  background-color: #00b38a;\n  color: white;\n  position: absolute;\n  opacity: 0.5;\n}\narticle section ul li a:link {\n  color: #000000;\n}\narticle section ul li a:hover {\n  text-decoration: underline;\n  background-color: #e5e5e5;\n}\narticle section ul li a:active {\n  text-decoration: underline;\n}\narticle section ul li a:visited {\n  color: #000000;\n}\narticle section ul:before {\n  content: \" \";\n  display: table;\n}\narticle section ul:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n", ""]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }
/******/ ]);