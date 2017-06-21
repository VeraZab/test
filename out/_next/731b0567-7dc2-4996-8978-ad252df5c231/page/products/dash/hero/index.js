
          window.__NEXT_REGISTER_PAGE('/products/dash/hero', function() {
            var comp = module.exports=webpackJsonp([30],{447:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(3),i=a(o),r=t(1),l=a(r),s=t(2),p=a(s),d=t(5),f=a(d),m=t(4),h=a(m),c=t(0),u=a(c),g=t(6),b=t(20),x=a(b),w=[[{label:"Get Started",subtitle:null,title:"",icon:null,target:"_self",link:"/dash",button:{classes:"button button-primary button-white"}},{label:"Read the Announcement",subtitle:null,title:"",icon:null,target:"_self",link:"https://medium.com/@plotlygraphs/introducing-dash-reactive-web-apps-for-python-5ecf7191b503",button:{classes:"button button-secondary"}}],[]],y={background:"linear-gradient(0deg, #3B9ACA 0%, #2D6CA5 39%, #222654 100%) !important"},k=function(e){function n(e){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e))}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){return u.default.createElement(g.Hero,{className:"no-dots dash-hero align-left split-half",style:y},u.default.createElement("div",{className:"dash-header"},u.default.createElement("div",{className:"dash-header-wrapper"},u.default.createElement("div",{className:"dash-logo"},u.default.createElement("div",{className:"dash-logo-wrapper"},u.default.createElement("img",{src:"https://now.plot.ly/static/images/dash/dash-logo.png",alt:"Dash by Plotly"}))),u.default.createElement("div",{className:"dash-navigation"},u.default.createElement("a",{href:"/products/on-premise/",target:"_blank",className:"dash-navigation-item"},"Pricing"),u.default.createElement("a",{target:"_blank",href:"https://plot.ly/dash/",className:"dash-navigation-item"},"Docs"),u.default.createElement("a",{target:"_self",href:"/",className:"dash-navigation-item"},"Plotly")))),u.default.createElement(g.HeroTop,null,u.default.createElement(g.HeroMessaging,null,u.default.createElement(g.HeroTitle,null,"Easily build beautiful web-based interfaces in Python"),u.default.createElement("h3",null,"Dash is a Python framework for building analytical web applications. No JavaScript required."),u.default.createElement("p",null,"Built on top of Plotly.js, React, and Flask, Dash ties modern UI elements like dropdowns, sliders, and graphs to your analytical Python code."),u.default.createElement(g.HeroActions,null,u.default.createElement(x.default,{items:w[0]}),u.default.createElement(x.default,{items:w[1]}))),u.default.createElement("div",{className:"hero-graphic dash dash-graphic"},u.default.createElement("img",{src:"https://now.plot.ly/static/images/dash/dash-hero-visual@2x.png",alt:""}))))}}]),n}(u.default.Component);n.default=k},6:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.HeroBottom=n.HeroActions=n.HeroSubtitle=n.HeroTitle=n.HeroMessaging=n.HeroTop=n.Hero=void 0;var o=t(3),i=a(o),r=t(1),l=a(r),s=t(2),p=a(s),d=t(5),f=a(d),m=t(4),h=a(m),c=t(0),u=a(c),g=t(7),b=a(g);n.Hero=function(e){function n(e){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e))}return(0,h.default)(n,e),(0,p.default)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e="";this.props.alignLeft&&(e+=" align-left"),this.props.splitHalf&&(e+=" split-half"),this.props.className&&(e+=" "+this.props.className);var n={},t={};return this.props.style&&(n=this.props.style),this.props.heroWrapperStyle&&(t=this.props.heroWrapperStyle),u.default.createElement("section",{className:"hero"+e,style:n},u.default.createElement("style",{dangerouslySetInnerHTML:{__html:b.default}}),u.default.createElement("div",{className:"hero-wrapper"},this.props.children),u.default.createElement("div",{className:"hero-background-image",style:t}))}}]),n}(u.default.Component),n.HeroTop=function(e){function n(e){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e))}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){var e={};return this.props.style&&(e=this.props.style),u.default.createElement("div",{className:"hero-top",style:e},u.default.createElement("div",{className:"hero-top-wrapper"},this.props.children))}}]),n}(u.default.Component),n.HeroMessaging=function(e){function n(e){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e))}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){return u.default.createElement("div",{className:"hero-messaging"},this.props.children)}}]),n}(u.default.Component),n.HeroTitle=function(e){function n(e){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e))}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){return u.default.createElement("h1",{className:"title-xl hidden"},this.props.children)}}]),n}(u.default.Component),n.HeroSubtitle=function(e){function n(e){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e))}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){return u.default.createElement("h2",{className:"title-sm hidden hidden-up"},this.props.children)}}]),n}(u.default.Component),n.HeroActions=function(e){function n(e){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e))}return(0,h.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){return u.default.createElement("div",{className:"hero-actions hidden hidden-fade"},this.props.children)}}]),n}(u.default.Component),n.HeroBottom=function(e){function n(e){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e))}return(0,h.default)(n,e),(0,p.default)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e={};return this.props.style&&(e=this.props.style),u.default.createElement("div",{className:"hero-bottom",style:e},u.default.createElement("div",{className:"hero-bottom-wrapper hidden hidden-fade"},this.props.children))}}]),n}(u.default.Component)},604:function(e,n,t){e.exports=t(447)},7:function(e,n){e.exports="@import url(\"https://fonts.googleapis.com/css?family=Dosis:300,500|Open+Sans:100,200,300i,300,400,400i,700,700i\");\n@media (min-width: 1060px) {\n  .mobile-only {\n    display: none !important; } }\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@-webkit-keyframes fade-and-slide-in-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 96px, 0);\n            transform: translate3d(0, 96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@keyframes fade-and-slide-in-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 96px, 0);\n            transform: translate3d(0, 96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@-webkit-keyframes fade-and-slide-in-from-bottom-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@keyframes fade-and-slide-in-from-bottom-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 12px, 0);\n            transform: translate3d(0, 12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@-webkit-keyframes fade-and-slide-in-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -96px, 0);\n            transform: translate3d(0, -96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@keyframes fade-and-slide-in-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -96px, 0);\n            transform: translate3d(0, -96px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@-webkit-keyframes fade-and-slide-in-from-top-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@keyframes fade-and-slide-in-from-top-sm {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -12px, 0);\n            transform: translate3d(0, -12px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n@-webkit-keyframes staggermenu {\n  from {\n    -webkit-transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n            transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) skew(0, 0);\n            transform: translate3d(0, 0, 0) skew(0, 0);\n    opacity: 1; } }\n@keyframes staggermenu {\n  from {\n    -webkit-transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n            transform: translate3d(0, 5px, 0) skew(14deg, 7deg);\n    opacity: 0; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) skew(0, 0);\n            transform: translate3d(0, 0, 0) skew(0, 0);\n    opacity: 1; } }\n.animation-fadein, .hero:not(.no-fade) .hero-background-image {\n  opacity: 0;\n  -webkit-animation: fadein 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fadein 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fadeout {\n  opacity: 1;\n  -webkit-animation: fadeout 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fadeout 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-bottom {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-bottom-sm {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-bottom-sm-fast {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-bottom-sm 0.475s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-bottom-sm 0.475s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-top {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-top 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-top 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-fade-and-slide-in-from-top-sm {\n  opacity: 0;\n  -webkit-animation: fade-and-slide-in-from-top-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: fade-and-slide-in-from-top-sm 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-stagger-menu {\n  opacity: 0;\n  -webkit-animation: staggermenu 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97);\n          animation: staggermenu 0.95s forwards cubic-bezier(0.24, 0.8, 0, 0.97); }\n.animation-delay-xl {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n.animation-delay-l {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n.animation-delay-med {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n.animation-delay-sm, .hero:not(.no-fade) .hero-background-image {\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s; }\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  line-height: 26px;\n  color: #506784; }\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Dosis', sans-serif;\n  font-weight: 500;\n  margin: 0;\n  color: #2a3f5f; }\nh1 ~ p:first-of-type, h2 ~ p:first-of-type, h3 ~ p:first-of-type, h4 ~ p:first-of-type, h5 ~ p:first-of-type, h6 ~ p:first-of-type {\n    padding-top: 0;\n    margin-top: 0; }\n.title-xl {\n  font-size: 58px;\n  line-height: 60px; }\n@media (max-width: 540px) {\n    .title-xl {\n      font-size: 50px;\n      line-height: 58px; } }\n.title-l {\n  font-size: 38px;\n  line-height: 46px; }\n.title-med {\n  font-size: 34px;\n  line-height: 44px; }\n.title-sm {\n  font-size: 28px;\n  line-height: 34px; }\n.pre-title {\n  font-family: 'Dosis', sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 26px;\n  letter-spacing: 2px;\n  color: #A2B1C6;\n  text-transform: uppercase; }\n.body-l {\n  font-size: 22px;\n  line-height: 36px; }\n.body-sm {\n  font-size: 14px;\n  line-height: 24px; }\n.white {\n  color: white; }\np + p {\n  padding-top: 12px; }\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n.width-med {\n  max-width: 780px; }\narticle.body {\n  padding: 24px; }\n.title-xl {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.wrapper {\n  max-width: 1240px;\n  margin-right: auto;\n  margin-left: auto; }\n.hero {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 72px;\n  min-height: 700px;\n  overflow: hidden;\n  position: relative; }\n@media (max-width: 800px) {\n    .hero {\n      height: auto !important; } }\n.hero::before {\n    content: '';\n    height: 100%;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n    position: absolute;\n    background: url(https://images-hoshi.nationalmachine.co/ineffable/uploads/8e24bc29d4dcbda1aa6f2a1dcdd4c0e6/background-dots.png) repeat center center, linear-gradient(135deg, #1d8ee8 0%, #1e427d 100%);\n    background-size: 14.5px, cover; }\n.hero.no-dots::before {\n    display: none; }\n.hero-background-image {\n    content: '';\n    height: 100%;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n    position: absolute; }\n.hero-wrapper {\n    position: relative;\n    z-index: 2;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    width: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.hero.split-half .hero-top-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.hero.split-half .hero-top-wrapper .hero-messaging h1, .hero.split-half .hero-top-wrapper .hero-messaging h2, .hero.split-half .hero-top-wrapper .hero-messaging h3, .hero.split-half .hero-top-wrapper .hero-messaging h4, .hero.split-half .hero-top-wrapper .hero-messaging h5, .hero.split-half .hero-top-wrapper .hero-messaging h6, .hero.split-half .hero-top-wrapper .hero-messaging p, .hero.split-half .hero-top-wrapper .hero-messaging ul {\n      width: 100%; }\n.hero.split-half .hero-top-wrapper .hero-graphic h1, .hero.split-half .hero-top-wrapper .hero-graphic h2, .hero.split-half .hero-top-wrapper .hero-graphic h3, .hero.split-half .hero-top-wrapper .hero-graphic h4, .hero.split-half .hero-top-wrapper .hero-graphic h5, .hero.split-half .hero-top-wrapper .hero-graphic h6, .hero.split-half .hero-top-wrapper .hero-graphic p, .hero.split-half .hero-top-wrapper .hero-graphic ul {\n      width: 100%; }\n@media (min-width: 801px) {\n      .hero.split-half .hero-top-wrapper .hero-messaging {\n        width: 50%; }\n      .hero.split-half .hero-top-wrapper .hero-graphic {\n        padding-bottom: 96px;\n        width: 50%; } }\n.hero.align-left {\n    text-align: left; }\n.hero.align-left .hero-actions {\n      width: 100%;\n      padding-bottom: 96px; }\n.hero.align-left .buttons {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n.hero.align-left h3 {\n      font-size: 22px;\n      color: #FFFFFF;\n      font-family: 'Open Sans', sans-serif;\n      line-height: 36px; }\n.hero.align-left p {\n      margin-top: 24px;\n      font-size: 16px;\n      color: #FFFFFF;\n      line-height: 26px; }\n.hero.align-left h1, .hero.align-left h2, .hero.align-left h3, .hero.align-left h4, .hero.align-left h5, .hero.align-left h6, .hero.align-left p {\n      text-align: left; }\n.hero.align-left .hero-graphic.dash {\n      -webkit-transform: translateX(40px);\n              transform: translateX(40px); }\n.hero-top, .hero-bottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.hero-top-wrapper, .hero-bottom-wrapper {\n      width: 100%;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-right: auto;\n      margin-left: auto;\n      padding-left: 24px;\n      padding-right: 24px;\n      max-width: 1240px; }\n.hero-top {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    padding-top: 96px; }\n.hero-bottom {\n    padding-bottom: 24px;\n    padding-top: 96px; }\n.hero-bottom-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n.hero-bottom .clients-heading {\n      display: none; }\n@media (max-width: 540px) {\n        .hero-bottom .clients-heading {\n          display: block;\n          margin-right: auto;\n          margin-left: auto;\n          text-align: center;\n          color: rgba(255, 255, 255, 0.25); } }\n.hero-messaging {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.hero-messaging h1 {\n      color: white;\n      margin-right: auto;\n      margin-left: auto;\n      margin-bottom: 24px;\n      text-shadow: 0px 1px 2px rgba(42, 63, 95, 0.5);\n      text-align: center; }\n.hero-messaging h2 {\n      margin-right: auto;\n      margin-left: auto;\n      max-width: 480px;\n      color: white;\n      font-weight: 100;\n      font-size: 1.25rem;\n      line-height: 2rem;\n      font-family: 'Open Sans', sans-serif;\n      margin-bottom: 24px;\n      text-align: center;\n      text-shadow: 0px 1px 2px rgba(42, 63, 95, 0.5); }\n.hero-actions {\n    padding-top: 12px; }\n.hero-actions .buttons {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n.hero .footnote {\n    text-align: center;\n    font-size: 0.85rem;\n    color: #a2b1c6;\n    margin-top: 24px; }\n@media (max-width: 540px) {\n      .hero .footnote {\n        margin-top: 48px; } }\n.hero .footnote a {\n      color: currentColor;\n      text-decoration: underline; }\n.hero .footnote a:hover {\n        color: white;\n        text-decoration: none; }\n.hero .footnote a:active {\n        -webkit-transform: translateY(2px);\n                transform: translateY(2px); }\n.logos-display-wrapper {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 24px;\n  padding-right: 24px;\n  max-width: 1240px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 24px; }\n@media (max-width: 540px) {\n    .logos-display-wrapper {\n      padding-top: 24px; } }\n.logos-display-wrapper .logo-item {\n    padding: 12px;\n    opacity: 0.8; }\n.logos-display-wrapper img {\n    max-width: 140px;\n    max-height: 70px;\n    -webkit-filter: brightness(0) invert(1);\n            filter: brightness(0) invert(1); }\n@media (max-width: 540px) {\n      .logos-display-wrapper img {\n        max-width: 80px; } }\n.githubStar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 24px; }\n.githubStar iframe {\n    border: 0; }\n"}},[604]);
            return { page: comp.default }
          })
        