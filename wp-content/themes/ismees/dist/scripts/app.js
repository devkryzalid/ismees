!function(){var e={479:function(){document.addEventListener("DOMContentLoaded",(()=>{const e={name:/^[a-zA-ZÀ-ÿ]+$/,surname:/^[a-zA-ZÀ-ÿ]+$/,email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,establishment:/^[a-zA-ZÀ-ÿ0-9\s]+$/};function t(t){const n=document.getElementById(t),o=document.getElementById(t+"Error");return e[t].test(n.value)||""===n.value?(o.style.display="none",!0):(o.style.display="block",!1)}const n=document.getElementById("subscriptionForm");["name","surname","email","establishment"].forEach((e=>{document.getElementById(e).addEventListener("blur",(()=>t(e)))})),n.addEventListener("submit",(async e=>{e.preventDefault(),function(){const e=t("name"),n=t("surname"),o=t("email"),i=t("establishment");return e&&n&&o&&i}()&&await async function(){const e=new FormData(document.getElementById("subscriptionForm"));try{console.log(e)}catch(e){console.error("Error:",e)}}()}));const o=document.querySelector(".subscribe-button"),i=document.querySelector(".footer-form");o.addEventListener("click",(()=>{i.classList.toggle("-show")}))}))},903:function(){document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelectorAll(".burger-menu"),t=document.getElementById("header");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.toggle("-open")}))}))})();const e=document.getElementById("header");previousScrollPosition=0,document.addEventListener("scroll",(()=>{if(window.scrollY>=50){e.classList.add("-sticky"),e.classList.remove("-not-sticky");const t=document.querySelector(".-sticky").offsetHeight+"px";window.scrollY>=previousScrollPosition?(e.style.top=`-${t}`,previousScrollPosition=window.scrollY):(document.body.classList.contains("customize-support")?e.style.top="32px":e.style.top="0",previousScrollPosition=window.scrollY)}else e.classList.remove("-sticky"),e.classList.add("-not-sticky")}));const t=document.querySelectorAll("#primary-menu .menu-item-has-children.main-item");window.addEventListener("resize",(()=>{t.forEach((e=>{const t=e.querySelector(".child-menu");let n=e.getBoundingClientRect().x;window.innerWidth>992?t.style.paddingLeft=`${n}px`:t.style.paddingLeft="0px"}))})),window.dispatchEvent(new Event("resize")),window.dispatchEvent(new Event("scroll")),document.querySelectorAll("#primary-menu .main-item").forEach((t=>{t.addEventListener("mouseover",(()=>{e.classList.add("-white-background")})),t.addEventListener("mouseleave",(()=>{e.classList.remove("-white-background")}))}))}))},756:function(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".jsBlockLink").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.querySelectorAll("a:not(.jsIgnoreBlockLink)")[0];return t.classList.contains("jsIgnoreBlockLink")||(t.getAttribute("target")&&"_blank"===t.getAttribute("target")||e.ctrlKey||1===e.button?window.open(t.getAttribute("href")):0===e.button&&(document.location.href=t.getAttribute("href"))),!1}))}))}))},711:function(e){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(o(n(1)),n(6)),a=o(r),c=o(n(7)),s=o(n(8)),u=o(n(9)),d=o(n(10)),l=o(n(11)),f=o(n(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return m=(0,l.default)(m,b),(0,d.default)(m,b.once),m},y=function(){m=(0,f.default)(),v()};e.exports={init:function(e){b=i(b,e),m=(0,f.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()}(b.disable)||t?void m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})):(b.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,d.default)(m,b.once)}),b.throttleDelay)),b.disableMutationObserver||s.default.ready("[data-aos]",y),m)},refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=l,o=f;return l=f=void 0,y=t,p=e.apply(o,n)}function a(e){var n=e-v;return void 0===v||n>=t||n<0||x&&e-y>=m}function s(){var e=k();return a(e)?u(e):void(b=setTimeout(s,function(e){var n=t-(e-v);return x?w(n,m-(e-y)):n}(e)))}function u(e){return b=void 0,E&&l?i(e):(l=f=void 0,p)}function d(){var e=k(),n=a(e);if(l=arguments,f=this,v=e,n){if(void 0===b)return function(e){return y=e,b=setTimeout(s,t),g?i(e):p}(v);if(x)return b=setTimeout(s,t),i(v)}return void 0===b&&(b=setTimeout(s,t)),p}var l,f,m,p,b,v,y=0,g=!1,x=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=r(t)||0,o(n)&&(g=!!n.leading,m=(x="maxWait"in n)?h(r(n.maxWait)||0,t):m,E="trailing"in n?!!n.trailing:E),d.cancel=function(){void 0!==b&&clearTimeout(b),y=0,l=v=f=b=void 0},d.flush=function(){return void 0===b?p:u(k())},d}function o(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function i(e){return"symbol"==(void 0===e?"undefined":a(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":a(e))}(e)&&g.call(e)==u}function r(e){if("number"==typeof e)return e;if(i(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=f.test(e);return n||m.test(e)?p(e.slice(2),n?2:8):l.test(e)?s:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,b="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,y=b||v||Function("return this")(),g=Object.prototype.toString,h=Math.max,w=Math.min,k=function(){return y.Date.now()};e.exports=function(e,t,i){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return o(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function o(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":r(e))}(e)&&y.call(e)==s}function i(e){if("number"==typeof e)return e;if(o(e))return c;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=l.test(e);return i||f.test(e)?m(e.slice(2),i?2:8):d.test(e)?c:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",c=NaN,s="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,p="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,v=p||b||Function("return this")(),y=Object.prototype.toString,g=Math.max,h=Math.min,w=function(){return v.Date.now()};e.exports=function(e,t,o){function r(t){var n=l,o=f;return l=f=void 0,y=t,p=e.apply(o,n)}function c(e){var n=e-v;return void 0===v||n>=t||n<0||x&&e-y>=m}function s(){var e=w();return c(e)?u(e):void(b=setTimeout(s,function(e){var n=t-(e-v);return x?h(n,m-(e-y)):n}(e)))}function u(e){return b=void 0,E&&l?r(e):(l=f=void 0,p)}function d(){var e=w(),n=c(e);if(l=arguments,f=this,v=e,n){if(void 0===b)return function(e){return y=e,b=setTimeout(s,t),k?r(e):p}(v);if(x)return b=setTimeout(s,t),r(v)}return void 0===b&&(b=setTimeout(s,t)),p}var l,f,m,p,b,v,y=0,k=!1,x=!1,E=!0;if("function"!=typeof e)throw new TypeError(a);return t=i(t)||0,n(o)&&(k=!!o.leading,m=(x="maxWait"in o)?g(i(o.maxWait)||0,t):m,E="trailing"in o?!!o.trailing:E),d.cancel=function(){void 0!==b&&clearTimeout(b),y=0,l=v=f=b=void 0},d.flush=function(){return void 0===b?p:u(w())},d}}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return r()}))}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};t.default={isSupported:function(){return!!o()},ready:function(e,t){var n=window.document,a=new(o())(i);r=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!i.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!a.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,i){!function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")}(e,o+n,t)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(12));t.default=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(13));t.default=function(e,t){var n=0,i=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(i=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,o.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+e.offsetHeight;break;case"center-center":n+=r/2+e.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=e.offsetHeight+r;break;case"center-top":n+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(i=t),n+i}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))}}])}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(756),n(903),n(479);var e=n(711),t=n.n(e);document.addEventListener("DOMContentLoaded",(()=>{t().init({startEvent:"load",offset:100,duration:600,easing:"ease-out-sine",delay:100,once:!0})}))}()}();