import{V as ae,X as x,Y as me,aa as W,ba as Y,da as le,ea as ce}from"./chunk-HIEXVKEL.js";import{i as re,k as oe}from"./chunk-RMDVE3LN.js";import{Ab as z,Bb as i,Cb as n,Db as o,Ea as y,Eb as $,Gb as E,Hb as N,Lb as T,Lc as ne,Mb as O,Nb as F,Qb as M,Rb as m,Tb as I,Ub as ie,Vc as k,Za as c,_a as p,eb as f,ha as j,la as l,na as g,ob as Q,rb as B,sb as s,ta as G,tb as ee,ua as q,xb as te,yb as U,zb as V}from"./chunk-HHFTGCM7.js";var se=(()=>{class e{element;renderer;constructor(r,t){this.element=r,this.renderer=t}ngOnInit(){this.renderer.setStyle(this.element.nativeElement,"overflow","hidden")}static \u0275fac=function(t){return new(t||e)(p(y),p(f))};static \u0275dir=g({type:e,selectors:[["","nevy11Clearfix",""]]})}return e})();var w=(()=>{class e{renderer;element;my=1;constructor(r,t){this.renderer=r,this.element=t}ngOnInit(){this.my===1&&(this.renderer.setStyle(this.element.nativeElement,"marginTop",".25rem"),this.renderer.setStyle(this.element.nativeElement,"marginBottom",".25rem")),this.my===2&&(this.renderer.setStyle(this.element.nativeElement,"marginTop",".5rem"),this.renderer.setStyle(this.element.nativeElement,"marginBottom",".5rem")),this.my===3&&(this.renderer.setStyle(this.element.nativeElement,"marginTop","1rem"),this.renderer.setStyle(this.element.nativeElement,"marginBottom","1rem")),this.my===4&&(this.renderer.setStyle(this.element.nativeElement,"marginTop","1.25rem"),this.renderer.setStyle(this.element.nativeElement,"marginBottom","1.25rem")),this.my===5&&(this.renderer.setStyle(this.element.nativeElement,"marginTop","1.5rem"),this.renderer.setStyle(this.element.nativeElement,"marginBottom","1.5rem"))}static \u0275fac=function(t){return new(t||e)(p(f),p(y))};static \u0275dir=g({type:e,selectors:[["","nevy11My",""]],inputs:{my:"my"}})}return e})();function Fe(e,L){e&1&&(i(0,"div"),o(1,"router-outlet"),n())}function Re(e,L){if(e&1){let r=$();i(0,"cdk-accordion-item",2,0)(2,"div",3),E("click",function(){G(r);let a=M(1);return q(a.toggle())}),m(3),i(4,"span",4),m(5),n()(),i(6,"div"),Q(7,Fe,2,0,"div"),n()()}if(e&2){let r=L.$implicit,t=L.$index,a=M(1),h=N();B("id","accordion-header-"+t)("aria-expanded",a.expanded)("aria-controls","accordion-body-"+t),c(2),s("routerLink",h.items_index[t]),c(),I(" ",r," "),c(2),ie(" ",a.expanded?"close":"open"," ",r," "),c(2),te(a.expanded?7:-1)}}var de=(()=>{class e{items=["login","sign up","Official Website","Library","Help Center"];items_index=["tablet/login","tablet/sign up","tablet/Official Website","tablet/Library","tablet/Help Center"];expandedIndex=0;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-top-settings-large"]],decls:3,vars:0,consts:[["accordionItem","cdkAccordionItem"],[1,"example-accordion"],["role","button","tabindex","0",1,"example-accordion-item"],[1,"example-accordion-item-header",3,"click","routerLink"],[1,"example-accordion-item-description"]],template:function(t,a){t&1&&(i(0,"cdk-accordion",1),V(1,Re,8,8,"cdk-accordion-item",2,U),n()),t&2&&(c(),z(a.items))},dependencies:[re,oe,W,Y],styles:[".example-accordion[_ngcontent-%COMP%]{display:block}.example-accordion-item[_ngcontent-%COMP%]{display:block;border:solid 1px #ccc}.example-accordion-item[_ngcontent-%COMP%] + .example-accordion-item[_ngcontent-%COMP%]{border-top:none}.example-accordion-item-header[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:space-between}.example-accordion-item-description[_ngcontent-%COMP%]{font-size:.85em;color:#999}.example-accordion-item-header[_ngcontent-%COMP%], .example-accordion-item-body[_ngcontent-%COMP%]{padding:16px}.example-accordion-item-header[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#eee}.example-accordion-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.example-accordion-item[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.items[_ngcontent-%COMP%]{color:#000}.btn[_ngcontent-%COMP%]{background-color:#000;color:#fff}"]})}return e})();function Ae(e,L){e&1&&(i(0,"div"),o(1,"nevy11-top-settings-large"),n())}var pe=(()=>{class e{show_settings=!0;change(){this.show_settings=!this.show_settings}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-top-bar-large"]],decls:8,vars:2,consts:[["nevy11Clearfix","",2,"background-color","black","color","white"],["nevy11My5","","nevy11My","",2,"float","left",3,"my"],[2,"float","right"],["mat-icon-button","","role","button","aria-controls","content",3,"click"],[4,"ngIf"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1),m(2,"LCP"),n(),i(3,"div",2)(4,"button",3),E("click",function(){return a.change()}),i(5,"mat-icon"),m(6,"menu"),n()()()(),Q(7,Ae,2,0,"div",4)),t&2&&(c(),s("my",2),c(6),s("ngIf",a.show_settings))},dependencies:[ne,ae,me,se,w,de]})}return e})();var D=(()=>{class e{renderer;element;text_color="white";bg_color="black";constructor(r,t){this.renderer=r,this.element=t}ngOnInit(){(this.bg_color==="black"||this.bg_color==="dark")&&(this.renderer.setStyle(this.element.nativeElement,"BsBgOpacity","1"),this.renderer.setStyle(this.element.nativeElement,"backgroundColor",this.bg_color),this.renderer.setStyle(this.element.nativeElement,"color",this.text_color)),(this.bg_color==="blue"||this.bg_color==="primary")&&(this.renderer.setStyle(this.element.nativeElement,"BsBgOpacity","1"),this.renderer.setStyle(this.element.nativeElement,"backgroundColor","rgba(13, 110, 253, 1)"),this.renderer.setStyle(this.element.nativeElement,"color",this.text_color)),(this.bg_color==="red"||this.bg_color==="danger")&&(this.renderer.setStyle(this.element.nativeElement,"BsBgOpacity","1"),this.renderer.setStyle(this.element.nativeElement,"backgroundColor","rgba(220, 53, 69, 1)"),this.renderer.setStyle(this.element.nativeElement,"color",this.text_color)),(this.bg_color==="yellow"||this.bg_color==="warning")&&(this.renderer.setStyle(this.element.nativeElement,"BsBgOpacity","1"),this.renderer.setStyle(this.element.nativeElement,"backgroundColor","rgba(255, 193, 7, 1)"),this.renderer.setStyle(this.element.nativeElement,"color",this.text_color)),(this.bg_color==="green"||this.bg_color==="success")&&(this.renderer.setStyle(this.element.nativeElement,"BsBgOpacity","1"),this.renderer.setStyle(this.element.nativeElement,"backgroundColor","rgba(25, 135, 84, 1)"),this.renderer.setStyle(this.element.nativeElement,"color",this.text_color)),this.bg_color==="purple"&&(this.renderer.setStyle(this.element.nativeElement,"BsBgOpacity","1"),this.renderer.setStyle(this.element.nativeElement,"backgroundColor","rgba(226, 216, 255, 1)"),this.renderer.setStyle(this.element.nativeElement,"color",this.text_color))}static \u0275fac=function(t){return new(t||e)(p(f),p(y))};static \u0275dir=g({type:e,selectors:[["","nevy11BgColor",""]],inputs:{text_color:"text_color",bg_color:"bg_color"}})}return e})();var _=(()=>{class e{element;renderer;bgColor="white";textColor="black";constructor(r,t){this.element=r,this.renderer=t}ngOnInit(){this.renderer.setStyle(this.element.nativeElement,"backgroundColor",this.bgColor),this.renderer.setStyle(this.element.nativeElement,"color",this.textColor)}onMouseEnter(){this.renderer.setStyle(this.element.nativeElement,"backgroundColor",this.textColor),this.renderer.setStyle(this.element.nativeElement,"color",this.bgColor)}onMouseLeave(){this.renderer.setStyle(this.element.nativeElement,"backgroundColor",this.bgColor),this.renderer.setStyle(this.element.nativeElement,"color",this.textColor)}static \u0275fac=function(t){return new(t||e)(p(y),p(f))};static \u0275dir=g({type:e,selectors:[["","nevy11Btn",""]],hostBindings:function(t,a){t&1&&E("mouseenter",function(){return a.onMouseEnter()})("mouseleave",function(){return a.onMouseLeave()})},inputs:{bgColor:"bgColor",textColor:"textColor"}})}return e})();var v=(()=>{class e{element;renderer;constructor(r,t){this.element=r,this.renderer=t}ngOnInit(){this.renderer.setStyle(this.element.nativeElement,"textAlign","center")}static \u0275fac=function(t){return new(t||e)(p(y),p(f))};static \u0275dir=g({type:e,selectors:[["","nevy11Center",""]]})}return e})();var C=(()=>{class e{renderer;element;header="h1";constructor(r,t){this.renderer=r,this.element=t}ngOnInit(){this.header==="h1"&&this.renderer.setStyle(this.element.nativeElement,"fontSize","calc(1.375rem + 1.5vw)"),this.header==="h2"&&this.renderer.setStyle(this.element.nativeElement,"fontSize","calc(1.325rem + .9vw)"),this.header==="h3"&&this.renderer.setStyle(this.element.nativeElement,"fontSize","calc(1.3rem + 0.6vw)"),this.header==="h4"&&this.renderer.setStyle(this.element.nativeElement,"fontSize","calc(1.275rem + 0.3vw)"),this.header==="h5"&&this.renderer.setStyle(this.element.nativeElement,"fontSize","calc(1.275rem + 0.3vw)")}static \u0275fac=function(t){return new(t||e)(p(f),p(y))};static \u0275dir=g({type:e,selectors:[["","nevy11H",""]],inputs:{header:"header"}})}return e})();var ve=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-upper-content-large"]],decls:10,vars:2,consts:[["nevy11H","",2,"margin-top","5rem",3,"header"],["nevy11Center",""],["nevy11Center","","nevy11My","",3,"my"],["nevy11Center","",2,"margin-top","5rem","margin-bottom","5rem"],["nevy11Center","",1,"btn",2,"margin-bottom","5rem"],["mat-flat-button","","nevy11Btn",""]],template:function(t,a){t&1&&(o(0,"br"),i(1,"div",0)(2,"div",1),m(3," LCP gpt for learning leading to a better informed society "),n()(),i(4,"div",2)(5,"div",3),m(6," The chat gpt Laikipia University app that enables you to gain more information about Laikipia University "),n()(),i(7,"div",4)(8,"button",5),m(9,"Get Started"),n()()),t&2&&(c(),s("header","h2"),c(3),s("my",5))},dependencies:[x,_,v,C,w]})}return e})();var fe=(()=>{class e{height=600;width=900;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-image-1-ai-large"]],decls:2,vars:2,consts:[["nevy11Center",""],["ngSrc","/images/gpt.webp","alt","image unavailable","priority","",3,"width","height"]],template:function(t,a){t&1&&(i(0,"div",0),o(1,"img",1),n()),t&2&&(c(),s("width",a.width)("height",a.height))},dependencies:[k,v]})}return e})();var ge=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-part-a-large"]],decls:4,vars:0,template:function(t,a){t&1&&(i(0,"div"),o(1,"nevy11-upper-content-large"),n(),i(2,"div"),o(3,"nevy11-image-1-ai-large"),n())},dependencies:[ve,fe]})}return e})();var b=(()=>{class e{element;renderer;constructor(r,t){this.element=r,this.renderer=t}ngOnInit(){this.renderer.setStyle(this.element.nativeElement,"flex","1 0 0%"),this.renderer.setStyle(this.element.nativeElement,"flex-grow","1"),this.renderer.setStyle(this.element.nativeElement,"flex-shrink","0"),this.renderer.setStyle(this.element.nativeElement,"flex-basis","0%")}static \u0275fac=function(t){return new(t||e)(p(y),p(f))};static \u0275dir=g({type:e,selectors:[["","nevy11Col",""]]})}return e})();var S=(()=>{class e{element;renderer;constructor(r,t){this.element=r,this.renderer=t}ngOnInit(){this.renderer.setStyle(this.element.nativeElement,"display","flex"),this.renderer.setStyle(this.element.nativeElement,"flexWrap","wrap"),this.renderer.setStyle(this.element.nativeElement,"marginTop","calc(-1 * 0)"),this.renderer.setStyle(this.element.nativeElement,"marginRight","calc(-0.5 * 1.5rem)"),this.renderer.setStyle(this.element.nativeElement,"marginLeft","calc(-0.5 * 1.5rem)")}static \u0275fac=function(t){return new(t||e)(p(y),p(f))};static \u0275dir=g({type:e,selectors:[["","nevy11Row",""]]})}return e})();var ye=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-b-content-large"]],decls:21,vars:8,consts:[[2,"margin-left","2.5rem","margin-right","2.5rem"],["nevy11Row",""],["nevy11Col",""],["nevy11My","","nevy11H","","nevy11Center","",3,"my","header"],["mat-flat-button","","nevy11Btn","",3,"bgColor","textColor"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"history"),n(),i(5,"div"),m(6," over the past few years, Laikipia University has been operating at a high knowlegable rate teaching over 1 million students to become the best. Surprisingly only few managed to become the best "),n()(),i(7,"div",2)(8,"div",3),m(9,"Accuracy"),n(),i(10,"div"),m(11," The accuracy of this Laikipia AI is incredible you can ask any question to the artificial Intelligence "),n()(),i(12,"div",2)(13,"div",3),m(14," navigation "),n(),i(15,"div"),m(16,` You can easily navigate the school's laikipia portal and other school services thanks to the help of this Artificial intellligece. "The transformer app is also one of the best in Kenya", samuel Ongwae. `),n()()(),o(17,"br"),i(18,"button",4),m(19," Get Started "),n(),o(20,"br"),n()),t&2&&(c(3),s("my",3)("header","h4"),c(5),s("my",3)("header","h4"),c(5),s("my",3)("header","h4"),c(5),s("bgColor","black")("textColor","white"))},dependencies:[x,_,v,b,C,w,S]})}return e})();var he=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-part-b-large"]],decls:2,vars:0,template:function(t,a){t&1&&(i(0,"div"),o(1,"nevy11-b-content-large"),n())},dependencies:[ye]})}return e})();var ue=(()=>{class e{width=700;height=400;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-c-image1-large"]],decls:2,vars:2,consts:[["nevy11Center",""],["ngSrc","/images/brainAI.jpeg","alt"," image unavailable","priority","",3,"width","height"]],template:function(t,a){t&1&&(i(0,"div",0),o(1,"img",1),n()),t&2&&(c(),s("width",a.width)("height",a.height))},dependencies:[k,v]})}return e})();var Ce=(()=>{class e{width=600;height=400;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-cimage-2-large"]],decls:2,vars:2,consts:[["nevy11Center",""],["ngSrc","/images/manyGrads.jpg","alt"," image unavailable","priority","",3,"width","height"]],template:function(t,a){t&1&&(i(0,"div",0),o(1,"img",1),n()),t&2&&(c(),s("width",a.width)("height",a.height))},dependencies:[k,v]})}return e})();var xe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-upper-c-large"]],decls:8,vars:3,consts:[["nevy11My","","nevy11H","","nevy11Center","",3,"my","header"],["nevy11Center",""],["nevy11Center","","nevy11My","",3,"my"],["mat-flat-button","","nevy11Btn",""]],template:function(t,a){t&1&&(o(0,"br"),i(1,"div",0),m(2,` converting your education to intelligence with the power of LCP transformer
`),n(),i(3,"div",1),m(4,` Get a head start of your journey, both educational and the outside world surviving with the power of an AI generator. The transformer contains information and data from first year to forth year in almost all units.
`),n(),i(5,"div",2)(6,"button",3),m(7,"Get Started"),n()()),t&2&&(c(),s("my",5)("header","h4"),c(4),s("my",5))},dependencies:[x,_,v,C,w]})}return e})();var be=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-part-c-large"]],decls:8,vars:0,consts:[["nevy11BgColor","",1,"lcp"],[2,"margin-left","2.5rem","margin-right","2.5rem"],["nevy11Row",""],["nevy11Col","",2,"margin-bottom","1rem"],["nevy11Col",""]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1),o(2,"nevy11-upper-c-large"),i(3,"div",2)(4,"div",3),o(5,"nevy11-c-image1-large"),n(),i(6,"div",4),o(7,"nevy11-cimage-2-large"),n()()()())},dependencies:[D,b,S,ue,Ce,xe]})}return e})();var Se=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-side1-large"]],decls:2,vars:1,consts:[["nevy11H","","nevy11Center","",2,"margin-top","5rem",3,"header"]],template:function(t,a){t&1&&(i(0,"div",0),m(1,` learn more than what is taught
`),n()),t&2&&s("header","h4")},dependencies:[v,C]})}return e})();var Ee=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-side2-large"]],decls:3,vars:0,consts:[["nevy11Center","",2,"margin-top","5rem","margin-bottom","5rem"]],template:function(t,a){t&1&&(i(0,"div",0),m(1,` Get secure end conversation that enables the student to communicate and express his or herself on problems related to academics and personal stuffs. This can enable the student to increase his or her productivity in terms of academic, intelligence and success in the outside world
`),n(),o(2,"br"))},dependencies:[v]})}return e})();var we=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-part-d-large"]],decls:6,vars:0,consts:[[2,"margin-left","2.5rem","margin-right","2.5rem"],["nevy11Row",""],["nevy11Col",""]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),o(3,"nevy11-side1-large"),n(),i(4,"div",2),o(5,"nevy11-side2-large"),n()()())},dependencies:[b,S,Se,Ee]})}return e})();var De=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-e-content-large"]],decls:13,vars:0,template:function(t,a){t&1&&(i(0,"div")(1,"ul"),m(2," english arts "),n()(),i(3,"ul"),m(4,` science and technology
`),n(),i(5,"ul"),m(6,` Internet Technology
`),n(),i(7,"ul"),m(8,` Computer science
`),n(),i(9,"ul"),m(10,` Health Records
`),n(),i(11,"ul"),m(12,` Civil Engineering
`),n())}})}return e})();var _e=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-e-video-large"]],decls:1,vars:2,consts:[["width","700","src","videos/deepDive.mp4","controls","","loop","",1,"video",3,"muted","autoplay"]],template:function(t,a){t&1&&o(0,"video",0),t&2&&s("muted",!0)("autoplay",!0)}})}return e})();var Le=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-part-e-large"]],decls:18,vars:3,consts:[["nevy11BgColor","","nevy11Center","",3,"bg_color","text_color"],[2,"margin-left","2.5rem","margin-right","2.5rem"],["nevy11Row",""],["nevy11Col",""],["nevy11Col","",2,"margin-top","1rem","margin-bottom","1rem"],["nevy11H","",3,"header"],[2,"margin-bottom","2rem"],["nevy11Btn","","mat-flat-button","",2,"margin-bottom","3rem","margin-top","2rem"],[2,"margin-top","3rem"]],template:function(t,a){t&1&&(i(0,"div",0),o(1,"br"),i(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),m(7,"Ask any question"),n()(),o(8,"br"),i(9,"div",6),o(10,"nevy11-e-content-large"),n(),i(11,"div")(12,"div")(13,"button",7),m(14," Get Started "),n()()()(),i(15,"div",3)(16,"div",8),o(17,"nevy11-e-video-large"),n()()()()()),t&2&&(s("bg_color","purple")("text_color","black"),c(6),s("header","h2"))},dependencies:[x,D,_,v,b,C,S,De,_e]})}return e})();var tt=["faq"];function it(e,L){if(e&1){let r=$();i(0,"cdk-accordion-item",5,1)(2,"div",6),E("click",function(){G(r);let a=M(1);return q(a.toggle())}),m(3),i(4,"span",7),m(5),n()(),i(6,"div",8),m(7),n()()}if(e&2){let r=L.$implicit,t=L.$index,a=M(1),h=N();B("id","accordion-header-"+t)("aria-expanded",a.expanded)("aria-controls","accordion-body-"+t),c(3),I(" ",r," "),c(2),I(" Click to ",a.expanded?"close":"open"," "),c(),ee("display",a.expanded?"":"none"),B("id","accordion-body-"+t)("aria-labelledby","accordion-header-"+t),c(),I(" ",h.answers[t]," ")}}var Me=(()=>{class e{faq;renderer=j(f);items=["is LCP for student free?","when was Laikipia University started","Is the chatting platform an AI?","Can you use the AI for businesses","How accurate is the AI"];answers=["Yes, LCP is always free as there are no charging","It was started in 1949","The entire transformer is built on a transformer with decoders","Thanks to God, The ai can help people who have little or no experience to start a business","The AI is 99.0% accurate in terms of answering the questions"];expandedIndex=0;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-part-f-large"]],viewQuery:function(t,a){if(t&1&&T(tt,7),t&2){let h;O(h=F())&&(a.faq=h.first)}},decls:8,vars:0,consts:[["faq",""],["accordionItem","cdkAccordionItem"],[2,"margin-top","1rem"],["nevy11Center","","nevy11H2","",2,"margin-bottom","2rem"],[1,"example-accordion"],["role","button","tabindex","0",1,"example-accordion-item"],[1,"example-accordion-item-header",3,"click"],[1,"example-accordion-item-description"],["role","region",1,"example-accordion-item-body"]],template:function(t,a){t&1&&(o(0,"br"),i(1,"div",2,0)(3,"div",3),m(4," FAQS- Commonly asked questions "),n(),i(5,"cdk-accordion",4),V(6,it,8,10,"cdk-accordion-item",5,U),n()()),t&2&&(c(6),z(a.items))},dependencies:[W,Y,v],styles:[".example-accordion[_ngcontent-%COMP%]{display:block}.example-accordion-item[_ngcontent-%COMP%]{display:block;border:solid 1px #ccc}.example-accordion-item[_ngcontent-%COMP%] + .example-accordion-item[_ngcontent-%COMP%]{border-top:none}.example-accordion-item-header[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:space-between}.example-accordion-item-description[_ngcontent-%COMP%]{font-size:.85em;color:#999}.example-accordion-item-header[_ngcontent-%COMP%], .example-accordion-item-body[_ngcontent-%COMP%]{padding:16px}.example-accordion-item-header[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#eee}.example-accordion-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.example-accordion-item[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}"]})}return e})();var rt=["tomorrow"],ot=["main"],Ie=(()=>{class e{tomorrow;main;renderer=j(f);ngOnInit(){this.renderer.setStyle(this.tomorrow.nativeElement,"margin-top","5rem"),this.renderer.setStyle(this.tomorrow.nativeElement,"margin-bottom","5rem"),this.renderer.setStyle(this.main.nativeElement,"margin-top","3rem"),this.renderer.setStyle(this.main.nativeElement,"margin-bottom","3rem")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-part-g-large"]],viewQuery:function(t,a){if(t&1&&(T(rt,7),T(ot,7)),t&2){let h;O(h=F())&&(a.tomorrow=h.first),O(h=F())&&(a.main=h.first)}},decls:10,vars:3,consts:[["main",""],["tomorrow",""],["nevy11Center","","nevy11H","","nevy11BgColor","",3,"bg_color","text_color","header"],["nevy11Center",""],["mat-flat-button","","nevy11My5","",2,"color","rgba(226, 216, 255, 1)","background-color","black"]],template:function(t,a){t&1&&(i(0,"div",2,0),o(2,"br"),i(3,"div",3,1),m(5,"Tomorrow's success starts today"),n(),i(6,"div")(7,"button",4),m(8," Get Started "),n()(),o(9,"br"),n()),t&2&&s("bg_color","purple")("text_color","black")("header","h2")},dependencies:[x,D,v,C]})}return e})();var ke=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-part-h-large"]],decls:19,vars:0,consts:[[1,"footer"],[2,"margin-left","2.5rem","margin-right","2.5rem"],["nevy11Row",""],["nevy11Col",""]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-list")(5,"mat-list-item"),m(6," Portal "),n(),i(7,"mat-list-item"),m(8,"Official Website"),n(),i(9,"mat-list-item"),m(10," Login "),n()()(),i(11,"div",3)(12,"mat-list")(13,"mat-list-item"),m(14,"signUp"),n(),i(15,"mat-list-item"),m(16," Library "),n(),i(17,"mat-list-item"),m(18,"Help Center"),n()()()()()())},dependencies:[le,ce,b,S],styles:["mat-item[_ngcontent-%COMP%]{color:#000}.footer[_ngcontent-%COMP%]{background-color:#000;color:#fff}"]})}return e})();var Pe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-content-large"]],decls:16,vars:0,consts:[["nevy11BgColor",""],[2,"margin-top","5rem","margin-bottom","5rem"]],template:function(t,a){t&1&&(i(0,"div",0),o(1,"nevy11-part-a-large"),n(),i(2,"div",1),o(3,"nevy11-part-b-large"),n(),i(4,"div",1),o(5,"nevy11-part-c-large"),n(),i(6,"div",1),o(7,"nevy11-part-d-large"),n(),i(8,"div",1),o(9,"nevy11-part-e-large"),n(),i(10,"div",1),o(11,"nevy11-part-f-large"),n(),i(12,"div",1),o(13,"nevy11-part-g-large"),n(),i(14,"div",1),o(15,"nevy11-part-h-large"),n())},dependencies:[D,ge,he,be,we,Le,Me,Ie,ke]})}return e})();var Be=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-landing-page"]],decls:5,vars:0,template:function(t,a){t&1&&(i(0,"div")(1,"div"),o(2,"nevy11-top-bar-large"),n(),i(3,"div"),o(4,"nevy11-content-large"),n()())},dependencies:[pe,Pe]})}return e})();var Ct=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["nevy11-large"]],decls:2,vars:0,consts:[["nevy11Center",""]],template:function(t,a){t&1&&(i(0,"div",0),o(1,"nevy11-landing-page"),n())},dependencies:[Be,v]})}return e})();export{Ct as a};
