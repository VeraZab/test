
          window.__NEXT_REGISTER_PAGE('/dashboards/hero', function() {
            var comp = module.exports=webpackJsonp([48],{23:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.Browser=void 0;var o=t(3),i=a(o),r=t(1),s=a(r),l=t(2),d=a(l),p=t(4),f=a(p),m=t(5),h=a(m),c=t(0),b=a(c),u=t(24),x=a(u);e.Browser=function(n){function e(n){return(0,s.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).call(this,n))}return(0,h.default)(e,n),(0,d.default)(e,[{key:"render",value:function(){return b.default.createElement("div",{className:"browser"},b.default.createElement("div",{className:"browser-wrapper"},b.default.createElement("div",{className:"browser-header "+this.props.className},b.default.createElement("style",{dangerouslySetInnerHTML:{__html:x.default}}),b.default.createElement("div",{className:"browser-header-wrapper"},b.default.createElement("div",{className:"browser-header-buttons"},b.default.createElement("div",{className:"browser-header-button"}),b.default.createElement("div",{className:"browser-header-button"}),b.default.createElement("div",{className:"browser-header-button"})))),b.default.createElement("div",{className:"browser-viewport"},b.default.createElement("div",{className:"browser-viewport-wrapper"},this.props.children))))}}]),e}(b.default.Component)},24:function(n,e){n.exports="@media (min-width: 1060px) {\n  .mobile-only {\n    display: none !important; } }\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-and-slide-in-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 96px, 0);\n            transform: translate3d(0, 96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-and-slide-in-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 96px, 0);\n            transform: translate3d(0, 96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes fade-and-slide-in-from-bottom-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-and-slide-in-from-bottom-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes fade-and-slide-in-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -96px, 0);\n            transform: translate3d(0, -96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-and-slide-in-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -96px, 0);\n            transform: translate3d(0, -96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes fade-and-slide-in-from-top-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-and-slide-in-from-top-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes staggermenu {\n  from {\n    -webkit-transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n            transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) skew(0, 0);\n            transform: translate3d(0, 0, 0) skew(0, 0);\n    opacity: 1; } }\n\n@keyframes staggermenu {\n  from {\n    -webkit-transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n            transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) skew(0, 0);\n            transform: translate3d(0, 0, 0) skew(0, 0);\n    opacity: 1; } }\n\n.animation-fadein {\n  opacity: 0;\n  -webkit-animation: fadein 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fadein 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fadeout {\n  opacity: 1;\n  -webkit-animation: fadeout 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fadeout 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-bottom {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-bottom-sm {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-bottom-sm-fast {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom-sm 0.475s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom-sm 0.475s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-top {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-top 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-top 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-top-sm {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-top-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-top-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-stagger-menu {\n  opacity: 0;\n  -webkit-animation: staggermenu 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: staggermenu 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-delay-xl {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n\n.animation-delay-l {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n\n.animation-delay-med {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n\n.animation-delay-sm {\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s; }\n\nbody {\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 16px;\n  line-height: 26px;\n  color: #506784; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Dosis', sans-serif;\n  font-weight: 500;\n  margin: 0;\n  color: #2a3f5f; }\n\nh1 ~ p:first-of-type, h2 ~ p:first-of-type, h3 ~ p:first-of-type, h4 ~ p:first-of-type, h5 ~ p:first-of-type, h6 ~ p:first-of-type {\n    padding-top: 0;\n    margin-top: 0; }\n\n.title-xl {\n  font-size: 58px;\n  line-height: 60px; }\n\n@media (max-width: 540px) {\n    .title-xl {\n      font-size: 50px;\n      line-height: 58px; } }\n\n.title-l {\n  font-size: 38px;\n  line-height: 46px; }\n\n.title-med {\n  font-size: 34px;\n  line-height: 44px; }\n\n.title-sm {\n  font-size: 28px;\n  line-height: 34px; }\n\n.pre-title {\n  font-family: 'Dosis', sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 26px;\n  letter-spacing: 2px;\n  color: #A2B1C6;\n  text-transform: uppercase; }\n\n@media (max-width: 540px) {\n    .pre-title {\n      text-align: left !important;\n      width: 100%; } }\n\n.body-l {\n  font-size: 22px;\n  line-height: 36px; }\n\n.body-sm {\n  font-size: 14px;\n  line-height: 24px; }\n\n.white {\n  color: white; }\n\np + p {\n  padding-top: 12px; }\n\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n.width-med {\n  max-width: 780px; }\n\narticle.body {\n  padding: 24px; }\n\n.title-xl {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.wrapper {\n  max-width: 1240px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.browser {\n  margin-right: auto;\n  margin-left: auto;\n  box-shadow: 0px 6px 14px rgba(80, 103, 132, 0.2); }\n\n.browser-wrapper img {\n    width: 100%; }\n\n.browser-header {\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n    background: white;\n    border-bottom: 1px solid #c8d4e3; }\n\n.browser-header-wrapper {\n      padding: 8px 12px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n\n.browser-header-buttons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n\n.browser-header-button {\n      width: 14px;\n      height: 14px;\n      border: 1px solid #a2b1c6;\n      border-radius: 50%;\n      background: #c8d4e3; }\n\n.browser-header-button:hover {\n        background: #119DFF;\n        border-color: #119DFF; }\n\n.browser-header-button + .browser-header-button {\n        margin-left: 6px; }\n"},558:function(n,e,t){n.exports=t(559)},559:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=t(0),i=a(o),r=t(7),s=t(10),l=a(s),d=t(23),p=[[{label:"Create a Dashboard",title:"See what you can create with Plotly!",icon:{type:"mdi",src:"plus"},target:"_blank",link:"https://plot.ly/dashboard/create/",button:{classes:"button button-primary"}},{label:"Documentation",title:"See what you can create with Plotly!",icon:null,target:"_blank",link:"https://help.plot.ly/tutorials/#dashboard",button:{classes:"button button-secondary"}}],[]],f={backgroundImage:"url(https://images-plotly.imgix.net/static/marketing/hero-pricing@2x.png?auto=compress&auto=format)",backgroundSize:"1640px",backgroundPosition:"50% 80%",backgroundRepeat:"no-repeat"},m={paddingBottom:"0px",paddingTop:"20px"};e.default=function(){return i.default.createElement(r.Hero,{heroWrapperStyle:f},i.default.createElement(r.HeroTop,null,i.default.createElement(r.HeroMessaging,null,i.default.createElement(r.HeroTitle,null,"Plotly Dashboards"),i.default.createElement(r.HeroSubtitle,null,"Create branded, online dashboards with D3.js Plotly charts.")),i.default.createElement(r.HeroActions,null,i.default.createElement(l.default,{items:p[0]}),i.default.createElement(l.default,{items:p[1]}))),i.default.createElement(r.HeroBottom,{style:m},i.default.createElement(d.Browser,null,i.default.createElement("img",{src:"https://images-plotly.imgix.net/static/marketing/product/dashboard-header.png?auto=compress&auto=format"}))))}},7:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.HeroBottom=e.HeroActions=e.HeroSubtitle=e.HeroTitle=e.HeroMessaging=e.HeroTop=e.Hero=void 0;var o=t(3),i=a(o),r=t(1),s=a(r),l=t(2),d=a(l),p=t(4),f=a(p),m=t(5),h=a(m),c=t(0),b=a(c),u=t(8),x=a(u);e.Hero=function(n){function e(n){return(0,s.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).call(this,n))}return(0,h.default)(e,n),(0,d.default)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var n="";this.props.alignLeft&&(n+=" align-left"),this.props.splitHalf&&(n+=" split-half"),this.props.className&&(n+=" "+this.props.className);var e={},t={};return this.props.style&&(e=this.props.style),this.props.heroWrapperStyle&&(t=this.props.heroWrapperStyle),b.default.createElement("section",{className:"hero"+n,style:e},b.default.createElement("style",{dangerouslySetInnerHTML:{__html:x.default}}),b.default.createElement("div",{className:"hero-wrapper"},this.props.children),b.default.createElement("div",{className:"hero-background-image",style:t}))}}]),e}(b.default.Component),e.HeroTop=function(n){function e(n){return(0,s.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).call(this,n))}return(0,h.default)(e,n),(0,d.default)(e,[{key:"render",value:function(){var n={};return this.props.style&&(n=this.props.style),b.default.createElement("div",{className:"hero-top",style:n},b.default.createElement("div",{className:"hero-top-wrapper"},this.props.children))}}]),e}(b.default.Component),e.HeroMessaging=function(n){function e(n){return(0,s.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).call(this,n))}return(0,h.default)(e,n),(0,d.default)(e,[{key:"render",value:function(){return b.default.createElement("div",{className:"hero-messaging"},this.props.children)}}]),e}(b.default.Component),e.HeroTitle=function(n){function e(n){return(0,s.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).call(this,n))}return(0,h.default)(e,n),(0,d.default)(e,[{key:"render",value:function(){return b.default.createElement("h1",{className:"title-xl hidden"},this.props.children)}}]),e}(b.default.Component),e.HeroSubtitle=function(n){function e(n){return(0,s.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).call(this,n))}return(0,h.default)(e,n),(0,d.default)(e,[{key:"render",value:function(){return b.default.createElement("h2",{className:"title-sm hidden hidden-up"},this.props.children)}}]),e}(b.default.Component),e.HeroActions=function(n){function e(n){return(0,s.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).call(this,n))}return(0,h.default)(e,n),(0,d.default)(e,[{key:"render",value:function(){return b.default.createElement("div",{className:"hero-actions hidden hidden-fade"},this.props.children)}}]),e}(b.default.Component),e.HeroBottom=function(n){function e(n){return(0,s.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).call(this,n))}return(0,h.default)(e,n),(0,d.default)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var n={};return this.props.style&&(n=this.props.style),b.default.createElement("div",{className:"hero-bottom",style:n},b.default.createElement("div",{className:"hero-bottom-wrapper hidden hidden-fade"},this.props.children))}}]),e}(b.default.Component)},8:function(n,e){n.exports="@media (min-width: 1060px) {\n  .mobile-only {\n    display: none !important; } }\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@-webkit-keyframes fade-and-slide-in-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 96px, 0);\n            transform: translate3d(0, 96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-and-slide-in-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 96px, 0);\n            transform: translate3d(0, 96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes fade-and-slide-in-from-bottom-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-and-slide-in-from-bottom-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes fade-and-slide-in-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -96px, 0);\n            transform: translate3d(0, -96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-and-slide-in-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -96px, 0);\n            transform: translate3d(0, -96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes fade-and-slide-in-from-top-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-and-slide-in-from-top-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@-webkit-keyframes staggermenu {\n  from {\n    -webkit-transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n            transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) skew(0, 0);\n            transform: translate3d(0, 0, 0) skew(0, 0);\n    opacity: 1; } }\n\n@keyframes staggermenu {\n  from {\n    -webkit-transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n            transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) skew(0, 0);\n            transform: translate3d(0, 0, 0) skew(0, 0);\n    opacity: 1; } }\n\n.animation-fadein, .hero:not(.no-fade) .hero-background-image {\n  opacity: 0;\n  -webkit-animation: fadein 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fadein 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fadeout {\n  opacity: 1;\n  -webkit-animation: fadeout 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fadeout 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-bottom {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-bottom-sm {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-bottom-sm-fast {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom-sm 0.475s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom-sm 0.475s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-top {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-top 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-top 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-fade-and-slide-in-from-top-sm {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-top-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-top-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-stagger-menu {\n  opacity: 0;\n  -webkit-animation: staggermenu 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: staggermenu 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n\n.animation-delay-xl {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n\n.animation-delay-l {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n\n.animation-delay-med {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n\n.animation-delay-sm, .hero:not(.no-fade) .hero-background-image {\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s; }\n\nbody {\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 16px;\n  line-height: 26px;\n  color: #506784; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Dosis', sans-serif;\n  font-weight: 500;\n  margin: 0;\n  color: #2a3f5f; }\n\nh1 ~ p:first-of-type, h2 ~ p:first-of-type, h3 ~ p:first-of-type, h4 ~ p:first-of-type, h5 ~ p:first-of-type, h6 ~ p:first-of-type {\n    padding-top: 0;\n    margin-top: 0; }\n\n.title-xl {\n  font-size: 58px;\n  line-height: 60px; }\n\n@media (max-width: 540px) {\n    .title-xl {\n      font-size: 50px;\n      line-height: 58px; } }\n\n.title-l {\n  font-size: 38px;\n  line-height: 46px; }\n\n.title-med {\n  font-size: 34px;\n  line-height: 44px; }\n\n.title-sm {\n  font-size: 28px;\n  line-height: 34px; }\n\n.pre-title {\n  font-family: 'Dosis', sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 26px;\n  letter-spacing: 2px;\n  color: #A2B1C6;\n  text-transform: uppercase; }\n\n@media (max-width: 540px) {\n    .pre-title {\n      text-align: left !important;\n      width: 100%; } }\n\n.body-l {\n  font-size: 22px;\n  line-height: 36px; }\n\n.body-sm {\n  font-size: 14px;\n  line-height: 24px; }\n\n.white {\n  color: white; }\n\np + p {\n  padding-top: 12px; }\n\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n.width-med {\n  max-width: 780px; }\n\narticle.body {\n  padding: 24px; }\n\n.title-xl {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.wrapper {\n  max-width: 1240px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.hero {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 72px;\n  min-height: 700px;\n  overflow: hidden;\n  position: relative; }\n\n@media (max-width: 800px) {\n    .hero {\n      height: auto !important; } }\n\n.hero::before {\n    content: '';\n    height: 100%;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n    position: absolute;\n    background: url(https://images.plot.ly/static/marketing/background-dots.png) repeat center center, linear-gradient(135deg, #1d8ee8 0%, #1e427d 100%);\n    background-size: 14.5px, cover; }\n\n.hero.no-dots::before {\n    display: none; }\n\n.hero-background-image {\n    content: '';\n    height: 100%;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n    position: absolute; }\n\n.hero-wrapper {\n    position: relative;\n    z-index: 2;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    width: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.hero.split-half .hero-top-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.hero.split-half .hero-top-wrapper .hero-messaging h1, .hero.split-half .hero-top-wrapper .hero-messaging h2, .hero.split-half .hero-top-wrapper .hero-messaging h3, .hero.split-half .hero-top-wrapper .hero-messaging h4, .hero.split-half .hero-top-wrapper .hero-messaging h5, .hero.split-half .hero-top-wrapper .hero-messaging h6, .hero.split-half .hero-top-wrapper .hero-messaging p, .hero.split-half .hero-top-wrapper .hero-messaging ul {\n      width: 100%; }\n\n.hero.split-half .hero-top-wrapper .hero-graphic h1, .hero.split-half .hero-top-wrapper .hero-graphic h2, .hero.split-half .hero-top-wrapper .hero-graphic h3, .hero.split-half .hero-top-wrapper .hero-graphic h4, .hero.split-half .hero-top-wrapper .hero-graphic h5, .hero.split-half .hero-top-wrapper .hero-graphic h6, .hero.split-half .hero-top-wrapper .hero-graphic p, .hero.split-half .hero-top-wrapper .hero-graphic ul {\n      width: 100%; }\n\n@media (min-width: 801px) {\n      .hero.split-half .hero-top-wrapper .hero-messaging {\n        width: 50%; }\n      .hero.split-half .hero-top-wrapper .hero-graphic {\n        padding-bottom: 96px;\n        width: 50%; } }\n\n.hero.align-left {\n    text-align: left; }\n\n.hero.align-left .hero-actions {\n      width: 100%;\n      padding-bottom: 96px; }\n\n.hero.align-left .buttons {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n\n.hero.align-left h3 {\n      font-size: 22px;\n      color: #FFFFFF;\n      font-family: 'Ubuntu', sans-serif;\n      line-height: 36px; }\n\n.hero.align-left p {\n      margin-top: 24px;\n      font-size: 16px;\n      color: #FFFFFF;\n      line-height: 26px; }\n\n.hero.align-left h1, .hero.align-left h2, .hero.align-left h3, .hero.align-left h4, .hero.align-left h5, .hero.align-left h6, .hero.align-left p {\n      text-align: left; }\n\n.hero.align-left .hero-graphic.dash {\n      -webkit-transform: translateX(40px);\n              transform: translateX(40px); }\n\n.hero-top, .hero-bottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.hero-top-wrapper, .hero-bottom-wrapper {\n      width: 100%;\n      display: block !important;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-right: auto;\n      margin-left: auto;\n      padding-left: 24px;\n      padding-right: 24px;\n      max-width: 1240px; }\n\n.hero-top {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    padding-top: 96px; }\n\n.hero-bottom {\n    padding-bottom: 24px;\n    padding-top: 96px; }\n\n.hero-bottom-wrapper .browser {\n      max-width: 800px; }\n\n.hero-bottom .clients-heading {\n      display: none; }\n\n@media (max-width: 540px) {\n        .hero-bottom .clients-heading {\n          display: block;\n          margin-right: auto;\n          margin-left: auto;\n          text-align: center;\n          color: rgba(255, 255, 255, 0.25); } }\n\n.hero-messaging {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.hero-messaging h1 {\n      color: white;\n      margin-right: auto;\n      margin-left: auto;\n      margin-bottom: 24px;\n      text-shadow: 0px 1px 2px rgba(42, 63, 95, 0.5);\n      text-align: center; }\n\n.hero-messaging h2 {\n      margin-right: auto;\n      margin-left: auto;\n      max-width: 480px;\n      color: white;\n      font-weight: 100;\n      font-size: 1.25rem;\n      line-height: 2rem;\n      font-family: 'Ubuntu', sans-serif;\n      margin-bottom: 24px;\n      text-align: center;\n      text-shadow: 0px 1px 2px rgba(42, 63, 95, 0.5); }\n\n.hero-actions {\n    padding-top: 12px; }\n\n.hero-actions .buttons {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n\n.hero .footnote {\n    text-align: center;\n    font-size: 0.85rem;\n    color: #a2b1c6;\n    margin-top: 24px; }\n\n@media (max-width: 540px) {\n      .hero .footnote {\n        margin-top: 48px; } }\n\n.hero .footnote a {\n      color: currentColor;\n      text-decoration: underline; }\n\n.hero .footnote a:hover {\n        color: white;\n        text-decoration: none; }\n\n.hero .footnote a:active {\n        -webkit-transform: translateY(2px);\n                transform: translateY(2px); }\n\n.hero-list {\n    list-style: none; }\n\n.hero-list li {\n      padding: 12px 0;\n      text-align: left; }\n\n.logos-display-wrapper {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 24px;\n  padding-right: 24px;\n  max-width: 1240px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 24px; }\n\n@media (max-width: 540px) {\n    .logos-display-wrapper {\n      padding-top: 24px; } }\n\n.logos-display-wrapper .logo-item {\n    padding: 12px;\n    opacity: 0.8; }\n\n.logos-display-wrapper img {\n    max-width: 140px;\n    max-height: 70px;\n    -webkit-filter: brightness(0) invert(1);\n            filter: brightness(0) invert(1); }\n\n@media (max-width: 540px) {\n      .logos-display-wrapper img {\n        max-width: 80px; } }\n\n.githubStar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 24px; }\n\n.githubStar iframe {\n    border: 0; }\n\n.on-prem-pricing .hero-messaging h2 {\n  max-width: 620px; }\n"}},[558]);
            return { page: comp.default }
          })
        