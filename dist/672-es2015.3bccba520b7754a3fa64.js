(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[672],{96672:function(t,n,e){"use strict";e.r(n),e.d(n,{StarterModule:function(){return b}});var o=e(54655),a=e(67574),r=e(37716),i=e(42378),h=e(30553),c=e(83592),g=e(71663),d=e(38583),m=e(73747);function l(t,n){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"nb-card",17),r["\u0275\u0275listener"]("click",function(){const n=r["\u0275\u0275restoreView"](t).$implicit;return r["\u0275\u0275nextContext"]().navigate(n.value)}),r["\u0275\u0275elementStart"](2,"nb-card-header"),r["\u0275\u0275text"](3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"nb-card-body"),r["\u0275\u0275element"](5,"img",18),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()}if(2&t){const t=n.$implicit;r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](t.name),r["\u0275\u0275advance"](2),r["\u0275\u0275propertyInterpolate1"]("src","assets/images/",t.value,"-theme.jpg",r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275propertyInterpolate1"]("alt","",t.name," Theme")}}const s=function(t){return{"material-text-color":t}};let C=(()=>{class t{constructor(t,n,e,o){this.router=t,this.currentThemeService=n,this.analytics=e,this.metadataService=o,this.materialTheme$=new a.y(t=>{const n=this.currentThemeService.getCurrentTheme();t.next(n.startsWith("material"))}),this.themes=[{value:"material-light",name:"Material Light"},{value:"material-dark",name:"Material Dark"},{value:"default",name:"Light"},{value:"dark",name:"Dark"},{value:"corporate",name:"Corporate"},{value:"cosmic",name:"Cosmic"}]}ngOnInit(){this.metadataService.updateTitle("Ngx-admin themes for e-commerce dashboard on Angular 9+ and Nebular"),this.metadataService.updateDescription("Choose a theme for ngx-admin e-commerce dashboard: Material, Light and Dark, Cosmic and Corporate."),this.metadataService.updateKeywords("Ngx-admin themes, material theme, ngx-admin cosmic, ngx-admin corporate theme, dark theme ngx-admin")}navigate(t){this.currentThemeService.setCurrentTheme(t),this.router.navigate(["/pages/dashboard"],{queryParams:{theme:t}})}trackEmailClick(){this.analytics.trackEvent("clickContactEmail","click")}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(r["\u0275\u0275directiveInject"](o.F0),r["\u0275\u0275directiveInject"](i.o),r["\u0275\u0275directiveInject"](h.y),r["\u0275\u0275directiveInject"](c.D))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-starter"]],decls:33,vars:21,consts:[["windowMode",""],["fixed",""],[1,"header-container"],[1,"logo-container"],[1,"logo",3,"ngClass"],["size","small"],[1,"control-item","github-stars"],[1,"subtitle","text",3,"ngClass"],["src","https://ghbtns.com/github-btn.html?user=akveo&repo=ngx-admin&type=star&count=true","frameborder","0","scrolling","0","width","170px","height","20px"],[1,"control-item","downloads-count"],["icon","download"],[1,"subtitle","number",3,"ngClass"],[1,"control-item","contact-us",3,"click"],["nbButton","","ghost","","href","mailto:contact@akveo.com"],["icon","email-outline","pack","eva"],[3,"ngClass"],[4,"ngFor","ngForOf"],[3,"click"],[1,"theme-preview",3,"src","alt"]],template:function(t,n){1&t&&(r["\u0275\u0275elementStart"](0,"nb-layout",0),r["\u0275\u0275elementStart"](1,"nb-layout-header",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"p",4),r["\u0275\u0275pipe"](5,"async"),r["\u0275\u0275text"](6,"ngx-"),r["\u0275\u0275elementStart"](7,"span"),r["\u0275\u0275text"](8,"admin"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"div",2),r["\u0275\u0275elementStart"](10,"nb-actions",5),r["\u0275\u0275elementStart"](11,"nb-action",6),r["\u0275\u0275elementStart"](12,"span",7),r["\u0275\u0275pipe"](13,"async"),r["\u0275\u0275text"](14,"Support us: "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](15,"iframe",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"nb-action",9),r["\u0275\u0275element"](17,"nb-icon",10),r["\u0275\u0275elementStart"](18,"span",11),r["\u0275\u0275pipe"](19,"async"),r["\u0275\u0275text"](20,"470.000"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"nb-action",12),r["\u0275\u0275listener"]("click",function(){return n.trackEmailClick()}),r["\u0275\u0275elementStart"](22,"a",13),r["\u0275\u0275element"](23,"nb-icon",14),r["\u0275\u0275elementStart"](24,"span",15),r["\u0275\u0275pipe"](25,"async"),r["\u0275\u0275text"](26,"contact@akveo.com"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](27,"nb-layout-column"),r["\u0275\u0275elementStart"](28,"h4"),r["\u0275\u0275text"](29,"Choose theme"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](30,l,6,3,"ng-container",16),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"nb-layout-footer",1),r["\u0275\u0275element"](32,"ngx-footer"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](13,s,r["\u0275\u0275pipeBind1"](5,5,n.materialTheme$))),r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](15,s,r["\u0275\u0275pipeBind1"](13,7,n.materialTheme$))),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](17,s,r["\u0275\u0275pipeBind1"](19,9,n.materialTheme$))),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](19,s,r["\u0275\u0275pipeBind1"](25,11,n.materialTheme$))),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("ngForOf",n.themes))},directives:[g.Aqw,g.dmS,d.mk,g.lYD,g.Bk3,g.fMN,g.DPz,g.dP_,d.sg,g.l88,m.c,g.Asz,g.ndF,g.yKW],pipes:[d.Ov],styles:[".nb-theme-default   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-default   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-default   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-default   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-dark   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-dark   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-dark   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #151a30}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-cosmic   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-cosmic   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #1b1b38}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-corporate   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-corporate   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-material-dark   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-material-dark   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-material-dark   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-material-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-material-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #1f1f1f}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-material-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-material-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}.nb-theme-material-light   [_nghost-%COMP%]   .material-text-color[_ngcontent-%COMP%]{color:#fff}.nb-theme-material-light   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain;height:auto;vertical-align:top}.nb-theme-material-light   [_nghost-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;width:100%;height:35px;margin-bottom:36px}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;align-content:flex-start}.nb-theme-material-light   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;width:32%}.nb-theme-material-light   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav{width:100%;justify-content:space-between}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:.9375rem;font-weight:600;line-height:1.5rem}[dir=ltr]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-right:.5rem}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nb-search button{padding:0!important}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{padding:0}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;margin-bottom:.5rem;white-space:nowrap;text-decoration:none}[dir=rtl]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #ebebeb}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{width:245px;display:flex}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100px}[dir=ltr]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:1rem}[dir=rtl]   .nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width:1399.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]{width:auto}.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .control-item.github-stars[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0}}@media (max-width:1199.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .downloads-count[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{display:none}}@media (max-width:575.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   .github-stars[_ngcontent-%COMP%]{display:none}}@media (max-width:1199.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:12px 20px}.nb-theme-material-light   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:48%}}@media (max-width:767.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:10px 20px}}@media (max-width:575.98px){.nb-theme-material-light   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{width:100%}}"]}),t})();const O=[{path:"",component:C,children:[{path:"",component:C}]}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[o.Bz.forChild(O)],o.Bz]}),t})();var P=e(8646);const _=[g.KdK,g.BW0,g.zyh,g.T2N];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[M,..._,P.O,g.MAY]]}),t})()}}]);