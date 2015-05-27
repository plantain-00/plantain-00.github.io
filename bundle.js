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
	var template = __webpack_require__(4);
	var data = __webpack_require__(3);

	$("#container").html(template(data));

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
	var update = __webpack_require__(5)(content, {});
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

	exports = module.exports = __webpack_require__(6)();
	exports.push([module.id, "* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Segoe UI Webfont\", \"Microsoft YaHei\", Arial, sans-serif;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\nnav {\n  background-color: #000000;\n  z-index: 1;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n}\n.nav-1 {\n  float: left;\n}\n.nav-1 ul {\n  position: absolute;\n  display: none;\n  background-color: #000000;\n}\n.nav-1 ul li {\n  clear: both;\n  width: 100%;\n}\n.anchor {\n  display: block;\n  padding: 15px 20px;\n  font-size: 16px;\n  color: white;\n  transition: font-size 0.5s;\n  -moz-transition: font-size 0.5s;\n  -webkit-transition: font-size 0.5s;\n  -o-transition: font-size 0.5s;\n}\n.anchor:link {\n  color: white;\n}\n.anchor:hover {\n  text-decoration: underline;\n  background-color: #e5e5e5;\n  font-size: 18px;\n  color: #000000;\n}\n.anchor:active {\n  text-decoration: underline;\n}\narticle {\n  position: absolute;\n  left: 100px;\n  right: 100px;\n  top: 70px;\n  margin-bottom: 50px;\n  border: 1px #000000 solid;\n  border-radius: 5px;\n  padding: 25px;\n  background-color: #fbfbfb;\n}\narticle section {\n  margin: 20px 0;\n  border: 1px #000000 solid;\n  border-radius: 5px;\n  padding: 25px;\n}\narticle section ul li {\n  float: left;\n  border: 1px black solid;\n  border-radius: 3px;\n  margin: 10px;\n  text-align: center;\n}\narticle section ul li a {\n  width: 160px;\n  height: 120px;\n  padding: 15px;\n  color: #000000;\n  display: block;\n  position: relative;\n}\narticle section ul li a div {\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 120px;\n  background-color: #00b38a;\n  color: white;\n  position: absolute;\n  opacity: 0.5;\n}\narticle section ul li a:link {\n  color: #000000;\n}\narticle section ul li a:hover {\n  text-decoration: underline;\n  background-color: #e5e5e5;\n}\narticle section ul li a:active {\n  text-decoration: underline;\n}\narticle section ul li a:visited {\n  color: #000000;\n}\narticle section ul:before {\n  content: \" \";\n  display: table;\n}\narticle section ul:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n", ""]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
		{
			"name": "playthings",
			"content": [
				{
					"name": "underscore.js",
					"href": "./playthings/underscorejs/index.html"
				},
				{
					"name": "zepto + vue + webpack + handlebars",
					"href": "./playthings/zepto_vue_webpack_handlebars/index.html"
				},
				{
					"name": "requirejs",
					"href": "./playthings/requirejs/index.html"
				},
				{
					"name": "checkbox and radio",
					"href": "./playthings/checkbox-and-radio/index.html"
				},
				{
					"name": "buttons",
					"href": "./playthings/buttons/index.html"
				},
				{
					"name": "css-test",
					"href": "./playthings/css-test/index.html"
				},
				{
					"name": "cancellable",
					"href": "./playthings/cancellable/index.html"
				},
				{
					"name": "dom-event",
					"href": "./playthings/dom-event/index.html"
				},
				{
					"name": "media-query",
					"href": "./playthings/media-query/index.html"
				},
				{
					"name": "animate-anchor",
					"href": "./playthings/animate-anchor/index.html"
				},
				{
					"name": "pop-out",
					"href": "./playthings/pop-out/index.html"
				},
				{
					"name": "animation",
					"href": "./playthings/animation/index.html"
				},
				{
					"name": "svg",
					"href": "./playthings/svg/index.html"
				},
				{
					"name": "gradient",
					"href": "./playthings/gradient/index.html"
				},
				{
					"name": "box-shadow",
					"href": "./playthings/box-shadow/index.html"
				},
				{
					"name": "clip image",
					"href": "./playthings/clip-image/index.html"
				},
				{
					"name": "hover",
					"href": "./playthings/hover/index.html"
				},
				{
					"name": "prompt",
					"href": "./playthings/prompt/index.html"
				},
				{
					"name": "float-navbar",
					"href": "./playthings/float-navbar/index.html"
				},
				{
					"name": "cover",
					"href": "./playthings/cover/index.html"
				},
				{
					"name": "2048",
					"href": "./playthings/2048/index.html"
				}
			]
		},
		{
			"name": "old demos",
			"href": "oldDemos",
			"children": [
				{
					"name": "date",
					"content": [
						{
							"name": "bootstrap-datepicker demo",
							"href": "./demos/bootstrap-datepicker/index.html"
						},
						{
							"name": "bootstrap-datetimepicker demo",
							"href": "./demos/bootstrap-datetimepicker/index.html"
						},
						{
							"name": "bootstrap-daterangepicker demo",
							"href": "./demos/bootstrap-daterangepicker/index.html"
						},
						{
							"name": "clockpicker demo",
							"href": "./demos/clockpicker/index.html"
						}
					]
				},
				{
					"name": "tags",
					"content": [
						{
							"name": "bootstrap-tags demo",
							"href": "./demos/bootstrap-tags/index.html"
						},
						{
							"name": "bootstrap-tagsinput demo",
							"href": "./demos/bootstrap-tagsinput/index.html"
						},
						{
							"name": "bootstrap-tagmanager demo",
							"href": "./demos/bootstrap-tagmanager/index.html"
						}
					]
				},
				{
					"name": "autocomplete",
					"content": [
						{
							"name": "jquery-autocomplete demo",
							"href": "./demos/jquery-autocomplete/index.html"
						},
						{
							"name": "magicsuggest demo",
							"href": "./demos/magicsuggest/index.htm"
						}
					]
				},
				{
					"name": "file",
					"content": [
						{
							"name": "jasny-bootstrap demo",
							"href": "./demos/jasny-bootstrap/index.html"
						},
						{
							"name": "bootstrap-fileinput demo",
							"href": "./demos/bootstrap-fileinput/index.html"
						}
					]
				},
				{
					"name": "editor",
					"content": [
						{
							"name": "bootstrap3-wysiwyg demo",
							"href": "./demos/bootstrap3-wysiwyg/index.html"
						},
						{
							"name": "summernote demo",
							"href": "./demos/summernote/index.html"
						}
					]
				},
				{
					"name": "select",
					"content": [
						{
							"name": "bootstrap-select demo",
							"href": "./demos/bootstrap-select/index.html"
						},
						{
							"name": "bootstrap-multiselect demo",
							"href": "./demos/bootstrap-multiselect/index.html"
						},
						{
							"name": "bootstrap-combobox demo",
							"href": "./demos/bootstrap-combobox/index.html"
						}
					]
				},
				{
					"name": "icons",
					"content": [
						{
							"name": "font-awesome demo",
							"href": "./demos/font-awesome/index.html"
						},
						{
							"name": "weather-icons demo",
							"href": "./demos/weather-icons/index.html"
						}
					]
				},
				{
					"name": "notice",
					"content": [
						{
							"name": "bootstrap-notify demo",
							"href": "./demos/bootstrap-notify/index.html"
						},
						{
							"name": "bootstrap-growl demo",
							"href": "./demos/bootstrap-growl/index.html"
						},
						{
							"name": "pnotify demo",
							"href": "./demos/pnotify/index.html"
						},
						{
							"name": "bootstrap3-dialog demo",
							"href": "./demos/bootstrap3-dialog/index.html"
						}
					]
				},
				{
					"name": "slider",
					"content": [
						{
							"name": "noUiSlider demo",
							"href": "./demos/noUiSlider/index.html"
						},
						{
							"name": "bootstrap-slider demo",
							"href": "./demos/bootstrap-slider/index.html"
						}
					]
				},
				{
					"name": "menu",
					"content": [
						{
							"name": "bootstrap-hover-dropdown demo",
							"href": "./demos/bootstrap-hover-dropdown/index.html"
						},
						{
							"name": "bootstrap-contextmenu demo",
							"href": "./demos/bootstrap-contextmenu/index.html"
						},
						{
							"name": "metisMenu demo",
							"href": "./demos/metisMenu/index.html"
						}
					]
				},
				{
					"name": "tree",
					"content": [
						{
							"name": "jstree demo",
							"href": "./demos/jstree/index.html"
						},
						{
							"name": "bootstrap-treeview demo",
							"href": "./demos/bootstrap-treeview/index.html"
						}
					]
				},
				{
					"name": "rating",
					"content": [
						{
							"name": "bootstrap-rating-input demo",
							"href": "./demos/bootstrap-rating-input/index.html"
						},
						{
							"name": "bootstrap-star-rating demo",
							"href": "./demos/bootstrap-star-rating/index.html"
						}
					]
				},
				{
					"name": "others",
					"content": [
						{
							"name": "bootstrap demo",
							"href": "./demos/bootstrap/index.html"
						},
						{
							"name": "chart.js demo",
							"href": "./demos/chart.js/index.html"
						},
						{
							"name": "html5 canvas demo",
							"href": "./demos/html5 canvas/index.html"
						},
						{
							"name": "js md5 demo",
							"href": "./demos/js md5/index.html"
						},
						{
							"name": "typing.js demo",
							"href": "./demos/typing.js/index.html"
						},
						{
							"name": "lightbox demo",
							"href": "./demos/lightbox/index.html"
						},
						{
							"name": "ladda-bootstrap demo",
							"href": "./demos/ladda-bootstrap/index.html"
						},
						{
							"name": "sortable demo",
							"href": "./demos/sortable/index.html"
						},
						{
							"name": "bootstrap-switch demo",
							"href": "./demos/bootstrap-switch/index.html"
						},
						{
							"name": "bootstrap-maxlength demo",
							"href": "./demos/bootstrap-maxlength/index.html"
						},
						{
							"name": "pick-a-color demo",
							"href": "./demos/pick-a-color/index.html"
						},
						{
							"name": "bootstrap-editable demo",
							"href": "./demos/bootstrap-editable/index.html"
						},
						{
							"name": "handlebars demo",
							"href": "./demos/handlebars/index.html"
						},
						{
							"name": "zepto.js demo",
							"href": "./demos/zeptojs/index.html"
						},
						{
							"name": "vue.js demo",
							"href": "./demos/vuejs/index.html"
						},
						{
							"name": "d3 demo",
							"href": "./demos/d3/index.html"
						},
						{
							"name": "timesheet demo",
							"href": "./demos/timesheet/index.html"
						},
						{
							"name": "primer demo",
							"href": "./demos/primer/index.html"
						}
					]
				}
			]
		},
		{
			"name": "old tips",
			"href": "oldTips",
			"content": [
				{
					"name": "C# tips",
					"href": "./CSharp tips.html"
				},
				{
					"name": "javascript tips",
					"href": "./javascript tips.html"
				},
				{
					"name": "my technical preferences",
					"href": "./my technical preferences.html"
				}
			]
		},
		{
			"name": "old blogs",
			"href": "oldBlogs",
			"content": [
				{
					"name": "best practice of writing js and css with typescript and LESS",
					"href": "./best practice of writing js and css with typescript and LESS.html"
				},
				{
					"name": "best practice of .net's multi-thread and multi-core programming",
					"href": "./best practice of .net's multi-thread and multi-core programming.html"
				},
				{
					"name": "ideas of considering a function as an object",
					"href": "./ideas of considering a function as an object.html"
				},
				{
					"name": "best practice of asp.net MVC",
					"href": "./best practice of asp.net MVC.html"
				},
				{
					"name": "best practice of entity framework",
					"href": "./best practice of entity framework.html"
				},
				{
					"name": "best practice of supporting as much browsers as possible at least price",
					"href": "./best practice of supporting as much browsers as possible at least price.html"
				}
			]
		}
	]

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(7);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "            <li class=\"nav-1\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "            </li>\n";
	},"2":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                    <a href=\"#"
	    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
	    + "\" class=\"anchor\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</a>\n";
	},"4":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                    <a href=\"#"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "\" class=\"anchor\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</a>\n";
	},"6":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "                    <ul>\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "                    </ul>\n";
	},"7":function(depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "");
	},"8":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                                <a href=\"#"
	    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
	    + "\" class=\"anchor\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</a>\n";
	},"10":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                                <a href=\"#"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "\" class=\"anchor\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</a>\n";
	},"12":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "        <section>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "        </section>\n";
	},"13":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                <h2 id=\""
	    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
	    + "\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</h2>\n";
	},"15":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                <h2 id=\""
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</h2>\n";
	},"17":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "                <ul>\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "                </ul>\n";
	},"18":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                        <li>\n                            <a href=\""
	    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
	    + "\">\n                                <span>"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</span>\n\n                                <div></div>\n                            </a>\n                        </li>\n";
	},"20":function(depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
	},"21":function(depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":this.program(22, data, 0),"inverse":this.program(24, data, 0),"data":data})) != null ? stack1 : "")
	    + "                    <ul>\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(26, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "                    </ul>\n";
	},"22":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                        <h3 id=\""
	    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
	    + "\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</h3>\n";
	},"24":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                        <h3 id=\""
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "\">"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</h3>\n";
	},"26":function(depth0,helpers,partials,data) {
	    var alias1=this.lambda, alias2=this.escapeExpression;

	  return "                            <li>\n                                <a href=\""
	    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
	    + "\">\n                                    <span>"
	    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
	    + "</span>\n\n                                    <div></div>\n                                </a>\n                            </li>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "<nav>\n    <ul>\n"
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </ul>\n</nav>\n<article>\n"
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</article>";
	},"useData":true});

