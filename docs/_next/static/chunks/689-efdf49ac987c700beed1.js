(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{1521:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){return(0,r.jsx)("div",{className:"w3-row-padding w3-padding-64 w3-container",children:(0,r.jsxs)("div",{className:"w3-content",children:[(0,r.jsxs)("div",{className:"w3-twothird",children:[(0,r.jsx)("h1",{children:(0,r.jsx)("a",{href:e.href,children:e.name})}),(0,r.jsxs)("h5",{className:"w3-padding-32",children:[e.desc,e.details&&e.details.map((function(e){return(0,r.jsx)("ul",{children:e})}))]}),(0,r.jsx)("p",{className:"w3-text-grey",children:e.tips.map((function(e){return(0,r.jsx)("div",{children:e})}))})]}),(0,r.jsx)("div",{className:"w3-third w3-center",children:(0,r.jsx)("a",{href:e.installPath,children:(0,r.jsx)("img",{src:e.icon,className:"fa fa-anchor w3-padding-64"})})})]})})}},5774:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){return(0,r.jsxs)("header",{className:"w3-container w3-purple w3-center titlePadding",children:[(0,r.jsxs)("h1",{className:"w3-margin w3-jumbo",children:[e.name,e.facebookShare&&(0,r.jsx)("iframe",{src:e.facebookShare,width:"59",height:"20",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowTransparency:!0,allow:"encrypted-media"})]}),(0,r.jsx)("p",{className:"w3-xlarge",children:e.desc}),e.installPath&&(0,r.jsx)("a",{href:e.installPath,children:(0,r.jsx)("button",{className:"w3-button w3-black w3-padding-large w3-large w3-margin-top",children:"Install"})}),(0,r.jsx)("a",{style:{paddingLeft:"20px"},href:"https://github.com/120Studio/120home",children:(0,r.jsx)("button",{className:"w3-button w3-black w3-padding-large w3-large w3-margin-top",children:"Support"})})]})}},9884:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),a=n(7294),i=n(1163);var o=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],o=(0,i.useRouter)(),s="/drivemark"===o.pathname?"w3-white":"w3-hover-white",c="/webinstagram"===o.pathname?"w3-white":"w3-hover-white",l="/"===o.pathname?"w3-white":"w3-hover-white";return(0,r.jsxs)("div",{className:"w3-top",children:[(0,r.jsxs)("div",{className:"w3-bar w3-purple w3-card w3-left-align w3-large",children:[(0,r.jsx)("a",{className:"w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-purple",title:"Toggle Navigation Menu",onClick:function(){return n(!t)},children:(0,r.jsx)("i",{className:"fa fa-bars"})}),(0,r.jsx)("a",{href:"./",className:"w3-bar-item w3-button w3-padding-large "+l,children:"Home"}),(0,r.jsx)("a",{href:"./drivemark.html",className:"w3-bar-item w3-button w3-hide-small w3-padding-large "+s,children:"Drive Bookmark"}),(0,r.jsx)("a",{href:"./webinstagram.html",className:"w3-bar-item w3-button w3-hide-small w3-padding-large "+c,children:"Extension for Instagram"})]}),t&&(0,r.jsxs)("div",{id:"navDemo",className:"w3-bar-block w3-white w3-hide-large w3-hide-medium w3-large",children:[(0,r.jsx)("a",{href:"./drivemark.html",className:"w3-bar-item w3-button w3-padding-large",children:"Drive Bookmark"}),(0,r.jsx)("a",{href:"./webinstagram.html",className:"w3-bar-item w3-button w3-padding-large",children:"Extension for Instagram"})]})]})};var s=function(){return(0,r.jsx)("footer",{className:"w3-container w3-padding-16 w3-center w3-opacity",children:(0,r.jsx)("p",{children:"Powered by 120 Studio"})})};var c=function(){return(0,r.jsx)("div",{className:"w3-container w3-black w3-center w3-opacity w3-padding-16",children:(0,r.jsxs)("h1",{className:"w3-margin w3-xlarge",children:[(0,r.jsxs)("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank",style:{display:"inline"},children:[(0,r.jsx)("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),(0,r.jsx)("input",{type:"hidden",name:"hosted_button_id",value:"6R8T89JWF7WFE"}),(0,r.jsx)("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),(0,r.jsx)("img",{alt:"",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"})]}),(0,r.jsx)("span",{style:{verticalAlign:"top",fontSize:20},children:" $2 to support us"})]})})};var l=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(o,{}),e.children,(0,r.jsx)(c,{}),(0,r.jsx)(s,{})]})}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},2775:function(e,t,n){"use strict";var r=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(i=n(3244))&&i.__esModule?i:{default:i},c=n(3398),l=n(1165),d=n(6393);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var d=f[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var u=a.props[d],p=r[d]||new Set;"name"===d&&o||!p.has(u)?(p.add(u),r[d]=p):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:i})}))}var w=function(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=w},3244:function(e,t,n){"use strict";var r=n(3115),a=n(2553),i=n(2012),o=(n(450),n(9807)),s=n(7690),c=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),u=function(e){o(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),a=n(7381),i=n(3585),o=n(5725);e.exports=function(e){return r(e)||a(e)||i(e)||o()}},1163:function(e,t,n){e.exports=n(4651)}}]);