(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1521:function(e,t,a){"use strict";var r=a(5893);t.Z=function(e){return(0,r.jsx)("div",{className:"w3-row-padding w3-padding-64 w3-container",children:(0,r.jsxs)("div",{className:"w3-content",children:[(0,r.jsxs)("div",{className:"w3-twothird",children:[(0,r.jsx)("h1",{children:(0,r.jsx)("a",{href:e.href,children:e.name})}),(0,r.jsxs)("h5",{className:"w3-padding-32",children:[e.desc,e.details&&e.details.map((function(e){return(0,r.jsx)("ul",{children:e})}))]}),(0,r.jsx)("p",{className:"w3-text-grey",children:e.tips.map((function(e){return(0,r.jsx)("div",{children:e})}))})]}),(0,r.jsx)("div",{className:"w3-third w3-center",children:(0,r.jsx)("a",{href:e.installPath,children:(0,r.jsx)("img",{src:e.icon,className:"fa fa-anchor w3-padding-64"})})})]})})}},5774:function(e,t,a){"use strict";var r=a(5893);t.Z=function(e){return(0,r.jsxs)("header",{className:"w3-container w3-purple w3-center titlePadding",children:[(0,r.jsxs)("h1",{className:"w3-margin w3-jumbo",children:[e.name,e.facebookShare&&(0,r.jsx)("iframe",{src:e.facebookShare,width:"59",height:"20",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowTransparency:!0,allow:"encrypted-media"})]}),(0,r.jsx)("p",{className:"w3-xlarge",children:e.desc}),e.installPath&&(0,r.jsx)("a",{href:e.installPath,children:(0,r.jsx)("button",{className:"w3-button w3-black w3-padding-large w3-large w3-margin-top",children:"Install"})}),(0,r.jsx)("a",{style:{paddingLeft:"20px"},href:"https://github.com/120Studio/120home",children:(0,r.jsx)("button",{className:"w3-button w3-black w3-padding-large w3-large w3-margin-top",children:"Support"})})]})}},9884:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(5893),i=a(7294),n=a(1163);var s=function(){var e=(0,i.useState)(!1),t=e[0],a=e[1],s=(0,n.useRouter)(),o="/drivemark"===s.pathname?"w3-white":"w3-hover-white",l="/webinstagram"===s.pathname?"w3-white":"w3-hover-white",c="/"===s.pathname?"w3-white":"w3-hover-white";return(0,r.jsxs)("div",{className:"w3-top",children:[(0,r.jsxs)("div",{className:"w3-bar w3-purple w3-card w3-left-align w3-large",children:[(0,r.jsx)("a",{className:"w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-purple",title:"Toggle Navigation Menu",onClick:function(){return a(!t)},children:(0,r.jsx)("i",{className:"fa fa-bars"})}),(0,r.jsx)("a",{href:"./",className:"w3-bar-item w3-button w3-padding-large "+c,children:"Home"}),(0,r.jsx)("a",{href:"./drivemark.html",className:"w3-bar-item w3-button w3-hide-small w3-padding-large "+o,children:"Drive Bookmark"}),(0,r.jsx)("a",{href:"./webinstagram.html",className:"w3-bar-item w3-button w3-hide-small w3-padding-large "+l,children:"Extension for Instagram"})]}),t&&(0,r.jsxs)("div",{id:"navDemo",className:"w3-bar-block w3-white w3-hide-large w3-hide-medium w3-large",children:[(0,r.jsx)("a",{href:"./drivemark.html",className:"w3-bar-item w3-button w3-padding-large",children:"Drive Bookmark"}),(0,r.jsx)("a",{href:"./webinstagram.html",className:"w3-bar-item w3-button w3-padding-large",children:"Extension for Instagram"})]})]})};var o=function(){return(0,r.jsx)("footer",{className:"w3-container w3-padding-16 w3-center w3-opacity",children:(0,r.jsx)("p",{children:"Powered by 120 Studio"})})};var l=function(){return(0,r.jsx)("div",{className:"w3-container w3-black w3-center w3-opacity w3-padding-16",children:(0,r.jsxs)("h1",{className:"w3-margin w3-xlarge",children:[(0,r.jsxs)("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank",style:{display:"inline"},children:[(0,r.jsx)("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),(0,r.jsx)("input",{type:"hidden",name:"hosted_button_id",value:"6R8T89JWF7WFE"}),(0,r.jsx)("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),(0,r.jsx)("img",{alt:"",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"})]}),(0,r.jsx)("span",{style:{verticalAlign:"top",fontSize:20},children:" $2 to support us"})]})})};var c=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(s,{}),e.children,(0,r.jsx)(l,{}),(0,r.jsx)(o,{})]})}},2562:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(2809),i=a(5893),n=a(9008),s=a(1521),o=a(5774),l=a(9884);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)(n.default,{children:[(0,i.jsx)("title",{children:"120Studio - Home"}),(0,i.jsx)("meta",{name:"description",content:"120Stuido - Focus on your productivity"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{charSet:"UTF-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://www.w3schools.com/w3css/4/w3.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(o.Z,d({},{name:"120 Studio",desc:"Provide free productivity tools for you!"})),(0,i.jsx)(s.Z,d({},{name:"Drive Bookmark",desc:"Map your Google Drive to your bookmark. You can easily access for your drive files including team folder via bookmark.",icon:"./assets/bookmark-128.png",href:"./drivemark.html",installPath:"https://chrome.google.com/webstore/detail/drive-bookmark/gailnkgbkabnclnnponepghblkbjgkfl",tips:["How many times did you switch different Google drives to find your file?","How many times did you repeatly search for the same file?","How messy your bookmark is without any organize?"]})),(0,i.jsx)(s.Z,d({},{name:"Extension for Instagram",desc:"A free chrome extension to view instagram with all mobile features.",icon:"./assets/instagram-128.png",href:"./webinstagram.html",installPath:"https://chrome.google.com/webstore/detail/extension-for-instagram/dkfmiibnoifcbiblibjpfalbdfpdoeni",details:["Post photos (to story) directly from your desktop","Download videos and photos with one right-click","Mini video player to view and scroll at the same time"],tips:["Do you want to upload pictures to Instagram from your desktop? We make it possible!","Do you see non-clickable links? We make them clickable!"]}))]})]})}},5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(2562)}])},9008:function(e,t,a){e.exports=a(639)},1163:function(e,t,a){e.exports=a(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);