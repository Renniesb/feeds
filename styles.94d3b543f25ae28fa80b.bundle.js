webpackJsonp([2,3],{372:function(r,n,e){var o=e(640);"string"==typeof o&&(o=[[r.i,o,""]]);e(683)(o,{});o.locals&&(r.exports=o.locals)},640:function(r,n,e){n=r.exports=e(641)(),n.push([r.i,"/* You can add global styles to this file, and also import other style files */\r\n\r\n/* Master Styles */\r\n\r\n\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\nh2, h3 {\r\n  color: white;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n\r\n   background-color: #e36b2e;\r\n   color: white;\r\n/*   background-color: #3d86c3*/;\r\n\r\n/*  margin: 2em;\r\n*/}\r\n\r\n.bg-white {\r\n  background-color: white;\r\n}\r\n\r\n.navbar {\r\n  height: 60px;\r\n  background-color: #e36b2e;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.navbar a {\r\n  background-color: #e36b2e;\r\n}\r\n\r\n.navbar-brand {\r\n  padding-top: 0px;\r\n}\r\np{\r\n  color: white;\r\n}\r\n.ross-wrap a {\r\n  color: black;\r\n}\r\n.ross-wrap {\r\n  padding-top: 100px;\r\n  background-color: #3d86c3;\r\n  color: #fcf8e3;\r\n}\r\n\r\n.panel-body{\r\n  color: black;\r\n}\r\n\r\n.panel-body p {\r\n  color: black;\r\n  }\r\n\r\n.ross-wrap h2 {\r\n  color: #fcf8e3;\r\n}\r\n.logo-wrap {\r\n  background-color: black;\r\n}\r\n\r\n.logo-wrap h2 {\r\n  color: #369;\r\n  margin-top: 0px;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.jumbotron {\r\n  color: #fcf8e3;\r\n  background-color: inherit;\r\n}\r\n\r\n.jumbotron h2, .jumbotron h3 {\r\n  margin-bottom: 20px;\r\n  color: #fcf8e3;\r\n  margin-top: 0px;\r\n}\r\n\r\n.jumbotron select {\r\n  color: black;\r\n}\r\n#myCarousel {\r\n    margin-top: 20px;\r\n    background-color: #BBD8DC;\r\n    height: 400px;\r\n}\r\n\r\n#myCarousel img {\r\n  margin-top: 30px;\r\n}\r\n\r\n.navbar-default {\r\n  border: none;\r\n}\r\n\r\n.panel {\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n.scroll {\r\n  padding-right: 5px;\r\n  overflow-y: auto;\r\n  height: 250px;\r\n}\r\n\r\n\r\nbody, input[text], button {\r\n  color: #888;\r\n  font-family: Cambria, Georgia;\r\n}\r\na {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\nbody aside {\r\n  margin: 0px;\r\n}\r\n\r\n\r\nbutton {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\n\r\n.carousel-caption {\r\n  position: static;\r\n  top: 150px;\r\n  padding-top: 0px;\r\n}\r\n\r\n/* Navigation link styles */\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 30px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n /* background-color: white;*/\r\n  border-radius: 4px;\r\n}\r\n\r\nnav a.navbar-brand {\r\n  margin-top: 0px;\r\n\r\n}\r\nnav a:visited, a:link {\r\n  color: black;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n.popover-content {\r\n    width: 150px;\r\n    color: black;\r\n}\r\n\r\n.popover-title {\r\n  color: black;\r\n}\r\n\r\n/* items class */\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.items li.selected:hover {\r\n  background-color: #BBD8DC;\r\n  color: black;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.items li.selected {\r\n  background-color: #CFD8DC;\r\n  color: black;\r\n}\r\n\r\n.items li.selected:hover {\r\n  background-color: #BBD8DC;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: black;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.ptweets {\r\n  font-size: 12.5px;\r\n}\r\n\r\n.stweets {\r\n  font-size: 11px;\r\n}\r\n\r\n.tweets{\r\n  padding-top: 10px;\r\n}\r\n\r\n\r\n/* everywhere else */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .dropdown{\r\n    display: block;\r\n    margin-left: 0px;\r\n  }\r\n  .editopics {\r\n    display: none;\r\n  }\r\n  .navbar-nav, .navbar-nav a{\r\n    background-color: white;\r\n  }\r\n\r\n  .navbar-nav a{\r\n    margin-top: 5px;\r\n  }\r\n\r\n  .navbar-nav img{\r\n    display: none;\r\n  }\r\n\r\n  .schedule {\r\n    display: none;\r\n  }\r\n\r\n  .time {\r\n    display: none;\r\n  }\r\n\r\n}\r\n@media (min-width: 768px) {\r\n  .schedule{\r\n    display: inline;\r\n  }\r\n  .navbar-default .navbar-nav>li>.shownav {\r\n    display: inline;\r\n\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    color: white;\r\n\r\n  }\r\n\r\n  ul li{\r\n    padding: 0;\r\n    padding-left: 20px;\r\n\r\n  }\r\n  .navbar-default .navbar-nav>li>a {\r\n    display: none;\r\n\r\n  }\r\n  .editopics {\r\n    margin-right: 45px;\r\n  }\r\n\r\n}\r\n",""])},641:function(r,n){r.exports=function(){var r=[];return r.toString=function(){for(var r=[],n=0;n<this.length;n++){var e=this[n];e[2]?r.push("@media "+e[2]+"{"+e[1]+"}"):r.push(e[1])}return r.join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},t=0;t<this.length;t++){var i=this[t][0];"number"==typeof i&&(o[i]=!0)}for(t=0;t<n.length;t++){var a=n[t];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),r.push(a))}},r}},683:function(r,n){function e(r,n){for(var e=0;e<r.length;e++){var o=r[e],t=u[o.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](o.parts[i]);for(;i<o.parts.length;i++)t.parts.push(s(o.parts[i],n))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(s(o.parts[i],n));u[o.id]={id:o.id,refs:1,parts:a}}}}function o(r){for(var n=[],e={},o=0;o<r.length;o++){var t=r[o],i=t[0],a=t[1],l=t[2],s=t[3],c={css:a,media:l,sourceMap:s};e[i]?e[i].parts.push(c):n.push(e[i]={id:i,parts:[c]})}return n}function t(r,n){var e=g(),o=v[v.length-1];if("top"===r.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),v.push(n);else{if("bottom"!==r.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function i(r){r.parentNode.removeChild(r);var n=v.indexOf(r);n>=0&&v.splice(n,1)}function a(r){var n=document.createElement("style");return n.type="text/css",t(r,n),n}function l(r){var n=document.createElement("link");return n.rel="stylesheet",t(r,n),n}function s(r,n){var e,o,t;if(n.singleton){var s=m++;e=h||(h=a(n)),o=c.bind(null,e,s,!1),t=c.bind(null,e,s,!0)}else r.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=l(n),o=d.bind(null,e),t=function(){i(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(n),o=p.bind(null,e),t=function(){i(e)});return o(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;o(r=n)}else t()}}function c(r,n,e,o){var t=e?"":o.css;if(r.styleSheet)r.styleSheet.cssText=x(n,t);else{var i=document.createTextNode(t),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function p(r,n){var e=n.css,o=n.media;if(o&&r.setAttribute("media",o),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}function d(r,n){var e=n.css,o=n.sourceMap;o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var t=new Blob([e],{type:"text/css"}),i=r.href;r.href=URL.createObjectURL(t),i&&URL.revokeObjectURL(i)}var u={},f=function(r){var n;return function(){return"undefined"==typeof n&&(n=r.apply(this,arguments)),n}},b=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=f(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,v=[];r.exports=function(r,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},"undefined"==typeof n.singleton&&(n.singleton=b()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var t=o(r);return e(t,n),function(r){for(var i=[],a=0;a<t.length;a++){var l=t[a],s=u[l.id];s.refs--,i.push(s)}if(r){var c=o(r);e(c,n)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete u[s.id]}}}};var x=function(){var r=[];return function(n,e){return r[n]=e,r.filter(Boolean).join("\n")}}()},686:function(r,n,e){r.exports=e(372)}},[686]);