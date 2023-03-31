!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SEMICOLON=t()}(this,()=>{"use strict";const i={pageTransition:!1,cursor:!1,headerSticky:!0,headerMobileSticky:!1,menuBreakpoint:992,pageMenuBreakpoint:992,gmapAPI:"AIzaSyAO2BYvn4xyrdisvP8feA4AS_PGZFxJDp4",scrollOffset:60,scrollExternalLinks:!0,jsFolder:"js/"},a={baseEl:document,elRoot:document.documentElement,elHead:document.head,elBody:document.body,hash:window.location.hash,topScrollOffset:0,elWrapper:document.getElementById("wrapper"),elHeader:document.getElementById("header"),headerClasses:"",elHeaderWrap:document.getElementById("header-wrap"),headerWrapClasses:"",headerHeight:0,headerOffset:0,headerWrapHeight:0,headerWrapOffset:0,elPrimaryMenus:document.querySelectorAll(".primary-menu"),elPrimaryMenuTriggers:document.querySelectorAll(".primary-menu-trigger"),elPageMenu:document.getElementById("page-menu"),pageMenuOffset:0,elSlider:document.getElementById("slider"),elFooter:document.getElementById("footer"),portfolioAjax:{},sliderParallax:{el:document.querySelector(".slider-parallax"),caption:document.querySelector(".slider-parallax .slider-caption"),inner:document.querySelector(".slider-inner"),offset:0},get menuBreakpoint(){return this.elBody.getAttribute("data-menu-breakpoint")||i.menuBreakpoint},get pageMenuBreakpoint(){return this.elBody.getAttribute("data-pagemenu-breakpoint")||i.pageMenuBreakpoint},get customCursor(){var e=this.elBody.getAttribute("data-custom-cursor")||i.cursor;return"true"==e||!0===e},get pageTransition(){var e=this.elBody.classList.contains("page-transition")||i.pageTransition;return"true"==e||!0===e},scrollPos:{x:0,y:0},$jq:"undefined"!=typeof jQuery?jQuery.noConflict():"",resizers:{},recalls:{},debounced:!1,events:{},modules:{},fn:{},required:{jQuery:{plugin:"jquery",fn:()=>"undefined"!=typeof jQuery,file:i.jsFolder+"jquery.js",id:"canvas-jquery"}},fnInit:()=>{s.init(),d.init(),l.init()}},n={getOptions:i,getVars:a,run:e=>{Object.values(e).map(e=>"function"==typeof e&&e.call())},runBase:()=>{n.run(e)},runModules:()=>{n.run(t)},runContainerModules:e=>{if(void 0===e)return!1;n.getVars.baseEl=e,n.runModules(),n.getVars.baseEl=document},breakpoints:()=>{let t=n.viewport().width;const r={xxl:{enter:1400,exit:99999},xl:{enter:1200,exit:1399},lg:{enter:992,exit:1199.98},md:{enter:768,exit:991.98},sm:{enter:576,exit:767.98},xs:{enter:0,exit:575.98}};let i="";Object.keys(r).forEach(e=>{t>r[e].enter&&t<=r[e].exit?a.elBody.classList.add("device-"+e):(a.elBody.classList.remove("device-"+e),""!=i&&a.elBody.classList.remove("device-down-"+i)),t<=r[e].exit&&""!=i&&a.elBody.classList.add("device-down-"+i),i=e,t>r[e].enter?a.elBody.classList.add("device-up-"+e):a.elBody.classList.remove("device-up-"+e)})},colorScheme:()=>{a.elBody.classList.contains("adaptive-color-scheme")&&(window.matchMedia("(prefers-color-scheme: dark)").matches?a.elBody.classList.add("dark"):a.elBody.classList.remove("dark"))},throttle:(e,t)=>{let r;e(),r=!0,setTimeout(function(){},t)},debounce:(e,t)=>{clearTimeout(a.debounced),a.debounced=setTimeout(e,t)},addEvent:(e,t,r={})=>{void 0!==e&&void 0!==t&&(r=new CustomEvent(t,{detail:r}),e.dispatchEvent(r),a.events[t]=!0)},scrollEnd:(e,t=199)=>{e&&"function"==typeof e&&window.addEventListener("scroll",()=>{n.debounce(e,t)},{passive:!0})},viewport:()=>{return{width:window.innerWidth||a.elRoot.clientWidth,height:window.innerHeight||a.elRoot.clientHeight}},getSelector:(e,t=!0,r=!0)=>(t?(e=n.getVars.baseEl!==document?jQuery(n.getVars.baseEl).find(e):jQuery(e),r&&(e="string"==typeof r?e.filter(":not("+r+")"):e.filter(":not(.customjs)"))):e=r?"string"==typeof r?n.getVars.baseEl.querySelectorAll(e+":not("+r+")"):n.getVars.baseEl.querySelectorAll(e+":not(.customjs)"):n.getVars.baseEl.querySelectorAll(e),e),onResize:(e,t=333)=>{e&&"function"==typeof e&&(window.onresize=()=>{n.debounce(e,t)})},imagesLoaded:e=>{let t=e.getElementsByTagName("img")||document.images,r=t.length,i=0;r<1&&n.addEvent(e,"CanvasImagesLoaded");async function o(){i++,i===r&&n.addEvent(e,"CanvasImagesLoaded")}[].forEach.call(t,function(e){e.complete?o():e.addEventListener("load",o,!1)})},contains:(e,t)=>{let r=e.split(" "),i=!1;return r.forEach(e=>{a.elBody.classList.contains(e)&&(i=!0)}),i},has:(e,t)=>[...e].filter(e=>e.querySelector(t)),filtered:(e,t)=>[...e].filter(e=>e.matches(t)),siblings:(t,e=!1)=>e?[...e].filter(e=>e!==t):[...t.parentNode.children].filter(e=>e!==t),getNext:(e,t)=>{let r=e.nextElementSibling;return!t||r&&r.matches(t)?r:null},offset:e=>{var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,e=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+e,left:t.left+r}},slideUp:(e,t=500,r=!1)=>{e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.boxSizing="border-box",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),"function"==typeof r&&r()},t)},slideDown:(e,t=500,r=!1)=>{e.style.removeProperty("display");let i=window.getComputedStyle(e).display;"none"===i&&(i="block"),e.style.display=i;var o=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.boxSizing="border-box",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=o+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),"function"==typeof r&&r()},t)},slideToggle:(e,t=500,r=!1)=>"none"===window.getComputedStyle(e).display?n.slideDown(e,t,r):n.slideUp(e,t,r),classesFn:(t,e,r)=>{let i=e.split(" ");i.forEach(e=>{"add"==t?r.classList.add(e):"toggle"==t?r.classList.toggle(e):r.classList.remove(e)})},loadCSS:e=>{var t=e.file,e=e.id||!1;if(!t)return!1;if(e&&document.getElementById(e))return!1;const r=document.createElement("link");return r.id=e,r.href=t,r.rel="stylesheet",r.type="text/css",a.elHead.appendChild(r),!0},loadJS:e=>{var t=e.file,r=e.id||!1,i=e.type||!1,o=e.callback,n=e.async||!0,e=e.defer||!0;if(!t)return!1;if(r&&document.getElementById(r))return!1;const l=document.createElement("script");if(void 0!==o){if("function"!=typeof o)throw new Error("Not a valid callback!");l.onload=o}return l.id=r,l.src=t,i&&(l.type=i),l.async=!!n,l.defer=!!e,a.elBody.appendChild(l),!0},isFuncTrue:async i=>{if("function"!=typeof i)return!1;var o=0;return new Promise((e,t)=>{var r=setInterval(()=>{i()?(clearInterval(r),e(!0)):30<o&&(clearInterval(r),t(!0)),o++},333)}).catch(e=>console.log("Function does not exist: "+i))},initFunction:e=>{a.elBody.classList.add(e.class),n.addEvent(window,e.event),a.events[e.event]=!0},runModule:t=>{var e="http:"==window.location.protocol||"https:"==window.location.protocol?"module":"fn";let r=("fn"==e?i.jsFolder:"./")+e+"."+t.plugin+".js";return t.file&&(r=t.file),"module"==e?import(r).then(e=>e.default(t.selector)).catch(e=>{console.log(t.plugin+": Module could not be loaded"),console.log(e)}):(e=()=>void 0!==n.getVars.fn[t.plugin])()?n.getVars.fn[t.plugin](t.selector):(n.loadJS({file:r,id:"canvas-"+t.plugin+"-fn"}),n.isFuncTrue(e).then(e=>!!e&&void n.getVars.fn[t.plugin](t.selector))),!0},initModule:t=>{if("dependent"!=t.selector&&("object"==typeof t.selector?(t.selector instanceof jQuery&&(t.selector=t.selector[0]),t.selector):n.getVars.baseEl.querySelectorAll(t.selector)).length<1)return!1;var i,o=!0,e=!0;return t.required&&Array.isArray(t.required)&&(i={},t.required.forEach(e=>i[e.plugin]=!!e.fn()),t.required.forEach(r=>{r.fn()||(o=!1,async function(){n.loadJS({file:r.file,id:r.id});var e=new Promise(e=>{var t=setInterval(()=>{r.fn()&&(i[r.plugin]=!0,Object.values(i).every(e=>!0===e)&&(clearInterval(t),e(!0)))},333)});o=await e,n.runModule(t)}())})),void 0!==t.dependency&&"function"==typeof t.dependency&&(e=!1,e=async function(){return new Promise(e=>{1==t.dependency.call(t,"dependent")&&e(!0)})}()),o&&e&&n.runModule(t),!0},topScrollOffset:()=>{let e=0,t=a.elPageMenu?.querySelector("#page-menu-wrap")?.offsetHeight||0;a.elBody.classList.contains("is-expanded-menu")&&(a.elHeader?.classList.contains("sticky-header")&&(e=a.elHeaderWrap.offsetHeight),a.elPageMenu?.classList.contains("dots-menu")&&(t=0)),e+=t,n.getVars.topScrollOffset=e+i.scrollOffset}},e={init:()=>{SEMICOLON.Mobile.any()&&a.elBody.classList.add("device-touch")},menuBreakpoint:()=>{n.getVars.menuBreakpoint<=n.viewport().width?a.elBody.classList.add("is-expanded-menu"):a.elBody.classList.remove("is-expanded-menu"),a.elPageMenu&&(void 0===n.getVars.pageMenuBreakpoint&&(n.getVars.pageMenuBreakpoint=n.getVars.menuBreakpoint),n.getVars.pageMenuBreakpoint<=n.viewport().width?a.elBody.classList.add("is-expanded-pagemenu"):a.elBody.classList.remove("is-expanded-pagemenu"))},goToTop:()=>n.initModule({selector:"#gotoTop",plugin:"gototop"}),stickFooterOnSmall:()=>n.initModule({selector:"#footer",plugin:"stickfooteronsmall"}),logo:()=>n.initModule({selector:"#logo",plugin:"logo"}),setHeaderClasses:()=>{n.getVars.headerClasses=a.elHeader?.className||"",n.getVars.headerWrapClasses=a.elHeaderWrap?.className||""},headers:()=>n.initModule({selector:"#header",plugin:"headers"}),menus:()=>n.initModule({selector:"#header",plugin:"menus"}),pageMenu:()=>n.initModule({selector:"#page-menu",plugin:"pagemenu"}),sliderDimensions:()=>n.initModule({selector:".slider-element",plugin:"sliderdimensions"}),sliderMenuClass:()=>n.initModule({selector:".transparent-header + .swiper_wrapper,.swiper_wrapper + .transparent-header,.transparent-header + .revslider-wrap,.revslider-wrap + .transparent-header",plugin:"slidermenuclass"}),topSearch:()=>n.initModule({selector:"#top-search-trigger",plugin:"search"}),topCart:()=>n.initModule({selector:"#top-cart",plugin:"topcart"}),sidePanel:()=>n.initModule({selector:"#side-panel",plugin:"sidepanel"}),adaptiveColorScheme:()=>n.initModule({selector:".adaptive-color-scheme",plugin:"adaptivecolorscheme"}),portfolioAjax:()=>n.initModule({selector:".portfolio-ajax",plugin:"ajaxportfolio"}),cursor:()=>{if(a.customCursor)return n.initModule({selector:"body",plugin:"cursor"})},setBSTheme:()=>{a.elBody.classList.contains("dark")?document.querySelector("html").setAttribute("data-bs-theme","dark"):(document.querySelector("html").removeAttribute("data-bs-theme"),document.querySelectorAll(".dark")?.forEach(e=>e.setAttribute("data-bs-theme","dark"))),a.elBody.querySelectorAll(".not-dark")?.forEach(e=>e.setAttribute("data-bs-theme","light"))}},t={easing:()=>n.initModule({selector:"[data-easing]",plugin:"easing",required:[a.required.jQuery]}),bootstrap:()=>{let t=!0;a.elBody.querySelectorAll("*").forEach(e=>t&&e.getAttributeNames().some(e=>{if(e.includes("data-bs"))return t=!1,n.initModule({selector:"body",plugin:"bootstrap"})}))},resizeVideos:e=>n.initModule({selector:e||'iframe[src*="youtube"],iframe[src*="vimeo"],iframe[src*="dailymotion"],iframe[src*="maps.google.com"],iframe[src*="google.com/maps"]',plugin:"fitvids",required:[a.required.jQuery]}),pageTransition:()=>{if(a.pageTransition)return n.initModule({selector:"body",plugin:"pagetransition"})},lazyLoad:e=>n.initModule({selector:e||".lazy:not(.lazy-loaded)",plugin:"lazyload"}),dataClasses:()=>n.initModule({selector:"[data-class]",plugin:"dataclasses"}),dataHeights:()=>n.initModule({selector:"[data-height-xxl],[data-height-xl],[data-height-lg],[data-height-md],[data-height-sm],[data-height-xs]",plugin:"dataheights"}),lightbox:e=>n.initModule({selector:e||"[data-lightbox]",plugin:"lightbox",required:[a.required.jQuery]}),modal:e=>n.initModule({selector:e||".modal-on-load",plugin:"modal",required:[a.required.jQuery]}),parallax:e=>n.initModule({selector:e||".parallax .parallax-bg,.parallax .parallax-element",plugin:"parallax"}),animations:e=>n.initModule({selector:e||"[data-animate]",plugin:"animations"}),hoverAnimations:e=>n.initModule({selector:e||"[data-hover-animate]",plugin:"hoveranimation"}),gridInit:e=>n.initModule({selector:e||".grid-container",plugin:"isotope",required:[a.required.jQuery]}),filterInit:e=>n.initModule({selector:e||".grid-filter,.custom-filter",plugin:"gridfilter",required:[a.required.jQuery]}),canvasSlider:e=>n.initModule({selector:e||".swiper_wrapper",plugin:"swiper"}),sliderParallax:()=>n.initModule({selector:".slider-parallax",plugin:"sliderparallax"}),flexSlider:e=>n.initModule({selector:e||".fslider",plugin:"flexslider",required:[a.required.jQuery]}),html5Video:e=>n.initModule({selector:e||".video-wrap",plugin:"html5video"}),youtubeBgVideo:e=>n.initModule({selector:e||".yt-bg-player",plugin:"youtube",required:[a.required.jQuery]}),toggle:e=>n.initModule({selector:e||".toggle",plugin:"toggles"}),accordion:e=>n.initModule({selector:e||".accordion",plugin:"accordions",required:[a.required.jQuery]}),counter:e=>n.initModule({selector:e||".counter",plugin:"counter",required:[a.required.jQuery]}),countdown:e=>n.initModule({selector:e||".countdown",plugin:"countdown",required:[a.required.jQuery]}),gmap:e=>n.initModule({selector:e||".gmap",plugin:"gmap",required:[a.required.jQuery]}),roundedSkill:e=>n.initModule({selector:e||".rounded-skill",plugin:"piechart",required:[a.required.jQuery]}),progress:e=>n.initModule({selector:e||".skill-progress",plugin:"progress"}),twitterFeed:e=>n.initModule({selector:e||".twitter-feed",plugin:"twitter",required:[a.required.jQuery]}),flickrFeed:e=>n.initModule({selector:e||".flickr-feed",plugin:"flickrfeed",required:[a.required.jQuery]}),instagram:e=>n.initModule({selector:e||".instagram-photos",plugin:"instagram"}),navTree:e=>n.initModule({selector:e||".nav-tree",plugin:"navtree",required:[a.required.jQuery]}),carousel:e=>n.initModule({selector:e||".carousel-widget",plugin:"carousel",required:[a.required.jQuery]}),masonryThumbs:e=>n.initModule({selector:e||".masonry-thumbs",plugin:"masonrythumbs",required:[a.required.jQuery]}),notifications:e=>n.initModule({selector:e||!1,plugin:"notify",required:[a.required.jQuery]}),textRotator:e=>n.initModule({selector:e||".text-rotater",plugin:"textrotator",required:[a.required.jQuery]}),onePage:e=>n.initModule({selector:e||"[data-scrollto],.one-page-menu",plugin:"onepage"}),ajaxForm:e=>n.initModule({selector:e||".form-widget",plugin:"ajaxform",required:[a.required.jQuery]}),subscribe:e=>n.initModule({selector:e||".subscribe-widget",plugin:"subscribe",required:[a.required.jQuery]}),conditional:e=>n.initModule({selector:e||".form-group[data-condition]",plugin:"conditional"}),shapeDivider:e=>n.initModule({selector:e||".shape-divider",plugin:"shapedivider"}),stickySidebar:e=>n.initModule({selector:e||".sticky-sidebar-wrap",plugin:"stickysidebar",required:[a.required.jQuery]}),cookies:e=>n.initModule({selector:e||".gdpr-settings,[data-cookies]",plugin:"cookie"}),quantity:e=>n.initModule({selector:e||".quantity",plugin:"quantity"}),readmore:e=>n.initModule({selector:e||"[data-readmore]",plugin:"readmore"}),pricingSwitcher:e=>n.initModule({selector:e||".pts-switcher",plugin:"pricingswitcher"}),ajaxButton:e=>n.initModule({selector:e||"[data-ajax-loader]",plugin:"ajaxbutton"}),videoFacade:e=>n.initModule({selector:e||".video-facade",plugin:"videofacade"}),schemeToggler:e=>n.initModule({selector:e||".body-scheme-toggle",plugin:"schemetoggler"}),clipboardCopy:e=>n.initModule({selector:e||".clipboard-copy",plugin:"clipboard"}),codeHighlight:e=>n.initModule({selector:e||".code-highlight",plugin:"codehighlight"}),viewportDetect:e=>n.initModule({selector:e||".viewport-detect",plugin:"viewportdetect"}),bsComponents:e=>n.initModule({selector:e||'[data-bs-toggle="tooltip"],[data-bs-toggle="popover"],[data-bs-toggle="tab"],[data-bs-toggle="pill"],.style-msg',plugin:"bscomponents"})},r={Android:()=>navigator.userAgent.match(/Android/i),BlackBerry:()=>navigator.userAgent.match(/BlackBerry/i),iOS:()=>navigator.userAgent.match(/iPhone|iPad|iPod/i),Opera:()=>navigator.userAgent.match(/Opera Mini/i),Windows:()=>navigator.userAgent.match(/IEMobile/i),any:()=>r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()},o={onReady:()=>{function e(){dataLayer.push(arguments)}fetch("switcher-html.html").then(e=>e.text()).then(e=>{let t=document.createElement("div");t.classList.add("cnvs-switcher-container"),t.innerHTML=e,a.elBody.appendChild(t),n.runContainerModules(t),n.loadJS({file:"js/cnvsswitcher.js",id:"cnvs-switcher-js"})}).catch(e=>{console.log(e),console.log("Switcher Error!")}),n.loadJS({file:"https://www.googletagmanager.com/gtag/js?id=G-HH0J5CE3B7",id:"canvas-gtag-js"}),window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-HH0J5CE3B7")},onLoad:()=>{},onResize:()=>{}},l={init:()=>{a.resizers.viewport=()=>n.viewport(),a.resizers.breakpoints=()=>n.breakpoints(),a.resizers.menuBreakpoint=()=>e.menuBreakpoint(),n.run(a.resizers),o.onResize(),n.addEvent(window,"cnvsResize")}},s={init:()=>{n.breakpoints(),n.colorScheme(),n.runBase(),n.runModules(),n.topScrollOffset(),s.windowscroll(),o.onReady()},windowscroll:()=>{n.scrollEnd(()=>{e.pageMenu()})}},d={init:()=>{o.onLoad()}};return document.addEventListener("DOMContentLoaded",()=>{s.init()}),window.onload=()=>{d.init()},n.onResize(()=>{l.init()}),{Core:n,Base:e,Modules:t,Mobile:r,Custom:o}});