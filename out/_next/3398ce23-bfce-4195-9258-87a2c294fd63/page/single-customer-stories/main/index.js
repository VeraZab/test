
          window.__NEXT_REGISTER_PAGE('/single-customer-stories/main', function() {
            var comp = module.exports=webpackJsonp([38],{345:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.Grid=t.GridItem=void 0;var i=e(3),o=a(i),r=e(1),s=a(r),d=e(2),m=a(d),l=e(4),f=a(l),p=e(5),c=a(p),u=e(0),b=a(u),y=e(346),w=a(y);t.GridItem=function(n){function t(n){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,n))}return(0,c.default)(t,n),(0,m.default)(t,[{key:"render",value:function(){var n="grid-item";this.props.className&&(n+=" "+this.props.className);var t="33%",e={};return"columns"in this.props&&(t=100/parseInt(this.props.columns),t+="%",this.props.style?(e=this.props.style,e.maxWidth=t):e={maxWidth:t,width:t}),b.default.createElement("div",{className:n,style:e},b.default.createElement("div",{className:"grid-item-wrapper"},this.props.children))}}]),t}(b.default.Component),t.Grid=function(n){function t(n){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,n))}return(0,c.default)(t,n),(0,m.default)(t,[{key:"render",value:function(){var n=this,t="grid";return"align-end"in this.props&&(t+=" layout-align-end"),"align-start"in this.props&&(t+=" layout-align-start"),"align-center"in this.props&&(t+=" layout-align-center"),this.props.className&&(t+=" "+this.props.className),this.props.className&&(t+=" "+this.props.className),b.default.createElement("div",{className:t},b.default.createElement("style",{dangerouslySetInnerHTML:{__html:w.default}}),b.default.createElement("div",{className:"grid-wrapper"},b.default.Children.map(this.props.children,function(t){return b.default.cloneElement(t,{columns:n.props.columns,style:n.props.itemStyle})})))}}]),t}(b.default.Component)},346:function(n,t){n.exports="@import url(\"https://fonts.googleapis.com/css?family=Dosis:300,500|Open+Sans:100,200,300i,300,400,400i,700,700i\");\n@media (min-width: 1060px) {\n  .mobile-only {\n    display: none !important; } }\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@-webkit-keyframes fade-and-slide-in-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 96px, 0);\n            transform: translate3d(0, 96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@keyframes fade-and-slide-in-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 96px, 0);\n            transform: translate3d(0, 96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@-webkit-keyframes fade-and-slide-in-from-bottom-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@keyframes fade-and-slide-in-from-bottom-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@-webkit-keyframes fade-and-slide-in-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -96px, 0);\n            transform: translate3d(0, -96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@keyframes fade-and-slide-in-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -96px, 0);\n            transform: translate3d(0, -96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@-webkit-keyframes fade-and-slide-in-from-top-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@keyframes fade-and-slide-in-from-top-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@-webkit-keyframes staggermenu {\n  from {\n    -webkit-transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n            transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) skew(0, 0);\n            transform: translate3d(0, 0, 0) skew(0, 0);\n    opacity: 1; } }\n@keyframes staggermenu {\n  from {\n    -webkit-transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n            transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) skew(0, 0);\n            transform: translate3d(0, 0, 0) skew(0, 0);\n    opacity: 1; } }\n.animation-fadein {\n  opacity: 0;\n  -webkit-animation: fadein 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fadein 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fadeout {\n  opacity: 1;\n  -webkit-animation: fadeout 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fadeout 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-bottom {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-bottom-sm {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-bottom-sm-fast {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom-sm 0.475s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom-sm 0.475s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-top {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-top 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-top 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-top-sm {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-top-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-top-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-stagger-menu {\n  opacity: 0;\n  -webkit-animation: staggermenu 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: staggermenu 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-delay-xl {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n.animation-delay-l {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n.animation-delay-med {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n.animation-delay-sm {\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s; }\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  line-height: 26px;\n  color: #506784; }\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Dosis', sans-serif;\n  font-weight: 500;\n  margin: 0;\n  color: #2a3f5f; }\nh1 ~ p:first-of-type, h2 ~ p:first-of-type, h3 ~ p:first-of-type, h4 ~ p:first-of-type, h5 ~ p:first-of-type, h6 ~ p:first-of-type {\n    padding-top: 0;\n    margin-top: 0; }\n.title-xl {\n  font-size: 58px;\n  line-height: 60px; }\n@media (max-width: 540px) {\n    .title-xl {\n      font-size: 50px;\n      line-height: 58px; } }\n.title-l {\n  font-size: 38px;\n  line-height: 46px; }\n.title-med {\n  font-size: 34px;\n  line-height: 44px; }\n.title-sm {\n  font-size: 28px;\n  line-height: 34px; }\n.pre-title {\n  font-family: 'Dosis', sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 26px;\n  letter-spacing: 2px;\n  color: #A2B1C6;\n  text-transform: uppercase; }\n@media (max-width: 540px) {\n    .pre-title {\n      text-align: left !important;\n      width: 100%; } }\n.body-l {\n  font-size: 22px;\n  line-height: 36px; }\n.body-sm {\n  font-size: 14px;\n  line-height: 24px; }\n.white {\n  color: white; }\np + p {\n  padding-top: 12px; }\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n.width-med {\n  max-width: 780px; }\narticle.body {\n  padding: 24px; }\n.title-xl {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.wrapper {\n  max-width: 1240px;\n  margin-right: auto;\n  margin-left: auto; }\n.grid {\n  width: 100%; }\n.grid-wrapper {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.grid-wrapper {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    overflow: hidden; }\n@media (max-width: 1059px) {\n    .grid-item {\n      min-width: 200px; } }\n.grid-item-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.grid-item-graphic {\n    width: 90px; }\n.grid-item-label {\n    padding-top: 12px;\n    font-size: 1rem;\n    text-align: center; }\n.small-logos .grid-item-avatar {\n  min-width: 120px;\n  max-width: 140px; }\n"},915:function(n,t,e){n.exports=e(916)},916:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(3),o=a(i),r=e(1),s=a(r),d=e(2),m=a(d),l=e(4),f=a(l),p=e(5),c=a(p),u=e(0),b=a(u),y=e(7),w=(e(345),function(n){function t(n){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,n))}return(0,c.default)(t,n),(0,m.default)(t,[{key:"render",value:function(){var n=this.props.mainData,t=n.sections[0];return b.default.createElement(y.ContentSection,{className:"background-color-light-2"},b.default.createElement(y.ContentPane,{graphic:!0},b.default.createElement(y.Title,null,n.header.group),b.default.createElement("img",{src:t.image,alt:"Section Image"})),b.default.createElement(y.ContentPane,null,b.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.body}})),b.default.createElement(y.ContentPane,{className:"main-body"},b.default.createElement("p",{dangerouslySetInnerHTML:{__html:n.mainBody}})))}}]),t}(b.default.Component));t.default=w}},[915]);
            return { page: comp.default }
          })
        