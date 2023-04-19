!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[672],{96672:function(e,o,a){"use strict";a.r(o),a.d(o,{StarterModule:function(){return f}});var r=a(54655),i=a(67574),c=a(37716),h=a(42378),g=a(30553),d=a(83592),m=a(71663),l=a(38583),s=a(73747);function C(t,n){if(1&t){var e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275elementStart"](1,"nb-card",17),c["\u0275\u0275listener"]("click",function(){var t=c["\u0275\u0275restoreView"](e).$implicit;return c["\u0275\u0275nextContext"]().navigate(t.value)}),c["\u0275\u0275elementStart"](2,"nb-card-header"),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"nb-card-body"),c["\u0275\u0275element"](5,"img",18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementContainerEnd"]()}if(2&t){var o=n.$implicit;c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](o.name),c["\u0275\u0275advance"](2),c["\u0275\u0275propertyInterpolate1"]("src","assets/images/",o.value,"-theme.jpg",c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275propertyInterpolate1"]("alt","",o.name," Theme")}}var O,M=function(t){return{"material-text-color":t}},P=function(){var e=function(){function e(n,o,a,r){var c=this;t(this,e),this.router=n,this.currentThemeService=o,this.analytics=a,this.metadataService=r,this.materialTheme$=new i.y(function(t){var n=c.currentThemeService.getCurrentTheme();t.next(n.startsWith("material"))}),this.themes=[{value:"material-light",name:"Material Light"},{value:"material-dark",name:"Material Dark"},{value:"default",name:"Light"},{value:"dark",name:"Dark"},{value:"corporate",name:"Corporate"},{value:"cosmic",name:"Cosmic"}]}var o,a,r;return o=e,(a=[{key:"ngOnInit",value:function(){this.metadataService.updateTitle("Ngx-admin themes for e-commerce dashboard on Angular 9+ and Nebular"),this.metadataService.updateDescription("Choose a theme for ngx-admin e-commerce dashboard: Material, Light and Dark, Cosmic and Corporate."),this.metadataService.updateKeywords("Ngx-admin themes, material theme, ngx-admin cosmic, ngx-admin corporate theme, dark theme ngx-admin")}},{key:"navigate",value:function(t){this.currentThemeService.setCurrentTheme(t),this.router.navigate(["/pages/dashboard"],{queryParams:{theme:t}})}},{key:"trackEmailClick",value:function(){this.analytics.trackEvent("clickContactEmail","click")}},{key:"ngOnDestroy",value:function(){}}])&&n(o.prototype,a),r&&n(o,r),e}();return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](r.F0),c["\u0275\u0275directiveInject"](h.o),c["\u0275\u0275directiveInject"](g.y),c["\u0275\u0275directiveInject"](d.D))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-starter"]],decls:33,vars:21,consts:[["windowMode",""],["fixed",""],[1,"header-container"],[1,"logo-container"],[1,"logo",3,"ngClass"],["size","small"],[1,"control-item","github-stars"],[1,"subtitle","text",3,"ngClass"],["src","https://ghbtns.com/github-btn.html?user=akveo&repo=ngx-admin&type=star&count=true","frameborder","0","scrolling","0","width","170px","height","20px"],[1,"control-item","downloads-count"],["icon","download"],[1,"subtitle","number",3,"ngClass"],[1,"control-item","contact-us",3,"click"],["nbButton","","ghost","","href","mailto:contact@akveo.com"],["icon","email-outline","pack","eva"],[3,"ngClass"],[4,"ngFor","ngForOf"],[3,"click"],[1,"theme-preview",3,"src","alt"]],template:function(t,n){1&t&&(c["\u0275\u0275elementStart"](0,"nb-layout",0),c["\u0275\u0275elementStart"](1,"nb-layout-header",1),c["\u0275\u0275elementStart"](2,"div",2),c["\u0275\u0275elementStart"](3,"div",3),c["\u0275\u0275elementStart"](4,"p",4),c["\u0275\u0275pipe"](5,"async"),c["\u0275\u0275text"](6,"ngx-"),c["\u0275\u0275elementStart"](7,"span"),c["\u0275\u0275text"](8,"admin"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"div",2),c["\u0275\u0275elementStart"](10,"nb-actions",5),c["\u0275\u0275elementStart"](11,"nb-action",6),c["\u0275\u0275elementStart"](12,"span",7),c["\u0275\u0275pipe"](13,"async"),c["\u0275\u0275text"](14,"Support us: "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](15,"iframe",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"nb-action",9),c["\u0275\u0275element"](17,"nb-icon",10),c["\u0275\u0275elementStart"](18,"span",11),c["\u0275\u0275pipe"](19,"async"),c["\u0275\u0275text"](20,"470.000"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"nb-action",12),c["\u0275\u0275listener"]("click",function(){return n.trackEmailClick()}),c["\u0275\u0275elementStart"](22,"a",13),c["\u0275\u0275element"](23,"nb-icon",14),c["\u0275\u0275elementStart"](24,"span",15),c["\u0275\u0275pipe"](25,"async"),c["\u0275\u0275text"](26,"contact@akveo.com"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](27,"nb-layout-column"),c["\u0275\u0275elementStart"](28,"h4"),c["\u0275\u0275text"](29,"Choose theme"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](30,C,6,3,"ng-container",16),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](31,"nb-layout-footer",1),c["\u0275\u0275element"](32,"ngx-footer"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngClass",c["\u0275\u0275pureFunction1"](13,M,c["\u0275\u0275pipeBind1"](5,5,n.materialTheme$))),c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("ngClass",c["\u0275\u0275pureFunction1"](15,M,c["\u0275\u0275pipeBind1"](13,7,n.materialTheme$))),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngClass",c["\u0275\u0275pureFunction1"](17,M,c["\u0275\u0275pipeBind1"](19,9,n.materialTheme$))),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngClass",c["\u0275\u0275pureFunction1"](19,M,c["\u0275\u0275pipeBind1"](25,11,n.materialTheme$))),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngForOf",n.themes))},directives:[m.Aqw,m.dmS,l.mk,m.lYD,m.Bk3,m.fMN,m.DPz,m.dP_,l.sg,m.l88,s.c,m.Asz,m.ndF,m.yKW],pipes:[l.Ov],styles:[".nb-theme-default   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-default   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-default   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-default   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-dark   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-dark   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-dark   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #151a30}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-cosmic   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-cosmic   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #1b1b38}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-corporate   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-corporate   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-material-dark   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-material-dark   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-material-dark   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-material-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-material-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #1f1f1f}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-material-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-material-light   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-material-light   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-material-light   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-material-light   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-material-light   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #ebebeb}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-material-light   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}"]}),e}(),_=[{path:"",component:P,children:[{path:"",component:P}]}],b=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(_)],r.Bz]}),n}(),u=a(8646),p=[m.KdK,m.BW0,m.zyh,m.T2N],f=((O=function n(){t(this,n)}).\u0275fac=function(t){return new(t||O)},O.\u0275mod=c["\u0275\u0275defineNgModule"]({type:O}),O.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[b].concat(p,[u.O,m.MAY])]}),O)}}])}();