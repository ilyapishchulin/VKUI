!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=90)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o},90:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+v+" Icon--"+d.id+" "+(e.className||"");return c.default.createElement("div",{className:r,style:n({width:b+"px",height:m+"px"},e.style),onClick:e.onClick},c.default.createElement("svg",{viewBox:d.viewBox,width:b,height:m,style:{display:"block"}},c.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),a=o(l),p=t(1),c=o(p),f=t(0),d=(o(f),new u.default({id:"mute_24",use:"mute_24-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" id="mute_24"><path d="M7.11727856,9 L17,18.8827214 L17,20 C17,20.5522847 16.5522847,21 16,21 C15.3585404,21 14.742154,20.7508682 14.2808452,20.3051501 L8.79012894,15 L6,15 C4.8954305,15 4,14.1045695 4,13 L4,11 C4,9.8954305 4.8954305,9 6,9 L7.11727856,9 Z M10.8955025,6.94979677 L14.2794445,3.69339732 C14.7417494,3.24851695 15.3584048,3 16,3 C16.5522847,3 17,3.44771525 17,4 L17,13.0542943 L10.8955025,6.94979677 Z M6.77504374,4.32907636 L19.9086066,17.4626392 C20.2991309,17.8531635 20.2991309,18.4863285 19.9086066,18.8768528 C19.5180823,19.2673771 18.8849173,19.2673771 18.494393,18.8768528 L5.36083018,5.74328992 C4.97030589,5.35276563 4.97030589,4.71960065 5.36083018,4.32907636 C5.75135447,3.93855207 6.38451945,3.93855207 6.77504374,4.32907636 Z" /></symbol>'})),b=(a.default.add(d),d.viewBox.split(" ")[2]),m=d.viewBox.split(" ")[3],v=Math.max(b,m);i.displayName="icon-"+d.id,r.default=i}})});