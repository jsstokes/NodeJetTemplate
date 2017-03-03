/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","promise"],function(a,g){a.Gf=function(){this.Init()};a.b.sa(a.Gf,a.yj,"oj.FilmStripPagingModel");a.Gf.prototype.Init=function(){a.Gf.u.Init.call(this);this.ge=-1;this.Pf=0;this.wb=-1};a.b.g("FilmStripPagingModel.prototype.Init",{Init:a.Gf.prototype.Init});a.Gf.prototype.CLa=function(a){this.Pf=a};a.Gf.prototype.getPage=function(){return this.ge};a.b.g("FilmStripPagingModel.prototype.getPage",{getPage:a.Gf.prototype.getPage});a.Gf.prototype.setPage=
function(a,c){a=parseInt(a,10);try{var d=this.getPageCount(),e=this.ge,f=this.wb,g=f;c&&c.pageSize&&(g=c.pageSize);if(0===this.Pf&&-1===g)return Promise.resolve();var k=Math.ceil(this.Pf/g);if(0>a||a>k-1)throw Error("JET FilmStrip: Invalid 'page' set: "+a);var l=!1;if(a!=e||g!=f){if(!1===this.handleEvent("beforePage",{page:a,previousPage:e}))return Promise.reject();l=!0}this.ge=a;this.wb=g;var m=this.getPageCount(),r=this;return new Promise(function(c){d!=m&&r.handleEvent("pageCount",{pageCount:m,
previousPageCount:d});l&&r.handleEvent("page",{page:a,previousPage:e});c(null)})}catch(t){return Promise.reject(t)}};a.b.g("FilmStripPagingModel.prototype.setPage",{setPage:a.Gf.prototype.setPage});a.Gf.prototype.getStartItemIndex=function(){return-1===this.ge&&-1===this.wb?-1:this.ge*this.wb};a.b.g("FilmStripPagingModel.prototype.getStartItemIndex",{getStartItemIndex:a.Gf.prototype.getStartItemIndex});a.Gf.prototype.getEndItemIndex=function(){return Math.min(this.getStartItemIndex()+this.wb,this.Pf)-
1};a.b.g("FilmStripPagingModel.prototype.getEndItemIndex",{getEndItemIndex:a.Gf.prototype.getEndItemIndex});a.Gf.prototype.getPageCount=function(){return Math.ceil(this.Pf/this.wb)};a.b.g("FilmStripPagingModel.prototype.getPageCount",{getPageCount:a.Gf.prototype.getPageCount});a.Gf.prototype.totalSize=function(){return this.Pf};a.b.g("FilmStripPagingModel.prototype.totalSize",{totalSize:a.Gf.prototype.totalSize});a.Gf.prototype.totalSizeConfidence=function(){return"actual"};a.b.g("FilmStripPagingModel.prototype.totalSizeConfidence",
{totalSizeConfidence:a.Gf.prototype.totalSizeConfidence});(function(){function b(a){var b=g("\x3cdiv\x3e\x3c/div\x3e");b.text(a);return b[0].innerHTML}function c(a){a.css("-webkit-transform",t).css("-ms-transform",t).css("transform",t)}function d(a,b){a.css("-webkit-transform",b).css("-ms-transform",b).css("transform",b)}a.Ra("oj.ojFilmStrip",g.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{maxItemsPerPage:0,orientation:"horizontal",currentItem:0,arrowPlacement:"adjacent",
arrowVisibility:"auto"},_ComponentCreate:function(){this._super();var b=this.element;b.addClass("oj-filmstrip oj-component").attr("tabindex",0).attr("role","region");b.uniqueId();b=this.options;b.disabled&&a.t.warn(ba);if(b.orientation!==y&&b.orientation!==ia)throw Error(q+b.orientation);if(b.arrowPlacement!==e&&b.arrowPlacement!==X)throw Error(p+b.arrowPlacement);if(b.arrowVisibility!==ga&&b.arrowVisibility!==v&&b.arrowVisibility!==x&&b.arrowVisibility!==h)throw Error(n+b.arrowVisibility);this.zG=
this.eventNamespace+"Touch";this.XN=this.eventNamespace+"Mouse";this.$ha=this.eventNamespace+"Key";this.e_=this.eventNamespace+"NavArrowHoverable";this.ab(!0)},refresh:function(){this._super();this.ab(!1)},getItemsPerPage:function(){return this.Sv},getPagingModel:function(){return this.Nf},hq:function(){this._super();this.Le&&this.ab(this.Le[0])},gq:function(){this._super();this.Le&&this.ab(this.Le[0])},ab:function(b){var c=this;b&&!this.Nf&&(this.Nf=new a.Gf);b&&!this.Eo&&(this.Eo=function(a,b){return g(b).closest(".oj-filmstrip")[0]===
c.element[0]});if(this.zC()){this.Le=null;this.Ui="rtl"===this.nd();this.us=a.D.jf();var d=this.element;b?(this.Sv=0,this.BU=function(a){c.AU(a)},this.Bs=0,this.TD=-1,this.Oo=function(){c.Hv()},this.Sj=function(){c.Lg()},this.us&&(this.Q9=function(a){c.LU(a)},this.P9=function(a){c.KU(a)},this.JU=function(a){c.IU(a)},this.Ipa()),this.E9=function(a){c.Jxa(a)},this.F9=function(a){c.Kxa(a)},this.H9=function(a){c.Mxa(a)},this.Cpa(),this.D9=function(a){c.Ev(a)},this.Apa()):this.s6();for(var e=d.children(),
f=0;f<e.length;f++)a.Components.Ch(e[f]);f=this.Nf;if(b)f.on("page",this.BU);f.CLa(e.length);this.UFa();if(0<e.length){this.k4();for(f=0;f<e.length;f++)a.Components.rg(e[f]);a.D.$k(d[0],this.Sj)}}else d=!1,this.Le&&(d=this.Le[0]),this.Le=[b||d]},_destroy:function(){this.us&&(this.KCa(),this.JU=this.P9=this.Q9=null);this.ACa();this.H9=this.F9=this.E9=null;this.yCa();this.D9=null;this.s6();this.Nf.off("page",this.BU);this.Eo=this.Oo=this.Sj=this.Nf=this.BU=null;var a=this.element;a.removeClass("oj-filmstrip oj-component "+
J).removeAttr("tabindex role");a.removeUniqueId();this._super()},s6:function(){a.D.xm(this.element[0],this.Sj);this.TD=-1;this.rE&&(clearTimeout(this.rE),this.rE=null);for(var b=this.DJ(),c=0;c<b.length;c++)a.Components.Ch(b[c]);this.m5();this.xT().unwrap();this.wFa();for(c=0;c<b.length;c++)a.Components.rg(b[c])},_setOption:function(b,c,d){var f=this.options,g=!1,k=-1,l=this.Nf,m=l.getPage();switch(b){case "disabled":a.t.warn(ba);break;case "orientation":if(c!==y&&c!==ia)throw Error(q+c);g=f.orientation!=
c;break;case "maxItemsPerPage":g=f.maxItemsPerPage!=c;break;case "arrowPlacement":if(c!==e&&c!==X)throw Error(p+c);g=f.arrowPlacement!=c;break;case "arrowVisibility":if(c!==ga&&c!==v&&c!==x&&c!==h)throw Error(n+c);g=f.arrowVisibility!=c;break;case z:if(f.currentItem!=c&&(k=this.WS(c),0>k||k>=l.getPageCount()))throw Error(s+c);}this._super(b,c,d);switch(b){case z:-1<k&&k!=m&&l.setPage(k)}g&&this.ab(!1)},Lg:function(){if(!this.x4)this.x4=!0,this.k4(!0),this.x4=!1;else if(!this.rE){var a=this;this.rE=
setTimeout(function(){a.rE=null;a.Lg()},0)}},wd:function(){return this.options.orientation!==ia},iD:function(){return this.wd()?this.Ui?"right":"left":"top"},tv:function(){return this.wd()?"width":"height"},zC:function(){var a=document.createElement("div"),b=a.style;b.position="absolute";b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},UFa:function(){var a=this.element,b=this.wd(),c=a.children();
c.addClass(D).wrap("\x3cdiv class\x3d'"+A+" "+M+"'\x3e\x3c/div\x3e");var d=this.iD();this.vn=d=a.children().wrapAll("\x3cdiv class\x3d'"+A+" "+N+"' style\x3d'"+d+": 0px;'\x3e\x3c/div\x3e").parent();var f=this.options;f.arrowVisibility!==v&&f.arrowPlacement===e&&(this.dS=d.wrap("\x3cdiv class\x3d'"+A+" oj-filmstrip-content-container'\x3e\x3c/div\x3e").parent());a.addClass(A);b||a.addClass(U);f.arrowVisibility!==v&&0<c.length&&(this.xd=this.qsa(),this.Yj=this.csa(),this.FV()&&this.sEa())},wFa:function(){var a=
this.element,b=this.DJ();this.YEa();this.xd&&(this.Zu(this.xd),this.xd=null);this.Yj&&(this.Zu(this.Yj),this.Yj=null);var c=a.children(T+I);c&&c.remove();b.removeClass(D).unwrap().unwrap();this.vn=null;this.dS&&(b.unwrap(),this.dS=null);a.removeClass(A+" "+U)},sEa:function(){this.element.on("mouseenter"+this.e_,function(a){g(a.currentTarget).hasClass("oj-disabled")||g(a.currentTarget).addClass(J)}).on("mouseleave"+this.e_,function(a){g(a.currentTarget).removeClass(J)})},YEa:function(){this.element.off(this.e_)},
FV:function(){var a=this.options,b=a.arrowVisibility;return b===x||b===h&&a.arrowPlacement===X},qya:function(){return 0<this.Nf.getPage()},pya:function(){var a=this.Nf;return a.getPage()<a.getPageCount()-1},uBa:function(){if(this.qya()){var a=this.Nf;a.setPage(a.getPage()-1)}},NAa:function(){if(this.pya()){var a=this.Nf;a.setPage(a.getPage()+1)}},B6:function(a,b){this.options.arrowPlacement===e?b.css("visibility",a?"":v):b.parent().css("display",a?"":C)},LFa:function(){if(this.options.arrowVisibility!==
v){var a=this.Nf,b=a.getPage(),a=a.getPageCount();this.B6(0!==b,this.xd);this.B6(b!==a-1,this.Yj)}},qsa:function(){var a=this.element,c=this.wd()?P:da,d=this.Q5(c);this.options.arrowPlacement===X?a.append(d):a.prepend(d);var a=b(this.F("labelAccArrowPreviousPage")),e=b(this.F("tipArrowPreviousPage")),c=this.P5(d,c,a,e),f=this;c.on("click",function(){f.uBa()});return c},csa:function(){var a=this.element,c=this.wd()?B:E,d=this.Q5(c);a.append(d);var a=b(this.F("labelAccArrowNextPage")),e=b(this.F("tipArrowNextPage")),
c=this.P5(d,c,a,e),f=this;c.on("click",function(){f.NAa()});return c},Q5:function(a){var b=g(document.createElement("div"));b.addClass(I+" "+a);this.options.arrowPlacement===X&&(b.addClass("oj-filmstrip-arrow-container-overlay"),this.FV()&&b.addClass(Q));return b},P5:function(a,b,c,d){var f="\x3cdiv class\x3d'"+K+" oj-default oj-enabled "+b+"' role\x3d'button' tabindex\x3d'-1'";a.append(f+("\x3e\x3cspan class\x3d'oj-filmstrip-arrow-icon "+b+" oj-component-icon'\x3e\x3c/span\x3e\x3c/div\x3e"));b=this.element.attr("id");
a=a.children(T+K).eq(0);a.uniqueId();f=a.attr("id");c&&a.attr("aria-label",c);d&&a.attr("title",d);a.attr("aria-labelledby",f+" "+b);this.We(a);this.Gk(a);this.options.arrowPlacement===e&&this.FV()&&a.addClass(Q);return a},xT:function(){return this.vn.find(T+M).filter(this.Eo)},DJ:function(){return this.vn.find(T+D).filter(this.Eo)},Ls:function(){return this.vn.children(T+H)},m5:function(){var a=this.vn;this.Ls().css(u,t).css(aa,t);this.xT().css(u,t).css(aa,t);a.css(this.tv(),t)},k4:function(b){this.m5();
var c=this.options,d=this.wd(),h=c.maxItemsPerPage,l=1>h,m=this.element,p=this.xT();if(0>this.TD){var n=this.f8(c.currentItem),n=g(p[n]),q=n.children(T+D);q.css(k,t);a.Components.Mr(q[0]);this.TD=d?n.width():n.height()}n=d?m.width():m.height();c.arrowVisibility!==v&&c.arrowPlacement===e&&(m=m.children(T+I).eq(0),d=d?m.width():m.height(),n-=2*d);this.Bs=n;l||(d=Math.max(Math.floor(n/this.TD),1),d<h&&(h=d));h=l?Math.max(Math.floor(n/this.TD),1):h;l=n/h;p.css(u,l+W).css(aa,l+W);l=Math.ceil(p.length/
h);q=this.Ls();d=!1;m=this.Nf;if(m.getPageCount()!=l||this.Sv!=h||!q||1>q.length){d=!0;if(b)for(var r=0;r<p.length;r++)a.Components.Ch(p[r]);q&&0<q.length&&p.unwrap();for(r=0;r<p.length;r+=h)p.slice(r,r+h).wrapAll("\x3cdiv class\x3d'"+A+" "+H+"' style\x3d'"+k+": "+C+";' "+f+"\x3d'true'\x3e\x3c/div\x3e");if(b)for(r=0;r<p.length;r++)a.Components.rg(p[r])}q=this.Ls();q.css(u,n+W).css(aa,n+W);b=this.dS;this.vn.css(this.tv(),n);b&&b.css(this.tv(),n);b=0;if(c.currentItem||0===c.currentItem)b=this.WS(c.currentItem,
h);m.getPageCount()!=l||this.Sv!=h||m.getPage()!=b?m.setPage(b,{pageSize:h}):d&&(c=m.getPage(),this.AU({previousPage:c,page:c}))},AU:function(a){var b=a.page,c=a.previousPage;a=this.vn;var d=this.Ls(),e=this.Nf.wb,f=0>c||c==b||this.Sv!=e;this.Sv=e;e=null;f||(e=g(d[c]));var h=this.iD(),k=g(d[b]),l=k.is(w);l&&this.yX(k);var m=this.ty;-1<c&&!f&&(m=!0,a.css(this.tv(),2*this.Bs),b<c&&l&&a.css(h,-this.Bs+W),b>c?(e.addClass(S),k.addClass(L)):(e.addClass(R),k.addClass(F)));if(m){var p=this,n=this.ty;n&&0>
c&&d.filter(ca).addClass(Y);setTimeout(function(){p.d7(b,c,f,n)},25)}else this.d7(b,c,f)},d7:function(a,b,e,f){var h=this.vn;e||(this.y4=!0,h.on("transitionend"+this.eventNamespace+" webkitTransitionEnd"+this.eventNamespace,this.Oo));e?this.Hv():(e=this.Ls(),f&&c(e),-1<b?(f=a>b,b=g(e[b]),a=g(e[a]),b.addClass(Y),a.addClass(Y),f?(b.removeClass(S),a.removeClass(L),b.addClass(Z),a.addClass(V)):(b.removeClass(R),a.removeClass(F),b.addClass(G),a.addClass(O))):f&&(a=e.filter(ca),d(a,"translate3d(0, 0, 0)")))},
Hv:function(){this.y4=!1;var b=this.vn,d=this.iD();b.off(this.eventNamespace).css(this.tv(),this.Bs).css(d,"0px");d=null;if(a.me.qM(b[0])||this.Yj&&a.me.qM(this.Yj[0])||this.xd&&a.me.qM(this.xd[0]))d=document.activeElement;for(var b=this.Nf.getPage(),e=this.Ls(),f=0;f<e.length;f++)f!=b&&this.X9(g(e[f]));e.removeClass(Y+" "+Z+" "+V+" "+G+" "+O);c(e);this.LFa();d&&g(d).is(w)&&(d=this.element,(e=a.me.tga(e[b]))?a.me.qF(e):a.me.qF(d[0]));this.WS(this.options.currentItem)!=b&&(b=this.R7(b),-1!==b&&this.option(z,
b,{_context:{Cd:!0}}))},f8:function(b){var c=-1,d=this.DJ();if("number"===typeof b)0<=b&&b<d.length&&(c=b);else if("string"===typeof b&&a.D.qN(b))for(var e=0;e<d.length;e++){var f=d[e].id;if(f&&0<f.length&&f===b){c=e;break}}return c},WS:function(a,b){var c=this.f8(a),d=-1;-1<c&&(void 0===b&&(b=this.Sv),d=Math.floor(c/b));return d},R7:function(a,b,c){var d=this.Nf;void 0===b&&(b=d.getPageCount());return 0<=a&&a<b&&(b=this.DJ(),void 0===c&&(c=this.Sv),a*=c,a<b.length)?(c=b[a].id)&&0<c.length?c:a:-1},
X9:function(b){a.Components.ju(b[0]);b.css(k,C).attr(f,"true");b.find(T+D).filter(this.Eo).css(k,C)},yX:function(b){b.css(k,t).removeAttr(f);b.find(T+D).filter(this.Eo).css(k,t);a.Components.Mr(b[0])},Apa:function(){this.element.on("keydown"+this.$ha,this.D9)},yCa:function(){this.element.off(this.$ha)},Cpa:function(){this.element.on("mousedown"+this.XN,this.E9).on("mousemove"+this.XN,this.F9).on("mouseup"+this.XN,this.H9)},ACa:function(){this.element.off(this.XN)},Ipa:function(){this.element.on("touchstart"+
this.zG,this.Q9).on("touchmove"+this.zG,this.P9).on("touchend"+this.zG,this.JU).on("touchcancel"+this.zG,this.JU)},KCa:function(){this.element.off(this.zG)},Ev:function(a){var b=this.Nf,c=b.getPage(),d=-1;switch(a.keyCode){case g.ui.keyCode.RIGHT:d=this.Ui?c-1:c+1;break;case g.ui.keyCode.LEFT:d=this.Ui?c+1:c-1;break;case g.ui.keyCode.DOWN:d=c+1;break;case g.ui.keyCode.UP:d=c-1;break;case g.ui.keyCode.HOME:d=0;break;case g.ui.keyCode.END:d=b.getPageCount()-1;break;default:return}-1<d&&d<b.getPageCount()&&
b.setPage(d);a.preventDefault()},Jxa:function(a){this.M6(a.originalEvent)},Kxa:function(a){this.L6(a,a.originalEvent)},Mxa:function(){this.K6()},LU:function(a){a=a.originalEvent.touches;1===a.length&&this.M6(a[0])},KU:function(a){this.L6(a,a.originalEvent.touches[0]);(this.Kl||this.kw)&&a.preventDefault()},IU:function(){this.K6()},M6:function(a){if(1<this.Nf.getPageCount()&&!this.y4){this.Kl=!0;this.ty=!1;var b=this.wd();this.IL=b?a.pageX:a.pageY;this.oea=b?a.pageY:a.pageX}},Lya:function(a){var b=
this.wd();this.IL=b?a.pageX:a.pageY;this.oea=b?a.pageY:a.pageX;a=this.iD();var b=this.vn,c=this.Nf,d=this.Ls(),e=1;0<c.getPage()&&(this.yX(g(d[c.getPage()-1])),b.css(a,-this.Bs+W),e++);c.getPage()<c.getPageCount()-1&&(this.yX(g(d[c.getPage()+1])),e++);1<e&&b.css(this.tv(),e*this.Bs);this.kX=parseInt(b.css(a),10)},L6:function(a,b){if(this.Kl){var c=this.wd(),e=(c?b.pageX:b.pageY)-this.IL;Math.abs((c?b.pageY:b.pageX)-this.oea)>Math.abs(e)&&(this.kw=this.Kl=!1);if(this.ty){var f=c&&this.Ui?0<e:0>e,h=
this.Nf,k=h.getPage();if(f&&k<h.getPageCount()-1||!f&&0<k){var p=this.element[0],n=Math.min(m*(c?p.offsetWidth:p.offsetHeight),r),q=this.iD(),s=this.vn,p=this.Ls();Math.abs(e)>=n?(c=f?k+1:k-1,this.R7(c),k=f?k-1:k+1,-1<k&&k<h.getPageCount()&&this.X9(g(p[k])),f&&-1<k&&(p=parseInt(s.css(q),10),s.css(q,p+this.Bs+W)),s.css(this.tv(),2*this.Bs),this.Kl=!1,h.setPage(c)):(h=c&&this.Ui?-e:e,h=c?"translate3d("+h+"px, 0, 0)":"translate3d(0, "+h+"px, 0)",d(p.filter(ca),h));this.kw=!0}this.kw&&(a.preventDefault(),
a.stopPropagation())}else Math.abs(e)>l&&(this.Lya(b),this.ty=!0)}},K6:function(){if(this.Kl&&this.ty){var a=this.Nf.getPage();this.AU({previousPage:a,page:a})}this.kw=this.ty=this.Kl=!1},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-filmstrip-start-arrow"===a?this.widget().find(T+K+T+P).filter(this.Eo)[0]:"oj-filmstrip-end-arrow"===a?this.widget().find(T+K+T+B).filter(this.Eo)[0]:"oj-filmstrip-top-arrow"===a?this.widget().find(T+K+T+da).filter(this.Eo)[0]:
"oj-filmstrip-bottom-arrow"===a?this.widget().find(T+K+T+E).filter(this.Eo)[0]:null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-filmstrip-start-arrow"}),c=this.getNodeBySubId({subId:"oj-filmstrip-end-arrow"}),d=this.getNodeBySubId({subId:"oj-filmstrip-top-arrow"}),e=this.getNodeBySubId({subId:"oj-filmstrip-bottom-arrow"}),f=this.element[0];a&&a!=f;){if(a===b)return{subId:"oj-filmstrip-start-arrow"};if(a===c)return{subId:"oj-filmstrip-end-arrow"};if(a===d)return{subId:"oj-filmstrip-top-arrow"};
if(a===e)return{subId:"oj-filmstrip-bottom-arrow"};a=a.parentElement}return null}});var e="adjacent",f="aria-hidden",h="auto",k="display",l=3,m=.33,r=100,t="",s="JET FilmStrip: Value of 'currentItem' option not found: ",q="JET FilmStrip: Unsupported value set as 'orientation' option: ",p="Unsupported value set as 'arrowPlacement' option: ",n="Unsupported value set as 'arrowVisibility' option: ",u="flex-basis",v="hidden",w=":hidden",y="horizontal",x="hover",z="currentItem",C="none",E="oj-bottom",B=
"oj-end",K="oj-filmstrip-arrow",I="oj-filmstrip-arrow-container",Q="oj-filmstrip-arrow-transition",A="oj-filmstrip-container",J="oj-filmstrip-hover",D="oj-filmstrip-item",M="oj-filmstrip-item-container",H="oj-filmstrip-page",N="oj-filmstrip-pages-container",Y="oj-filmstrip-transition",L="oj-filmstrip-transition-next-newpage-from",S="oj-filmstrip-transition-next-oldpage-from",F="oj-filmstrip-transition-prev-newpage-from",R="oj-filmstrip-transition-prev-oldpage-from",V="oj-filmstrip-transition-next-newpage-to",
Z="oj-filmstrip-transition-next-oldpage-to",O="oj-filmstrip-transition-prev-newpage-to",G="oj-filmstrip-transition-prev-oldpage-to",U="oj-filmstrip-vertical",P="oj-start",da="oj-top",X="overlay",T=".",W="px",ia="vertical",ga="visible",ca=":visible",aa="-webkit-flex-basis",ba="JET FilmStrip: 'disabled' option not supported"})();a.Components.Xa("ojFilmStrip","baseComponent",{properties:{arrowPlacement:{type:"string"},arrowVisibility:{type:"string"},currentItem:{type:"string|number"},disabled:{type:"boolean"},
maxItemsPerPage:{type:"number"},orientation:{type:"string"}},methods:{getItemsPerPage:{},getPagingModel:{},refresh:{}},extension:{_widgetName:"ojFilmStrip"}});a.Components.register("oj-film-strip",a.Components.getMetadata("ojFilmStrip"))});