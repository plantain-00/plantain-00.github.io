!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(2);var a=n(1),r=n(4);$("body").prepend(a(r));var o=$("html,body"),i=160,s=120,l=s/i;$(function(){$(".anchor").click(function(e){e.preventDefault(),e.stopPropagation();var t=$($(this).attr("href")).offset().top-70;o.animate({scrollTop:t},500)}),$(".nav-1").hover(function(){var e=$(this).children("ul");void 0!=e&&e.css("display","block").css("opacity",0).stop(!0).animate({opacity:1},{duration:500})},function(){var e=$(this).children("ul");void 0!=e&&e.stop(!0).animate({opacity:0},{duration:500,complete:function(){e.css("display","none")}})}),$("article section ul li a").hover(function(e){var t=l*(e.pageX-$(this).offset().left)+$(this).offset().top>e.pageY,n=$(this).offset().top-l*(e.pageX-$(this).offset().left-i)>e.pageY,a=$(this).children("div");t&&n?(a.css("top","0").css("left","0").css("height","0").css("width",i+"px"),a.stop(!0).animate({height:s+"px"},200)):n?(a.css("top","0").css("left","0").css("height",s+"px").css("width","0"),a.stop(!0).animate({width:i+"px"},200)):t?(a.css("top","0").css("left",i+"px").css("height",s+"px").css("width","0"),a.stop(!0).animate({left:"0",width:i+"px"},200)):(a.css("top",s+"px").css("left","0").css("height","0").css("width",i+"px"),a.stop(!0).animate({top:"0",height:s+"px"},200)),$(this).children("span").stop(!0).animate({"font-size":"18px","padding-left":"5px","padding-right":"5px"},200)},function(e){var t=l*(e.pageX-$(this).offset().left)+$(this).offset().top>e.pageY,n=$(this).offset().top-l*(e.pageX-$(this).offset().left-i)>e.pageY,a=$(this).children("div");t&&n?a.stop(!0).animate({top:"0",height:"0"},200):n?a.stop(!0).animate({left:"0",width:"0"},200):t?a.stop(!0).animate({left:i+"px",width:"0"},200):a.stop(!0).animate({top:s+"px",height:"0"},200),$(this).children("span").stop(!0).animate({fontSize:"16px","padding-left":"15px","padding-right":"15px"},200)})})},function(e,t,n){var a=n(7);e.exports=(a["default"]||a).template({1:function(e,t,n,a){var r;return'            <li class="nav-1">\n'+(null!=(r=t["if"].call(e,null!=e?e.href:e,{name:"if",hash:{},fn:this.program(2,a,0),inverse:this.program(4,a,0),data:a}))?r:"")+(null!=(r=t["if"].call(e,null!=e?e.children:e,{name:"if",hash:{},fn:this.program(6,a,0),inverse:this.noop,data:a}))?r:"")+"            </li>\n"},2:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                    <a href="#'+o(r(null!=e?e.href:e,e))+'" class="anchor">'+o(r(null!=e?e.name:e,e))+"</a>\n"},4:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                    <a href="#'+o(r(null!=e?e.name:e,e))+'" class="anchor">'+o(r(null!=e?e.name:e,e))+"</a>\n"},6:function(e,t,n,a){var r;return"                    <ul>\n"+(null!=(r=t.each.call(e,null!=e?e.children:e,{name:"each",hash:{},fn:this.program(7,a,0),inverse:this.noop,data:a}))?r:"")+"                    </ul>\n"},7:function(e,t,n,a){var r;return null!=(r=t["if"].call(e,null!=e?e.href:e,{name:"if",hash:{},fn:this.program(8,a,0),inverse:this.program(10,a,0),data:a}))?r:""},8:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                                <a href="#'+o(r(null!=e?e.href:e,e))+'" class="anchor">'+o(r(null!=e?e.name:e,e))+"</a>\n"},10:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                                <a href="#'+o(r(null!=e?e.name:e,e))+'" class="anchor">'+o(r(null!=e?e.name:e,e))+"</a>\n"},12:function(e,t,n,a){var r;return"        <section>\n"+(null!=(r=t["if"].call(e,null!=e?e.href:e,{name:"if",hash:{},fn:this.program(13,a,0),inverse:this.program(15,a,0),data:a}))?r:"")+(null!=(r=t["if"].call(e,null!=e?e.content:e,{name:"if",hash:{},fn:this.program(17,a,0),inverse:this.noop,data:a}))?r:"")+(null!=(r=t["if"].call(e,null!=e?e.children:e,{name:"if",hash:{},fn:this.program(20,a,0),inverse:this.noop,data:a}))?r:"")+"        </section>\n"},13:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                <h2 id="'+o(r(null!=e?e.href:e,e))+'">'+o(r(null!=e?e.name:e,e))+"</h2>\n"},15:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                <h2 id="'+o(r(null!=e?e.name:e,e))+'">'+o(r(null!=e?e.name:e,e))+"</h2>\n"},17:function(e,t,n,a){var r;return"                <ul>\n"+(null!=(r=t.each.call(e,null!=e?e.content:e,{name:"each",hash:{},fn:this.program(18,a,0),inverse:this.noop,data:a}))?r:"")+"                </ul>\n"},18:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                        <li>\n                            <a href="'+o(r(null!=e?e.href:e,e))+'">\n                                <span>'+o(r(null!=e?e.name:e,e))+"</span>\n\n                                <div></div>\n                            </a>\n                        </li>\n"},20:function(e,t,n,a){var r;return null!=(r=t.each.call(e,null!=e?e.children:e,{name:"each",hash:{},fn:this.program(21,a,0),inverse:this.noop,data:a}))?r:""},21:function(e,t,n,a){var r;return(null!=(r=t["if"].call(e,null!=e?e.href:e,{name:"if",hash:{},fn:this.program(22,a,0),inverse:this.program(24,a,0),data:a}))?r:"")+"                    <ul>\n"+(null!=(r=t.each.call(e,null!=e?e.content:e,{name:"each",hash:{},fn:this.program(26,a,0),inverse:this.noop,data:a}))?r:"")+"                    </ul>\n"},22:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                        <h3 id="'+o(r(null!=e?e.href:e,e))+'">'+o(r(null!=e?e.name:e,e))+"</h3>\n"},24:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                        <h3 id="'+o(r(null!=e?e.name:e,e))+'">'+o(r(null!=e?e.name:e,e))+"</h3>\n"},26:function(e,t,n,a){var r=this.lambda,o=this.escapeExpression;return'                            <li>\n                                <a href="'+o(r(null!=e?e.href:e,e))+'">\n                                    <span>'+o(r(null!=e?e.name:e,e))+"</span>\n\n                                    <div></div>\n                                </a>\n                            </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){var r;return"<nav>\n    <ul>\n"+(null!=(r=t.each.call(e,e,{name:"each",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?r:"")+"    </ul>\n</nav>\n<article>\n"+(null!=(r=t.each.call(e,e,{name:"each",hash:{},fn:this.program(12,a,0),inverse:this.noop,data:a}))?r:"")+"</article>"},useData:!0})},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.id,a,""]]);n(5)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,'.nav-1 ul,nav{background-color:#000}.anchor,.anchor:link{color:#fff}.nav-1 ul,article{position:absolute}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;font-family:"Segoe UI Webfont","Microsoft YaHei",Arial,sans-serif}li{list-style:none}a{text-decoration:none}.anchor:active,.anchor:hover,article section ul li a:active{text-decoration:underline}nav{z-index:1;position:fixed;left:0;top:0;right:0}.nav-1{float:left}.nav-1 ul{display:none}.nav-1 ul li{clear:both;width:100%}.anchor{display:block;padding:15px 20px;font-size:16px;transition:font-size .5s;-moz-transition:font-size .5s;-webkit-transition:font-size .5s;-o-transition:font-size .5s}article,article section{border:1px solid #000;border-radius:5px;padding:25px}.anchor:hover{background-color:#e5e5e5;font-size:18px;color:#000}article{left:100px;right:100px;top:70px;margin-bottom:50px;background-color:#fbfbfb}article section{margin:20px 0}article section ul li{float:left;border:1px solid #000;border-radius:3px;margin:10px;text-align:center}article section ul li a{width:160px;height:120px;padding:15px;color:#000;display:block;position:relative}article section ul:after,article section ul:before{content:" ";display:table}article section ul li a div{left:0;top:0;width:0;height:120px;background-color:#00b38a;color:#fff;position:absolute;opacity:.5}article section ul li a:link,article section ul li a:visited{color:#000}article section ul li a:hover{text-decoration:underline;background-color:#e5e5e5}article section ul:after{clear:both}',""])},function(e,t,n){e.exports=[{name:"playthings",content:[{name:"underscore.js",href:"./playthings/underscorejs/index.html"},{name:"zepto + vue + webpack + handlebars",href:"./playthings/zepto_vue_webpack_handlebars/index.html"},{name:"requirejs",href:"./playthings/requirejs/index.html"},{name:"checkbox and radio",href:"./playthings/checkbox-and-radio/index.html"},{name:"buttons",href:"./playthings/buttons/index.html"},{name:"css-test",href:"./playthings/css-test/index.html"},{name:"cancellable",href:"./playthings/cancellable/index.html"},{name:"dom-event",href:"./playthings/dom-event/index.html"},{name:"media-query",href:"./playthings/media-query/index.html"},{name:"animate-anchor",href:"./playthings/animate-anchor/index.html"},{name:"pop-out",href:"./playthings/pop-out/index.html"},{name:"animation",href:"./playthings/animation/index.html"},{name:"svg",href:"./playthings/svg/index.html"},{name:"gradient",href:"./playthings/gradient/index.html"},{name:"box-shadow",href:"./playthings/box-shadow/index.html"},{name:"clip image",href:"./playthings/clip-image/index.html"},{name:"hover",href:"./playthings/hover/index.html"},{name:"prompt",href:"./playthings/prompt/index.html"},{name:"float-navbar",href:"./playthings/float-navbar/index.html"},{name:"cover",href:"./playthings/cover/index.html"},{name:"2048",href:"./playthings/2048/index.html"}]},{name:"old demos",href:"oldDemos",children:[{name:"date",content:[{name:"bootstrap-datepicker demo",href:"./demos/bootstrap-datepicker/index.html"},{name:"bootstrap-datetimepicker demo",href:"./demos/bootstrap-datetimepicker/index.html"},{name:"bootstrap-daterangepicker demo",href:"./demos/bootstrap-daterangepicker/index.html"},{name:"clockpicker demo",href:"./demos/clockpicker/index.html"}]},{name:"tags",content:[{name:"bootstrap-tags demo",href:"./demos/bootstrap-tags/index.html"},{name:"bootstrap-tagsinput demo",href:"./demos/bootstrap-tagsinput/index.html"},{name:"bootstrap-tagmanager demo",href:"./demos/bootstrap-tagmanager/index.html"}]},{name:"autocomplete",content:[{name:"jquery-autocomplete demo",href:"./demos/jquery-autocomplete/index.html"},{name:"magicsuggest demo",href:"./demos/magicsuggest/index.htm"}]},{name:"file",content:[{name:"jasny-bootstrap demo",href:"./demos/jasny-bootstrap/index.html"},{name:"bootstrap-fileinput demo",href:"./demos/bootstrap-fileinput/index.html"}]},{name:"editor",content:[{name:"bootstrap3-wysiwyg demo",href:"./demos/bootstrap3-wysiwyg/index.html"},{name:"summernote demo",href:"./demos/summernote/index.html"}]},{name:"select",content:[{name:"bootstrap-select demo",href:"./demos/bootstrap-select/index.html"},{name:"bootstrap-multiselect demo",href:"./demos/bootstrap-multiselect/index.html"},{name:"bootstrap-combobox demo",href:"./demos/bootstrap-combobox/index.html"}]},{name:"icons",content:[{name:"font-awesome demo",href:"./demos/font-awesome/index.html"},{name:"weather-icons demo",href:"./demos/weather-icons/index.html"}]},{name:"notice",content:[{name:"bootstrap-notify demo",href:"./demos/bootstrap-notify/index.html"},{name:"bootstrap-growl demo",href:"./demos/bootstrap-growl/index.html"},{name:"pnotify demo",href:"./demos/pnotify/index.html"},{name:"bootstrap3-dialog demo",href:"./demos/bootstrap3-dialog/index.html"}]},{name:"slider",content:[{name:"noUiSlider demo",href:"./demos/noUiSlider/index.html"},{name:"bootstrap-slider demo",href:"./demos/bootstrap-slider/index.html"}]},{name:"menu",content:[{name:"bootstrap-hover-dropdown demo",href:"./demos/bootstrap-hover-dropdown/index.html"},{name:"bootstrap-contextmenu demo",href:"./demos/bootstrap-contextmenu/index.html"},{name:"metisMenu demo",href:"./demos/metisMenu/index.html"}]},{name:"tree",content:[{name:"jstree demo",href:"./demos/jstree/index.html"},{name:"bootstrap-treeview demo",href:"./demos/bootstrap-treeview/index.html"}]},{name:"rating",content:[{name:"bootstrap-rating-input demo",href:"./demos/bootstrap-rating-input/index.html"},{name:"bootstrap-star-rating demo",href:"./demos/bootstrap-star-rating/index.html"}]},{name:"others",content:[{name:"bootstrap demo",href:"./demos/bootstrap/index.html"},{name:"chart.js demo",href:"./demos/chart.js/index.html"},{name:"html5 canvas demo",href:"./demos/html5 canvas/index.html"},{name:"js md5 demo",href:"./demos/js md5/index.html"},{name:"typing.js demo",href:"./demos/typing.js/index.html"},{name:"lightbox demo",href:"./demos/lightbox/index.html"},{name:"ladda-bootstrap demo",href:"./demos/ladda-bootstrap/index.html"},{name:"sortable demo",href:"./demos/sortable/index.html"},{name:"bootstrap-switch demo",href:"./demos/bootstrap-switch/index.html"},{name:"bootstrap-maxlength demo",href:"./demos/bootstrap-maxlength/index.html"},{name:"pick-a-color demo",href:"./demos/pick-a-color/index.html"},{name:"bootstrap-editable demo",href:"./demos/bootstrap-editable/index.html"},{name:"handlebars demo",href:"./demos/handlebars/index.html"},{name:"zepto.js demo",href:"./demos/zeptojs/index.html"},{name:"vue.js demo",href:"./demos/vuejs/index.html"},{name:"d3 demo",href:"./demos/d3/index.html"},{name:"timesheet demo",href:"./demos/timesheet/index.html"},{name:"primer demo",href:"./demos/primer/index.html"}]}]},{name:"old tips",href:"oldTips",content:[{name:"C# tips",href:"./CSharp tips.html"},{name:"javascript tips",href:"./javascript tips.html"},{name:"my technical preferences",href:"./my technical preferences.html"}]},{name:"old blogs",href:"oldBlogs",content:[{name:"best practice of writing js and css with typescript and LESS",href:"./best practice of writing js and css with typescript and LESS.html"},{name:"best practice of .net's multi-thread and multi-core programming",href:"./best practice of .net's multi-thread and multi-core programming.html"},{name:"ideas of considering a function as an object",href:"./ideas of considering a function as an object.html"},{name:"best practice of asp.net MVC",href:"./best practice of asp.net MVC.html"},{name:"best practice of entity framework",href:"./best practice of entity framework.html"},{name:"best practice of supporting as much browsers as possible at least price",href:"./best practice of supporting as much browsers as possible at least price.html"}]}]},function(e,t,n){function a(e,t){for(var n=0;n<e.length;n++){var a=e[n],r=p[a.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](a.parts[o]);for(;o<a.parts.length;o++)r.parts.push(s(a.parts[o],t))}else{for(var i=[],o=0;o<a.parts.length;o++)i.push(s(a.parts[o],t));p[a.id]={id:a.id,refs:1,parts:i}}}}function r(e){for(var t=[],n={},a=0;a<e.length;a++){var r=e[a],o=r[0],i=r[1],s=r[2],l=r[3],h={css:i,media:s,sourceMap:l};n[o]?n[o].parts.push(h):t.push(n[o]={id:o,parts:[h]})}return t}function o(){var e=document.createElement("style"),t=f();return e.type="text/css",t.appendChild(e),e}function i(){var e=document.createElement("link"),t=f();return e.rel="stylesheet",t.appendChild(e),e}function s(e,t){var n,a,r;if(t.singleton){var s=g++;n=u||(u=o()),a=l.bind(null,n,s,!1),r=l.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=i(),a=c.bind(null,n),r=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),a=h.bind(null,n),r=function(){n.parentNode.removeChild(n)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}function l(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function h(e,t){var n=t.css,a=t.media;t.sourceMap;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,a=(t.media,t.sourceMap);a&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var r=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=d(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,g=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m());var n=r(e);return a(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var s=n[i],l=p[s.id];l.refs--,o.push(l)}if(e){var h=r(e);a(h,t)}for(var i=0;i<o.length;i++){var l=o[i];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete p[l.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){e.exports=n(8)["default"]},function(e,t,n){"use strict";function a(){var e=new i.HandlebarsEnvironment;return d.extend(e,i),e.SafeString=l["default"],e.Exception=c["default"],e.Utils=d,e.escapeExpression=d.escapeExpression,e.VM=f,e.template=function(t){return f.template(t,e)},e}var r=function(e){return e&&e.__esModule?e:{"default":e}};t.__esModule=!0;var o=n(9),i=r(o),s=n(10),l=r(s),h=n(11),c=r(h),p=n(12),d=r(p),m=n(13),f=r(m),u=n(14),g=r(u),v=a();v.create=a,g["default"](v),v["default"]=v,t["default"]=v,e.exports=t["default"]},function(e,t,n){"use strict";function a(e,t){this.helpers=e||{},this.partials=t||{},r(this)}function r(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new c["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),e.registerHelper("blockHelperMissing",function(t,n){var a=n.inverse,r=n.fn;if(t===!0)return r(this);if(t===!1||null==t)return a(this);if(f(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):a(this);if(n.data&&n.ids){var i=o(n.data);i.contextPath=l.appendContextPath(n.data.contextPath,n.name),n={data:i}}return r(t,n)}),e.registerHelper("each",function(e,t){function n(t,n,r){h&&(h.key=t,h.index=n,h.first=0===n,h.last=!!r,p&&(h.contextPath=p+t)),s+=a(e[t],{data:h,blockParams:l.blockParams([e[t],t],[p+t,null])})}if(!t)throw new c["default"]("Must pass iterator to #each");var a=t.fn,r=t.inverse,i=0,s="",h=void 0,p=void 0;if(t.data&&t.ids&&(p=l.appendContextPath(t.data.contextPath,t.ids[0])+"."),u(e)&&(e=e.call(this)),t.data&&(h=o(t.data)),e&&"object"==typeof e)if(f(e))for(var d=e.length;d>i;i++)n(i,i,i===e.length-1);else{var m=void 0;for(var g in e)e.hasOwnProperty(g)&&(m&&n(m,i-1),m=g,i++);m&&n(m,i-1,!0)}return 0===i&&(s=r(this)),s}),e.registerHelper("if",function(e,t){return u(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||l.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(e,t){u(e)&&(e=e.call(this));var n=t.fn;if(l.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var a=o(t.data);a.contextPath=l.appendContextPath(t.data.contextPath,t.ids[0]),t={data:a}}return n(e,t)}),e.registerHelper("log",function(t,n){var a=n.data&&null!=n.data.level?parseInt(n.data.level,10):1;e.log(a,t)}),e.registerHelper("lookup",function(e,t){return e&&e[t]})}function o(e){var t=l.extend({},e);return t._parent=e,t}var i=function(e){return e&&e.__esModule?e:{"default":e}};t.__esModule=!0,t.HandlebarsEnvironment=a,t.createFrame=o;var s=n(12),l=i(s),h=n(11),c=i(h),p="3.0.1";t.VERSION=p;var d=6;t.COMPILER_REVISION=d;var m={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};t.REVISION_CHANGES=m;var f=l.isArray,u=l.isFunction,g=l.toString,v="[object Object]";a.prototype={constructor:a,logger:x,log:b,registerHelper:function(e,t){if(g.call(e)===v){if(t)throw new c["default"]("Arg not supported with multiple helpers");l.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(g.call(e)===v)l.extend(this.partials,e);else{if("undefined"==typeof t)throw new c["default"]("Attempting to register a partial as undefined");this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]}};var x={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(e,t){if("undefined"!=typeof console&&x.level<=e){var n=x.methodMap[e];(console[n]||console.log).call(console,t)}}};t.logger=x;var b=x.log;t.log=b},function(e,t,n){"use strict";function a(e){this.string=e}t.__esModule=!0,a.prototype.toString=a.prototype.toHTML=function(){return""+this.string},t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function a(e,t){var n=t&&t.loc,o=void 0,i=void 0;n&&(o=n.start.line,i=n.start.column,e+=" - "+o+":"+i);for(var s=Error.prototype.constructor.call(this,e),l=0;l<r.length;l++)this[r[l]]=s[r[l]];Error.captureStackTrace&&Error.captureStackTrace(this,a),n&&(this.lineNumber=o,this.column=i)}t.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];a.prototype=new Error,t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function a(e){return c[e]}function r(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function o(e,t){for(var n=0,a=e.length;a>n;n++)if(e[n]===t)return n;return-1}function i(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return d.test(e)?e.replace(p,a):e}function s(e){return e||0===e?u(e)&&0===e.length?!0:!1:!0}function l(e,t){return e.path=t,e}function h(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=r,t.indexOf=o,t.escapeExpression=i,t.isEmpty=s,t.blockParams=l,t.appendContextPath=h;var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},p=/[&<>"'`]/g,d=/[&<>"'`]/,m=Object.prototype.toString;t.toString=m;var f=function(e){return"function"==typeof e};f(/x/)&&(t.isFunction=f=function(e){return"function"==typeof e&&"[object Function]"===m.call(e)});var f;t.isFunction=f;var u=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===m.call(e):!1};t.isArray=u},function(e,t,n){"use strict";function a(e){var t=e&&e[0]||1,n=u.COMPILER_REVISION;if(t!==n){if(n>t){var a=u.REVISION_CHANGES[n],r=u.REVISION_CHANGES[t];throw new f["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+a+") or downgrade your runtime to an older version ("+r+").")}throw new f["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function r(e,t){function n(n,a,r){r.hash&&(a=d.extend({},a,r.hash)),n=t.VM.resolvePartial.call(this,n,a,r);var o=t.VM.invokePartial.call(this,n,a,r);if(null==o&&t.compile&&(r.partials[r.name]=t.compile(n,e.compilerOptions,t),o=r.partials[r.name](a,r)),null!=o){if(r.indent){for(var i=o.split("\n"),s=0,l=i.length;l>s&&(i[s]||s+1!==l);s++)i[s]=r.indent+i[s];o=i.join("\n")}return o}throw new f["default"]("The partial "+r.name+" could not be compiled when running in runtime-only mode")}function a(t){var n=void 0===arguments[1]?{}:arguments[1],o=n.data;a._setup(n),!n.partial&&e.useData&&(o=h(t,o));var i=void 0,s=e.useBlockParams?[]:void 0;return e.useDepths&&(i=n.depths?[t].concat(n.depths):[t]),e.main.call(r,t,r.helpers,r.partials,o,s,i)}if(!t)throw new f["default"]("No environment passed to template");if(!e||!e.main)throw new f["default"]("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var r={strict:function(e,t){if(!(t in e))throw new f["default"]('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,a=0;n>a;a++)if(e[a]&&null!=e[a][t])return e[a][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:d.escapeExpression,invokePartial:n,fn:function(t){return e[t]},programs:[],program:function(e,t,n,a,r){var i=this.programs[e],s=this.fn(e);return t||r||a||n?i=o(this,e,s,t,n,a,r):i||(i=this.programs[e]=o(this,e,s)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=d.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler};return a.isTop=!0,a._setup=function(n){n.partial?(r.helpers=n.helpers,r.partials=n.partials):(r.helpers=r.merge(n.helpers,t.helpers),e.usePartial&&(r.partials=r.merge(n.partials,t.partials)))},a._child=function(t,n,a,i){if(e.useBlockParams&&!a)throw new f["default"]("must pass block params");if(e.useDepths&&!i)throw new f["default"]("must pass parent depths");return o(r,t,e[t],n,0,a,i)},a}function o(e,t,n,a,r,o,i){function s(t){var r=void 0===arguments[1]?{}:arguments[1];return n.call(e,t,e.helpers,e.partials,r.data||a,o&&[r.blockParams].concat(o),i&&[t].concat(i))}return s.program=t,s.depth=i?i.length:0,s.blockParams=r||0,s}function i(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e=n.partials[n.name],e}function s(e,t,n){if(n.partial=!0,void 0===e)throw new f["default"]("The partial "+n.name+" could not be found");return e instanceof Function?e(t,n):void 0}function l(){return""}function h(e,t){return t&&"root"in t||(t=t?u.createFrame(t):{},t.root=e),t}var c=function(e){return e&&e.__esModule?e:{"default":e}};t.__esModule=!0,t.checkRevision=a,t.template=r,t.wrapProgram=o,t.resolvePartial=i,t.invokePartial=s,t.noop=l;var p=n(12),d=c(p),m=n(11),f=c(m),u=n(9)},function(e,t,n){(function(n){"use strict";t.__esModule=!0,t["default"]=function(e){var t="undefined"!=typeof n?n:window,a=t.Handlebars;e.noConflict=function(){t.Handlebars===e&&(t.Handlebars=a)}},e.exports=t["default"]}).call(t,function(){return this}())}]);