"use strict";(()=>{var M,D,B,H,z,Oe=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,l=(e,t,i,r)=>{for(var a,o=r>1?void 0:r?Ue(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&Oe(t,i,o),o},j=globalThis,Y=j.ShadowRoot&&(void 0===j.ShadyCSS||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),le=new WeakMap,he=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Y&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=le.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&le.set(t,e))}return e}toString(){return this.cssText}},c=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((r,o,s)=>r+(a=>{if(!0===a._$cssResult$)return a.cssText;if("number"==typeof a)return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new he(i,e,J)},pe=Y?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return(e=>new he("string"==typeof e?e:e+"",void 0,J))(i)})(e):e,{is:Ce,defineProperty:Re,getOwnPropertyDescriptor:Ie,getOwnPropertyNames:Me,getOwnPropertySymbols:De,getPrototypeOf:Be}=Object,F=globalThis,ce=F.trustedTypes,He=ce?ce.emptyScript:"",ze=F.reactiveElementPolyfillSupport,O=(e,t)=>e,K={toAttribute(e,t){switch(t){case Boolean:e=e?He:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Q=(e,t)=>!Ce(e,t),de={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Q};Symbol.metadata??=Symbol("metadata"),F.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Re(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:o}=Ie(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return r?.call(this)},set(s){const a=r?.call(this);o.call(this,s),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Be(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,i=[...Me(t),...De(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(pe(r))}else void 0!==e&&t.push(pe(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Y)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),o=j.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:K).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const o=i.getPropertyOptions(r),s="function"==typeof o.converter?{fromAttribute:o.converter}:void 0!==o.converter?.fromAttribute?o.converter:K;this._$Em=r,this[r]=s.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Q)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)!0!==o.wrapped||this._$AL.has(r)||void 0===this[r]||this.P(r,this[r],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[O("elementProperties")]=new Map,A[O("finalized")]=new Map,ze?.({ReactiveElement:A}),(F.reactiveElementVersions??=[]).push("2.0.4");var X=globalThis,V=X.trustedTypes,ve=V?V.createPolicy("lit-html",{createHTML:e=>e}):void 0,$=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+$,je=`<${ge}>`,y=document,U=()=>y.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ee=Array.isArray,te="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,be=/>/g,k=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),me=/'/g,xe=/"/g,we=/^(?:script|style|textarea|title)$/i,ie=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),p=ie(1),S=(ie(2),ie(3),Symbol.for("lit-noChange")),g=Symbol.for("lit-nothing"),$e=new WeakMap,E=y.createTreeWalker(y,129);function _e(e,t){if(!ee(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ve?ve.createHTML(t):t}var re=class Pe{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,a=0;const n=t.length-1,h=this.parts,[q,m]=((e,t)=>{const i=e.length-1,r=[];let o,s=2===t?"<svg>":3===t?"<math>":"",a=N;for(let n=0;n<i;n++){const h=e[n];let q,m,v=-1,w=0;for(;w<h.length&&(a.lastIndex=w,m=a.exec(h),null!==m);)w=a.lastIndex,a===N?"!--"===m[1]?a=fe:void 0!==m[1]?a=be:void 0!==m[2]?(we.test(m[2])&&(o=RegExp("</"+m[2],"g")),a=k):void 0!==m[3]&&(a=k):a===k?">"===m[0]?(a=o??N,v=-1):void 0===m[1]?v=-2:(v=a.lastIndex-m[2].length,q=m[1],a=void 0===m[3]?k:'"'===m[3]?xe:me):a===xe||a===me?a=k:a===fe||a===be?a=N:(a=k,o=void 0);const _=a===k&&e[n+1].startsWith("/>")?" ":"";s+=a===N?h+je:v>=0?(r.push(q),h.slice(0,v)+"$lit$"+h.slice(v)+$+_):h+$+(-2===v?n:_)}return[_e(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]})(t,i);if(this.el=Pe.createElement(q,r),E.currentNode=this.el.content,2===i||3===i){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;null!==(o=E.nextNode())&&h.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const v of o.getAttributeNames())if(v.endsWith("$lit$")){const w=m[a++],_=o.getAttribute(v).split($),Z=/([.?@])?(.*)/.exec(w);h.push({type:1,index:s,name:Z[2],strings:_,ctor:"."===Z[1]?We:"?"===Z[1]?Ge:"@"===Z[1]?qe:W}),o.removeAttribute(v)}else v.startsWith($)&&(h.push({type:6,index:s}),o.removeAttribute(v));if(we.test(o.tagName)){const v=o.textContent.split($),w=v.length-1;if(w>0){o.textContent=V?V.emptyScript:"";for(let _=0;_<w;_++)o.append(v[_],U()),E.nextNode(),h.push({type:2,index:++s});o.append(v[w],U())}}}else if(8===o.nodeType)if(o.data===ge)h.push({type:2,index:s});else{let v=-1;for(;-1!==(v=o.data.indexOf($,v+1));)h.push({type:7,index:s}),v+=$.length-1}s++}}static createElement(t,i){const r=y.createElement("template");return r.innerHTML=t,r}};function P(e,t,i=e,r){if(t===S)return t;let o=void 0!==r?i.o?.[r]:i.l;const s=L(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(e),o._$AT(e,i,r)),void 0!==r?(i.o??=[])[r]=o:i.l=o),void 0!==o&&(t=P(e,o._$AS(e,t.values),o,r)),t}var Ve=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??y).importNode(t,!0);E.currentNode=r;let o=E.nextNode(),s=0,a=0,n=i[0];for(;void 0!==n;){if(s===n.index){let h;2===n.type?h=new oe(o,o.nextSibling,this,e):1===n.type?h=new n.ctor(o,n.name,n.strings,this,e):6===n.type&&(h=new Ze(o,this,e)),this._$AV.push(h),n=i[++a]}s!==n?.index&&(o=E.nextNode(),s++)}return E.currentNode=y,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},oe=class Te{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,i,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this.v=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){var e;t=P(this,t,i),L(t)?t===g||null==t||""===t?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==S&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ee(e=t)||"function"==typeof e?.[Symbol.iterator]?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=re.createElement(_e(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(i);else{const s=new Ve(o,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(t){let i=$e.get(t.strings);return void 0===i&&$e.set(t.strings,i=new re(t)),i}k(t){ee(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new Te(this.O(U()),this.O(U()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(void 0===o)e=P(this,e,t,0),s=!L(e)||e!==this._$AH&&e!==S,s&&(this._$AH=e);else{const a=e;let n,h;for(e=o[0],n=0;n<o.length-1;n++)h=P(this,a[i+n],t,n),h===S&&(h=this._$AH[n]),s||=!L(h)||h!==this._$AH[n],h===g?e=g:e!==g&&(e+=(h??"")+o[n+1]),this._$AH[n]=h}s&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},We=class extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},Ge=class extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},qe=class extends W{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??g)===S)return;const i=this._$AH,r=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ze=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}},Ye=X.litHtmlPolyfillSupport;Ye?.(re,oe),(X.litHtmlVersions??=[]).push("3.2.0");var x=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=((e,t,i)=>{const r=i?.renderBefore??t;let o=r._$litPart$;if(void 0===o){const s=i?.renderBefore??null;r._$litPart$=o=new oe(t.insertBefore(U(),s),s,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return S}};x._$litElement$=!0,x.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:x});var Qe=globalThis.litElementPolyfillSupport;Qe?.({LitElement:x}),(globalThis.litElementVersions??=[]).push("4.1.0");var ye=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Xe={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Q},et=(e=Xe,t,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),"accessor"===r){const{name:a}=i;return{set(n){const h=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,h,e)},init(n){return void 0!==n&&this.P(a,void 0,e),n}}}if("setter"===r){const{name:a}=i;return function(n){const h=this[a];t.call(this,n),this.requestUpdate(a,h,e)}}throw Error("Unsupported decorator location: "+r)};function d(e){return(t,i)=>"object"==typeof i?et(e,t,i):((r,o,s)=>{const a=o.hasOwnProperty(s);return o.constructor.createProperty(s,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}function T(e){return d({...e,state:!0,attribute:!1})}var f={"--pb-background-color":{light:c`#ffffff`,dark:c`#121212`},"--pb-background-color-hover":{light:c`#f9fafb`,dark:c`#1e293b`},"--pb-text-color":{light:c`#000000`,dark:c`#e0e0e0`},"--pb-border-color":{light:c`rgba(124, 139, 154, 0.25)`,dark:c`#80808034`},"--pb-text-color-light":{light:c`rgba(0, 0, 0, 0.7)`,dark:c`rgba(255, 255, 255, 0.8)`},"--pb-fallback-img-color":{light:c`hsl(220, 13%, 80%)`,dark:c`hsl(220, 13%, 40%)`},"--pb-fallback-img-background":{light:c`rgb(229, 231, 235)`,dark:c`rgb(55, 65, 81)`},"--pb-skeleton-color":{light:c`rgb(229, 231, 235)`,dark:c`rgb(55, 65, 81)`}};function ke(e,t){Object.keys(f).forEach(i=>{e.style.setProperty(i,f[i][t].toString())})}var Ee=c`
  ${function tt(){return c`
    :host {
      --pb-background-color: ${f["--pb-background-color"].light};
      --pb-dark-background-color: ${f["--pb-background-color"].dark};
      --pb-background-color-hover: ${f["--pb-background-color-hover"].light};
      --pb-dark-background-color-hover: ${f["--pb-background-color-hover"].dark};
      --pb-text-color: ${f["--pb-text-color"].light};
      --pb-dark-text-color: ${f["--pb-text-color"].dark};
      --pb-border-color: ${f["--pb-border-color"].light};
      --pb-dark-border-color: ${f["--pb-border-color"].dark};
      --pb-text-color-light: ${f["--pb-text-color-light"].light};
      --pb-dark-metadata-color: ${f["--pb-text-color-light"].dark};
      --pb-skeleton-color: ${f["--pb-skeleton-color"].light};
      --pb-dark-skeleton-color: ${f["--pb-skeleton-color"].dark};
      --pb-fallback-img-color: ${f["--pb-fallback-img-color"].light};
      --pb-dark-fallback-img-color: ${f["--pb-fallback-img-color"].dark};
      --pb-fallback-img-background: ${f["--pb-fallback-img-background"].light};
      --pb-dark-fallback-img-background: ${f["--pb-fallback-img-background"].dark};
      --pb-favicon-size: 20px;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --pb-background-color: var(--pb-dark-background-color);
        --pb-background-color-hover: var(--pb-dark-background-color-hover);
        --pb-text-color: var(--pb-dark-text-color);
        --pb-border-color: var(--pb-dark-border-color);
        --pb-text-color-light: var(--pb-dark-metadata-color);
        --pb-fallback-img-color: var(--pb-dark-fallback-img-color);
        --pb-fallback-img-background: var(--pb-dark-fallback-img-background);
        --pb-skeleton-color: var(--pb-dark-skeleton-color);
      }
    }
  `}()}
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
  }


  .container {
    margin: 0;
    padding: 0;
    background-color: var(--pb-background-color);
  }

  .previewbox-title,
  .previewbox-link {
    color: var(--pb-text-color);
  }

  .previewbox-description {
    color: var(--pb-text-color-light);
  }

  .previewbox-link {
    text-decoration: none;
    display: flex;
    text-decoration: none;
    color: inherit;
  }
`,it=c`
  ${Ee}
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
  }

  .container {
    background-color: var(--pb-background-color);
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--pb-border-color);
    position: relative;
  }

  .previewbox-link {
    text-decoration: none;
    color: var(--pb-text-color);
    display: flex;
    text-decoration: none;
    color: inherit;
  }

  .previewbox-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
    position: relative;
  }

  .previewbox-title {
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    height: 40px;
    overflow: hidden;
    @media (min-width: 768px) {
      line-height: 1.4;
      height: 24px;
    }
    color: var(--pb-text-color);
  }

  .previewbox-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    width: 100%;
    height: 44px;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--pb-text-color-light);
  }

  .previewbox-metadata {
    display: flex;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    height: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    color: var(--pb-text-color-light);
    .previewbox-metadata-skeleton {
      display: flex;
      column-gap: 4px;
      align-items: center;

      .rounded::part(skeleton-shape) {
        border-radius: 50%;
      }
    }
    svg {
      width: var(--pb-favicon-size);
      height: var(--pb-favicon-size);
      margin-right: 6px;
    }
  }

  .previewbox-metadata > span:nth-of-type(2)::before {
    content: '•';
    margin: 0px 6px;
  }

  .previewbox-metadata > span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .previewbox-metadata > :not(previewbox-favicon) {
    opacity: 0.7;
  }

  previewbox-favicon {
    margin-right: 6px;
  }

  .previewbox-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
  }


`,G=class extends x{constructor(){super(...arguments),this.href="",this.target="_blank",this.rel=""}};function Ae(e){try{return e=function rt(e){return e?.replace(/https:\/\/|http:\/\/|www.|/gi,"")??""}(e),e=e?.split("/")[0],e??""}catch{return e??""}}l([d()],G.prototype,"href",2),l([d()],G.prototype,"target",2),l([d()],G.prototype,"rel",2);var at=new class{async fetchLinkPreviewData(e,t){try{const i=new URLSearchParams;i.set("url",e);const r=await fetch(`${t.apiUrl}?${i.toString()}`,{headers:{origin:window.location.origin}});return r.ok?{data:await r.json()}:429===r.status?{error:"API_LIMIT_REACHED"}:{error:"UNKNOWN_ERROR"}}catch{return{error:"UNKNOWN_ERROR"}}}},b=class extends G{constructor(){super(...arguments),this.url=null,this.title="",this.description=null,this.author=null,this.imageUrl=null,this.imageAlt=null,this.faviconUrl=null,this.date=null,this.hidePoweredBy=void 0,this.apiUrl=window.location.href.startsWith("http://localhost:8000/demo")?"http://localhost:4444/api/v1/meta":"https://previewbox.link/api/v1/meta",this.dark=void 0,this.light=void 0,this.fetchedLinkPreviewData=null,this._isLoading=!1,this._isError=!1,this._apiError=null}get linkData(){return this.fetchedLinkPreviewData?this.fetchedLinkPreviewData:{url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:Ae(this.url)}}firstUpdated(e){if(typeof this.dark<"u"&&ke(this,"dark"),typeof this.light<"u"&&ke(this,"light"),!this.href&&!this.url)throw new Error(`No href or url provided for ${this.localName}`);this.href?this._fetchLinkPreviewData():this._setManualData()}_fetchLinkPreviewData(){this._isLoading=!0,at.fetchLinkPreviewData(this.href,{apiUrl:this.apiUrl}).then(e=>{!function ot(e){return"data"in e}(e)?(this._isError=!0,this._apiError=e.error):this.fetchedLinkPreviewData=e.data}).catch(e=>{console.error(`Error fetching link preview data for ${this.href}: ${e}`),this._isError=!0,this._apiError="UNKNOWN_ERROR"}).finally(()=>{this._isLoading=!1})}_setManualData(){if(!this.url)throw new Error(`As no href was provided, url is required for ${this.localName}`);this.fetchedLinkPreviewData={url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:Ae(this.url)}}};l([d()],b.prototype,"url",2),l([d()],b.prototype,"title",2),l([d()],b.prototype,"description",2),l([d()],b.prototype,"author",2),l([d()],b.prototype,"imageUrl",2),l([d()],b.prototype,"imageAlt",2),l([d()],b.prototype,"faviconUrl",2),l([d()],b.prototype,"date",2),l([d()],b.prototype,"hidePoweredBy",2),l([d()],b.prototype,"apiUrl",2),l([d()],b.prototype,"dark",2),l([d()],b.prototype,"light",2),l([T()],b.prototype,"fetchedLinkPreviewData",2),l([T()],b.prototype,"_isLoading",2),l([T()],b.prototype,"_isError",2),l([T()],b.prototype,"_apiError",2);var nt=c`
  :host {
    display: block;
    box-sizing: border-box;
    font-family: inherit;
  }

  .skeleton-shape {
    background-color: var(--pb-skeleton-color);
    animation: pulse 1.5s infinite ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
`,C=(e,t)=>{(e=>!!customElements.get(e)||document.createElement(e).constructor!==HTMLElement)(e)||customElements.define(e,t)},se=((M=class extends x{constructor(){super(...arguments),this.width="100%",this.height="16px"}render(){return p`<div
      class="skeleton-shape"
      part="skeleton-shape"
      role="progressbar"
      style="width: ${this.width}; height: ${this.height};"
    >
      <slot></slot>
    </div>`}}).styles=nt,M);l([d()],se.prototype,"width",2),l([d()],se.prototype,"height",2),C("previewbox-skeleton-shape",se);var pt=c`
  :host {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000000b5;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    text-align: center;
  }

  .limit-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
  }

  .limit-info-text {
    color: white;
  }

  .limit-info-cta {
    color: white;
    text-decoration: none;
    background-color: #5046e5;
    padding: 8px 16px;
    border-radius: 4px;
  }
`;C("previewbox-limit-info",((D=class extends x{render(){const t=window.location.origin;return p`<div class="limit-info-container">
      <span class="limit-info-text"
        >You've reached the API limit for ${t}</span
      >
      <a
        class="limit-info-cta"
        target="_blank"
        href="https://previewbox.link/usage/${encodeURIComponent(t)}"
        >Check Usage</a
      >
    </div>`}}).styles=pt,D));var vt=c`
  .powered-by {
    position: absolute;
    bottom: 2px;
    right: 2px;
    font-size: 9.5px;
    color: #000000;
    background-color: #ffffff7d;
    padding: 1px 2px;
    z-index: 2;
    border-radius: 2px;
    line-height: 1.2;

    a {
      color: #000000;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;C("powered-by-previewbox",((B=class extends x{render(){return p`<span class="powered-by">
      Powered by
      <a href="https://previewbox.link">Previewbox</a>
    </span> `}}).styles=vt,B));var ft=c`
  .previewbox-favicon {
    width: var(--pb-favicon-size);
    height: var(--pb-favicon-size);
  }
`,Se=p`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 20 18"
>
  <path
    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
  />
</svg>`,bt=p`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  data-testid="${"FAVICON_FALLBACK"}"
  stroke-width="1.5"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="2"
    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  />
</svg> `,ae=((H=class extends x{constructor(){super(...arguments),this.faviconUrl=null,this.isFaviconError=!1}render(){return p`
      ${this.faviconUrl&&!this.isFaviconError?p`
            <img
              data-testid="${"FAVICON"}"
              class="previewbox-favicon"
              part="favicon"
              src=${this.faviconUrl??""}
              alt="Favicon"
              @error=${()=>this.isFaviconError=!0}
            />
          `:bt}
    `}}).styles=ft,H);l([d()],ae.prototype,"faviconUrl",2),l([T()],ae.prototype,"isFaviconError",2),C("previewbox-favicon",ae);var xt=c`
  img,
  previewbox-skeleton-shape,
  .fallback-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    border-radius: 0 2px 2px 0;
    margin: 0;
    background-color: var(--pb-fallback-img-background);


    svg {
      width: 40px;
      height: 40px;
      color: var(--pb-fallback-img-color);
    }
  }
`,R=((z=class extends x{constructor(){super(...arguments),this.imageUrl=null,this.imageAlt=null,this.isLoading=!0,this.isImageError=!1}render(){return this.isLoading?p`<previewbox-skeleton-shape
        height="100%"
        data-testid="${"IMAGE_SKELETON"}"
      >
        ${Se}
      </previewbox-skeleton-shape>`:p`
      ${this.imageUrl&&!this.isImageError?p`
            <img
              data-testid="${"IMAGE"}"
              part="image"
              src=${this.imageUrl??""}
              alt=${this.imageAlt??"Thumbnail image"}
              @error=${()=>this.isImageError=!0}
            />
          `:p`
            <figure
              class="fallback-img"
              part="image"
              data-testid="${"IMAGE_FALLBACK"}"
            >
              ${Se}
            </figure>
          `}
    `}}).styles=xt,z);l([d()],R.prototype,"imageUrl",2),l([d()],R.prototype,"imageAlt",2),l([d({type:Boolean})],R.prototype,"isLoading",2),l([T()],R.prototype,"isImageError",2),C("previewbox-image",R);var ne=class extends b{render(){return p`
      <figure part="container" class="container">
        ${"API_LIMIT_REACHED"===this._apiError?p`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${"ANCHOR_ELEMENT"}"
        >
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${"TITLE"}">
              ${this._isLoading?p`<previewbox-skeleton-shape
                    width="200px"
                    height="20px"
                    data-testid="${"TITLE_SKELETON"}"
                  />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${"DESCRIPTION"}"
            >
              ${this._isLoading?p`
                    <previewbox-skeleton-shape
                      width="100%"
                      height="16px"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="70%"
                      height="16px"
                      style="margin-top: 4px;"
                    ></previewbox-skeleton-shape>
                  `:this.linkData.description}
            </div>
            <div class="previewbox-metadata">
              ${this._isLoading?p`
                    <div class="previewbox-metadata-skeleton">
                      <previewbox-skeleton-shape
                        width="14px"
                        data-testid="${"FAVICON_SKELETON"}"
                        height="14px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="60px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="4px"
                        height="4px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="44px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                    </div>
                  `:p`
                    <previewbox-favicon
                      .faviconUrl=${this.linkData.favicon}
                    ></previewbox-favicon>
                    <span data-testid="${"PUBLISHER"}"
                      >${this.linkData.origin}</span
                    >${this.linkData.author?p`<span data-testid="${"AUTHOR"}"
                          >${this.linkData.author}</span
                        >`:""}
                  `}
            </div>
          </div>
          <div class="previewbox-thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${this.linkData?.imageUrl}
              .imageAlt=${this.linkData?.imageAlt}
            ></previewbox-image>
          </div>
        </a>
        ${typeof this.hidePoweredBy<"u"?"":p`<powered-by-previewbox
              data-testid="${"POWERED_BY"}"
            ></powered-by-previewbox>`}
      </figure>
    `}};ne.styles=it,ne=l([ye("previewbox-link")],ne);var $t=c`
  ${Ee}

  :host {
    max-width: 320px;
  }

  .container {
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .previewbox-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    flex: 1;
  }

  .previewbox-content {
    padding: 16px;
    overflow: hidden;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .previewbox-title {
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .previewbox-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    width: 100%;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }


  .previewbox-thumbnail {
    position: relative;
    width: 100%;
    height: 180px;
  }

  .previewbox-read-more-container {
    margin-top: auto;
  }

  .previewbox-read-more {
    display: flex;
    align-items: center;
    margin-top: 24px;
    padding: 8px;
    gap: 4px;
    font-size: 0.875rem;
    font-weight: 400;
    background-color: transparent;
    color: var(--pb-text-color-light);
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid var(--pb-border-color);
    transition: background-color 0.2s ease-in-out;
    svg {
      width: 12px;
      height: 12px;
      fill: var(--pb-text-color-light);
      margin-left: 4px;
    }
  }

  .previewbox-read-more:hover {
    background-color: var(--pb-background-color-hover);
  }
`,I=class extends b{constructor(){super(...arguments),this.readMoreBtnText="Read more"}render(){return p`
      <article part="container" class="container">
        ${"API_LIMIT_REACHED"===this._apiError?p`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${"ANCHOR_ELEMENT"}"
        >
          <div class="previewbox-thumbnail" part="thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${this.linkData?.imageUrl}
              .imageAlt=${this.linkData?.imageAlt}
            ></previewbox-image>
          </div>
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${"TITLE"}">
              ${this._isLoading?p`<previewbox-skeleton-shape
                      width="100%"
                      height="20px"
                      data-testid="${"TITLE_SKELETON"}"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="90%"
                      height="20px"
                      style="margin-top: 4px;"
                      data-testid="${"TITLE_SKELETON"}"
                    />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${"DESCRIPTION"}"
            >
              ${this._isLoading?p`
                    <previewbox-skeleton-shape
                      width="100%"
                      height="16px"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="70%"
                      height="16px"
                      style="margin-top: 4px;"
                    ></previewbox-skeleton-shape>
                  `:this.linkData.description}
            </div>

            <div class="previewbox-read-more-container">
              ${typeof this.hideReadMoreBtn>"u"?p`
                    <button
                      class="previewbox-read-more"
                      data-testid="${"READ_MORE_BUTTON"}"
                      title=${this.readMoreBtnText}
                    >
                      ${this.readMoreBtnText}
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        ></path>
                      </svg>
                    </button>
                  `:p``}
            </div>
          </div>
        </a>
        ${typeof this.hidePoweredBy<"u"?"":p`<powered-by-previewbox
              data-testid="${"POWERED_BY"}"
            ></powered-by-previewbox>`}
      </article>
    `}};I.styles=$t,l([d()],I.prototype,"hideReadMoreBtn",2),l([d()],I.prototype,"readMoreBtnText",2),I=l([ye("previewbox-article")],I)})();