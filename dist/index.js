!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.cubicScrollTo=e():t.cubicScrollTo=e()}(self,(function(){return t={748:function(t){function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.px3=3*e,this.px2=3*(r-e)-this.px3,this.px1=1-this.px3-this.px2,this.py3=3*n,this.py2=3*(o-n)-this.py3,this.py1=1-this.py3-this.py2,this.epsilon=1e-7}var n,r;return n=t,(r=[{key:"getX",value:function(t){return((this.px1*t+this.px2)*t+this.px3)*t}},{key:"getY",value:function(t){return((this.py1*t+this.py2)*t+this.py3)*t}},{key:"solve",value:function(t){if(0===t||1===t)return this.getY(t);for(var e=t,n=0;n<8;n++){var r=this.getX(e)-t;if(Math.abs(r)<this.epsilon)return this.getY(e);var o=(3*this.px1*e+2*this.px2)*e+this.px3;if(Math.abs(o)<1e-6)break;e-=r/o}return this.getY(e)}}])&&e(n.prototype,r),t}();t.exports=n},352:function(t,e,n){t.exports=n(180)},180:function(t,e,n){function r(t,e,n){return(r=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c,a=n(748),f=500,s=0,p=0,l=0,y=new a(.25,.1,.25,1),h=window,b=function t(e){(s=(e-c)/f)>=1?s=1:window.requestAnimationFrame(t),h.scrollTo(0,l+y.solve(s)*p)};t.exports={scrollTo:function(t,e){p=e-(l=t),c=performance.now(),window.requestAnimationFrame(b)},config:function(t){var e;t.cubic&&(y=r(a,function(t){if(Array.isArray(t))return u(t)}(e=t.cubic)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),console.log(t),t.el&&(h=t.el),t.totalTime&&(f=t.totalTime)}}}},e={},function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(352);var t,e}));