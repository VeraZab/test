module.exports=__NEXT_REGISTER_PAGE("/export/hero",function(){return{page:webpackJsonp([10],{11:function(e,t,r){e.exports=r(39)},17:function(e,t,r){"use strict";var o=r(18),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,i=Array.prototype.concat,l=Object.defineProperty,s=l&&function(){var e={};try{for(var t in l(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),p=function(e,t,r,o){var n;t in e&&("function"!=typeof(n=o)||"[object Function]"!==a.call(n)||!o())||(s?l(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},c=function(e,t){var r=arguments.length>2?arguments[2]:{},a=o(t);n&&(a=i.call(a,Object.getOwnPropertySymbols(t)));for(var l=0;l<a.length;l+=1)p(e,a[l],t[a[l]],r[a[l]])};c.supportsDescriptors=!!s,e.exports=c},18:function(e,t,r){"use strict";var o=Array.prototype.slice,n=r(19),a=Object.keys,i=a?function(e){return a(e)}:r(44),l=Object.keys;i.shim=function(){Object.keys?function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2)||(Object.keys=function(e){return n(e)?l(o.call(e)):l(e)}):Object.keys=i;return Object.keys||i},e.exports=i},19:function(e,t,r){"use strict";var o=Object.prototype.toString;e.exports=function(e){var t=o.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===o.call(e.callee)),r}},20:function(e,t,r){"use strict";var o=r(18),n=r(21),a=r(46)(),i=Object,l=n.call(Function.call,Array.prototype.push),s=n.call(Function.call,Object.prototype.propertyIsEnumerable),p=a?Object.getOwnPropertySymbols:null;e.exports=function(e,t){if(void 0===(r=e)||null===r)throw new TypeError("target must be an object");var r,n,c,f,u,m,h,d,b=i(e);for(n=1;n<arguments.length;++n){c=i(arguments[n]),u=o(c);var y=a&&(Object.getOwnPropertySymbols||p);if(y)for(m=y(c),f=0;f<m.length;++f)d=m[f],s(c,d)&&l(u,d);for(f=0;f<u.length;++f)h=c[d=u[f]],s(c,d)&&(b[d]=h)}return b}},21:function(e,t,r){"use strict";var o=r(45);e.exports=Function.prototype.bind||o},22:function(e,t,r){"use strict";var o=r(20);e.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},o=0;o<t.length;++o)r[t[o]]=t[o];var n=Object.assign({},r),a="";for(var i in n)a+=i;return e!==a}()?o:function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1}()?o:Object.assign:o}},38:function(e,t,r){"use strict";r.d(t,"a",function(){return h});var o=r(1),n=(r.n(o),r(2)),a=(r.n(n),r(28)),i=(r.n(a),r(29)),l=(r.n(i),r(0)),s=r.n(l),p=r(11),c=r.n(p);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}var r,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.Component),r=t,(o=[{key:"componentDidMount",value:function(){var e,t,r,o,n,a,i;r=document,o=r.getElementById,n=r.createElement,a=r.getElementsByTagName,i="typef_orm_share",o.call(r,i)||((e=n.call(r,"script")).id=i,e.src="https://embed.typeform.com/embed.js",(t=a.call(r,"script")[0]).parentNode.insertBefore(e,t))}},{key:"render",value:function(){var e=function(e){if("image"===e.icon.type)return s.a.createElement("div",{className:"button-icon button-icon-image"},s.a.createElement("div",{className:"button-icon-wrapper"},s.a.createElement("img",{src:e.icon,alt:e.label})));if("mdi"===e.icon.type){var t="mdi-"+e.icon.src;return s.a.createElement("div",{className:"button-icon button-icon-mdi"},s.a.createElement("div",{className:"button-icon-wrapper"},s.a.createElement("i",{className:"mdi "+t})))}};return this.props.item.link.includes("typeform.com")?s.a.createElement("a",{target:this.props.item.target,href:this.props.item.link,"data-mode":"drawer_right","data-hide-headers":"true","data-hide-footer":"true","data-submit-close-delay":"2",id:"typef_orm_share",title:this.props.item.title,className:this.props.item.button.classes+" typeform-share"},this.props.item.icon?e(this.props.item):null,s.a.createElement("div",{className:"button-label",dangerouslySetInnerHTML:{__html:this.props.item.label}})):"_self"===this.props.item.target?s.a.createElement(c.a,{prefetch:!0,href:this.props.item.link},s.a.createElement("a",{target:this.props.item.target,title:this.props.item.title,className:this.props.item.button.classes},this.props.item.icon?e(this.props.item):null,s.a.createElement("div",{className:"button-label",dangerouslySetInnerHTML:{__html:this.props.item.label}}))):"_self"!==this.props.item.target?s.a.createElement("a",{href:this.props.item.link,target:this.props.item.target,title:this.props.item.title,className:this.props.item.button.classes},this.props.item.icon?e(this.props.item):null,s.a.createElement("div",{className:"button-label",dangerouslySetInnerHTML:{__html:this.props.item.label}})):s.a.createElement("div",null,"no buttons")}}])&&u(r.prototype,o),n&&u(r,n),t}()},39:function(e,t,r){"use strict";var o=r(27),n=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(75)),i=n(r(40)),l=n(r(13)),s=n(r(9)),p=n(r(10)),c=n(r(14)),f=n(r(15)),u=n(r(96)),m=r(65),h=o(r(0)),d=n(r(8)),b=n(r(42)),y=o(r(74)),g=r(25),w=function(e){function t(e){var r,o;(0,s.default)(this,t);for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return(o=(0,c.default)(this,(r=t.__proto__||(0,l.default)(t)).call.apply(r,[this,e].concat(a)))).linkClicked=o.linkClicked.bind((0,u.default)(o)),o.formatUrls(e),o}return(0,f.default)(t,e),(0,p.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=this.props.shallow,o=this.href,n=this.as;if(function(e){var t=(0,m.parse)(e,!1,!0),r=(0,m.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(o)){var a=window.location.pathname;o=(0,m.resolve)(a,o),n=n?(0,m.resolve)(a,n):o,e.preventDefault();var i=this.props.scroll;null==i&&(i=n.indexOf("#")<0);var l=this.props.replace?"replace":"push";y.default[l](o,n,{shallow:r}).then(function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,m.resolve)(e,this.href);y.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,a.default)(e.href)?(0,m.format)(e.href):e.href,this.as=e.as&&"object"===(0,a.default)(e.as)?(0,m.format)(e.as):e.as}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.href,o=this.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var n=h.Children.only(t),a={onClick:function(t){n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(a.href=o||r),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,y._rewriteUrlForNextExport)(a.href)),h.default.cloneElement(n,a)}}]),t}(h.Component);t.default=w,Object.defineProperty(w,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:(0,b.default)({href:d.default.oneOfType([d.default.string,d.default.object]).isRequired,as:d.default.oneOfType([d.default.string,d.default.object]),prefetch:d.default.bool,replace:d.default.bool,shallow:d.default.bool,passHref:d.default.bool,scroll:d.default.bool,children:d.default.oneOfType([d.default.element,function(e,t){return"string"==typeof e[t]&&x("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired})});var x=(0,g.execOnce)(g.warn)},40:function(e,t,r){e.exports=r(41)},41:function(e,t,r){var o=r(4),n=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},42:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(0,a.default)(e))throw new TypeError("given propTypes must be an object");if((0,n.default)(e,s)&&(t=e[s],!t||t[s]!==p))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");var t;return(0,o.default)({},e,l({},s,(r=function(){return function(t,r,o){var a=Object.keys(t).filter(function(t){return!(0,n.default)(e,t)});if(a.length>0)return new TypeError(String(o)+": unknown props found: "+String(a.join(", ")));return null}}(),(0,o.default)(r,l({},s,p)))));var r};var o=i(r(43)),n=i(r(48)),a=i(r(49));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s="prop-types-exact: ​",p={};e.exports=t.default},43:function(e,t,r){"use strict";var o=r(17),n=r(20),a=r(22),i=r(47),l=a();o(l,{getPolyfill:a,implementation:n,shim:i}),e.exports=l},44:function(e,t,r){"use strict";var o;if(!Object.keys){var n=Object.prototype.hasOwnProperty,a=Object.prototype.toString,i=r(19),l=Object.prototype.propertyIsEnumerable,s=!l.call({toString:null},"toString"),p=l.call(function(){},"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(e){var t=e.constructor;return t&&t.prototype===e},u={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},m=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!u["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{f(window[e])}catch(e){return!0}}catch(e){return!0}return!1}();o=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===a.call(e),o=i(e),l=t&&"[object String]"===a.call(e),u=[];if(!t&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var h=p&&r;if(l&&e.length>0&&!n.call(e,0))for(var d=0;d<e.length;++d)u.push(String(d));if(o&&e.length>0)for(var b=0;b<e.length;++b)u.push(String(b));else for(var y in e)h&&"prototype"===y||!n.call(e,y)||u.push(String(y));if(s)for(var g=function(e){if("undefined"==typeof window||!m)return f(e);try{return f(e)}catch(e){return!1}}(e),w=0;w<c.length;++w)g&&"constructor"===c[w]||!n.call(e,c[w])||u.push(c[w]);return u}}e.exports=o},45:function(e,t,r){"use strict";var o=Array.prototype.slice,n=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==n.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,a=o.call(arguments,1),i=Math.max(0,t.length-a.length),l=[],s=0;s<i;s++)l.push("$"+s);if(r=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof r){var n=t.apply(this,a.concat(o.call(arguments)));return Object(n)===n?n:this}return t.apply(e,a.concat(o.call(arguments)))}),t.prototype){var p=function(){};p.prototype=t.prototype,r.prototype=new p,p.prototype=null}return r}},46:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var o=Object.getOwnPropertySymbols(e);if(1!==o.length||o[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(e,t);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},47:function(e,t,r){"use strict";var o=r(17),n=r(22);e.exports=function(){var e=n();return o(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}},48:function(e,t,r){"use strict";var o=r(21);e.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return b});var o=r(1),n=(r.n(o),r(2)),a=(r.n(n),r(0)),i=r.n(a),l=r(76),s=r(63);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var u=[[{label:"Follow the steps below",subtitle:null,title:"",icon:null,target:"_self",link:"#steps",button:{classes:"button button-primary"}}],[]],m={minHeight:"0",paddingTop:"0px"},h={backgroundImage:"url(https://images-plotly.imgix.net/static/marketing/hero-pricing@2x.png?auto=compress&auto=format)",backgroundSize:"1640px",backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat"},d={paddingBottom:"0px",paddingTop:"50px"},b=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}var r,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),r=t,(o=[{key:"render",value:function(){return i.a.createElement(l.a,{heroWrapperStyle:h,style:m},i.a.createElement(l.g,null,i.a.createElement(l.d,null,i.a.createElement(l.f,null,"Export to Plotly"),i.a.createElement(l.e,null,"Learn how you can build a data exporter for your site, to easily send data from your web site to graph in Plotly. Plotly offers a clean, simple, and beautiful visualization tool for your data and your users.")),i.a.createElement(l.b,null,i.a.createElement(s.a,{items:u[0]}))),i.a.createElement(l.c,{style:d},i.a.createElement("div",{className:"logos-display logos-clickable"},i.a.createElement("h3",null,"See how our partners integrate with Plotly"),i.a.createElement("div",{className:"logos-display-wrapper"},i.a.createElement("div",{className:"logo-item"},i.a.createElement("a",{target:"_blank",href:"https://www.data.gov/meta/open-apps/"},i.a.createElement("img",{src:"https://plot.ly/static/img/export/datagov_blue.b196bb1cdcf1.png?auto=compress&auto=format"}))),i.a.createElement("div",{className:"logo-item"},i.a.createElement("a",{target:"_blank",href:"http://blog.import.io/post/plotly-integration"},i.a.createElement("img",{src:"https://plot.ly/static/img/export/importio_blue.921b16da2c11.png?auto=compress&auto=format"}))),i.a.createElement("div",{className:"logo-item"},i.a.createElement("a",{target:"_blank",href:"https://www.quandl.com/help/plotly"},i.a.createElement("img",{src:"https://plot.ly/static/img/export/quandl_blue.88e7b8823a5c.png?auto=compress&auto=format"}))),i.a.createElement("div",{className:"logo-item"},i.a.createElement("a",{target:"_blank",href:"http://www.vernier.com/news/2014/04/03/vernier-data-share-and-plot-ly/"},i.a.createElement("img",{src:"https://plot.ly/static/img/export/vernier_blue.4d3c32d41335.png?auto=compress&auto=format"}))),i.a.createElement("div",{className:"logo-item"},i.a.createElement("a",{target:"_blank",href:"http://blog.plot.ly/post/70293893434/automatically-grab-data-from-an-image-with"},i.a.createElement("img",{src:"https://plot.ly/static/img/export/webplotdigitizer_blue.043cf6f2b8f1.png?auto=compress&auto=format"})))))))}}])&&c(r.prototype,o),n&&c(r,n),t}()},49:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},e.exports=t.default},63:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var o=r(1),n=(r.n(o),r(2)),a=(r.n(n),r(0)),i=r.n(a),l=r(38);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}var r,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),r=t,(o=[{key:"render",value:function(){var e="";return"align-end"in this.props&&(e+=" layout-align-end"),"align-start"in this.props&&(e+=" layout-align-start"),"align-center"in this.props&&(e+=" layout-align-center"),this.props.className&&(e+=" "+this.props.className),this.props.items?i.a.createElement("div",{className:"buttons"+e},this.props.items.map(function(e,t){return i.a.createElement(l.a,{item:e,key:t})})):""}}])&&p(r.prototype,o),n&&p(r,n),t}()},630:function(e,t,r){e.exports=r(481)},76:function(e,t,r){"use strict";r.d(t,"a",function(){return y}),r.d(t,"g",function(){return g}),r.d(t,"d",function(){return w}),r.d(t,"f",function(){return x}),r.d(t,"e",function(){return v}),r.d(t,"b",function(){return k}),r.d(t,"c",function(){return O});var o=r(1),n=(r.n(o),r(2)),a=(r.n(n),r(28)),i=(r.n(a),r(29)),l=(r.n(i),r(0)),s=r.n(l),p=r(77),c=r.n(p);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),e}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(e){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return b(t,s.a.Component),h(t,[{key:"render",value:function(){var e="";this.props.alignLeft&&(e+=" align-left"),this.props.splitHalf&&(e+=" split-half"),this.props.className&&(e+=" "+this.props.className);var t={},r={};return this.props.style&&(t=this.props.style),this.props.heroWrapperStyle&&(r=this.props.heroWrapperStyle),e.includes("hero-prismic")||(e="hero "+e),s.a.createElement("section",{className:e,style:t},s.a.createElement("style",{dangerouslySetInnerHTML:{__html:c.a}}),s.a.createElement("div",{className:"hero-wrapper"},this.props.children),s.a.createElement("div",{className:"hero-background-image",style:r}))}}]),t}(),g=function(e){function t(e){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return b(t,s.a.Component),h(t,[{key:"render",value:function(){var e={};return this.props.style&&(e=this.props.style),s.a.createElement("div",{className:"hero-top",style:e},s.a.createElement("div",{className:"hero-top-wrapper"},this.props.children))}}]),t}(),w=function(e){function t(e){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return b(t,s.a.Component),h(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hero-messaging"},this.props.children)}}]),t}(),x=function(e){function t(e){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return b(t,s.a.Component),h(t,[{key:"render",value:function(){return s.a.createElement("h1",{className:"title-xl hidden"},this.props.children)}}]),t}(),v=function(e){function t(e){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return b(t,s.a.Component),h(t,[{key:"render",value:function(){return s.a.createElement("h2",{className:"title-sm hidden hidden-up"},this.props.children)}}]),t}(),k=function(e){function t(e){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return b(t,s.a.Component),h(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hero-actions hidden hidden-fade"},this.props.children)}}]),t}(),O=function(e){function t(e){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return b(t,s.a.Component),h(t,[{key:"render",value:function(){var e={};return this.props.style&&(e=this.props.style),s.a.createElement("div",{className:"hero-bottom",style:e},s.a.createElement("div",{className:"hero-bottom-wrapper hidden hidden-fade"},this.props.children))}}]),t}()},77:function(e,t){!function(){"use strict";e.exports='@media (min-width:1060px){.mobile-only{display:none!important}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fade-and-slide-in-from-bottom{from{opacity:0;-webkit-transform:translate3d(0,24px,0);transform:translate3d(0,24px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade-and-slide-in-from-bottom{from{opacity:0;-webkit-transform:translate3d(0,24px,0);transform:translate3d(0,24px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fade-and-slide-in-from-bottom-sm{from{opacity:0;-webkit-transform:translate3d(0,12px,0);transform:translate3d(0,12px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade-and-slide-in-from-bottom-sm{from{opacity:0;-webkit-transform:translate3d(0,12px,0);transform:translate3d(0,12px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fade-and-slide-in-from-top{from{opacity:0;-webkit-transform:translate3d(0,-96px,0);transform:translate3d(0,-96px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade-and-slide-in-from-top{from{opacity:0;-webkit-transform:translate3d(0,-96px,0);transform:translate3d(0,-96px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fade-and-slide-in-from-top-sm{from{opacity:0;-webkit-transform:translate3d(0,-12px,0);transform:translate3d(0,-12px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade-and-slide-in-from-top-sm{from{opacity:0;-webkit-transform:translate3d(0,-12px,0);transform:translate3d(0,-12px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes staggermenu{from{-webkit-transform:translate3d(0,60px,0);transform:translate3d(0,60px,0);opacity:0}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes staggermenu{from{-webkit-transform:translate3d(0,60px,0);transform:translate3d(0,60px,0);opacity:0}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}.animation-fadein,.hero:not(.no-fade) .hero-background-image{opacity:0;-webkit-animation:fadein .95s forwards cubic-bezier(.24,.8,0,.97);animation:fadein .95s forwards cubic-bezier(.24,.8,0,.97)}.animation-fadeout{opacity:1;-webkit-animation:fadeout .95s forwards cubic-bezier(.24,.8,0,.97);animation:fadeout .95s forwards cubic-bezier(.24,.8,0,.97)}.animation-fade-and-slide-in-from-bottom{opacity:0;-webkit-animation:fade-and-slide-in-from-bottom .95s forwards cubic-bezier(.24,.8,0,.97);animation:fade-and-slide-in-from-bottom .95s forwards cubic-bezier(.24,.8,0,.97)}.animation-fade-and-slide-in-from-bottom-sm{opacity:0;-webkit-animation:fade-and-slide-in-from-bottom-sm .95s forwards cubic-bezier(.24,.8,0,.97);animation:fade-and-slide-in-from-bottom-sm .95s forwards cubic-bezier(.24,.8,0,.97)}.animation-fade-and-slide-in-from-bottom-sm-fast{opacity:0;-webkit-animation:fade-and-slide-in-from-bottom-sm 475ms forwards cubic-bezier(.24,.8,0,.97);animation:fade-and-slide-in-from-bottom-sm 475ms forwards cubic-bezier(.24,.8,0,.97)}.animation-fade-and-slide-in-from-top{opacity:0;-webkit-animation:fade-and-slide-in-from-top .95s forwards cubic-bezier(.24,.8,0,.97);animation:fade-and-slide-in-from-top .95s forwards cubic-bezier(.24,.8,0,.97)}.animation-fade-and-slide-in-from-top-sm{opacity:0;-webkit-animation:fade-and-slide-in-from-top-sm .95s forwards cubic-bezier(.24,.8,0,.97);animation:fade-and-slide-in-from-top-sm .95s forwards cubic-bezier(.24,.8,0,.97)}.animation-stagger-menu{opacity:0;-webkit-animation:staggermenu .95s forwards cubic-bezier(.24,.8,0,.97);animation:staggermenu .95s forwards cubic-bezier(.24,.8,0,.97)}.animation-delay-xl{-webkit-animation-delay:2s;animation-delay:2s}.animation-delay-l{-webkit-animation-delay:1s;animation-delay:1s}.animation-delay-med{-webkit-animation-delay:.5s;animation-delay:.5s}.animation-delay-sm,.hero:not(.no-fade) .hero-background-image{-webkit-animation-delay:.25s;animation-delay:.25s}body{font-family:Ubuntu,sans-serif;font-size:16px;line-height:26px;font-weight:300;color:#506784}strong{font-weight:500}h1,h2,h3,h4,h5,h6{font-family:Dosis,sans-serif;font-weight:500;margin:0;color:#2a3f5f}h1~p:first-of-type,h2~p:first-of-type,h3~p:first-of-type,h4~p:first-of-type,h5~p:first-of-type,h6~p:first-of-type{padding-top:0;margin-top:0}.title-xl{font-size:50px;line-height:50px}@media (max-width:540px){.title-xl{font-size:35px;line-height:58px}}.title-l{font-size:38px;line-height:46px}.title-med{font-size:34px;line-height:44px}.title-sm{font-size:28px;line-height:34px}.pre-title{font-family:Dosis,sans-serif;font-size:20px;font-weight:700;line-height:26px;letter-spacing:2px;color:#a2b1c6;text-transform:uppercase}@media (max-width:540px){.pre-title{text-align:left!important;width:100%}}.body-l{font-size:22px;line-height:36px}.body-sm{font-size:14px;line-height:24px}.white{color:#fff}p+p{padding-top:12px}.center{text-align:center;margin-left:auto;margin-right:auto}.width-med{max-width:780px}article.body{padding:24px}.title-xl,body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.wrapper{max-width:1600px;margin-right:auto;margin-left:auto}.hero{display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:50px;overflow:hidden;position:relative}@media (max-width:800px){.hero{height:auto!important}}.hero::before{content:\'\';height:100%;top:0;left:0;width:100%;z-index:1;position:absolute;background:url(https://images.plot.ly/static/marketing/background-dots.png) repeat center center,linear-gradient(135deg,#1d8ee8 0,#1e427d 100%);background-size:14.5px,cover}.hero.no-dots::before{display:none}.hero-background-image{content:\'\';height:100%;top:0;left:0;width:100%;z-index:1;position:absolute}.hero-wrapper{position:relative;z-index:2;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hero.split-half .hero-top-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.hero.split-half .hero-top-wrapper .hero-messaging h1,.hero.split-half .hero-top-wrapper .hero-messaging h2,.hero.split-half .hero-top-wrapper .hero-messaging h3,.hero.split-half .hero-top-wrapper .hero-messaging h4,.hero.split-half .hero-top-wrapper .hero-messaging h5,.hero.split-half .hero-top-wrapper .hero-messaging h6,.hero.split-half .hero-top-wrapper .hero-messaging p,.hero.split-half .hero-top-wrapper .hero-messaging ul{width:100%;margin-top:40px}.hero.split-half .hero-top-wrapper .hero-graphic h1,.hero.split-half .hero-top-wrapper .hero-graphic h2,.hero.split-half .hero-top-wrapper .hero-graphic h3,.hero.split-half .hero-top-wrapper .hero-graphic h4,.hero.split-half .hero-top-wrapper .hero-graphic h5,.hero.split-half .hero-top-wrapper .hero-graphic h6,.hero.split-half .hero-top-wrapper .hero-graphic p,.hero.split-half .hero-top-wrapper .hero-graphic ul{width:100%}@media (min-width:801px){.hero.split-half .hero-top-wrapper .hero-messaging{width:50%}.hero.split-half .hero-top-wrapper .hero-graphic{padding-bottom:96px;width:50%}}.hero.align-left{text-align:left}.hero.align-left .hero-actions{width:100%;padding-bottom:96px}.hero.align-left .buttons{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.hero.align-left h3{font-size:22px;color:#fff;font-family:Ubuntu,sans-serif;line-height:36px}.hero.align-left p{margin-top:24px;font-size:16px;color:#fff;line-height:26px}.hero.align-left h1,.hero.align-left h2,.hero.align-left h3,.hero.align-left h4,.hero.align-left h5,.hero.align-left h6,.hero.align-left p{text-align:left}.hero.align-left .hero-graphic.dash{-webkit-transform:translateX(40px);transform:translateX(40px)}.hero-bottom,.hero-top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.hero-bottom-wrapper,.hero-top-wrapper{width:100%;display:block!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:auto;margin-left:auto;width:100%;padding-left:24px;padding-right:24px;max-width:1600px}.hero-top{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-top:96px}.hero-bottom{padding-bottom:24px;padding-top:96px}.hero-bottom-wrapper .browser{max-width:800px}.hero-bottom .clients-heading{display:none}@media (max-width:540px){.hero-bottom .clients-heading{display:block;margin-right:auto;margin-left:auto;text-align:center;color:rgba(255,255,255,.25)}}.hero-messaging{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero-messaging h1{color:#fff;margin-right:auto;margin-left:auto;margin-bottom:24px;text-shadow:0 1px 2px rgba(42,63,95,.5);text-align:center}.hero-messaging h2{margin-right:auto;margin-left:auto;max-width:480px;color:#fff;font-weight:100;font-size:20px;font-size:1.25rem;line-height:32px;line-height:2rem;font-family:Ubuntu,sans-serif;margin-bottom:24px;text-align:center;text-shadow:0 1px 2px rgba(42,63,95,.5)}.hero-actions{padding-top:12px}.hero-actions .buttons{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero .footnote{text-align:center;font-size:13.6px;font-size:.85rem;color:#a2b1c6;margin-top:24px}@media (max-width:540px){.hero .footnote{margin-top:48px}}.hero .footnote a{color:currentColor;text-decoration:underline}.hero .footnote a:hover{color:#fff;text-decoration:none}.hero .footnote a:active{-webkit-transform:translateY(2px);transform:translateY(2px)}.hero-list{list-style:none}.hero-list li{padding:12px 0;text-align:left}.logos-display-wrapper{margin-right:auto;margin-left:auto;width:100%;padding-left:24px;padding-right:24px;max-width:1600px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 24px}@media (max-width:540px){.logos-display-wrapper{padding-top:24px}}.logos-display-wrapper .logo-item{padding:12px;opacity:.8}.logos-display-wrapper img{max-width:140px;max-height:70px;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" /><feFuncG type="linear" slope="1" /><feFuncB type="linear" slope="1" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="1 0" /><feFuncG type="table" tableValues="1 0" /><feFuncB type="table" tableValues="1 0" /></feComponentTransfer></filter></svg>#filter\');-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1)}@media (max-width:540px){.logos-display-wrapper img{max-width:80px}}.on-prem-pricing .hero-messaging h2{max-width:620px}#dashHero{padding-top:150px}'}()}},[630]).default}});