/***/ },
/* 5 */
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
/* 6 */
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(8)['default'];


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;

	var _import = __webpack_require__(9);

	var base = _interopRequireWildcard(_import);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _SafeString = __webpack_require__(10);

	var _SafeString2 = _interopRequireWildcard(_SafeString);

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _import2 = __webpack_require__(12);

	var Utils = _interopRequireWildcard(_import2);

	var _import3 = __webpack_require__(13);

	var runtime = _interopRequireWildcard(_import3);

	var _noConflict = __webpack_require__(14);

	var _noConflict2 = _interopRequireWildcard(_noConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _SafeString2['default'];
	  hb.Exception = _Exception2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_noConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;

	var _import = __webpack_require__(12);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var VERSION = '3.0.1';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 6;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var isArray = Utils.isArray,
	    isFunction = Utils.isFunction,
	    toString = Utils.toString,
	    objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};

	  registerDefaultHelpers(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: logger,
	  log: log,

	  registerHelper: function registerHelper(name, fn) {
	    if (toString.call(name) === objectType) {
	      if (fn) {
	        throw new _Exception2['default']('Arg not supported with multiple helpers');
	      }
	      Utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (toString.call(name) === objectType) {
	      Utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _Exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  }
	};

	function registerDefaultHelpers(instance) {
	  instance.registerHelper('helperMissing', function () {
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} constuct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });

	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });

	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _Exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });

	  instance.registerHelper('if', function (conditional, options) {
	    if (isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });

	  instance.registerHelper('with', function (context, options) {
	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!Utils.isEmpty(context)) {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
	        options = { data: data };
	      }

	      return fn(context, options);
	    } else {
	      return options.inverse(this);
	    }
	  });

	  instance.registerHelper('log', function (message, options) {
	    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
	    instance.log(level, message);
	  });

	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	}

	var logger = {
	  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

	  // State enum
	  DEBUG: 0,
	  INFO: 1,
	  WARN: 2,
	  ERROR: 3,
	  level: 1,

	  // Can be overridden in the host environment
	  log: function log(level, message) {
	    if (typeof console !== 'undefined' && logger.level <= level) {
	      var method = logger.methodMap[level];
	      (console[method] || console.log).call(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports.logger = logger;
	var log = logger.log;

	exports.log = log;

	function createFrame(object) {
	  var frame = Utils.extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	/* [args, ]options */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// Build out our basic SafeString type
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;

	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  '\'': '&#x27;',
	  '`': '&#x60;'
	};

	var badChars = /[&<>"'`]/g,
	    possible = /[&<>"'`]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	var isFunction;
	exports.isFunction = isFunction;
	/*eslint-enable func-style, no-var */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};exports.isArray = isArray;

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;
	exports.checkRevision = checkRevision;

	// TODO: Remove this line and break up compilePartial

	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _import = __webpack_require__(12);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(11);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(9);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
	          compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
	      throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _Exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      return templateSpec[i];
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      depths = options.depths ? [context].concat(options.depths) : [context];
	    }

	    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _Exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _Exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
	  }
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    partial = options.partials[options.name];
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;

	  if (partial === undefined) {
	    throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;
	/*global window */

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);