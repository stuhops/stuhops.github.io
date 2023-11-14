(self.webpackChunkresume_angular=self.webpackChunkresume_angular||[]).push([[882],{9882:(M,s,a)=>{"use strict";function i(f,A,n,d,h,g,U){try{var P=f[g](U),v=P.value}catch(Q){return void n(Q)}P.done?A(v):Promise.resolve(v).then(d,h)}function r(f){return function(){var A=this,n=arguments;return new Promise(function(d,h){var g=f.apply(A,n);function U(v){i(g,d,h,U,P,"next",v)}function P(v){i(g,d,h,U,P,"throw",v)}U(void 0)})}}a.r(s),a.d(s,{QrCodeGeneratorModule:()=>B});var t=a(5879),e=a(2839),o=a(6593);const l=["qrcElement"];let u=(()=>{class f{constructor(n,d){this.renderer=n,this.sanitizer=d,this.allowEmptyString=!1,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.qrdata="",this.scale=4,this.width=10,this.qrCodeURL=new t.vpe,this.context=null}ngOnChanges(){var n=this;return r(function*(){yield n.createQRCode()})()}isValidQrCodeText(n){return!1===this.allowEmptyString?!(typeof n>"u"||""===n||"null"===n||null===n):!(typeof n>"u")}toDataURL(n){return new Promise((d,h)=>{(0,e.hz)(this.qrdata,n,(g,U)=>{g?h(g):d(U)})})}toCanvas(n,d){return new Promise((h,g)=>{(0,e.rT)(n,this.qrdata,d,U=>{U?g(U):h("success")})})}toSVG(n){return new Promise((d,h)=>{(0,e.toString)(this.qrdata,n,(g,U)=>{g?h(g):d(U)})})}renderElement(n){for(const d of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,d);this.renderer.appendChild(this.qrcElement.nativeElement,n)}createQRCode(){var n=this;return r(function*(){n.version&&n.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),n.version=40):n.version&&n.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),n.version=1):void 0!==n.version&&isNaN(n.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),n.version=void 0);try{if(!n.isValidQrCodeText(n.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");n.isValidQrCodeText(n.qrdata)&&""===n.qrdata&&(n.qrdata=" ");const d={color:{dark:n.colorDark,light:n.colorLight},errorCorrectionLevel:n.errorCorrectionLevel,margin:n.margin,scale:n.scale,version:n.version,width:n.width},h=n.imageSrc,g=n.imageHeight||40,U=n.imageWidth||40;switch(n.elementType){case"canvas":{const P=n.renderer.createElement("canvas");n.context=P.getContext("2d"),n.toCanvas(P,d).then(()=>{if(n.ariaLabel&&n.renderer.setAttribute(P,"aria-label",`${n.ariaLabel}`),n.title&&n.renderer.setAttribute(P,"title",`${n.title}`),h&&n.context){n.centerImage=new Image(U,g),h!==n.centerImage.src&&(n.centerImage.src=h),g!==n.centerImage.height&&(n.centerImage.height=g),U!==n.centerImage.width&&(n.centerImage.width=U);const v=n.centerImage;v&&(v.onload=()=>{n.context?.drawImage(v,P.width/2-U/2,P.height/2-g/2,U,g)})}n.renderElement(P),n.emitQRCodeURL(P)}).catch(v=>{console.error("[angularx-qrcode] canvas error:",v)});break}case"svg":{const P=n.renderer.createElement("div");n.toSVG(d).then(v=>{n.renderer.setProperty(P,"innerHTML",v);const Q=P.firstChild;n.renderer.setAttribute(Q,"height",`${n.width}`),n.renderer.setAttribute(Q,"width",`${n.width}`),n.renderElement(Q),n.emitQRCodeURL(Q)}).catch(v=>{console.error("[angularx-qrcode] svg error:",v)});break}default:{const P=n.renderer.createElement("img");n.toDataURL(d).then(v=>{n.alt&&P.setAttribute("alt",n.alt),n.ariaLabel&&P.setAttribute("aria-label",n.ariaLabel),P.setAttribute("src",v),n.title&&P.setAttribute("title",n.title),n.renderElement(P),n.emitQRCodeURL(P)}).catch(v=>{console.error("[angularx-qrcode] img/url error:",v)})}}}catch(d){console.error("[angularx-qrcode] Error generating QR Code:",d.message)}})()}emitQRCodeURL(n){const d=n.constructor.name;if(d===SVGSVGElement.name){const U=new Blob([n.outerHTML],{type:"image/svg+xml"}),P=URL.createObjectURL(U),v=this.sanitizer.bypassSecurityTrustUrl(P);return void this.qrCodeURL.emit(v)}let h="";d===HTMLCanvasElement.name&&(h=n.toDataURL("image/png")),d===HTMLImageElement.name&&(h=n.src),fetch(h).then(g=>g.blob()).then(g=>URL.createObjectURL(g)).then(g=>this.sanitizer.bypassSecurityTrustUrl(g)).then(g=>{this.qrCodeURL.emit(g)}).catch(g=>{console.error("[angularx-qrcode] Error when fetching image/png URL: "+g)})}static#t=this.\u0275fac=function(d){return new(d||f)(t.Y36(t.Qsj),t.Y36(o.H7))};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["qrcode"]],viewQuery:function(d,h){if(1&d&&t.Gf(l,7),2&d){let g;t.iGM(g=t.CRH())&&(h.qrcElement=g.first)}},inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},outputs:{qrCodeURL:"qrCodeURL"},features:[t.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(d,h){1&d&&t._UZ(0,"div",null,0),2&d&&t.Tol(h.cssClass)},encapsulation:2,changeDetection:0})}return f})(),c=(()=>{class f{static#t=this.\u0275fac=function(d){return new(d||f)};static#e=this.\u0275mod=t.oAB({type:f});static#n=this.\u0275inj=t.cJS({})}return f})();var m=a(153),y=a(2058),E=a(6223);const w=E.kI.pattern(/#([0-9a-f]{3}){1,2}/);var C=a(6814),b=a(2032),N=a(1941),F=a(2296),I=a(1175);function S(f,A){1&f&&(t.TgZ(0,"button",5)(1,"mat-icon"),t._uU(2,"download"),t.qZA(),t._uU(3," Download "),t.qZA())}function R(f,A){if(1&f){const n=t.EpF();t.TgZ(0,"div",1)(1,"qrcode",2),t.NdJ("qrCodeURL",function(h){t.CHM(n);const g=t.oxw();return t.KtG(g.qrCodeURL=h)}),t.qZA(),t.TgZ(2,"a",3),t.YNc(3,S,4,0,"button",4),t.qZA()()}if(2&f){const n=t.oxw();let d,h;t.xp6(1),t.Q6J("qrdata",n.url)("allowEmptyString",!1)("ariaLabel","QR Code image pointing to"+n.url)("cssClass","center")("colorDark",null!==(d=n.codeColor)&&void 0!==d?d:"#000000")("colorLight",null!==(h=n.backgroundColor)&&void 0!==h?h:"#ffffff")("elementType","img")("errorCorrectionLevel","M")("imageHeight",75)("imageWidth",75)("margin",4)("scale",1)("width",300),t.xp6(1),t.Q6J("href",n.qrCodeURL,t.LSH),t.xp6(1),t.Q6J("ngIf",n.showDownloadButton)}}let T=(()=>{class f{constructor(){this.showDownloadButton=!0,this.url="",this.qrCodeChange=new t.vpe,this._qrCodeURL=""}get qrCodeURL(){return this._qrCodeURL}set qrCodeURL(n){this._qrCodeURL=n,this.qrCodeChange.emit(this._qrCodeURL)}static#t=this.\u0275fac=function(d){return new(d||f)};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-qrcode"]],inputs:{backgroundColor:"backgroundColor",codeColor:"codeColor",showDownloadButton:"showDownloadButton",url:"url"},outputs:{qrCodeChange:"qrCodeChange"},decls:1,vars:1,consts:[["class","contents",4,"ngIf"],[1,"contents"],[3,"qrdata","allowEmptyString","ariaLabel","cssClass","colorDark","colorLight","elementType","errorCorrectionLevel","imageHeight","imageWidth","margin","scale","width","qrCodeURL"],["download","",1,"download-link",3,"href"],["download","","mat-flat-button","","color","accent",4,"ngIf"],["download","","mat-flat-button","","color","accent"]],template:function(d,h){1&d&&t.YNc(0,R,4,15,"div",0),2&d&&t.Q6J("ngIf",h.url)},dependencies:[u,C.O5,F.lW,I.Hw],styles:[".contents[_ngcontent-%COMP%]   .download-link[_ngcontent-%COMP%]{text-decoration:none}"]})}return f})();function D(f,A){if(1&f&&t._UZ(0,"app-qrcode",9),2&f){const n=t.oxw();t.Q6J("backgroundColor",n.getFormVal("backgroundColor"))("codeColor",n.getFormVal("codeColor"))("url",n.getFormVal("url"))}}const p=[{title:"QR Generator",path:"**",component:(()=>{class f{constructor(n){this._builder=n,this.form=this._builder.group({url:["",E.kI.required],backgroundColor:["#ffffff",[E.kI.required,w]],codeColor:["#000000",[E.kI.required,w]]})}getFormVal(n){return this.form.get(n)?.value}static#t=this.\u0275fac=function(d){return new(d||f)(t.Y36(E.qu))};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-qrcode-generator"]],decls:22,vars:2,consts:[[1,"contents"],[3,"formGroup"],[1,"row"],[1,"flex","form-field"],["matInput","","formControlName","url","type","text"],["matInput","","formControlName","backgroundColor","type","color"],["matInput","","formControlName","codeColor","type","color"],[1,"row","qrcodeImage"],[3,"backgroundColor","codeColor","url",4,"ngIf"],[3,"backgroundColor","codeColor","url"]],template:function(d,h){1&d&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"QR Code Generator"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Start typing your url to see the qr code auto-generate"),t.qZA(),t.TgZ(5,"form",1)(6,"div",2)(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"QR Code Url"),t.qZA(),t._UZ(10,"input",4),t.qZA()(),t.TgZ(11,"div",2)(12,"mat-form-field",3)(13,"mat-label"),t._uU(14,"Background Color"),t.qZA(),t._UZ(15,"input",5),t.qZA(),t.TgZ(16,"mat-form-field",3)(17,"mat-label"),t._uU(18,"Code Color"),t.qZA(),t._UZ(19,"input",6),t.qZA()()(),t.TgZ(20,"div",7),t.YNc(21,D,1,3,"app-qrcode",8),t.qZA()()),2&d&&(t.xp6(5),t.Q6J("formGroup",h.form),t.xp6(16),t.Q6J("ngIf",h.form.valid))},dependencies:[C.O5,E._Y,E.Fj,E.JJ,E.JL,b.Nt,N.KE,N.hX,E.sg,E.u,T],styles:[".contents[_ngcontent-%COMP%]{padding:3rem;width:100%;display:flex;flex-direction:column;justify-content:center}.contents[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{max-width:20rem}"]})}return f})()}];let L=(()=>{class f{static#t=this.\u0275fac=function(d){return new(d||f)};static#e=this.\u0275mod=t.oAB({type:f});static#n=this.\u0275inj=t.cJS({imports:[y.Bz.forChild(p),y.Bz]})}return f})(),B=(()=>{class f{static#t=this.\u0275fac=function(d){return new(d||f)};static#e=this.\u0275mod=t.oAB({type:f});static#n=this.\u0275inj=t.cJS({imports:[L,c,m.m]})}return f})()},7206:M=>{"use strict";var s={single_source_shortest_paths:function(a,i,r){var t={},e={};e[i]=0;var l,u,c,m,y,w,o=s.PriorityQueue.make();for(o.push(i,0);!o.empty();)for(c in m=(l=o.pop()).cost,y=a[u=l.value]||{})y.hasOwnProperty(c)&&(w=m+y[c],(typeof e[c]>"u"||e[c]>w)&&(e[c]=w,o.push(c,w),t[c]=u));if(typeof r<"u"&&typeof e[r]>"u"){var N=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(N)}return t},extract_shortest_path_from_predecessor_list:function(a,i){for(var r=[],t=i;t;)r.push(t),t=a[t];return r.reverse(),r},find_path:function(a,i,r){var t=s.single_source_shortest_paths(a,i,r);return s.extract_shortest_path_from_predecessor_list(t,r)},PriorityQueue:{make:function(a){var t,i=s.PriorityQueue,r={};for(t in a=a||{},i)i.hasOwnProperty(t)&&(r[t]=i[t]);return r.queue=[],r.sorter=a.sorter||i.default_sorter,r},default_sorter:function(a,i){return a.cost-i.cost},push:function(a,i){this.queue.push({value:a,cost:i}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};M.exports=s},6119:M=>{"use strict";M.exports=function(a){for(var i=[],r=a.length,t=0;t<r;t++){var e=a.charCodeAt(t);if(e>=55296&&e<=56319&&r>t+1){var o=a.charCodeAt(t+1);o>=56320&&o<=57343&&(e=1024*(e-55296)+o-56320+65536,t+=1)}e<128?i.push(e):e<2048?(i.push(e>>6|192),i.push(63&e|128)):e<55296||e>=57344&&e<65536?(i.push(e>>12|224),i.push(e>>6&63|128),i.push(63&e|128)):e>=65536&&e<=1114111?(i.push(e>>18|240),i.push(e>>12&63|128),i.push(e>>6&63|128),i.push(63&e|128)):i.push(239,191,189)}return new Uint8Array(i).buffer}},2839:(M,s,a)=>{const r=a(8310),t=a(6208),e=a(6422),o=a(7772);function l(u,c,m,y,E){const w=[].slice.call(arguments,1),C=w.length,b="function"==typeof w[C-1];if(!b&&!r())throw new Error("Callback required as last argument");if(!b){if(C<1)throw new Error("Too few arguments provided");return 1===C?(m=c,c=y=void 0):2===C&&!c.getContext&&(y=m,m=c,c=void 0),new Promise(function(N,F){try{const I=t.create(m,y);N(u(I,c,y))}catch(I){F(I)}})}if(C<2)throw new Error("Too few arguments provided");2===C?(E=m,m=c,c=y=void 0):3===C&&(c.getContext&&typeof E>"u"?(E=y,y=void 0):(E=y,y=m,m=c,c=void 0));try{const N=t.create(m,y);E(null,u(N,c,y))}catch(N){E(N)}}s.rT=l.bind(null,e.render),s.hz=l.bind(null,e.renderToDataURL),s.toString=l.bind(null,function(u,c,m){return o.render(u,m)})},8310:M=>{M.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},5281:(M,s,a)=>{const i=a(2562).getSymbolSize;s.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,o=i(t),l=145===o?26:2*Math.ceil((o-13)/(2*e-2)),u=[o-7];for(let c=1;c<e-1;c++)u[c]=u[c-1]-l;return u.push(6),u.reverse()},s.getPositions=function(t){const e=[],o=s.getRowColCoords(t),l=o.length;for(let u=0;u<l;u++)for(let c=0;c<l;c++)0===u&&0===c||0===u&&c===l-1||u===l-1&&0===c||e.push([o[u],o[c]]);return e}},120:(M,s,a)=>{const i=a(1239),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(e){this.mode=i.ALPHANUMERIC,this.data=e}t.getBitsLength=function(o){return 11*Math.floor(o/2)+o%2*6},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(o){let l;for(l=0;l+2<=this.data.length;l+=2){let u=45*r.indexOf(this.data[l]);u+=r.indexOf(this.data[l+1]),o.put(u,11)}this.data.length%2&&o.put(r.indexOf(this.data[l]),6)},M.exports=t},6509:M=>{function s(){this.buffer=[],this.length=0}s.prototype={get:function(a){const i=Math.floor(a/8);return 1==(this.buffer[i]>>>7-a%8&1)},put:function(a,i){for(let r=0;r<i;r++)this.putBit(1==(a>>>i-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),a&&(this.buffer[i]|=128>>>this.length%8),this.length++}},M.exports=s},5147:M=>{function s(a){if(!a||a<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=a,this.data=new Uint8Array(a*a),this.reservedBit=new Uint8Array(a*a)}s.prototype.set=function(a,i,r,t){const e=a*this.size+i;this.data[e]=r,t&&(this.reservedBit[e]=!0)},s.prototype.get=function(a,i){return this.data[a*this.size+i]},s.prototype.xor=function(a,i,r){this.data[a*this.size+i]^=r},s.prototype.isReserved=function(a,i){return this.reservedBit[a*this.size+i]},M.exports=s},277:(M,s,a)=>{const i=a(6119),r=a(1239);function t(e){this.mode=r.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}t.getBitsLength=function(o){return 8*o},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){for(let o=0,l=this.data.length;o<l;o++)e.put(this.data[o],8)},M.exports=t},7191:(M,s,a)=>{const i=a(4505),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];s.getBlocksCount=function(o,l){switch(l){case i.L:return r[4*(o-1)+0];case i.M:return r[4*(o-1)+1];case i.Q:return r[4*(o-1)+2];case i.H:return r[4*(o-1)+3];default:return}},s.getTotalCodewordsCount=function(o,l){switch(l){case i.L:return t[4*(o-1)+0];case i.M:return t[4*(o-1)+1];case i.Q:return t[4*(o-1)+2];case i.H:return t[4*(o-1)+3];default:return}}},4505:(M,s)=>{s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2},s.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},s.from=function(r,t){if(s.isValid(r))return r;try{return function a(i){if("string"!=typeof i)throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+i)}}(r)}catch{return t}}},5232:(M,s,a)=>{const i=a(2562).getSymbolSize;s.getPositions=function(e){const o=i(e);return[[0,0],[o-7,0],[0,o-7]]}},8508:(M,s,a)=>{const i=a(2562),e=i.getBCHDigit(1335);s.getEncodedBits=function(l,u){const c=l.bit<<3|u;let m=c<<10;for(;i.getBCHDigit(m)-e>=0;)m^=1335<<i.getBCHDigit(m)-e;return 21522^(c<<10|m)}},1674:(M,s)=>{const a=new Uint8Array(512),i=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)a[e]=t,i[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)a[e]=a[e-255]})(),s.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},s.exp=function(t){return a[t]},s.mul=function(t,e){return 0===t||0===e?0:a[i[t]+i[e]]}},9995:(M,s,a)=>{const i=a(1239),r=a(2562);function t(e){this.mode=i.KANJI,this.data=e}t.getBitsLength=function(o){return 13*o},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){let o;for(o=0;o<this.data.length;o++){let l=r.toSJIS(this.data[o]);if(l>=33088&&l<=40956)l-=33088;else{if(!(l>=57408&&l<=60351))throw new Error("Invalid SJIS character: "+this.data[o]+"\nMake sure your charset is UTF-8");l-=49472}l=192*(l>>>8&255)+(255&l),e.put(l,13)}},M.exports=t},9023:(M,s)=>{s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function i(r,t,e){switch(r){case s.Patterns.PATTERN000:return(t+e)%2==0;case s.Patterns.PATTERN001:return t%2==0;case s.Patterns.PATTERN010:return e%3==0;case s.Patterns.PATTERN011:return(t+e)%3==0;case s.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2==0;case s.Patterns.PATTERN101:return t*e%2+t*e%3==0;case s.Patterns.PATTERN110:return(t*e%2+t*e%3)%2==0;case s.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2==0;default:throw new Error("bad maskPattern:"+r)}}s.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},s.from=function(t){return s.isValid(t)?parseInt(t,10):void 0},s.getPenaltyN1=function(t){const e=t.size;let o=0,l=0,u=0,c=null,m=null;for(let y=0;y<e;y++){l=u=0,c=m=null;for(let E=0;E<e;E++){let w=t.get(y,E);w===c?l++:(l>=5&&(o+=l-5+3),c=w,l=1),w=t.get(E,y),w===m?u++:(u>=5&&(o+=u-5+3),m=w,u=1)}l>=5&&(o+=l-5+3),u>=5&&(o+=u-5+3)}return o},s.getPenaltyN2=function(t){const e=t.size;let o=0;for(let l=0;l<e-1;l++)for(let u=0;u<e-1;u++){const c=t.get(l,u)+t.get(l,u+1)+t.get(l+1,u)+t.get(l+1,u+1);(4===c||0===c)&&o++}return 3*o},s.getPenaltyN3=function(t){const e=t.size;let o=0,l=0,u=0;for(let c=0;c<e;c++){l=u=0;for(let m=0;m<e;m++)l=l<<1&2047|t.get(c,m),m>=10&&(1488===l||93===l)&&o++,u=u<<1&2047|t.get(m,c),m>=10&&(1488===u||93===u)&&o++}return 40*o},s.getPenaltyN4=function(t){let e=0;const o=t.data.length;for(let u=0;u<o;u++)e+=t.data[u];return 10*Math.abs(Math.ceil(100*e/o/5)-10)},s.applyMask=function(t,e){const o=e.size;for(let l=0;l<o;l++)for(let u=0;u<o;u++)e.isReserved(u,l)||e.xor(u,l,i(t,u,l))},s.getBestMask=function(t,e){const o=Object.keys(s.Patterns).length;let l=0,u=1/0;for(let c=0;c<o;c++){e(c),s.applyMask(c,t);const m=s.getPenaltyN1(t)+s.getPenaltyN2(t)+s.getPenaltyN3(t)+s.getPenaltyN4(t);s.applyMask(c,t),m<u&&(u=m,l=c)}return l}},1239:(M,s,a)=>{const i=a(6161),r=a(2427);s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(o,l){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!i.isValid(l))throw new Error("Invalid version: "+l);return l>=1&&l<10?o.ccBits[0]:l<27?o.ccBits[1]:o.ccBits[2]},s.getBestModeForData=function(o){return r.testNumeric(o)?s.NUMERIC:r.testAlphanumeric(o)?s.ALPHANUMERIC:r.testKanji(o)?s.KANJI:s.BYTE},s.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},s.isValid=function(o){return o&&o.bit&&o.ccBits},s.from=function(o,l){if(s.isValid(o))return o;try{return function t(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+e)}}(o)}catch{return l}}},8722:(M,s,a)=>{const i=a(1239);function r(t){this.mode=i.NUMERIC,this.data=t.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let o,l,u;for(o=0;o+3<=this.data.length;o+=3)l=this.data.substr(o,3),u=parseInt(l,10),e.put(u,10);const c=this.data.length-o;c>0&&(l=this.data.substr(o),u=parseInt(l,10),e.put(u,3*c+1))},M.exports=r},2376:(M,s,a)=>{const i=a(1674);s.mul=function(t,e){const o=new Uint8Array(t.length+e.length-1);for(let l=0;l<t.length;l++)for(let u=0;u<e.length;u++)o[l+u]^=i.mul(t[l],e[u]);return o},s.mod=function(t,e){let o=new Uint8Array(t);for(;o.length-e.length>=0;){const l=o[0];for(let c=0;c<e.length;c++)o[c]^=i.mul(e[c],l);let u=0;for(;u<o.length&&0===o[u];)u++;o=o.slice(u)}return o},s.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let o=0;o<t;o++)e=s.mul(e,new Uint8Array([1,i.exp(o)]));return e}},6208:(M,s,a)=>{const i=a(2562),r=a(4505),t=a(6509),e=a(5147),o=a(5281),l=a(5232),u=a(9023),c=a(7191),m=a(1297),y=a(9467),E=a(8508),w=a(1239),C=a(1799);function S(p,L,B){const f=p.size,A=E.getEncodedBits(L,B);let n,d;for(n=0;n<15;n++)d=1==(A>>n&1),p.set(n<6?n:n<8?n+1:f-15+n,8,d,!0),p.set(8,n<8?f-n-1:n<9?15-n-1+1:15-n-1,d,!0);p.set(f-8,8,1,!0)}function k(p,L,B,f){let A;if(Array.isArray(p))A=C.fromArray(p);else{if("string"!=typeof p)throw new Error("Invalid data");{let U=L;if(!U){const P=C.rawSplit(p);U=y.getBestVersionForData(P,B)}A=C.fromString(p,U||40)}}const n=y.getBestVersionForData(A,B);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(L){if(L<n)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+n+".\n")}else L=n;const d=function T(p,L,B){const f=new t;B.forEach(function(g){f.put(g.mode.bit,4),f.put(g.getLength(),w.getCharCountIndicator(g.mode,p)),g.write(f)});const d=8*(i.getSymbolTotalCodewords(p)-c.getTotalCodewordsCount(p,L));for(f.getLengthInBits()+4<=d&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(0);const h=(d-f.getLengthInBits())/8;for(let g=0;g<h;g++)f.put(g%2?17:236,8);return function D(p,L,B){const f=i.getSymbolTotalCodewords(L),n=f-c.getTotalCodewordsCount(L,B),d=c.getBlocksCount(L,B),g=d-f%d,U=Math.floor(f/d),P=Math.floor(n/d),v=P+1,Q=U-P,Y=new m(Q);let J=0;const V=new Array(d),O=new Array(d);let G=0;const x=new Uint8Array(p.buffer);for(let z=0;z<d;z++){const Z=z<g?P:v;V[z]=x.slice(J,J+Z),O[z]=Y.encode(V[z]),J+=Z,G=Math.max(G,Z)}const _=new Uint8Array(f);let H,q,K=0;for(H=0;H<G;H++)for(q=0;q<d;q++)H<V[q].length&&(_[K++]=V[q][H]);for(H=0;H<Q;H++)for(q=0;q<d;q++)_[K++]=O[q][H];return _}(f,p,L)}(L,B,A),h=i.getSymbolSize(L),g=new e(h);return function b(p,L){const B=p.size,f=l.getPositions(L);for(let A=0;A<f.length;A++){const n=f[A][0],d=f[A][1];for(let h=-1;h<=7;h++)if(!(n+h<=-1||B<=n+h))for(let g=-1;g<=7;g++)d+g<=-1||B<=d+g||p.set(n+h,d+g,h>=0&&h<=6&&(0===g||6===g)||g>=0&&g<=6&&(0===h||6===h)||h>=2&&h<=4&&g>=2&&g<=4,!0)}}(g,L),function N(p){const L=p.size;for(let B=8;B<L-8;B++){const f=B%2==0;p.set(B,6,f,!0),p.set(6,B,f,!0)}}(g),function F(p,L){const B=o.getPositions(L);for(let f=0;f<B.length;f++){const A=B[f][0],n=B[f][1];for(let d=-2;d<=2;d++)for(let h=-2;h<=2;h++)p.set(A+d,n+h,-2===d||2===d||-2===h||2===h||0===d&&0===h,!0)}}(g,L),S(g,B,0),L>=7&&function I(p,L){const B=p.size,f=y.getEncodedBits(L);let A,n,d;for(let h=0;h<18;h++)A=Math.floor(h/3),n=h%3+B-8-3,d=1==(f>>h&1),p.set(A,n,d,!0),p.set(n,A,d,!0)}(g,L),function R(p,L){const B=p.size;let f=-1,A=B-1,n=7,d=0;for(let h=B-1;h>0;h-=2)for(6===h&&h--;;){for(let g=0;g<2;g++)if(!p.isReserved(A,h-g)){let U=!1;d<L.length&&(U=1==(L[d]>>>n&1)),p.set(A,h-g,U),n--,-1===n&&(d++,n=7)}if(A+=f,A<0||B<=A){A-=f,f=-f;break}}}(g,d),isNaN(f)&&(f=u.getBestMask(g,S.bind(null,g,B))),u.applyMask(f,g),S(g,B,f),{modules:g,version:L,errorCorrectionLevel:B,maskPattern:f,segments:A}}s.create=function(L,B){if(typeof L>"u"||""===L)throw new Error("No input text");let A,n,f=r.M;return typeof B<"u"&&(f=r.from(B.errorCorrectionLevel,r.M),A=y.from(B.version),n=u.from(B.maskPattern),B.toSJISFunc&&i.setToSJISFunction(B.toSJISFunc)),k(L,A,f,n)}},1297:(M,s,a)=>{const i=a(2376);function r(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(e.length+this.degree);o.set(e);const l=i.mod(o,this.genPoly),u=this.degree-l.length;if(u>0){const c=new Uint8Array(this.degree);return c.set(l,u),c}return l},M.exports=r},2427:(M,s)=>{const a="[0-9]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const t="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";s.KANJI=new RegExp(r,"g"),s.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),s.BYTE=new RegExp(t,"g"),s.NUMERIC=new RegExp(a,"g"),s.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const e=new RegExp("^"+r+"$"),o=new RegExp("^"+a+"$"),l=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");s.testKanji=function(c){return e.test(c)},s.testNumeric=function(c){return o.test(c)},s.testAlphanumeric=function(c){return l.test(c)}},1799:(M,s,a)=>{const i=a(1239),r=a(8722),t=a(120),e=a(277),o=a(9995),l=a(2427),u=a(2562),c=a(7206);function m(I){return unescape(encodeURIComponent(I)).length}function y(I,S,R){const T=[];let D;for(;null!==(D=I.exec(R));)T.push({data:D[0],index:D.index,mode:S,length:D[0].length});return T}function E(I){const S=y(l.NUMERIC,i.NUMERIC,I),R=y(l.ALPHANUMERIC,i.ALPHANUMERIC,I);let T,D;return u.isKanjiModeEnabled()?(T=y(l.BYTE,i.BYTE,I),D=y(l.KANJI,i.KANJI,I)):(T=y(l.BYTE_KANJI,i.BYTE,I),D=[]),S.concat(R,T,D).sort(function(p,L){return p.index-L.index}).map(function(p){return{data:p.data,mode:p.mode,length:p.length}})}function w(I,S){switch(S){case i.NUMERIC:return r.getBitsLength(I);case i.ALPHANUMERIC:return t.getBitsLength(I);case i.KANJI:return o.getBitsLength(I);case i.BYTE:return e.getBitsLength(I)}}function F(I,S){let R;const T=i.getBestModeForData(I);if(R=i.from(S,T),R!==i.BYTE&&R.bit<T.bit)throw new Error('"'+I+'" cannot be encoded with mode '+i.toString(R)+".\n Suggested mode is: "+i.toString(T));switch(R===i.KANJI&&!u.isKanjiModeEnabled()&&(R=i.BYTE),R){case i.NUMERIC:return new r(I);case i.ALPHANUMERIC:return new t(I);case i.KANJI:return new o(I);case i.BYTE:return new e(I)}}s.fromArray=function(S){return S.reduce(function(R,T){return"string"==typeof T?R.push(F(T,null)):T.data&&R.push(F(T.data,T.mode)),R},[])},s.fromString=function(S,R){const D=function b(I){const S=[];for(let R=0;R<I.length;R++){const T=I[R];switch(T.mode){case i.NUMERIC:S.push([T,{data:T.data,mode:i.ALPHANUMERIC,length:T.length},{data:T.data,mode:i.BYTE,length:T.length}]);break;case i.ALPHANUMERIC:S.push([T,{data:T.data,mode:i.BYTE,length:T.length}]);break;case i.KANJI:S.push([T,{data:T.data,mode:i.BYTE,length:m(T.data)}]);break;case i.BYTE:S.push([{data:T.data,mode:i.BYTE,length:m(T.data)}])}}return S}(E(S,u.isKanjiModeEnabled())),k=function N(I,S){const R={},T={start:{}};let D=["start"];for(let k=0;k<I.length;k++){const p=I[k],L=[];for(let B=0;B<p.length;B++){const f=p[B],A=""+k+B;L.push(A),R[A]={node:f,lastCount:0},T[A]={};for(let n=0;n<D.length;n++){const d=D[n];R[d]&&R[d].node.mode===f.mode?(T[d][A]=w(R[d].lastCount+f.length,f.mode)-w(R[d].lastCount,f.mode),R[d].lastCount+=f.length):(R[d]&&(R[d].lastCount=f.length),T[d][A]=w(f.length,f.mode)+4+i.getCharCountIndicator(f.mode,S))}}D=L}for(let k=0;k<D.length;k++)T[D[k]].end=0;return{map:T,table:R}}(D,R),p=c.find_path(k.map,"start","end"),L=[];for(let B=1;B<p.length-1;B++)L.push(k.table[p[B]].node);return s.fromArray(function C(I){return I.reduce(function(S,R){const T=S.length-1>=0?S[S.length-1]:null;return T&&T.mode===R.mode?(S[S.length-1].data+=R.data,S):(S.push(R),S)},[])}(L))},s.rawSplit=function(S){return s.fromArray(E(S,u.isKanjiModeEnabled()))}},2562:(M,s)=>{let a;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];s.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},s.getSymbolTotalCodewords=function(t){return i[t]},s.getBCHDigit=function(r){let t=0;for(;0!==r;)t++,r>>>=1;return t},s.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');a=t},s.isKanjiModeEnabled=function(){return typeof a<"u"},s.toSJIS=function(t){return a(t)}},6161:(M,s)=>{s.isValid=function(i){return!isNaN(i)&&i>=1&&i<=40}},9467:(M,s,a)=>{const i=a(2562),r=a(7191),t=a(4505),e=a(1239),o=a(6161),u=i.getBCHDigit(7973);function m(w,C){return e.getCharCountIndicator(w,C)+4}function y(w,C){let b=0;return w.forEach(function(N){const F=m(N.mode,C);b+=F+N.getBitsLength()}),b}s.from=function(C,b){return o.isValid(C)?parseInt(C,10):b},s.getCapacity=function(C,b,N){if(!o.isValid(C))throw new Error("Invalid QR Code version");typeof N>"u"&&(N=e.BYTE);const S=8*(i.getSymbolTotalCodewords(C)-r.getTotalCodewordsCount(C,b));if(N===e.MIXED)return S;const R=S-m(N,C);switch(N){case e.NUMERIC:return Math.floor(R/10*3);case e.ALPHANUMERIC:return Math.floor(R/11*2);case e.KANJI:return Math.floor(R/13);default:return Math.floor(R/8)}},s.getBestVersionForData=function(C,b){let N;const F=t.from(b,t.M);if(Array.isArray(C)){if(C.length>1)return function E(w,C){for(let b=1;b<=40;b++)if(y(w,b)<=s.getCapacity(b,C,e.MIXED))return b}(C,F);if(0===C.length)return 1;N=C[0]}else N=C;return function c(w,C,b){for(let N=1;N<=40;N++)if(C<=s.getCapacity(N,b,w))return N}(N.mode,N.getLength(),F)},s.getEncodedBits=function(C){if(!o.isValid(C)||C<7)throw new Error("Invalid QR Code version");let b=C<<12;for(;i.getBCHDigit(b)-u>=0;)b^=7973<<i.getBCHDigit(b)-u;return C<<12|b}},6422:(M,s,a)=>{const i=a(1101);s.render=function(o,l,u){let c=u,m=l;typeof c>"u"&&(!l||!l.getContext)&&(c=l,l=void 0),l||(m=function t(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),c=i.getOptions(c);const y=i.getImageWidth(o.modules.size,c),E=m.getContext("2d"),w=E.createImageData(y,y);return i.qrToImageData(w.data,o,c),function r(e,o,l){e.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=l,o.width=l,o.style.height=l+"px",o.style.width=l+"px"}(E,m,y),E.putImageData(w,0,0),m},s.renderToDataURL=function(o,l,u){let c=u;return typeof c>"u"&&(!l||!l.getContext)&&(c=l,l=void 0),c||(c={}),s.render(o,l,c).toDataURL(c.type||"image/png",(c.rendererOpts||{}).quality)}},7772:(M,s,a)=>{const i=a(1101);function r(o,l){const u=o.a/255,c=l+'="'+o.hex+'"';return u<1?c+" "+l+'-opacity="'+u.toFixed(2).slice(1)+'"':c}function t(o,l,u){let c=o+l;return typeof u<"u"&&(c+=" "+u),c}s.render=function(l,u,c){const m=i.getOptions(u),y=l.modules.size,E=l.modules.data,w=y+2*m.margin,C=m.color.light.a?"<path "+r(m.color.light,"fill")+' d="M0 0h'+w+"v"+w+'H0z"/>':"",b="<path "+r(m.color.dark,"stroke")+' d="'+function e(o,l,u){let c="",m=0,y=!1,E=0;for(let w=0;w<o.length;w++){const C=Math.floor(w%l),b=Math.floor(w/l);!C&&!y&&(y=!0),o[w]?(E++,w>0&&C>0&&o[w-1]||(c+=y?t("M",C+u,.5+b+u):t("m",m,0),m=0,y=!1),C+1<l&&o[w+1]||(c+=t("h",E),E=0)):m++}return c}(E,y,m.margin)+'"/>',I='<svg xmlns="http://www.w3.org/2000/svg" '+(m.width?'width="'+m.width+'" height="'+m.width+'" ':"")+'viewBox="0 0 '+w+" "+w+'" shape-rendering="crispEdges">'+C+b+"</svg>\n";return"function"==typeof c&&c(null,I),I}},1101:(M,s)=>{function a(i){if("number"==typeof i&&(i=i.toString()),"string"!=typeof i)throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||5===r.length||r.length>8)throw new Error("Invalid hex color: "+i);(3===r.length||4===r.length)&&(r=Array.prototype.concat.apply([],r.map(function(e){return[e,e]}))),6===r.length&&r.push("F","F");const t=parseInt(r.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:255&t,hex:"#"+r.slice(0,6).join("")}}s.getOptions=function(r){r||(r={}),r.color||(r.color={});const e=r.width&&r.width>=21?r.width:void 0;return{width:e,scale:e?4:r.scale||4,margin:typeof r.margin>"u"||null===r.margin||r.margin<0?4:r.margin,color:{dark:a(r.color.dark||"#000000ff"),light:a(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},s.getScale=function(r,t){return t.width&&t.width>=r+2*t.margin?t.width/(r+2*t.margin):t.scale},s.getImageWidth=function(r,t){const e=s.getScale(r,t);return Math.floor((r+2*t.margin)*e)},s.qrToImageData=function(r,t,e){const o=t.modules.size,l=t.modules.data,u=s.getScale(o,e),c=Math.floor((o+2*e.margin)*u),m=e.margin*u,y=[e.color.light,e.color.dark];for(let E=0;E<c;E++)for(let w=0;w<c;w++){let C=4*(E*c+w),b=e.color.light;E>=m&&w>=m&&E<c-m&&w<c-m&&(b=y[l[Math.floor((E-m)/u)*o+Math.floor((w-m)/u)]?1:0]),r[C++]=b.r,r[C++]=b.g,r[C++]=b.b,r[C]=b.a}}}}]);