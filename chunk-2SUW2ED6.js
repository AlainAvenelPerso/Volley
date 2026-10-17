import{a as ei}from"./chunk-T7MIIMGF.js";import{b as ti,e as kt,f as It,g as ni}from"./chunk-DPF6J4H6.js";import{a as An,b as En,c as Sn,d as tt,e as Ct,f as kn,g as In,h as Oe,j as Fn,k as Tn,l as Vn,m as Dt,n as Pn,o as Rn,p as On,q as Ln,s as Nn}from"./chunk-DVHX5R7R.js";import{a as At}from"./chunk-PPMQE2JW.js";import{A as le,E as jn,F as Et,I as St,J as $n,K as Wn,L as Gn,M as Qn,P as Un,Q as Kn,R as Zn,S as Jn,T as Xn,V as Le,a as he,b as nt,d as fe,e as De,g as wt,h as we,i as Bn,j as _e,k as ce,l as Mt,r as zn,u as Yn,x as qn,z as Hn}from"./chunk-3IRT33YC.js";import{$ as Ue,$a as ee,$b as yn,A as tn,Ba as F,Bb as te,Ca as ie,D as nn,Da as z,F as an,Fa as vt,Ga as pe,H as ye,Ha as cn,Hb as hn,Ib as fn,J as Qe,Kb as et,La as T,Lb as _n,Ma as h,Mb as Re,N as ft,Nb as gn,O as U,Oa as f,P as ne,Q as I,Qa as yt,Qb as W,R as rn,Ra as q,Rb as ae,S as c,Sa as H,Ta as b,Tb as bn,Ua as l,Va as d,Wa as S,X as _,Xa as K,Y as g,Ya as Z,Yb as vn,Z as Te,Za as Ve,_ as _t,_a as V,a as Kt,aa as gt,ab as v,b as Zt,bb as mn,ca as y,cb as u,da as Y,db as xe,eb as j,f as B,fb as Ze,g as Q,ga as M,gb as J,gc as xn,h as Jt,ha as Ke,hb as C,i as E,ia as se,ib as D,ja as on,jb as un,ka as $,kb as pn,kc as Cn,l as Xt,lb as xt,mb as Pe,mc as Dn,n as Ge,nb as Je,ob as w,oc as wn,p as en,pb as Xe,pc as Mn,qb as m,ra as s,rb as x,sb as P,ta as bt,tb as Ce,u as be,va as sn,vb as O,w as ve,wa as de,wb as L,xa as ue,xb as N,ya as ln,za as dn}from"./chunk-YUGFWQS6.js";var Ft=class{_box;_destroyed=new E;_resizeSubject=new E;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new Jt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),t.unsubscribe(),this._elementObservables.delete(r)}}).pipe(ve(e=>e.some(t=>t.target===r)),an({bufferSize:1,refCount:!0}),Qe(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ii=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(Y);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new Ft(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=U({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var qi=["notch"],Hi=["matFormFieldNotchedOutline",""],ji=["*"],ai=["iconPrefixContainer"],ri=["textPrefixContainer"],oi=["iconSuffixContainer"],si=["textSuffixContainer"],$i=["textField"],Wi=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Gi=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Qi(i,r){i&1&&S(0,"span",21)}function Ui(i,r){if(i&1&&(l(0,"label",20),j(1,1),h(2,Qi,1,0,"span",21),d()),i&2){let e=u(2);b("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),T("for",e._control.disableAutomaticLabeling?null:e._control.id),s(2),f(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ki(i,r){if(i&1&&h(0,Ui,3,5,"label",20),i&2){let e=u();f(e._hasFloatingLabel()?0:-1)}}function Zi(i,r){i&1&&S(0,"div",7)}function Ji(i,r){}function Xi(i,r){if(i&1&&pe(0,Ji,0,0,"ng-template",13),i&2){u(2);let e=Pe(1);b("ngTemplateOutlet",e)}}function ea(i,r){if(i&1&&(l(0,"div",9),h(1,Xi,1,1,null,13),d()),i&2){let e=u();b("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),s(),f(e._forceDisplayInfixLabel()?-1:1)}}function ta(i,r){i&1&&(l(0,"div",10,2),j(2,2),d())}function na(i,r){i&1&&(l(0,"div",11,3),j(2,3),d())}function ia(i,r){}function aa(i,r){if(i&1&&pe(0,ia,0,0,"ng-template",13),i&2){u();let e=Pe(1);b("ngTemplateOutlet",e)}}function ra(i,r){i&1&&(l(0,"div",14,4),j(2,4),d())}function oa(i,r){i&1&&(l(0,"div",15,5),j(2,5),d())}function sa(i,r){i&1&&S(0,"div",16)}function la(i,r){i&1&&(l(0,"div",18),j(1,6),d())}function da(i,r){if(i&1&&(l(0,"mat-hint",22),m(1),d()),i&2){let e=u(2);b("id",e._hintLabelId),s(),x(e.hintLabel)}}function ca(i,r){if(i&1&&(l(0,"div",19),h(1,da,2,2,"mat-hint",22),j(2,7),S(3,"div",23),j(4,8),d()),i&2){let e=u();s(),f(e.hintLabel?1:-1)}}var Tt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,selectors:[["mat-label"]]})}return i})(),ma=new I("MatError");var Vt=(()=>{class i{align="start";id=c(le).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(ee("id",n.id),T("align",null),w("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),ua=new I("MatPrefix");var hi=new I("MatSuffix"),Pt=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[te([{provide:hi,useExisting:i}])]})}return i})(),fi=new I("FloatingLabelParent"),li=(()=>{class i{_elementRef=c($);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(ii);_ngZone=c(Y);_parent=c(fi);_resizeSubscription=new Q;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return pa(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&w("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function pa(i){let r=i;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var di="mdc-line-ripple--active",it="mdc-line-ripple--deactivating",ci=(()=>{class i{_elementRef=c($);_cleanupTransitionEnd;constructor(){let e=c(Y),t=c(de);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(it),e.add(di)}deactivate(){this._elementRef.nativeElement.classList.add(it)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(it);e.propertyName==="opacity"&&n&&t.remove(di,it)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),mi=(()=>{class i{_elementRef=c($);_ngZone=c(Y);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&J(qi,5),t&2){let a;C(a=D())&&(n._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&w("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Hi,ngContentSelectors:ji,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(xe(),Ve(0,"div",1),K(1,"div",2,0),j(3),Z(),Ve(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),at=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i})}return i})();var Ne=new I("MatFormField"),ha=new I("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ui="fill",fa="auto",pi="fixed",_a="translateY(-50%)",rt=(()=>{class i{_elementRef=c($);_changeDetectorRef=c(W);_platform=c(ce);_idGenerator=c(le);_ngZone=c(Y);_defaults=c(ha,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Re("iconPrefixContainer");_textPrefixContainerSignal=Re("textPrefixContainer");_iconSuffixContainerSignal=Re("iconSuffixContainer");_textSuffixContainerSignal=Re("textSuffixContainer");_prefixSuffixContainers=et(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=gn(Tt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=we(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||fa}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||ui;this._appearanceSignal.set(t)}_appearanceSignal=M(ui);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||pi}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||pi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new E;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Le();constructor(){let e=this._defaults,t=c(fe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ke(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=et(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(ye([void 0,void 0]),en(()=>[t.errorState,t.userAriaDescribedBy]),nn(),ve(([[a,o],[p,A]])=>a!==p||o!==A)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Qe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),be(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){bn({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=et(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(p=>p.align==="start"):null,o=this._hintChildren?this._hintChildren.find(p=>p.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,n;if(t){let a=this._describedByIds||e;n=e.concat(t.filter(o=>o&&!a.includes(o)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,p=t?.getBoundingClientRect().width??0,A=n?.getBoundingClientRect().width??0,R=a?.getBoundingClientRect().width??0,Fe=this._currentDirection==="rtl"?"-1":"1",ge=`${o+p}px`,oe=`calc(${Fe} * (${ge} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ht=`var(--mat-mdc-form-field-label-transform, ${_a} translateX(${oe}))`,Yi=o+p+A+R;return[ht,Yi]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,a){if(t&1&&(un(a,n._labelChild,Tt,5),Ze(a,at,5)(a,ua,5)(a,hi,5)(a,ma,5)(a,Vt,5)),t&2){xt();let o;C(o=D())&&(n._formFieldControl=o.first),C(o=D())&&(n._prefixChildren=o),C(o=D())&&(n._suffixChildren=o),C(o=D())&&(n._errorChildren=o),C(o=D())&&(n._hintChildren=o)}},viewQuery:function(t,n){if(t&1&&(pn(n._iconPrefixContainerSignal,ai,5)(n._textPrefixContainerSignal,ri,5)(n._iconSuffixContainerSignal,oi,5)(n._textSuffixContainerSignal,si,5),J($i,5)(ai,5)(ri,5)(oi,5)(si,5)(li,5)(mi,5)(ci,5)),t&2){xt(4);let a;C(a=D())&&(n._textField=a.first),C(a=D())&&(n._iconPrefixContainer=a.first),C(a=D())&&(n._textPrefixContainer=a.first),C(a=D())&&(n._iconSuffixContainer=a.first),C(a=D())&&(n._textSuffixContainer=a.first),C(a=D())&&(n._floatingLabel=a.first),C(a=D())&&(n._notchedOutline=a.first),C(a=D())&&(n._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&w("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[te([{provide:Ne,useExisting:i},{provide:fi,useExisting:i}])],ngContentSelectors:Gi,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(xe(Wi),pe(0,Ki,1,1,"ng-template",null,0,hn),l(2,"div",6,1),v("click",function(o){return n._control.onContainerClick(o)}),h(4,Zi,1,0,"div",7),l(5,"div",8),h(6,ea,2,2,"div",9),h(7,ta,3,0,"div",10),h(8,na,3,0,"div",11),l(9,"div",12),h(10,aa,1,1,null,13),j(11),d(),h(12,ra,3,0,"div",14),h(13,oa,3,0,"div",15),d(),h(14,sa,1,0,"div",16),d(),l(15,"div",17),h(16,la,2,0,"div",18)(17,ca,5,1,"div",19),d()),t&2){let a;s(2),w("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),s(2),f(!n._hasOutline()&&!n._control.disabled?4:-1),s(2),f(n._hasOutline()?6:-1),s(),f(n._hasIconPrefix?7:-1),s(),f(n._hasTextPrefix?8:-1),s(2),f(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),s(2),f(n._hasTextSuffix?12:-1),s(),f(n._hasIconSuffix?13:-1),s(),f(n._hasOutline()?-1:14),s(),w("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let o=n._getSubscriptMessageType();s(),f((a=o)==="error"?16:a==="hint"?17:-1)}},dependencies:[li,mi,vn,ci,Vt],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var Be=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({imports:[Yn,rt,De]})}return i})();var ba=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),va={passive:!0},_i=(()=>{class i{_platform=c(ce);_ngZone=c(Y);_renderer=c(sn).createRenderer(null,null);_styleLoader=c(he);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Xt;this._styleLoader.load(ba);let t=wt(e),n=this._monitoredElements.get(t);if(n)return n.subject;let a=new E,o="cdk-text-field-autofilled",p=R=>{R.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>a.next({target:R.target,isAutofilled:!0}))):R.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>a.next({target:R.target,isAutofilled:!1})))},A=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",p,va)));return this._monitoredElements.set(t,{subject:a,unlisten:A}),a}stopMonitoring(e){let t=wt(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=U({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var gi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({})}return i})();var ot=new I("MAT_INPUT_VALUE_ACCESSOR");var bi=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=U({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var st=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(r,e,t,n,a){this._defaultMatcher=r,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=a}updateErrorState(){let r=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,a=t?.isErrorState(n,e)??!1;a!==r&&(this.errorState=a,this._stateChanges.next())}};var ya=["button","checkbox","file","hidden","image","radio","range","reset","submit"],xa=new I("MAT_INPUT_CONFIG"),vi=(()=>{class i{_elementRef=c($);_platform=c(ce);ngControl=c(Ct,{optional:!0,self:!0});_autofillMonitor=c(_i);_ngZone=c(Y);_formField=c(Ne,{optional:!0});_renderer=c(de);_uid=c(le).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(xa,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new E;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=we(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(tt.required)??!1}set required(e){this._required=we(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&At().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=we(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>At().has(e));constructor(){let e=c(Oe,{optional:!0}),t=c(Dt,{optional:!0}),n=c(bi),a=c(ot,{optional:!0,self:!0}),o=this._elementRef.nativeElement,p=o.nodeName.toLowerCase();a?cn(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new st(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=p==="select",this._isTextarea=p==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ke(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ya.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&v("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(ee("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),T("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),w("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae]},exportAs:["matInput"],features:[te([{provide:at,useExisting:i}]),se]})}return i})(),yi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({imports:[Be,Be,gi,De]})}return i})();var ze=new I("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>c(fn)}),Me="Method not implemented",k=class{locale;_localeChanges=new E;localeChanges=this._localeChanges;setTime(r,e,t,n){throw new Error(Me)}getHours(r){throw new Error(Me)}getMinutes(r){throw new Error(Me)}getSeconds(r){throw new Error(Me)}parseTime(r,e){throw new Error(Me)}addSeconds(r,e){throw new Error(Me)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),n=this.isValid(e);return t&&n?!this.compareDate(r,e):t==n}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),n=this.isValid(e);return t&&n?!this.compareTime(r,e):t==n}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}},re=new I("mat-date-formats");var Da=["mat-calendar-body",""];function wa(i,r){return this._trackRow(r)}var Si=(i,r)=>r.id;function Ma(i,r){if(i&1&&(K(0,"tr",0)(1,"td",3),m(2),Z()()),i&2){let e=u();s(),Je("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),T("colspan",e.numCols),s(),P(" ",e.label," ")}}function Aa(i,r){if(i&1&&(K(0,"td",3),m(1),Z()),i&2){let e=u(2);Je("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),T("colspan",e._firstRowOffset),s(),P(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Ea(i,r){if(i&1){let e=V();K(0,"td",6)(1,"button",7),mn("click",function(n){let a=_(e).$implicit,o=u(2);return g(o._cellClicked(a,n))})("focus",function(n){let a=_(e).$implicit,o=u(2);return g(o._emitActiveDateChange(a,n))}),K(2,"span",8),m(3),Z(),Ve(4,"span",9),Z()()}if(i&2){let e=r.$implicit,t=r.$index,n=u().$index,a=u();Je("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),T("data-mat-row",n)("data-mat-col",t),s(),Xe(e.cssClasses),w("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(n,t))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,n,t))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,n,t))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),ee("tabIndex",a._isActiveCell(n,t)?0:-1),T("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),s(),w("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),s(),P(" ",e.displayValue," ")}}function Sa(i,r){if(i&1&&(K(0,"tr",1),h(1,Aa,2,6,"td",4),q(2,Ea,5,49,"td",5,Si),Z()),i&2){let e=r.$implicit,t=r.$index,n=u();s(),f(t===0&&n._firstRowOffset?1:-1),s(),H(e)}}function ka(i,r){if(i&1&&(l(0,"th",2)(1,"span",6),m(2),d(),l(3,"span",3),m(4),d()()),i&2){let e=r.$implicit;s(2),x(e.long),s(2),x(e.narrow)}}var Ia=["*"];function Fa(i,r){}function Ta(i,r){if(i&1){let e=V();l(0,"mat-month-view",4),N("activeDateChange",function(n){_(e);let a=u();return L(a.activeDate,n)||(a.activeDate=n),g(n)}),v("_userSelection",function(n){_(e);let a=u();return g(a._dateSelected(n))})("dragStarted",function(n){_(e);let a=u();return g(a._dragStarted(n))})("dragEnded",function(n){_(e);let a=u();return g(a._dragEnded(n))}),d()}if(i&2){let e=u();O("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Va(i,r){if(i&1){let e=V();l(0,"mat-year-view",5),N("activeDateChange",function(n){_(e);let a=u();return L(a.activeDate,n)||(a.activeDate=n),g(n)}),v("monthSelected",function(n){_(e);let a=u();return g(a._monthSelectedInYearView(n))})("selectedChange",function(n){_(e);let a=u();return g(a._goToDateInView(n,"month"))}),d()}if(i&2){let e=u();O("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Pa(i,r){if(i&1){let e=V();l(0,"mat-multi-year-view",6),N("activeDateChange",function(n){_(e);let a=u();return L(a.activeDate,n)||(a.activeDate=n),g(n)}),v("yearSelected",function(n){_(e);let a=u();return g(a._yearSelectedInMultiYearView(n))})("selectedChange",function(n){_(e);let a=u();return g(a._goToDateInView(n,"year"))}),d()}if(i&2){let e=u();O("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Ra(i,r){}var Oa=["button"],La=[[["","matDatepickerToggleIcon",""]]],Na=["[matDatepickerToggleIcon]"];function Ba(i,r){i&1&&(Te(),l(0,"svg",2),S(1,"path",3),d())}var Ie=(()=>{class i{changes=new E;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=U({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),za=0,He=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=za++;cssClasses;constructor(r,e,t,n,a,o=r,p){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=n,this.compareValue=o,this.rawValue=p,this.cssClasses=a instanceof Set?Array.from(a):a}},Ya={passive:!1,capture:!0},lt={passive:!0,capture:!0},xi={passive:!0},ke=(()=>{class i{_elementRef=c($);_ngZone=c(Y);_platform=c(ce);_intl=c(Ie);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new y;previewChange=new y;activeDateChange=new y;dragStarted=new y;dragEnded=new y;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=c(Ue);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=c(de),t=c(le);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),c(he).load(ti),this._ngZone.runOutsideAngular(()=>{let n=this._elementRef.nativeElement,a=[e.listen(n,"touchmove",this._touchmoveHandler,Ya),e.listen(n,"mouseenter",this._enterHandler,lt),e.listen(n,"focus",this._enterHandler,lt),e.listen(n,"mouseleave",this._leaveHandler,lt),e.listen(n,"blur",this._leaveHandler,lt),e.listen(n,"mousedown",this._mousedownHandler,xi),e.listen(n,"touchstart",this._mousedownHandler,xi)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:n,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=n&&n.length&&n[0].length?a-n[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let n=e*this.numCols+t;return e&&(n-=this._firstRowOffset),n==this.activeCell}_focusActiveCell(e=!0){bt(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Lt(e,this.startValue,this.endValue)}_isRangeEnd(e){return Nt(e,this.startValue,this.endValue)}_isInRange(e){return Bt(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Lt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,n){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][n-1];if(!a){let o=this.rows[t-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,n){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][n+1];if(!a){let o=this.rows[t+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return Nt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Bt(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Lt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Nt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Bt(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ci(e),n=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Ot(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:n?.enabled?n:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Ot(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let n=this._getCellFromElement(t);this.dragEnded.emit({value:n?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Ci(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Ot(e);if(t){let n=t.getAttribute("data-mat-row"),a=t.getAttribute("data-mat-col");if(n&&a)return this.rows[parseInt(n)]?.[parseInt(a)]||null}return null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[se],attrs:Da,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,n){t&1&&(h(0,Ma,3,6,"tr",0),q(1,Sa,4,1,"tr",1,wa,!0),K(3,"span",2),m(4),Z(),K(5,"span",2),m(6),Z(),K(7,"span",2),m(8),Z(),K(9,"span",2),m(10),Z()),t&2&&(f(n._firstRowOffset<n.labelMinRequiredCells?0:-1),s(),H(n.rows),s(2),ee("id",n._startDateLabelId),s(),P(" ",n.startDateAccessibleName,`
`),s(),ee("id",n._endDateLabelId),s(),P(" ",n.endDateAccessibleName,`
`),s(),ee("id",n._comparisonStartDateLabelId),s(),Ce(" ",n.comparisonDateAccessibleName," ",n.startDateAccessibleName,`
`),s(),ee("id",n._comparisonEndDateLabelId),s(),Ce(" ",n.comparisonDateAccessibleName," ",n.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Rt(i){return i?.nodeName==="TD"}function Ot(i){let r;return Rt(i)?r=i:Rt(i.parentNode)?r=i.parentNode:Rt(i.parentNode?.parentNode)&&(r=i.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function Lt(i,r,e){return e!==null&&r!==e&&i<e&&i===r}function Nt(i,r,e){return r!==null&&r!==e&&i>=r&&i===e}function Bt(i,r,e,t){return t&&r!==null&&e!==null&&r!==e&&i>=r&&i<=e}function Ci(i){let r=i.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var X=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}},je=(()=>{class i{selection;_adapter;_selectionChanged=new E;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let n=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:n})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){ln()};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})(),qa=(()=>{class i extends je{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||i)(rn(k))};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})();var ki={provide:je,useFactory:()=>c(je,{optional:!0,skipSelf:!0})||new qa(c(k))};var Ii=new I("MAT_DATE_RANGE_SELECTION_STRATEGY");var zt=7,Ha=0,Di=(()=>{class i{_changeDetectorRef=c(W);_dateFormats=c(re,{optional:!0});_dateAdapter=c(k,{optional:!0});_dir=c(fe,{optional:!0});_rangeStrategy=c(Ii,{optional:!0});_rerenderSubscription=Q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof X?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new y;_userSelection=new y;dragStarted=new y;dragEnded=new y;activeDateChange=new y;_matCalendarBody;_monthLabel=M("");_weeks=M([]);_firstWeekOffset=M(0);_rangeStart=M(null);_rangeEnd=M(null);_comparisonRangeStart=M(null);_comparisonRangeEnd=M(null);_previewStart=M(null);_previewEnd=M(null);_isRange=M(!1);_todayDate=M(null);_weekdays=M([]);constructor(){c(he).load(nt),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ye(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,n=this._getDateFromDayOfMonth(t),a,o;this._selected instanceof X?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==t||o!==t)&&this.selectedChange.emit(n),this._userSelection.emit({value:n,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!_e(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((zt+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%zt),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let n=t?t.rawValue:null,a=this._rangeStrategy.createPreview(n,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&n){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,n,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((o,p)=>({long:o,narrow:t[p],id:Ha++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),n=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==zt&&(n.push([]),o=0);let p=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),A=this._shouldEnableDate(p),R=this._dateAdapter.format(p,this._dateFormats.display.dateA11yLabel),Fe=this.dateClass?this.dateClass(p,"month"):void 0;n[n.length-1].push(new He(a+1,t[a],R,A,Fe,this._getCellCompareValue(p),p))}this._weeks.set(n)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),n=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,n,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof X?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-month-view"]],viewQuery:function(t,n){if(t&1&&J(ke,5),t&2){let a;C(a=D())&&(n._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[se],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,n){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),q(3,ka,5,2,"th",2,Si),d(),l(5,"tr",3),S(6,"th",4),d()(),l(7,"tbody",5),v("selectedValueChange",function(o){return n._dateSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("previewChange",function(o){return n._previewChanged(o)})("dragStarted",function(o){return n.dragStarted.emit(o)})("dragEnded",function(o){return n._dragEnded(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),d()()),t&2&&(s(3),H(n._weekdays()),s(4),b("label",n._monthLabel())("rows",n._weeks())("todayValue",n._todayDate())("startValue",n._rangeStart())("endValue",n._rangeEnd())("comparisonStart",n._comparisonRangeStart())("comparisonEnd",n._comparisonRangeEnd())("previewStart",n._previewStart())("previewEnd",n._previewEnd())("isRange",n._isRange())("labelMinRequiredCells",3)("activeCell",n._dateAdapter.getDate(n.activeDate)-1)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName))},dependencies:[ke],encapsulation:2,changeDetection:0})}return i})(),G=24,Yt=4,wi=(()=>{class i{_changeDetectorRef=c(W);_dateAdapter=c(k,{optional:!0});_dir=c(fe,{optional:!0});_rerenderSubscription=Q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),Fi(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof X?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new y;yearSelected=new y;activeDateChange=new y;_matCalendarBody;_years=M([]);_todayYear=M(0);_selectedYear=M(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ye(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Ye(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),n=[];for(let a=0,o=[];a<G;a++)o.push(t+a),o.length==Yt&&(n.push(o.map(p=>this._createCellForYear(p))),o=[]);this._years.set(n),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,n=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(n),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Yt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Yt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ye(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,G-Ye(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-G*10:-G);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?G*10:G);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Ye(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),n=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),n=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new He(e,n,n,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let n=t;this._dateAdapter.getYear(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof X){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(t,n){if(t&1&&J(ke,5),t&2){let a;C(a=D())&&(n._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),S(3,"th",2),d()(),l(4,"tbody",3),v("selectedValueChange",function(o){return n._yearSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),d()()),t&2&&(s(4),b("rows",n._years())("todayValue",n._todayYear())("startValue",n._selectedYear())("endValue",n._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",n._getActiveCell()))},dependencies:[ke],encapsulation:2,changeDetection:0})}return i})();function Fi(i,r,e,t,n){let a=i.getYear(r),o=i.getYear(e),p=Ti(i,t,n);return Math.floor((a-p)/G)===Math.floor((o-p)/G)}function Ye(i,r,e,t){let n=i.getYear(r);return ja(n-Ti(i,e,t),G)}function Ti(i,r,e){let t=0;return e?t=i.getYear(e)-G+1:r&&(t=i.getYear(r)),t}function ja(i,r){return(i%r+r)%r}var Mi=(()=>{class i{_changeDetectorRef=c(W);_dateFormats=c(re,{optional:!0});_dateAdapter=c(k,{optional:!0});_dir=c(fe,{optional:!0});_rerenderSubscription=Q.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof X?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new y;monthSelected=new y;activeDateChange=new y;_matCalendarBody;_months=M([]);_yearLabel=M("");_todayMonth=M(null);_selectedMonth=M(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ye(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(n);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(n=>this._createCellForMonth(n,e[n])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForMonth(e,t){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(n,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(n,"year"):void 0;return new He(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(t,e,1);for(let a=n;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let n=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>n||e===n&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let n=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<n||e===n&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof X?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-year-view"]],viewQuery:function(t,n){if(t&1&&J(ke,5),t&2){let a;C(a=D())&&(n._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),S(3,"th",2),d()(),l(4,"tbody",3),v("selectedValueChange",function(o){return n._monthSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),d()()),t&2&&(s(4),b("label",n._yearLabel())("rows",n._months())("todayValue",n._todayMonth())("startValue",n._selectedMonth())("endValue",n._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",n._dateAdapter.getMonth(n.activeDate)))},dependencies:[ke],encapsulation:2,changeDetection:0})}return i})(),Vi=(()=>{class i{_intl=c(Ie);calendar=c(qt);_dateAdapter=c(k,{optional:!0});_dateFormats=c(re,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){c(he).load(nt);let e=c(W);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-G))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:G))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,n=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=n.getYearName(e.activeDate),this._periodButtonDescription=n.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Fi(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Ye(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),n=t+G-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1));return[a,o]}_periodButtonLabelId=c(le).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Ia,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,n){t&1&&(xe(),l(0,"div",0)(1,"div",1)(2,"span",2),m(3),d(),l(4,"button",3),v("click",function(){return n.currentPeriodClicked()}),l(5,"span",4),m(6),d(),Te(),l(7,"svg",5),S(8,"polygon",6),d()(),_t(),S(9,"div",7),j(10),l(11,"button",8),v("click",function(){return n.previousClicked()}),Te(),l(12,"svg",9),S(13,"path",10),d()(),_t(),l(14,"button",11),v("click",function(){return n.nextClicked()}),Te(),l(15,"svg",9),S(16,"path",12),d()()()()),t&2&&(s(2),b("id",n._periodButtonLabelId),s(),x(n.periodButtonDescription),s(),T("aria-label",n.periodButtonLabel)("aria-describedby",n._periodButtonLabelId),s(2),x(n.periodButtonText),s(),w("mat-calendar-invert",n.calendar.currentView!=="month"),s(4),b("disabled",!n.previousEnabled())("matTooltip",n.prevButtonLabel),T("aria-label",n.prevButtonLabel),s(3),b("disabled",!n.nextEnabled())("matTooltip",n.nextButtonLabel),T("aria-label",n.nextButtonLabel))},dependencies:[It,kt,ei],encapsulation:2,changeDetection:0})}return i})(),qt=(()=>{class i{_dateAdapter=c(k,{optional:!0});_dateFormats=c(re,{optional:!0});_changeDetectorRef=c(W);_elementRef=c($);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof X?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new y;yearSelected=new y;monthSelected=new y;viewChanged=new y(!0);_userSelection=new y;_userDragDrop=new y;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new E;constructor(){this._intlChanges=c(Ie).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Et(this.headerComponent||Vi),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,n=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||n||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(Mt())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof X||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-calendar"]],viewQuery:function(t,n){if(t&1&&J(Di,5)(Mi,5)(wi,5),t&2){let a;C(a=D())&&(n.monthView=a.first),C(a=D())&&(n.yearView=a.first),C(a=D())&&(n.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[te([ki]),se],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,n){if(t&1&&(pe(0,Fa,0,0,"ng-template",0),l(1,"div",1),h(2,Ta,1,11,"mat-month-view",2)(3,Va,1,6,"mat-year-view",3)(4,Pa,1,6,"mat-multi-year-view",3),d()),t&2){let a;b("cdkPortalOutlet",n._calendarHeaderPortal),s(2),f((a=n.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[St,zn,Di,Mi,wi],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),$a=new I("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(Ue);return()=>Gn(i)}}),Pi=(()=>{class i{_elementRef=c($);_animationsDisabled=Le();_changeDetectorRef=c(W);_globalModel=c(je);_dateAdapter=c(k);_ngZone=c(Y);_rangeSelectionStrategy=c(Ii,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new E;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(c(he).load(nt),this._closeButtonText=c(Ie).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=c(de);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,n=e.value,a=t instanceof X;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(n,t,e.event);this._model.updateSelection(o,this)}else n&&(a||!this._dateAdapter.sameDate(n,t))&&this._model.add(n);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(t,n){if(t&1&&J(qt,5),t&2){let a;C(a=D())&&(n._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Xe(n.color?"mat-"+n.color:""),w("mat-datepicker-content-touch",n.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!n._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"mat-calendar",1),v("yearSelected",function(o){return n.datepicker._selectYear(o)})("monthSelected",function(o){return n.datepicker._selectMonth(o)})("viewChanged",function(o){return n.datepicker._viewChanged(o)})("_userSelection",function(o){return n._handleUserSelection(o)})("_userDragDrop",function(o){return n._handleUserDragDrop(o)}),d(),pe(2,Ra,0,0,"ng-template",2),l(3,"button",3),v("focus",function(){return n._closeButtonFocused=!0})("blur",function(){return n._closeButtonFocused=!1})("click",function(){return n.datepicker.close()}),m(4),d()()),t&2&&(w("mat-datepicker-content-container-with-custom-header",n.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",n._actionsPortal),T("aria-modal",!0)("aria-labelledby",n._dialogLabelId??void 0),s(),Xe(n.datepicker.panelClass),b("id",n.datepicker.id)("startAt",n.datepicker.startAt)("startView",n.datepicker.startView)("minDate",n.datepicker._getMinDate())("maxDate",n.datepicker._getMaxDate())("dateFilter",n.datepicker._getDateFilter())("headerComponent",n.datepicker.calendarHeaderComponent)("selected",n._getSelected())("dateClass",n.datepicker.dateClass)("comparisonStart",n.comparisonStart)("comparisonEnd",n.comparisonEnd)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName),s(),b("cdkPortalOutlet",n._actionsPortal),s(),w("cdk-visually-hidden",!n._closeButtonFocused),b("color",n.color||"primary"),s(),x(n._closeButtonText))},dependencies:[qn,qt,St,It],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return i})(),Ai=(()=>{class i{_injector=c(Ue);_viewContainerRef=c(dn);_dateAdapter=c(k,{optional:!0});_dir=c(fe,{optional:!0});_model=c(je);_animationsDisabled=Le();_scrollStrategy=c($a);_inputStateChanges=Q.EMPTY;_document=c(gt);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new y;monthSelected=new y;viewChanged=new y(!0);dateClass;openedStream=new y;closedStream=new y;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Bn(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=c(le).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new E;_changeDetectorRef=c(W);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let n=this._overlayRef.getConfig().positionStrategy;n instanceof Kn&&(this._setConnectedPositions(n),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Mt(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:n,location:a}=this._componentRef;n._animationDone.pipe(tn(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||a.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),n._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Et(Pi,this._viewContainerRef),n=this._overlayRef=Jn(this._injector,new Qn({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Wn(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(n).subscribe(a=>{a&&a.preventDefault(),this.close()}),n.keydownEvents().subscribe(a=>{let o=a.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&a.preventDefault()}),this._componentRef=n.attach(t),this._forwardContentValues(this._componentRef.instance),e||bt(()=>{n.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Zn(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Un(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",n=t==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",o=a==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:a},{originX:t,originY:a,overlayX:t,overlayY:o},{originX:n,originY:o,overlayX:n,overlayY:a},{originX:n,originY:a,overlayX:n,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return be(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(ve(n=>n.keyCode===27&&!_e(n)||this.datepickerInput&&_e(n,"altKey")&&n.keyCode===38&&t.every(a=>!_e(n,a)))))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",ae],disabled:[2,"disabled","disabled",ae],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",ae],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",ae]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[se]})}return i})(),Ri=(()=>{class i extends Ai{static \u0275fac=(()=>{let e;return function(n){return(e||(e=on(i)))(n||i)}})();static \u0275cmp=F({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[te([ki,{provide:Ai,useExisting:i}]),vt],decls:0,vars:0,template:function(t,n){},encapsulation:2,changeDetection:0})}return i})(),Ae=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}},Wa=(()=>{class i{_elementRef=c($);_dateAdapter=c(k,{optional:!0});_dateFormats=c(re,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,n=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&n.blur&&n.blur()}_disabled;dateChange=new y;dateInput=new y;stateChanges=new E;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=Q.EMPTY;_localeSubscription=Q.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._getMinDate();return!n||!t||this._dateAdapter.compareDate(n,t)<=0?null:{matDatepickerMin:{min:n,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._getMaxDate();return!n||!t||this._dateAdapter.compareDate(n,t)>=0?null:{matDatepickerMax:{max:n,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let n=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(n),this._cvaOnChange(n),this._onTouched(),this._formatValue(n),this.dateInput.emit(new Ae(this,this._elementRef.nativeElement)),this.dateChange.emit(new Ae(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){Ga(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];_e(e,"altKey")&&e.keyCode===40&&t.every(a=>!_e(e,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,n=this._lastValueValid,a=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let o=!this._dateAdapter.sameDate(a,this.value);!a||o?this._cvaOnChange(a):(t&&!this.value&&this._cvaOnChange(a),n!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(a),this.dateInput.emit(new Ae(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Ae(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",ae]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[se]})}return i})();function Ga(i,r){let e=Object.keys(i);for(let t of e){let{previousValue:n,currentValue:a}=i[t];if(r.isDateInstance(n)&&r.isDateInstance(a)){if(!r.sameDate(n,a))return!0}else return!0}return!1}var Qa={provide:An,useExisting:ft(()=>pt),multi:!0},Ua={provide:Sn,useExisting:ft(()=>pt),multi:!0},pt=(()=>{class i extends Wa{_formField=c(Ne,{optional:!0});_closedSubscription=Q.EMPTY;_openedSubscription=Q.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=M(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=tt.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,n){t&1&&v("input",function(o){return n._onInput(o)})("change",function(){return n._onChange()})("blur",function(){return n._onBlur()})("keydown",function(o){return n._onKeydown(o)}),t&2&&(ee("disabled",n.disabled),T("aria-haspopup",n._datepicker?"dialog":null)("aria-owns",n._ariaOwns())("min",n.min?n._dateAdapter.toIso8601(n.min):null)("max",n.max?n._dateAdapter.toIso8601(n.max):null)("data-mat-calendar",n._datepicker?n._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[te([Qa,Ua,{provide:ot,useExisting:i}]),vt]})}return i})(),Ka=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=z({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),$t=(()=>{class i{_intl=c(Ie);_changeDetectorRef=c(W);_stateChanges=Q.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=c(new _n("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Ge(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Ge(),n=this.datepicker?be(this.datepicker.openedStream,this.datepicker.closedStream):Ge();this._stateChanges.unsubscribe(),this._stateChanges=be(this._intl.changes,e,t,n).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,n,a){if(t&1&&Ze(a,Ka,5),t&2){let o;C(o=D())&&(n._customIcon=o.first)}},viewQuery:function(t,n){if(t&1&&J(Oa,5),t&2){let a;C(a=D())&&(n._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,n){t&1&&v("click",function(o){return n._open(o)}),t&2&&(T("tabindex",null)("data-mat-calendar",n.datepicker?n.datepicker.id:null),w("mat-datepicker-toggle-active",n.datepicker&&n.datepicker.opened)("mat-accent",n.datepicker&&n.datepicker.color==="accent")("mat-warn",n.datepicker&&n.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",ae],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[se],ngContentSelectors:Na,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,n){t&1&&(xe(La),l(0,"button",1,0),h(2,Ba,2,0,":svg:svg",2),j(3),d()),t&2&&(b("tabIndex",n.disabled?-1:n.tabIndex)("disabled",n.disabled)("disableRipple",n.disableRipple),T("aria-haspopup",n.datepicker?"dialog":null)("aria-label",n.ariaLabel||n._intl.openCalendarLabel)("aria-expanded",n.datepicker?n.datepicker.opened:null),s(2),f(n._customIcon?-1:2))},dependencies:[kt],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Oi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({providers:[Ie],imports:[ni,Xn,Hn,$n,Pi,$t,Vi,De,jn]})}return i})();var Ja=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Xa=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Wt(i,r){let e=Array(i);for(let t=0;t<i;t++)e[t]=r(t);return e}var Qt=(()=>{class i extends k{_matDateLocale=c(ze,{optional:!0});constructor(){super();let e=c(ze,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Wt(12,n=>this._format(t,new Date(2017,n,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Wt(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Wt(7,n=>this._format(t,new Date(2017,0,n+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,n){let a=this._createDateWithOverflow(e,t,n);return a.getMonth()!=t,a}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let n=new Intl.DateTimeFormat(this.locale,Zt(Kt({},t),{timeZone:"utc"}));return this._format(n,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let n=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(n)!=((this.getMonth(e)+t)%12+12)%12&&(n=this._createDateWithOverflow(this.getYear(n),this.getMonth(n),0)),n}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(Ja.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,n,a){let o=this.clone(e);return o.setHours(t,n,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let n=e.trim();if(n.length===0)return null;let a=this._parseTimeString(n);if(a===null){let o=n.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,n){let a=new Date;return a.setFullYear(e,t,n),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let n=new Date;return n.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(n)}_parseTimeString(e){let t=e.toUpperCase().match(Xa);if(t){let n=parseInt(t[1]),a=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),p=t[4];if(n===12?n=p==="AM"?0:n:p==="PM"&&(n+=12),Gt(n,0,23)&&Gt(a,0,59)&&(o==null||Gt(o,0,59)))return this.setTime(this.today(),n,a,o||0)}return null}static \u0275fac=function(t){return new(t||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})();function Gt(i,r,e){return!isNaN(i)&&i>=r&&i<=e}var er={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var Li=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ie({type:i});static \u0275inj=ne({providers:[tr()]})}return i})();function tr(i=er){return[{provide:k,useClass:Qt},{provide:re,useValue:i}]}var nr=["adminPwd"],ir=(i,r)=>r.equipe,ar=(i,r)=>r.nomRecherche,rr=(i,r)=>r.email,Bi=(i,r)=>r.journee,zi=(i,r)=>r.code;function or(i,r){if(i&1&&(l(0,"p",5),m(1),d()),i&2){let e=u(2);s(),x(e.adminErrorMessage)}}function sr(i,r){if(i&1){let e=V();l(0,"div",3)(1,"p"),m(2,"Connexion administrateur requise."),d(),h(3,or,2,1,"p",5),l(4,"form",6),v("ngSubmit",function(){_(e);let n=u();return g(n.loginAdmin())}),l(5,"input",7,0),N("ngModelChange",function(n){_(e);let a=u();return L(a.adminPassword,n)||(a.adminPassword=n),g(n)}),d(),l(7,"button",8),m(8,"Se connecter"),d()()()}if(i&2){let e=u();s(3),f(e.adminErrorMessage?3:-1),s(2),O("ngModel",e.adminPassword)}}function lr(i,r){if(i&1&&(l(0,"option",12),m(1),d()),i&2){let e=r.$implicit;b("ngValue",e),s(),Ce("",e,"-",e+1)}}function dr(i,r){if(i&1&&m(0),i&2){let e=u(2);Ce(" (",e.nbDatesEnregistrees,"/",e.nbJourneesAttendues,") ")}}function cr(i,r){if(i&1&&(l(0,"p",19),m(1),d()),i&2){let e=u(3);s(),x(e.messageGlobal)}}function mr(i,r){if(i&1&&(l(0,"tr")(1,"td"),m(2),d(),l(3,"td"),m(4),d(),l(5,"td"),m(6),d()()),i&2){let e=r.$implicit;w("ok",e.statut==="cr\xE9\xE9e")("existante",e.statut==="existante")("erreur",e.statut==="erreur"),s(2),x(e.equipe),s(2),x(e.statut),s(2),x(e.message)}}function ur(i,r){if(i&1&&(l(0,"table",23)(1,"thead")(2,"tr")(3,"th"),m(4,"\xC9quipe"),d(),l(5,"th"),m(6,"Statut"),d(),l(7,"th"),m(8,"D\xE9tail"),d()()(),l(9,"tbody"),q(10,mr,7,9,"tr",24,ir),d()()),i&2){let e=u(3);s(10),H(e.resultats)}}function pr(i,r){i&1&&(l(0,"span",30),m(1,"Enregistr\xE9"),d())}function hr(i,r){if(i&1){let e=V();l(0,"button",14),v("click",function(){_(e);let n=u().$index,a=u(4);return g(a.enregistrerGymnase(n))}),m(1,"Enregistrer"),d()}}function fr(i,r){if(i&1&&(l(0,"div",5),m(1),d()),i&2){let e=u().$implicit;s(),x(e.erreur)}}function _r(i,r){if(i&1){let e=V();l(0,"tr")(1,"td"),m(2),d(),l(3,"td")(4,"input",28),N("ngModelChange",function(n){let a=_(e).$implicit;return L(a.nomGymnase,n)||(a.nomGymnase=n),g(n)}),d()(),l(5,"td")(6,"input",28),N("ngModelChange",function(n){let a=_(e).$implicit;return L(a.adresse,n)||(a.adresse=n),g(n)}),d()(),l(7,"td")(8,"input",28),N("ngModelChange",function(n){let a=_(e).$implicit;return L(a.commune,n)||(a.commune=n),g(n)}),d()(),l(9,"td")(10,"input",29),N("ngModelChange",function(n){let a=_(e).$implicit;return L(a.x,n)||(a.x=n),g(n)}),d()(),l(11,"td")(12,"input",29),N("ngModelChange",function(n){let a=_(e).$implicit;return L(a.y,n)||(a.y=n),g(n)}),d()(),l(13,"td"),h(14,pr,2,0,"span",30)(15,hr,2,0,"button",31),h(16,fr,2,1,"div",5),d()()}if(i&2){let e=r.$implicit;w("ok",e.enregistre)("erreur",!e.enregistre),s(2),x(e.nomRecherche),s(2),O("ngModel",e.nomGymnase),b("disabled",e.enregistre),s(2),O("ngModel",e.adresse),b("disabled",e.enregistre),s(2),O("ngModel",e.commune),b("disabled",e.enregistre),s(2),O("ngModel",e.x),b("disabled",e.enregistre),s(2),O("ngModel",e.y),b("disabled",e.enregistre),s(2),f(e.enregistre?14:15),s(2),f(e.erreur?16:-1)}}function gr(i,r){if(i&1&&(l(0,"h3",25),m(1),d(),l(2,"p",18),m(3," Aucun gymnase trouv\xE9 pour ces \xE9quipes. Saisissez les informations puis cliquez sur "),l(4,"b"),m(5,"Enregistrer"),d(),m(6," pour cr\xE9er le gymnase et rattacher les \xE9quipes. "),d(),l(7,"table",26)(8,"thead")(9,"tr")(10,"th"),m(11,"Nom_Equipe"),d(),l(12,"th"),m(13,"Nom du gymnase"),d(),l(14,"th"),m(15,"Adresse"),d(),l(16,"th"),m(17,"Commune"),d(),l(18,"th"),m(19,"X"),d(),l(20,"th"),m(21,"Y"),d(),S(22,"th"),d()(),l(23,"tbody"),q(24,_r,17,17,"tr",27,ar),d()()),i&2){let e=u(3);s(),P("Gymnases manquants (",e.gymnasesManquants.length,")"),s(23),H(e.gymnasesManquants)}}function br(i,r){if(i&1&&(l(0,"code"),m(1),d()),i&2){let e=u().$implicit;s(),x(e.motDePasse)}}function vr(i,r){i&1&&(l(0,"span",18),m(1,"\u2014"),d())}function yr(i,r){if(i&1){let e=V();l(0,"tr")(1,"td"),m(2),d(),l(3,"td"),h(4,br,2,1,"code")(5,vr,2,0,"span",18),d(),l(6,"td")(7,"button",34),v("click",function(){let n=_(e).$implicit,a=u(4);return g(a.envoyerMailCapitaine(n))}),m(8,"\u2709 Envoyer"),d()()()}if(i&2){let e=r.$implicit;s(2),x(e.equipe),s(2),f(e.motDePasse?4:5),s(3),b("disabled",!e.mailCapitaine)("title",e.mailCapitaine||"Aucune adresse e-mail")}}function xr(i,r){if(i&1){let e=V();l(0,"h3",25),m(1,"Identifiants des \xE9quipes cr\xE9\xE9es"),d(),l(2,"p",18),m(3,"Conservez ces mots de passe : ils ne seront plus affich\xE9s ensuite."),d(),l(4,"div",21)(5,"button",32),v("click",function(){_(e);let n=u(3);return g(n.copierIdentifiants())}),m(6,"Copier la liste"),d()(),l(7,"table",33)(8,"thead")(9,"tr")(10,"th"),m(11,"\xC9quipe"),d(),l(12,"th"),m(13,"Mot de passe"),d(),l(14,"th"),m(15,"Envoi"),d()()(),l(16,"tbody"),q(17,yr,9,4,"tr",null,rr),d()()}if(i&2){let e=u(3);s(17),H(e.identifiantsEquipes)}}function Cr(i,r){if(i&1){let e=V();l(0,"p",18),m(1," Copiez le tableau (depuis Excel/Sheets) avec les colonnes : "),l(2,"b"),m(3,"Poule, Equipe, Pr\xE9nom capitaine, Nom capitaine, Mail capitaine, Gymnase, Jour match, Horaire match"),d(),m(4," puis collez-le ci-dessous. "),d(),l(5,"textarea",20),N("ngModelChange",function(n){_(e);let a=u(2);return L(a.texteColle,n)||(a.texteColle=n),g(n)}),d(),l(6,"div",21)(7,"button",22),v("click",function(){_(e);let n=u(2);return g(n.lancerImport())}),m(8),d()(),h(9,cr,2,1,"p",19),h(10,ur,12,0,"table",23),h(11,gr,26,1),h(12,xr,19,0)}if(i&2){let e=u(2);s(5),O("ngModel",e.texteColle),s(2),b("disabled",e.enCours),s(),P(" ",e.enCours?"Import en cours...":"Lancer l'import"," "),s(),f(e.messageGlobal?9:-1),s(),f(e.resultats.length>0?10:-1),s(),f(e.gymnasesManquants.length>0?11:-1),s(),f(e.identifiantsEquipes.length>0?12:-1)}}function Dr(i,r){if(i&1&&(l(0,"p",18),m(1," Journ\xE9es attendues : "),l(2,"strong"),m(3),d(),m(4),l(5,"strong"),m(6),d(),m(7,". "),d()),i&2){let e=u(3);s(3),x(e.nbJourneesAttendues),s(),P(" (poule la plus fournie : ",e.nbEquipesMax," \xE9quipes) \u2014 dates renseign\xE9es : "),s(2),x(e.nbDatesRenseignees)}}function wr(i,r){if(i&1){let e=V();l(0,"tr")(1,"td"),m(2),d(),l(3,"td")(4,"mat-form-field",37)(5,"input",38),N("ngModelChange",function(n){let a=_(e).$implicit;return L(a.date,n)||(a.date=n),g(n)}),d(),S(6,"mat-datepicker-toggle",39)(7,"mat-datepicker",40,1),d()()()}if(i&2){let e=r.$implicit,t=r.$index,n=Pe(8),a=u(3);s(2),x(e.journee),s(3),b("matDatepicker",n),O("ngModel",e.date),s(),b("for",n),s(),b("startAt",a.dateDebutPour(t))}}function Mr(i,r){if(i&1&&(l(0,"p",19),m(1),d()),i&2){let e=u(3);s(),x(e.datesMessage)}}function Ar(i,r){if(i&1){let e=V();l(0,"h3",25),m(1),d(),l(2,"p",18),m(3,"Ajustez les dates propos\xE9es puis enregistrez."),d(),h(4,Dr,8,3,"p",18),l(5,"table",35)(6,"thead")(7,"tr")(8,"th"),m(9,"Journ\xE9e"),d(),l(10,"th"),m(11,"Date"),d()()(),l(12,"tbody"),q(13,wr,9,5,"tr",null,Bi),d()(),l(15,"div",21)(16,"button",36),v("click",function(){_(e);let n=u(2);return g(n.enregistrerDates())}),m(17),d()(),h(18,Mr,2,1,"p",19)}if(i&2){let e=u(2);s(),P("Dates des journ\xE9es \u2014 saison ",e.saison),s(3),f(e.nbJourneesAttendues>0?4:-1),s(9),H(e.dates),s(3),b("disabled",e.datesEnCours),s(),P(" ",e.datesEnCours?"Enregistrement...":"Enregistrer les dates"," "),s(),f(e.datesMessage?18:-1)}}function Er(i,r){if(i&1&&(l(0,"option",44),m(1),d()),i&2){let e=r.$implicit;b("value",e),s(),x(e)}}function Sr(i,r){if(i&1&&(l(0,"p",19),m(1),d()),i&2){let e=u(3);s(),x(e.planningMessage)}}function kr(i,r){if(i&1&&(l(0,"th"),m(1),d()),i&2){let e=r.$implicit;s(),x(e.nom)}}function Ir(i,r){if(i&1&&(l(0,"td"),m(1),d()),i&2){let e=r.$implicit,t=u().$implicit,n=u(4);w("dom",n.lieuPour(t.date,e.code)==="D")("ext",n.lieuPour(t.date,e.code)==="E"),s(),P(" ",n.libelleLieu(n.lieuPour(t.date,e.code))," ")}}function Fr(i,r){if(i&1&&(l(0,"tr")(1,"td"),m(2),d(),l(3,"td"),m(4),d(),q(5,Ir,2,5,"td",46,zi),l(7,"td",47),m(8),d()()),i&2){let e=r.$implicit,t=u(4);s(2),x(e.journee),s(2),x(t.formatDate(e.date)),s(),H(t.planningEquipes),s(3),x(t.comptageDomExtJournee(e.date))}}function Tr(i,r){if(i&1&&(l(0,"table",45)(1,"thead")(2,"tr")(3,"th"),m(4,"Journ\xE9e"),d(),l(5,"th"),m(6,"Semaine du"),d(),q(7,kr,2,1,"th",null,zi),l(9,"th"),m(10,"Dom / Ext"),d()()(),l(11,"tbody"),q(12,Fr,9,3,"tr",null,Bi),d()()),i&2){let e=u(3);s(7),H(e.planningEquipes),s(5),H(e.planningDates)}}function Vr(i,r){if(i&1){let e=V();l(0,"h3",25),m(1),d(),l(2,"div",9)(3,"label",41),m(4,"Club :"),d(),l(5,"select",42),N("ngModelChange",function(n){_(e);let a=u(2);return L(a.clubSelectionne,n)||(a.clubSelectionne=n),g(n)}),v("ngModelChange",function(){_(e);let n=u(2);return g(n.chargerPlanningClub())}),l(6,"option",43),m(7,"\u2014 Choisir un club \u2014"),d(),q(8,Er,2,2,"option",44,yt),d()(),h(10,Sr,2,1,"p",19),h(11,Tr,14,0,"table",45)}if(i&2){let e=u(2);s(),P("Planning d'un club \u2014 saison ",e.saison),s(4),O("ngModel",e.clubSelectionne),s(3),H(e.clubs),s(2),f(e.planningMessage?10:-1),s(),f(e.planningEquipes.length>0?11:-1)}}function Pr(i,r){if(i&1&&(l(0,"span",18),m(1),d()),i&2){let e=u(2);s(),P(" Enregistrez exactement ",e.nbJourneesAttendues," date(s) pour pouvoir cr\xE9er le championnat. ")}}function Rr(i,r){if(i&1&&(l(0,"p",19),m(1),d()),i&2){let e=u(2);s(),x(e.championnatMessage)}}function Or(i,r){if(i&1){let e=V();l(0,"div",9)(1,"label",10),m(2,"Saison :"),d(),l(3,"select",11),N("ngModelChange",function(n){_(e);let a=u();return L(a.anneeDebut,n)||(a.anneeDebut=n),g(n)}),v("ngModelChange",function(){_(e);let n=u();return g(n.majSaison())}),q(4,lr,2,3,"option",12,yt),d()(),l(6,"div",13)(7,"button",14),v("click",function(){_(e);let n=u();return g(n.retourEquipes())}),m(8,"1 - \xC9quipes"),d(),l(9,"button",14),v("click",function(){_(e);let n=u();return g(n.allerAuxDates())}),m(10," 2 - Dates "),h(11,dr,1,2),d(),l(12,"button",14),v("click",function(){_(e);let n=u();return g(n.allerAuPlanning())}),m(13,"3 - Planning club"),d(),l(14,"button",14),v("click",function(){_(e);let n=u();return g(n.allerAuxPermutations())}),m(15,"4 - Permutations"),d()(),h(16,Cr,13,7),h(17,Ar,19,5),h(18,Vr,12,4),S(19,"hr",15),l(20,"div",16)(21,"button",17),v("click",function(){_(e);let n=u();return g(n.creerChampionnat())}),m(22),d(),h(23,Pr,2,1,"span",18),d(),h(24,Rr,2,1,"p",19)}if(i&2){let e=u();s(3),O("ngModel",e.anneeDebut),s(),H(e.anneesDisponibles),s(3),w("actif",e.etape==="equipes")("rempli",e.equipesRenseignees),s(2),w("actif",e.etape==="dates")("rempli",e.datesRenseignees)("incomplet",e.datesIncompletes),s(2),f(e.datesIncompletes?11:-1),s(),w("actif",e.etape==="planning")("rempli",e.championnatRenseigne),s(2),w("actif",e.etape==="permutation"),s(2),f(e.etape==="equipes"?16:-1),s(),f(e.etape==="dates"?17:-1),s(),f(e.etape==="planning"?18:-1),s(3),b("disabled",!e.peutCreerChampionnat),s(),P(" ",e.championnatEnCours?"Cr\xE9ation...":"\u26A1 Cr\xE9er le championnat"," "),s(),f(e.datesCompletes?-1:23),s(),f(e.championnatMessage?24:-1)}}function Lr(i,r){if(i&1&&(l(0,"pre",19),m(1),d()),i&2){let e=u(2);s(),x(e.permutationMessage)}}function Nr(i,r){if(i&1){let e=V();l(0,"div",4)(1,"p",18),m(2," Saisissez deux colonnes s\xE9par\xE9es par une tabulation, un point-virgule ou une virgule : "),l(3,"strong"),m(4,"Code_Equipe"),d(),m(5," et "),l(6,"strong"),m(7,"Num\xE9ro de la journ\xE9e"),d(),m(8,". Chaque ligne permute le match aller et le match retour de l'\xE9quipe concern\xE9e (et donc de son adversaire). "),d(),l(9,"textarea",48),N("ngModelChange",function(n){_(e);let a=u();return L(a.textePermutations,n)||(a.textePermutations=n),g(n)}),d(),l(10,"div",21)(11,"button",49),v("click",function(){_(e);let n=u();return g(n.lancerPermutations())}),m(12),d()(),h(13,Lr,2,1,"pre",19),d()}if(i&2){let e=u();s(9),O("ngModel",e.textePermutations),s(2),b("disabled",e.permutationEnCours),s(),P(" ",e.permutationEnCours?"Permutation...":"\u{1F501} Lancer les permutations"," "),s(),f(e.permutationMessage?13:-1)}}var Ut=class extends Qt{format(r,e){let t=String(r.getDate()).padStart(2,"0"),n=String(r.getMonth()+1).padStart(2,"0"),a=r.getFullYear();return`${t}/${n}/${a}`}},Br={parse:{dateInput:"DD/MM/YYYY"},display:{dateInput:"DD/MM/YYYY",monthYearLabel:"MMM YYYY",dateA11yLabel:"DD/MM/YYYY",monthYearA11yLabel:"MMMM YYYY"}},Ni=class i{constructor(r,e,t,n,a,o){this.supabase=r;this.globalService=e;this.auth=t;this.supabaseClient=n;this.cdr=a;this.router=o;this.saison=this.saisonCourante(),this.initSaisons()}supabase;globalService;auth;supabaseClient;cdr;router;adminPwd;adminPwdFocusFait=!1;texteColle="";saison="";anneeDebut=0;anneesDisponibles=[];enCours=!1;resultats=[];messageGlobal="";etape="equipes";dates=[];datesMessage="";datesEnCours=!1;nbEquipesMax=0;equipesRenseignees=!1;datesRenseignees=!1;championnatRenseigne=!1;nbDatesEnregistrees=0;datesCompletesBase=!1;championnatMessage="";championnatEnCours=!1;identifiantsEquipes=[];clubs=[];clubSelectionne="";planningEquipes=[];planningDates=[];planningParDate=new Map;planningMessage="";planningEnCours=!1;textePermutations="";permutationMessage="";permutationEnCours=!1;gymnasesManquants=[];adminPassword="";adminErrorMessage="";ngAfterViewChecked(){!this.adminPwdFocusFait&&this.adminPwd&&(this.adminPwd.nativeElement.focus(),this.adminPwdFocusFait=!0)}initSaisons(){return B(this,null,function*(){let r=new Date().getFullYear();this.anneesDisponibles=[];for(let e=r-5;e<=r+5;e++)this.anneesDisponibles.push(e);this.anneeDebut=yield this.anneeDebutCourante(),this.anneesDisponibles.includes(this.anneeDebut)||(this.anneesDisponibles.push(this.anneeDebut),this.anneesDisponibles.sort((e,t)=>e-t)),this.majSaison()})}majSaison(){this.saison=`${this.anneeDebut}-${this.anneeDebut+1}`,this.rafraichirEtats()}rafraichirEtats(){return B(this,null,function*(){let r=(this.saison??"").trim();if(!r){this.equipesRenseignees=!1,this.datesRenseignees=!1,this.championnatRenseigne=!1;return}try{let[e,t,n,a]=yield Promise.all([this.supabase.nbEquipesSaison(r),this.supabase.nbEquipesMaxParPoule(r),this.supabase.chargerDatesMatchs(r),this.supabase.nbMatchsSaison(r)]);this.nbEquipesMax=t,this.nbDatesEnregistrees=n.length;let o=t>1?(t-1)*2:0;this.equipesRenseignees=e>0,this.datesCompletesBase=o>0&&n.length===o,this.datesRenseignees=this.datesCompletesBase,this.championnatRenseigne=a>0}catch(e){console.error("Rafra\xEEchissement des \xE9tats \xE9chou\xE9:",e)}})}get datesIncompletes(){let r=this.nbJourneesAttendues;return r>0&&this.nbDatesEnregistrees!==r}nomBaseEquipe(r){return(r??"").trim().replace(/\s*[-–—]\s*\d+\s*$/,"").trim()}anneeDebutCourante(){return B(this,null,function*(){return new Date().getFullYear()})}get estConnecteAdmin(){return this.auth.isAdmin}loginAdmin(){return B(this,null,function*(){if(this.adminErrorMessage="",!this.adminPassword){this.adminErrorMessage="Veuillez saisir le mot de passe administrateur.";return}try{let e=((yield this.supabase.loginParameter("AdminEmail"))?.Valeur??"").trim();if(!e){this.adminErrorMessage="Aucun compte administrateur configur\xE9.";return}this.auth.clearSessionEquipe();let{error:t}=yield this.supabaseClient.auth.signInWithPassword({email:e,password:this.adminPassword});if(t){console.error("Erreur de connexion admin:",t),this.adminErrorMessage="Mot de passe administrateur incorrect.";return}this.adminPassword="";for(let n=0;n<20&&!this.auth.isAdmin;n++)yield new Promise(a=>setTimeout(a,100));yield this.rafraichirEtats(),yield this.router.navigate(["admin-import"]),this.cdr.detectChanges()}catch(r){console.error("Erreur lors de la connexion admin:",r),this.adminErrorMessage=r?.message??"Erreur lors de la connexion administrateur."}})}saisonCourante(){let r=this.globalService.getSaison();if(r)return r;let e=new Date,t=e.getFullYear(),n=e.getMonth()>=7?t:t-1;return`${n}-${n+1}`}parseLignes(r){let e=[],t=r.split(/\r?\n/).map(n=>n.trim()).filter(n=>n.length>0);for(let n of t){let a=n.split("	");(a[0]??"").trim().toLowerCase()!=="poule"&&(a.length<9||e.push({poule:(a[0]??"").trim(),equipe:(a[1]??"").trim(),prenomCapitaine:(a[2]??"").trim(),nomCapitaine:(a[3]??"").trim(),telCapitaine:(a[4]??"").trim(),mailCapitaine:(a[5]??"").trim(),numeroGymnase:Number((a[6]??"").trim())||0,jourMatch:(a[7]??"").trim(),horaireMatch:(a[8]??"").trim()}))}return e}lancerImport(){return B(this,null,function*(){this.messageGlobal="",this.resultats=[],this.gymnasesManquants=[],this.identifiantsEquipes=[];let r=(this.saison??"").trim();if(!r){this.messageGlobal="Veuillez renseigner la saison (ex: 2026-2027).";return}let e=this.parseLignes(this.texteColle);if(e.length===0){this.messageGlobal="Aucune ligne valide d\xE9tect\xE9e. Collez le tableau (colonnes s\xE9par\xE9es par des tabulations).";return}this.enCours=!0;try{let p=yield this.supabase.purgerSaison(r);this.messageGlobal=`Purge effectu\xE9e : ${p.equipesSupprimees} \xE9quipe(s) et ${p.categoriesSupprimees} cat\xE9gorie(s) supprim\xE9e(s). `}catch(p){this.enCours=!1,this.messageGlobal=`\xC9chec de la purge : ${p?.message??p}`;return}let t=new Map;for(let p of e)try{let A=`${p.poule}|${r}`,R=t.get(A);R===void 0&&(R=yield this.supabase.getOrCreateCategorie(p.poule,r),t.set(A,R));let Fe=yield this.supabase.getOrCreateCapitaine(p.mailCapitaine,p.prenomCapitaine,p.nomCapitaine,p.telCapitaine),ge=this.nomBaseEquipe(p.equipe),We=yield this.supabase.trouverGymnaseParEquipe(ge);We===null&&(this.gymnasesManquants.some(ht=>ht.nomRecherche.toLowerCase()===ge.toLowerCase())||this.gymnasesManquants.push({equipe:p.equipe,nomRecherche:ge,nomGymnase:ge,adresse:"",commune:"",x:null,y:null,enregistre:!1,erreur:""}),We=0);let oe=yield this.supabase.creerEquipeSiAbsente(p.equipe,R,We,p.jourMatch,p.horaireMatch,Fe);this.resultats.push({equipe:p.equipe,statut:oe.statut,message:oe.statut==="cr\xE9\xE9e"?`Cr\xE9\xE9e (code ${oe.codeEquipe}, cat\xE9gorie ${p.poule})`:`D\xE9j\xE0 existante (code ${oe.codeEquipe})`}),this.identifiantsEquipes.push({equipe:p.equipe,email:`${oe.codeEquipe}@myapp.local`,motDePasse:oe.statut==="cr\xE9\xE9e"?oe.motDePasse??"":"",mailCapitaine:p.mailCapitaine})}catch(A){this.resultats.push({equipe:p.equipe,statut:"erreur",message:A?.message??"Erreur inconnue"})}this.enCours=!1;try{yield this.supabase.majParametre("SaisonCourante",r)}catch(p){console.error("Mise \xE0 jour de la saison dans Params \xE9chou\xE9e:",p)}let n=this.resultats.filter(p=>p.statut==="cr\xE9\xE9e").length,a=this.resultats.filter(p=>p.statut==="existante").length,o=this.resultats.filter(p=>p.statut==="erreur").length;this.messageGlobal+=`Import termin\xE9 : ${n} cr\xE9\xE9e(s), ${a} existante(s), ${o} erreur(s).`,yield this.rafraichirEtats()})}copierIdentifiants(){return B(this,null,function*(){if(this.identifiantsEquipes.length===0)return;let r="\xC9quipe	Mot de passe",e=this.identifiantsEquipes.map(n=>`${n.equipe}	${n.motDePasse}`),t=[r,...e].join(`
`);try{yield navigator.clipboard.writeText(t),this.messageGlobal+=" Identifiants copi\xE9s dans le presse-papiers."}catch(n){console.error("Copie des identifiants \xE9chou\xE9e:",n)}})}envoyerMailCapitaine(r){if(!r.mailCapitaine){this.messageGlobal+=` Aucune adresse e-mail pour ${r.equipe}.`;return}let e="https://alainavenelperso.github.io/Volley/",t="volleyufolep69@free.fr",n=`Mot de passe de votre \xE9quipe "${r.equipe}" \u2013 Volley UFOLEP Rh\xF4ne \u2013 saison ${this.saison}`,a=`Bonjour,

Voici le mot de passe de votre \xE9quipe "${r.equipe}" pour la saison ${this.saison} : ${r.motDePasse}

Connexion : ${e}

Sportivement.`,o=`mailto:${encodeURIComponent(r.mailCapitaine)}?cc=${encodeURIComponent(t)}&subject=${encodeURIComponent(n)}&body=${encodeURIComponent(a)}`;window.location.href=o}enregistrerGymnase(r){return B(this,null,function*(){let e=this.gymnasesManquants[r];if(e){if(e.erreur="",!e.nomGymnase.trim()){e.erreur="Le nom du gymnase est obligatoire.";return}try{yield this.supabase.creerGymnaseEtRattacher({nomEquipe:e.nomRecherche,nomGymnase:e.nomGymnase.trim(),adresse:e.adresse.trim(),commune:e.commune.trim(),x:e.x,y:e.y}),e.enregistre=!0}catch(t){e.erreur=t?.message??"Erreur lors de la sauvegarde du gymnase."}}})}get peutSkipperEquipes(){let r=!this.resultats.some(t=>t.statut==="erreur"),e=this.gymnasesManquants.every(t=>t.enregistre);return r&&e}allerAuxDates(){return B(this,null,function*(){this.datesMessage="",this.championnatMessage="",this.etape="dates";let r=(this.saison??"").trim();try{this.nbEquipesMax=r?yield this.supabase.nbEquipesMaxParPoule(r):0}catch(e){console.error("Lecture du nombre d'\xE9quipes max \xE9chou\xE9e:",e),this.nbEquipesMax=0}yield this.rechargerDates()})}get nbJourneesAttendues(){return this.nbEquipesMax>1?(this.nbEquipesMax-1)*2:0}get nbDatesRenseignees(){return this.dates.filter(r=>r.date instanceof Date&&!isNaN(r.date.getTime())).length}get datesCompletes(){return this.nbJourneesAttendues>0&&this.nbDatesRenseignees===this.nbJourneesAttendues}rechargerDates(){return B(this,null,function*(){let r=(this.saison??"").trim(),e=this.nbJourneesAttendues,t=[];try{t=r?yield this.supabase.chargerDatesMatchs(r):[]}catch(o){console.error("Chargement des dates existantes \xE9chou\xE9:",o)}let n=e>0?e:t.length,a=new Map;for(let o of t)a.set(o.journee,o.date);this.dates=Array.from({length:n},(o,p)=>{let A=p+1,R=a.get(A);return{journee:A,date:R?this.isoVersDate(R):null}})})}isoVersDate(r){let e=/^(\d{4})-(\d{2})-(\d{2})/.exec((r??"").trim());return e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):null}retourEquipes(){this.etape="equipes"}dateDebutPour(r){let e=this.dates[r]?.date;if(e instanceof Date&&!isNaN(e.getTime()))return e;for(let t=r-1;t>=0;t--){let n=this.dates[t]?.date;if(n instanceof Date&&!isNaN(n.getTime()))return n}return new Date}lundiDeLaSemaine(r){let e=new Date(r.getFullYear(),r.getMonth(),r.getDate()),t=e.getDay(),n=t===0?-6:1-t;return e.setDate(e.getDate()+n),e}dateVersIso(r){let e=this.lundiDeLaSemaine(r),t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${a}`}enregistrerDates(){return B(this,null,function*(){this.datesMessage="";let r=(this.saison??"").trim();if(!r){this.datesMessage="Saison non renseign\xE9e.";return}let e=this.dates.filter(t=>t.date instanceof Date&&!isNaN(t.date.getTime())).map(t=>({journee:t.journee,date:this.dateVersIso(t.date)}));if(e.length===0){this.datesMessage="Veuillez saisir au moins une date.";return}for(let t=1;t<e.length;t++)if(e[t].date<=e[t-1].date){this.datesMessage=`Les dates doivent \xEAtre dans l'ordre croissant : la journ\xE9e ${e[t].journee} n'est pas post\xE9rieure \xE0 la journ\xE9e ${e[t-1].journee}.`;return}if(this.nbJourneesAttendues>0&&e.length!==this.nbJourneesAttendues){this.datesMessage=`Nombre de dates incorrect : ${e.length} saisie(s) pour ${this.nbJourneesAttendues} journ\xE9e(s) attendue(s) (poule la plus fournie : ${this.nbEquipesMax} \xE9quipes).`;return}this.datesEnCours=!0;try{yield this.supabase.enregistrerDatesMatchs(r,e),yield this.rechargerDates(),this.datesMessage=`Dates enregistr\xE9es : ${e.length} journ\xE9e(s) pour la saison ${r}.`,yield this.rafraichirEtats()}catch(t){this.datesMessage=`\xC9chec de l'enregistrement des dates : ${t?.message??t}`}finally{this.datesEnCours=!1}})}get peutCreerChampionnat(){return this.datesCompletes&&!this.datesEnCours&&!this.championnatEnCours}creerChampionnat(){return B(this,null,function*(){this.championnatMessage="";let r=(this.saison??"").trim();if(!r){this.championnatMessage="Saison non renseign\xE9e.";return}if(!this.datesCompletes){this.championnatMessage=`Impossible de cr\xE9er le championnat : il faut ${this.nbJourneesAttendues} date(s) enregistr\xE9e(s) (actuellement ${this.nbDatesRenseignees}).`;return}this.championnatEnCours=!0;try{let e=yield this.supabase.genererChampionnat(r);this.championnatMessage=`Championnat cr\xE9\xE9 : ${e} match(s) g\xE9n\xE9r\xE9s pour la saison ${r}.`,yield this.rafraichirEtats()}catch(e){this.championnatMessage=`\xC9chec de la cr\xE9ation du championnat : ${e?.message??e}`}finally{this.championnatEnCours=!1}})}allerAuPlanning(){return B(this,null,function*(){this.etape="planning",this.planningMessage="";let r=(this.saison??"").trim();try{this.clubs=r?yield this.supabase.listerClubs(r):[],this.planningDates=r?yield this.supabase.chargerDatesMatchs(r):[]}catch(e){this.planningMessage=`Erreur de chargement : ${e?.message??e}`}})}allerAuxPermutations(){this.etape="permutation",this.permutationMessage=""}lancerPermutations(){return B(this,null,function*(){this.permutationMessage="";let r=(this.textePermutations??"").trim();if(!r){this.permutationMessage="Veuillez saisir au moins une ligne (Code_Equipe, Num\xE9ro de journ\xE9e).";return}let e=r.split(/\r?\n/).map(n=>n.trim()).filter(n=>n.length>0);this.permutationEnCours=!0;let t=[];try{for(let n of e){let a=n.split(/[\t;,]+/).map(A=>A.trim()),o=Number(a[0]),p=Number(a[1]);if(!Number.isFinite(o)||!Number.isFinite(p)){t.push(`\u274C \xAB ${n} \xBB : format invalide (attendu : Code_Equipe, Num\xE9ro de journ\xE9e).`);continue}try{let A=yield this.supabase.permuterMatchsAllerRetour(o,p);t.push(`\u2705 ${A}`)}catch(A){t.push(`\u274C \xC9quipe ${o}, journ\xE9e ${p} : ${A?.message??A}`)}}}finally{this.permutationEnCours=!1}this.permutationMessage=t.join(`
`)})}chargerPlanningClub(){return B(this,null,function*(){this.planningMessage="",this.planningEquipes=[],this.planningParDate=new Map;let r=(this.clubSelectionne??"").trim();if(r){this.planningEnCours=!0;try{let e=(this.saison??"").trim(),t=yield this.supabase.chargerPlanningClub(r,e);this.planningEquipes=t.equipes,this.planningParDate=t.parDate,t.equipes.length===0&&(this.planningMessage=`Aucune \xE9quipe trouv\xE9e pour le club \xAB ${r} \xBB.`)}catch(e){this.planningMessage=`Erreur : ${e?.message??e}`}finally{this.planningEnCours=!1}}})}lieuPour(r,e){return this.planningParDate.get(r)?.get(e)??""}libelleLieu(r){return r==="D"?"Domicile":r==="E"?"Ext\xE9rieur":"\u2014"}formatDate(r){if(!r)return"";let e=r.substring(0,10).split("-");return e.length!==3?r:`${e[2]}/${e[1]}/${e[0]}`}comptageDomExtJournee(r){let e=0,t=0;for(let n of this.planningEquipes){let a=this.lieuPour(r,n.code);a==="D"?e++:a==="E"&&t++}return`${e} / ${t}`}static \u0275fac=function(e){return new(e||i)(ue(Dn),ue(Mn),ue(wn),ue(Cn),ue(W),ue(xn))};static \u0275cmp=F({type:i,selectors:[["app-admin-import"]],viewQuery:function(e,t){if(e&1&&J(nr,5),e&2){let n;C(n=D())&&(t.adminPwd=n.first)}},features:[te([{provide:ze,useValue:"fr-FR"},{provide:k,useClass:Ut},{provide:re,useValue:Br}])],decls:4,vars:2,consts:[["adminPwd",""],["picker",""],[1,"admin-import"],[1,"admin-login"],[1,"bloc-permutation"],[1,"error-message"],[3,"ngSubmit"],["type","password","name","adminPassword","placeholder","Mot de passe administrateur","required","",3,"ngModelChange","ngModel"],["type","submit"],[1,"champ"],["for","saison"],["id","saison",1,"roue-saison",3,"ngModelChange","ngModel"],[3,"ngValue"],[1,"onglets"],["type","button",3,"click"],[1,"separateur-championnat"],[1,"actions","bloc-championnat"],["type","button",1,"btn-championnat",3,"click","disabled"],[1,"aide"],[1,"message-global"],["rows","12","placeholder","Collez ici le tableau (colonnes s\xE9par\xE9es par des tabulations)...",3,"ngModelChange","ngModel"],[1,"actions"],[3,"click","disabled"],[1,"resultats"],[3,"ok","existante","erreur"],[1,"titre-manquants"],[1,"resultats","manquants"],[3,"ok","erreur"],["type","text",3,"ngModelChange","ngModel","disabled"],["type","number","step","any",1,"coord",3,"ngModelChange","ngModel","disabled"],[1,"ok-label"],["type","button"],["type","button",1,"btn-suite",3,"click"],[1,"resultats","identifiants-table"],["type","button",1,"btn-suite",3,"click","disabled","title"],[1,"resultats","dates-table"],["type","button",1,"btn-suite",3,"click","disabled"],["appearance","outline","subscriptSizing","dynamic",1,"date-field"],["matInput","","placeholder","JJ/MM/AAAA",3,"ngModelChange","matDatepicker","ngModel"],["matIconSuffix","",3,"for"],[3,"startAt"],["for","club"],["id","club",1,"roue-saison",3,"ngModelChange","ngModel"],["value",""],[3,"value"],[1,"resultats","planning-table"],[3,"dom","ext"],[1,"total-domext"],["rows","8","placeholder",`Ex :
12	3
45	7`,3,"ngModelChange","ngModel"],["type","button",3,"click","disabled"]],template:function(e,t){e&1&&(l(0,"div",2),h(1,sr,9,2,"div",3)(2,Or,25,25),h(3,Nr,14,4,"div",4),d()),e&2&&(s(),f(t.estConnecteAdmin?2:1),s(2),f(t.etape==="permutation"?3:-1))},dependencies:[yn,Nn,Tn,Rn,On,En,Vn,Pn,kn,In,Ln,Fn,Oe,Be,rt,Pt,yi,vi,Oi,Ri,pt,$t,Li],styles:['@charset "UTF-8";.admin-import[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:20px;box-sizing:border-box}.champ[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:12px}.champ[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:6px 8px;font-size:14px}.aide[_ngcontent-%COMP%]{font-size:13px;color:#e0e0e0}.titre-manquants[_ngcontent-%COMP%]{color:#fff}textarea[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;font-family:monospace;font-size:13px;padding:8px}.actions[_ngcontent-%COMP%]{margin:12px 0;display:flex;flex-wrap:wrap;align-items:center;gap:12px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 16px;font-size:15px;cursor:pointer}.message-global[_ngcontent-%COMP%]{font-weight:700;margin:10px 0}.resultats[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:10px}.resultats[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .resultats[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ccc;padding:6px 8px;text-align:left;font-size:13px;color:#222}.resultats[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#1b2a4a;color:#fff}.resultats[_ngcontent-%COMP%]   tr.ok[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#e6f7e6;color:#222}.resultats[_ngcontent-%COMP%]   tr.existante[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#fff7e0;color:#222}.resultats[_ngcontent-%COMP%]   tr.erreur[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#fde0e0;color:#222}.admin-login[_ngcontent-%COMP%]{margin-top:20px}.admin-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.admin-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px;font-size:14px;width:240px}.admin-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 16px;cursor:pointer}.error-message[_ngcontent-%COMP%]{color:#c00;font-weight:700}.roue-saison[_ngcontent-%COMP%]{padding:8px 12px;font-size:18px;font-weight:600;text-align:center;border:1px solid #bbb;border-radius:8px;background-color:#fff;cursor:pointer;min-width:140px}.manquants[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:4px 6px;font-size:13px}.manquants[_ngcontent-%COMP%]   input.coord[_ngcontent-%COMP%]{width:90px}.manquants[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px 10px;cursor:pointer}.ok-label[_ngcontent-%COMP%]{color:#2a7a2a;font-weight:700}.btn-suite[_ngcontent-%COMP%]{background-color:#1b6ec2;color:#fff;border:none;border-radius:4px}.onglets[_ngcontent-%COMP%]{display:flex;gap:6px;margin:12px 0 16px;border-bottom:1px solid #555}.onglets[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 16px;border:none;border-radius:6px 6px 0 0;background-color:#2a3a5a;color:#ddd;cursor:pointer;font-size:14px}.onglets[_ngcontent-%COMP%]   button.actif[_ngcontent-%COMP%]{background-color:#1b6ec2;color:#fff;font-weight:700}.onglets[_ngcontent-%COMP%]   button.rempli[_ngcontent-%COMP%]{background-color:#2e7d32;color:#fff}.onglets[_ngcontent-%COMP%]   button.incomplet[_ngcontent-%COMP%]{background-color:#c62828;color:#fff}.onglets[_ngcontent-%COMP%]   button.incomplet.actif[_ngcontent-%COMP%]{background-color:#1b6ec2;box-shadow:inset 0 -3px #c62828}.onglets[_ngcontent-%COMP%]   button.rempli.actif[_ngcontent-%COMP%]{background-color:#1b6ec2;box-shadow:inset 0 -3px #2e7d32}.separateur-championnat[_ngcontent-%COMP%]{margin:20px 0 12px;border:none;border-top:1px solid #555}.bloc-championnat[_ngcontent-%COMP%]{align-items:center}.btn-championnat[_ngcontent-%COMP%]{background-color:#2e7d32;color:#fff;border:none;border-radius:4px;padding:10px 20px;font-size:15px;font-weight:700;cursor:pointer}.btn-championnat[_ngcontent-%COMP%]:disabled{background-color:#6c757d;cursor:not-allowed;opacity:.7}.planning-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .planning-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;color:#222;text-align:center}.identifiants-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .identifiants-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;color:#222}.identifiants-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#111;font-size:15px;font-weight:700}.planning-table[_ngcontent-%COMP%]   td.dom[_ngcontent-%COMP%]{background-color:#d7e9ff;color:#0b3d91;font-weight:700}.planning-table[_ngcontent-%COMP%]   td.ext[_ngcontent-%COMP%]{background-color:#ffe0e0;color:#a10000;font-weight:700}.dates-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:4px 6px;font-size:13px;width:120px}.dates-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#fff;color:#222}.dates-table[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%]{width:160px}.dates-table[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{min-height:36px;padding-top:6px;padding-bottom:6px}.dates-table[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{padding-top:0;padding-bottom:0}.dates-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding-top:2px;padding-bottom:2px}']})};export{Ni as AdminImport,Br as FR_DATE_FORMATS,Ut as FrDateAdapter};
