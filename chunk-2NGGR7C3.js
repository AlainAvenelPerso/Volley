import{a as le,b as ce,c as rt,d as de,f as ue,g as he}from"./chunk-DPF6J4H6.js";import{i as gt,r as Wt,s as qt,t as Xt}from"./chunk-DVHX5R7R.js";import"./chunk-PPMQE2JW.js";import{a as oe}from"./chunk-DVTLBYTV.js";import{c as re}from"./chunk-WIMTQTH5.js";import{A as st,F as bt,G as Yt,H as Jt,I as ft,J as te,M as ee,R as ie,S as ne,T as ae,U as se,V as K,a as Ht,e as j,k as $t,q as Qt,t as Zt,y as Kt}from"./chunk-3IRT33YC.js";import{$ as X,$a as z,$b as Ut,A as tt,Ba as E,Ca as N,Cb as at,Da as L,Eb as Pt,Fa as dt,Ga as Vt,Gb as Ot,J as It,La as F,Lb as Nt,Ma as h,O as Mt,Oa as m,P,Q as O,Qa as ut,Qb as G,Ra as it,Rb as Z,S as d,Sa as nt,Ta as H,Ua as S,Va as T,Wa as U,Wb as Lt,X as g,Xa as _,Y as b,Ya as u,Za as $,_a as y,_b as Ft,a as B,aa as Et,ab as D,bb as v,ca as At,cb as r,da as Rt,db as ht,eb as mt,ga as wt,gb as V,gc as zt,hb as C,i as w,ib as I,ka as et,mb as Bt,n as Ct,ob as Q,oc as Gt,pc as jt,qb as c,ra as o,rb as _t,sb as x,ta as ct,tb as pt,ua as Dt,w as J,xa as k}from"./chunk-YUGFWQS6.js";var me=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=P({imports:[rt,j]})}return n})();var Se=["button"],Te=["*"];function Ce(n,a){if(n&1&&(S(0,"div",2),U(1,"mat-pseudo-checkbox",6),T()),n&2){let t=r();o(),H("disabled",t.disabled)}}var Ie=new O("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Me=new O("MatButtonToggleGroup");var kt=class{source;value;constructor(a,t){this.source=a,this.value=t}};var Ee=(()=>{class n{_changeDetectorRef=d(G);_elementRef=d(et);_focusMonitor=d(Qt);_idGenerator=d(st);_animationDisabled=K();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new At;constructor(){d(Ht).load(ce);let t=d(Me,{optional:!0}),e=d(new Nt("tabindex"),{optional:!0})||"",i=d(Ie,{optional:!0});this._tabIndex=wt(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=i&&i.appearance?i.appearance:"standard",this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new kt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(e,i){if(e&1&&V(Se,5),e&2){let s;C(s=I())&&(i._buttonElement=s.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,i){e&1&&D("focus",function(){return i.focus()}),e&2&&(F("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),Q("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-disabled-interactive",i.disabledInteractive)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",Z],appearance:"appearance",checked:[2,"checked","checked",Z],disabled:[2,"disabled","disabled",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Te,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,i){if(e&1&&(ht(),S(0,"button",1,0),D("click",function(){return i._onButtonClick()}),h(2,Ce,2,1,"div",2),S(3,"span",3),mt(4),T()(),U(5,"span",4)(6,"span",5)),e&2){let s=Bt(1);H("id",i.buttonId)("disabled",i.disabled&&!i.disabledInteractive||null),F("role",i.isSingleSelector()?"radio":"button")("tabindex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("aria-pressed",i.isSingleSelector()?null:i.checked)("aria-checked",i.isSingleSelector()?i.checked:null)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),o(2),m(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),o(4),H("matRippleTrigger",s)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[le,de],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return n})(),_e=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=P({imports:[rt,Ee,j]})}return n})();function Ae(n,a){if(n&1){let t=y();S(0,"div",1)(1,"button",2),D("click",function(){g(t);let i=r();return b(i.action())}),c(2),T()()}if(n&2){let t=r();o(2),x(" ",t.data.action," ")}}var Re=["label"];function we(n,a){}var De=Math.pow(2,31)-1,Y=class{_overlayRef;instance;containerInstance;_afterDismissed=new w;_afterOpened=new w;_onAction=new w;_durationTimeoutId;_dismissedByAction=!1;constructor(a,t){this._overlayRef=t,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,De))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},pe=new O("MatSnackBarData"),W=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Ve=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Be=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Pe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),ge=(()=>{class n{snackBarRef=d(Y);data=d(pe);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,i){e&1&&(S(0,"div",0),c(1),T(),h(2,Ae,3,1,"div",1)),e&2&&(o(),x(" ",i.data.message,`
`),o(),m(i.hasAction?2:-1))},dependencies:[ue,Ve,Be,Pe],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),yt="_mat-snack-bar-enter",xt="_mat-snack-bar-exit",Oe=(()=>{class n extends Jt{_ngZone=d(Rt);_elementRef=d(et);_changeDetectorRef=d(G);_platform=d($t);_animationsDisabled=K();snackBarConfig=d(W);_document=d(Et);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(X);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new w;_onExit=new w;_onEnter=new w;_animationState="void";_live;_label;_role;_liveElementId=d(st).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===xt?this._completeExit():t===yt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(yt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(yt)},200)))}exit(){return this._destroyed?Ct(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(xt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(xt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(l=>t.classList.add(l)):t.classList.add(e)),this._exposeToModals();let i=this._label.nativeElement,s="mdc-snackbar__label";i.classList.toggle(s,!i.querySelector(`.${s}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<e.length;i++){let s=e[i],l=s.getAttribute("aria-owns");this._trackedModals.add(s),l?l.indexOf(t)===-1&&s.setAttribute("aria-owns",l+" "+t):s.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let i=e.replace(this._liveElementId,"").trim();i.length>0?t.setAttribute("aria-owns",i):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),i=t.querySelector("[aria-live]");if(e&&i){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(s=document.activeElement),e.removeAttribute("aria-hidden"),i.appendChild(e),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,i){if(e&1&&V(ft,7)(Re,7),e&2){let s;C(s=I())&&(i._portalOutlet=s.first),C(s=I())&&(i._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,i){e&1&&D("animationend",function(l){return i.onAnimationEnd(l.animationName)})("animationcancel",function(l){return i.onAnimationEnd(l.animationName)}),e&2&&Q("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[dt],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(S(0,"div",1)(1,"div",2,0)(3,"div",3),Vt(4,we,0,0,"ng-template",4),T(),U(5,"div"),T()()),e&2&&(o(5),F("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[ft],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Ne=new O("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new W}),St=(()=>{class n{_live=d(Kt);_injector=d(X);_breakpointObserver=d(Zt);_parentSnackBar=d(n,{optional:!0,skipSelf:!0});_defaultConfig=d(Ne);_animationsDisabled=K();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ge;snackBarContainerComponent=Oe;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",i){let s=B(B({},this._defaultConfig),i);return s.data={message:t,action:e},s.announcementMessage===t&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector,s=X.create({parent:i||this._injector,providers:[{provide:W,useValue:e}]}),l=new bt(this.snackBarContainerComponent,e.viewContainerRef,s),p=t.attach(l);return p.instance.snackBarConfig=e,p.instance}_attach(t,e){let i=B(B(B({},new W),this._defaultConfig),e),s=this._createOverlay(i),l=this._attachSnackBarContainer(s,i),p=new Y(l,s);if(t instanceof Dt){let A=new Yt(t,null,{$implicit:i.data,snackBarRef:p});p.instance=l.attachTemplatePortal(A)}else{let A=this._createInjector(i,p),q=new bt(t,void 0,A),Tt=l.attachComponentPortal(q);p.instance=Tt.instance}return this._breakpointObserver.observe(se.HandsetPortrait).pipe(It(s.detachments())).subscribe(A=>{s.overlayElement.classList.toggle(this.handsetCssClass,A.matches)}),i.announcementMessage&&l._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(p,i),this._openedSnackBarRef=p,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new ee;e.direction=t.direction;let i=ie(this._injector),s=t.direction==="rtl",l=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!s||t.horizontalPosition==="end"&&s,p=!l&&t.horizontalPosition!=="center";return l?i.left("0"):p?i.right("0"):i.centerHorizontally(),t.verticalPosition==="top"?i.top("0"):i.bottom("0"),e.positionStrategy=i,e.disableAnimations=this._animationsDisabled,ne(this._injector,e)}_createInjector(t,e){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector;return X.create({parent:i||this._injector,providers:[{provide:Y,useValue:e},{provide:pe,useValue:t.data}]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Mt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var be=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=P({providers:[St],imports:[ae,te,he,ge,j]})}return n})();var Fe=["reportDateInput"],Ue=["myInput"],ve=()=>[1,2,3,4,5],ze=()=>[];function Ge(n,a){if(n&1){let t=y();_(0,"p")(1,"button",5),v("click",function(){g(t);let i=r();return b(i.router.navigate(["info-equipe"],{state:{codeEquipe:i.codeEquipeConnectee,codeCategorie:0}}))}),c(2),u(),c(3),_(4,"button",5),v("click",function(){g(t);let i=r();return b(i.router.navigate(["info-equipe"],{state:{codeEquipe:i.codeAdversaire,codeCategorie:0}}))}),c(5),u()()}if(n&2){let t=r();o(2),x(" ",t.nomEquipeConnectee," "),o(),x(" ",t.separator," "),o(2),x(" ",t.nomAdversaire," ")}}function je(n,a){if(n&1){let t=y();_(0,"p")(1,"button",5),v("click",function(){g(t);let i=r();return b(i.router.navigate(["info-equipe"],{state:{codeEquipe:i.codeAdversaire,codeCategorie:0}}))}),c(2),u(),c(3),_(4,"button",5),v("click",function(){g(t);let i=r();return b(i.router.navigate(["info-equipe"],{state:{codeEquipe:i.codeEquipeConnectee,codeCategorie:0}}))}),c(5),u()()}if(n&2){let t=r();o(2),x(" ",t.nomAdversaire," "),o(),x(" ",t.separator," "),o(2),x(" ",t.nomEquipeConnectee," ")}}function We(n,a){if(n&1){let t=y();_(0,"button",4),v("click",function(){g(t);let i=r();return b(i.openDateReportPicker())}),c(1,"Reporter"),u(),_(2,"input",6,0),v("change",function(i){g(t);let s=r();return b(s.onDateReportSelected(i.target.value))}),u()}if(n&2){let t=r();o(2),z("value",t.nouvelleDateReport)}}function qe(n,a){if(n&1&&(_(0,"p")(1,"b"),c(2,"Score :"),u(),c(3),u()),n&2){let t=r();o(3),pt(" ",t.ScoreArray[0]," / ",t.ScoreArray[1]," ")}}function Xe(n,a){if(n&1){let t=y();_(0,"button",12),v("click",function(){g(t);let i=r(6);return b(i.ajouterSet())}),c(1," \u2795 "),u()}if(n&2){let t=r(6);z("disabled",!t.canAddSet())}}function He(n,a){if(n&1){let t=y();_(0,"button",9),v("click",function(){g(t);let i=r(5);return b(i.effacerSet())}),$(1,"img",10),u(),h(2,Xe,2,1,"button",11)}if(n&2){let t=r(5);o(2),m(t.bScoreModifiable==!0&&!t.bMatchGagne&&t.iVisibleSlider<=5?2:-1)}}function $e(n,a){if(n&1){let t=y();_(0,"button",7),v("click",function(){g(t);let i=r().$implicit,s=r(3);return b(s.augmenteScore(i,0))}),c(1,"+"),u(),_(2,"input",8,1),v("input",function(i){g(t);let s=r().$implicit,l=r(3);return b(l.onScoreChange(s,0,i.target.value))}),u(),c(4," - "),_(5,"input",8,1),v("input",function(i){g(t);let s=r().$implicit,l=r(3);return b(l.onScoreChange(s,1,i.target.value))}),u(),_(7,"button",7),v("click",function(){g(t);let i=r().$implicit,s=r(3);return b(s.augmenteScore(i,1))}),c(8,"+"),u(),h(9,He,3,1),$(10,"BR")}if(n&2){let t=r().$implicit,e=r(3);o(2),z("value",t<e.iVisibleSlider-1||e.forceShowZeroScores?(e.sets[t-1]==null?null:e.sets[t-1][0])??0:((e.sets[t-1]==null?null:e.sets[t-1][0])??0)>0?e.sets[t-1]==null?null:e.sets[t-1][0]:""),o(3),z("value",t<e.iVisibleSlider-1||e.forceShowZeroScores?(e.sets[t-1]==null?null:e.sets[t-1][1])??0:((e.sets[t-1]==null?null:e.sets[t-1][1])??0)>0?e.sets[t-1]==null?null:e.sets[t-1][1]:""),o(4),m(t==e.iVisibleSlider-1?9:-1)}}function Qe(n,a){if(n&1&&h(0,$e,11,3),n&2){let t=a.$implicit,e=r(3);m(t<e.iVisibleSlider?0:-1)}}function Ze(n,a){n&1&&it(0,Qe,1,1,null,null,ut),n&2&&nt(at(0,ve))}function Ke(n,a){if(n&1&&h(0,Ze,2,1),n&2){let t=r();m(t.sets.length>0?0:-1)}}function Ye(n,a){if(n&1&&(c(0),$(1,"BR")),n&2){let t=r().$implicit,e=r(3);pt(" ",e.sets[t-1]==null?null:e.sets[t-1][0]," - ",e.sets[t-1]==null?null:e.sets[t-1][1]," ")}}function Je(n,a){if(n&1&&h(0,Ye,2,2),n&2){let t=a.$implicit,e=r(3);m((e.sets[t-1]==null?null:e.sets[t-1][0])!=null?0:-1)}}function ti(n,a){n&1&&it(0,Je,1,1,null,null,ut),n&2&&nt(at(0,ve))}function ei(n,a){if(n&1&&h(0,ti,2,1),n&2){let t=r();m(t.sets!=at(1,ze)?0:-1)}}function ii(n,a){n&1&&c(0," Valider ")}function ni(n,a){n&1&&c(0," Confirmer ")}function ai(n,a){if(n&1){let t=y();c(0," \xA0\xA0 "),_(1,"button",13),v("click",function(){g(t);let i=r(2);return b(i.validationScore())}),h(2,ii,1,0)(3,ni,1,0),u()}if(n&2){let t=r(2);o(),z("disabled",t.ScoreArray[0]+t.ScoreArray[1]===0),o(),m(t.bScoreModifiable==!0?2:3)}}function si(n,a){if(n&1&&h(0,ai,4,2),n&2){let t=r();m(t.bScoreDejaValideParTous==!1?0:-1)}}function ri(n,a){n&1&&(_(0,"p"),c(1,"Score d\xE9j\xE0 valid\xE9 par les 2 \xE9quipes. Contacter l'administrateur pour le modifier."),u())}function oi(n,a){n&1&&(_(0,"p"),c(1,"Score d\xE9j\xE0 saisi par l'adversaire"),u())}var fe=class n{constructor(a,t,e,i,s,l,p,A,q){this.router=a;this.globalService=t;this.fb=e;this.dialog=i;this.snackBar=s;this.cdr=l;this.dialogService=p;this.auth=A;this.location=q;let f=this.router.currentNavigation()?.extras.state;if(console.log("State re\xE7u dans le constructeur :",f),this.nomAdversaire=f.NA,this.Lieu=f.Lieu,this.codeAdversaire=f.CA,this.DateMatch=f.DM,this.nouvelleDateReport=this.DateMatch?String(this.DateMatch).slice(0,10):"",this.ScoreArray[0]=f.SD,this.ScoreArray[1]=f.SE,this.form=this.fb.group({tableau:this.fb.array(this.creerTableau(5,2))}),f.ED!=null&&f.EE!=null)this.nomEquipeConnectee=f.NED,this.nomAdversaire=f.NEE,this.Lieu="D",this.codeEquipeConnectee=f.ED,this.codeAdversaire=f.EE,this.globalService.loadScoreMatch("D",f.ED,f.EE),this.match$=this.globalService.getScoreMatch();else{let R=this.auth.current;this.nomEquipeConnectee=R.nom_equipe?.toString()??"",this.codeEquipeConnectee=R.code_equipe,this.iVisibleSlider=this.ScoreArray[0]+this.ScoreArray[1]+1,this.globalService.loadScoreMatch(this.Lieu,this.codeEquipeConnectee,Number(this.codeAdversaire)),this.match$=this.globalService.getScoreMatch()}this.match$.pipe(J(R=>R!==null),tt(1)).subscribe(R=>{if(!R)return;this.forceShowZeroScores=!0,this.match=R;let ot=this.match.Sets_Domicile??0,lt=this.match.Sets_Exterieur??0;this.iVisibleSlider=ot+lt+1,ot===0&&lt===0&&(this.iVisibleSlider=2),console.log("Score re\xE7u :",this.match),this.ScoreArray[0]=ot,this.ScoreArray[1]=lt,this.match.VE==!0&&this.match.VD==!0?(this.bScoreDejaValideParTous=!0,this.bScoreModifiable=!1):this.Lieu=="D"&&this.match.VE==!0||this.Lieu=="E"&&this.match.VD==!0?(this.bScoreModifiable=!1,console.log("Score non modifiable")):(this.bScoreModifiable=!0,console.log("Score modifiable"));for(let M=0;M<this.iVisibleSlider-1;M++)this.sets[M]||(this.sets[M]=[0,0]),this.sets[M][0]=this.match[`S${M+1}D`],this.sets[M][1]=this.match[`S${M+1}E`];this.bValidScore=!0,console.log("Sets initialis\xE9s \xE0 :",this.sets)})}router;globalService;fb;dialog;snackBar;cdr;dialogService;auth;location;myInputs;reportDateInput;form;sliderControl=new gt(0);separator=" / ";nomEquipeConnectee="";Lieu;codeEquipeConnectee;codeAdversaire;nomAdversaire;ScoreArray=[0,0];Score="";match$;match;threshold=200;position=0;sliderValue=0;state="left";iVisibleSlider=1;bValidScore=!1;bMatchGagne=!1;DateMatch="";sets=[];bScoreModifiable=!0;bScoreDejaValideParTous=!1;forceShowZeroScores=!1;nouvelleDateReport="";ngOnInit(){let a=()=>{let t=this.auth.current;this.nomEquipeConnectee=t.nom_equipe?.toString()??this.nomEquipeConnectee,t.code_equipe&&(this.codeEquipeConnectee=Number(t.code_equipe));let e=String(this.Lieu??"").trim().toUpperCase();this.Lieu=e,!(!this.codeEquipeConnectee||!this.codeAdversaire)&&(this.globalService.getScoreMatch().pipe(J(i=>i!==null),tt(1)).subscribe(i=>{i&&(this.forceShowZeroScores=!0,i.VE===!0&&i.VD===!0?(this.bScoreDejaValideParTous=!0,this.bScoreModifiable=!1):this.Lieu==="D"&&i.VE===!0||this.Lieu==="E"&&i.VD===!0?(this.bScoreDejaValideParTous=!1,this.bScoreModifiable=!1):(this.bScoreDejaValideParTous=!1,this.bScoreModifiable=!0))}),this.globalService.loadScoreMatch(this.Lieu,Number(this.codeEquipeConnectee),Number(this.codeAdversaire)))};this.auth.currentCodeEquipe?a():this.auth.session$.pipe(J(t=>!!t.code_equipe),tt(1)).subscribe(()=>a())}onScoreChange(a,t,e){this.forceShowZeroScores=!1,console.log(`Score chang\xE9 pour le set ${a}, colonne ${t} :`,e),this.sets[a-1][t]=Number(e),this.bValidScore=!0,this.bMatchGagne=!1,this.ScoreArray[0]=0,this.ScoreArray[1]=0;for(let i=0;i<this.iVisibleSlider-1;i++){this.globalService.logDebug(`V\xE9rification du set ${i+1} :`,this.sets[i]),(this.sets[i][0]<0||this.sets[i][1]<0)&&(this.bValidScore=!1,this.globalService.logDebug("Score n\xE9gatif d\xE9tect\xE9 dans set",i+1));let s=i<4?25:15;this.sets[i][0]<s&&this.sets[i][1]<s&&(this.bValidScore=!1,console.log("Pas assez de points dans set",i+1)),Math.abs(this.sets[i][0]-this.sets[i][1])<2&&(this.bValidScore=!1,console.log("Moins de 2 points d'\xE9cart dans set",i+1)),this.sets[i][0]>this.sets[i][1]?this.ScoreArray[0]++:this.sets[i][1]>this.sets[i][0]&&this.ScoreArray[1]++}this.ScoreArray[0]<3&&this.ScoreArray[1]<3&&(this.bValidScore=!1,this.globalService.logDebug("Match pas encore gagn\xE9",this.iVisibleSlider,this.bMatchGagne,this.ScoreArray)),(this.ScoreArray[0]==3||this.ScoreArray[1]==3)&&(this.bMatchGagne=!0)}canAddSet(){if(!this.bScoreModifiable||this.bScoreDejaValideParTous||this.bMatchGagne||this.iVisibleSlider>5)return!1;let a=this.iVisibleSlider-2,t=this.sets[a];if(!t)return!1;let e=Number(t[0]??0),i=Number(t[1]??0),s=Math.max(e,i),l=Math.abs(e-i),p=a<4?25:15;return s>=p&&l>=2}ajouterSet(){if(!this.canAddSet()||this.iVisibleSlider>=6)return;let a=this.iVisibleSlider-2;this.sets[a]?(this.sets[a][0]=Number(this.sets[a][0]??0),this.sets[a][1]=Number(this.sets[a][1]??0)):this.sets[a]=[0,0],this.iVisibleSlider++,this.sets[this.iVisibleSlider-2]||(this.sets[this.iVisibleSlider-2]=[0,0]),this.bValidScore=!1}openSnackBar(){this.snackBar.open("Action effectu\xE9e !","Fermer",{duration:2e3,horizontalPosition:"right",verticalPosition:"top"})}effacerSet(){if(this.bMatchGagne=!1,this.iVisibleSlider<=2){this.iVisibleSlider=2,this.sets[0]=[0,0],this.ScoreArray[0]=0,this.ScoreArray[1]=0;return}this.iVisibleSlider--,this.sets[this.iVisibleSlider-1][0]>this.sets[this.iVisibleSlider-1][1]?this.ScoreArray[0]--:this.sets[this.iVisibleSlider-1][1]>this.sets[this.iVisibleSlider-1][0]&&this.ScoreArray[1]--,this.sets[this.iVisibleSlider-1][0]=0,this.sets[this.iVisibleSlider-1][1]=0}creerTableau(a,t){return Array.from({length:a},()=>this.fb.array(Array.from({length:t},()=>new gt(""))))}get tableau(){return this.form.get("tableau")}getColonnes(a){return this.tableau.at(a)}onSubmit(){console.log(this.form.value)}validationScore(){this.forceShowZeroScores=!0;for(let t=0;t<this.iVisibleSlider-1;t++)this.sets[t]||(this.sets[t]=[0,0]),this.sets[t][0]=Number(this.sets[t][0]??0),this.sets[t][1]=Number(this.sets[t][1]??0);if(console.log("Scores valid\xE9s :",this.sets),this.bScoreModifiable==!1)var a="Le score a d\xE9j\xE0 \xE9t\xE9 saisi par l'adversaire. Voulez-vous vraiment le confirmer ?";else var a="Confirmez-vous le score saisi ?";this.dialogService.confirm("Confirmation",a,!1).subscribe(t=>{if(t){console.log("Score confirm\xE9e");let e=Number(this.codeEquipeConnectee??this.auth.currentCodeEquipe??0),i=e,s=Number(this.codeAdversaire);if(this.Lieu=="E"&&(s=e,i=Number(this.codeAdversaire)),this.bScoreModifiable==!1)this.globalService.confirmerScoreMatch(this.Lieu,i,s),this.bScoreDejaValideParTous=!0;else{let l=[Number(this.ScoreArray[0]??0),Number(this.ScoreArray[1]??0)],p=Array.from({length:5},(A,q)=>[Number(this.sets[q]?.[0]??0),Number(this.sets[q]?.[1]??0)]);this.globalService.enregistrerScoreMatch(this.Lieu,i,s,l,p)}this.snackBar.open("Op\xE9ration r\xE9ussie","OK",{duration:2e3})}else console.log("Score annul\xE9e")})}onSliderChangeEvent(a){console.log("visible slider#, Valeur r\xE9cup\xE9r\xE9e:",this.iVisibleSlider,a);let t=99;a==-1?(t=0,this.ScoreArray[0]++):(t=1,this.ScoreArray[1]++),this.ScoreArray[0]=this.ScoreArray[0]??0,this.ScoreArray[1]=this.ScoreArray[1]??0,this.iVisibleSlider<5?this.sets[this.iVisibleSlider-1][t]=25:this.sets[this.iVisibleSlider-1][t]=15,this.sets[this.iVisibleSlider-1][1-t]=0,this.iVisibleSlider++,this.position=0,this.cdr.detectChanges();let e=this.myInputs.toArray();console.log("index input :",e,2*(this.iVisibleSlider-2)+(1-t)),e[2*(this.iVisibleSlider-2)+(1-t)].nativeElement.focus(),this.bValidScore=!1}augmenteScore(a,t){if(console.log("Augmente score de ",a,t),(this.sets[a-1][0]??0)===0&&(this.sets[a-1][1]??0)===0){let i=a<5?25:15;this.sets[a-1][t]=i,this.sets[a-1][1-t]=0,this.onScoreChange(a,t,String(this.sets[a-1][t]));return}this.sets[a-1][t]++,this.sets[a-1][t]==this.sets[a-1][1-t]-1&&this.sets[a-1][1-t]++;let e=a<5?25:15;this.sets[a-1][t]>e&&(this.sets[a-1][1-t]=this.sets[a-1][t]-2),this.onScoreChange(a,t,String(this.sets[a-1][t]))}infoEquipe(){this.router.navigate(["/info-equipe"])}openDateReportPicker(){if(!this.canReporterMatch()){this.snackBar.open("Impossible de reporter : un score est d\xE9j\xE0 saisi","OK",{duration:2500});return}let a=this.reportDateInput?.nativeElement;a&&(a.value=this.nouvelleDateReport||(this.DateMatch?String(this.DateMatch).slice(0,10):""),typeof a.showPicker=="function"?a.showPicker():a.click())}onDateReportSelected(a){this.nouvelleDateReport=(a??"").trim(),this.reporterMatch()}reporterMatch(){if(!this.canReporterMatch()){this.snackBar.open("Impossible de reporter : un score est d\xE9j\xE0 saisi","OK",{duration:2500});return}let a=(this.nouvelleDateReport??"").trim();if(!a)return;let t=Number(this.codeEquipeConnectee??this.auth.currentCodeEquipe??0),e=t,i=Number(this.codeAdversaire);this.Lieu=="E"&&(i=t,e=Number(this.codeAdversaire)),this.globalService.reporterMatch(this.Lieu,e,i,a).then(()=>{this.DateMatch=a,this.snackBar.open("Match report\xE9","OK",{duration:2e3})}).catch(s=>{let l=s?.code==="PGRST204"?"La colonne Date_Report n'existe pas dans la base.":s?.message??"Erreur lors du report du match";this.snackBar.open(l,"OK",{duration:3500})})}canReporterMatch(){if(Number(this.ScoreArray[0]??0)+Number(this.ScoreArray[1]??0)>0)return!1;for(let a of this.sets){let t=Number(a?.[0]??0),e=Number(a?.[1]??0);if(t>0||e>0)return!1}return!0}retourPagePrecedente(){this.location.back()}static \u0275fac=function(t){return new(t||n)(k(zt),k(jt),k(Wt),k(re),k(St),k(G),k(oe),k(Gt),k(Lt))};static \u0275cmp=E({type:n,selectors:[["app-detail-match"]],viewQuery:function(t,e){if(t&1&&V(Fe,5)(Ue,5),t&2){let i;C(i=I())&&(e.reportDateInput=i.first),C(i=I())&&(e.myInputs=i)}},decls:18,vars:10,consts:[["reportDateInput",""],["myInput",""],[1,"centre"],[1,"ligne-date-report"],["mat-button","",3,"click"],[1,"bouton-equipe",3,"click"],["type","date",1,"champ-date-report",3,"change","value"],[1,"bouton",3,"click"],[1,"score",3,"input","value"],["mat-raised-button","","color","primary",1,"boutonGomme",3,"click"],["src","assets/gomme.png","alt","Effacer","width","20","height","20"],["mat-raised-button","","color","primary","aria-label","Ajouter un set","title","Ajouter un set",1,"boutonAjouterSet",3,"disabled"],["mat-raised-button","","color","primary","aria-label","Ajouter un set","title","Ajouter un set",1,"boutonAjouterSet",3,"click","disabled"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(t,e){t&1&&(_(0,"div",2)(1,"h2"),h(2,Ge,6,3,"p")(3,je,6,3,"p"),u(),_(4,"h3",3)(5,"span"),c(6),Pt(7,"date"),u(),h(8,We,4,1),u(),h(9,qe,4,2,"p"),h(10,Ke,1,1)(11,ei,1,2),$(12,"BR"),_(13,"button",4),v("click",function(){return e.retourPagePrecedente()}),c(14,"Retour"),u(),h(15,si,1,1),h(16,ri,2,0,"p")(17,oi,2,0,"p"),u()),t&2&&(o(2),m(e.Lieu=="D"?2:3),o(4),_t(Ot(7,7,e.DateMatch,"dd/MM/yyyy")),o(2),m(e.canReporterMatch()?8:-1),o(),m(e.ScoreArray[0]!=null&&e.ScoreArray[0]+e.ScoreArray[1]>0?9:-1),o(),m(e.bScoreModifiable==!0?10:11),o(5),m(e.iVisibleSlider>1?15:-1),o(),m(e.bScoreDejaValideParTous==!0?16:e.bScoreModifiable?-1:17))},dependencies:[me,qt,_e,Xt,Ut,be,Ft],styles:['@charset "UTF-8";.centre[_ngcontent-%COMP%]{text-align:center;width:50%;margin:0 auto}.example-margin[_ngcontent-%COMP%]{margin:8px}.score[_ngcontent-%COMP%]{width:40px;height:20px;text-align:center;font-size:16px}.bouton[_ngcontent-%COMP%]{padding:3px;margin:5px}.boutonGomme[_ngcontent-%COMP%]{padding:3px;margin:5px;vertical-align:middle}.boutonAjouterSet[_ngcontent-%COMP%]{padding:2px 6px;margin:5px;min-width:30px;height:28px;line-height:1;font-size:14px;vertical-align:middle}.ligne-date-report[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap}.champ-date-report[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}button[_ngcontent-%COMP%]:disabled{background-color:#ccc;color:#666;cursor:not-allowed;opacity:.7}']})};export{fe as DetailMatch};
