import{aL as A,aM as T,aO as E,aU as O,b as l,aT as k,aW as I,bA as Y,a$ as Z,b1 as ee,b5 as le,bC as ae,bb as ne,b$ as te,a5 as d,aR as ie,r as F,bj as se,a0 as oe,bf as re,w as de,bJ as ce,cf as ue,bt as ve,bE as fe,K as be,L as ge,F as ye,s as me}from"./main-CGWwRiT_.js";import{V as Ce,m as he,u as _e,a as pe}from"./form-DCP4nY8j.js";import{a as ke}from"./index-BOYzkDlu.js";import{n as Ie,b as Fe,s as Pe}from"./easing-CjukEv2V.js";const Ve=A({floating:Boolean,...T()},"VFieldLabel"),_=E()({name:"VFieldLabel",props:Ve(),setup(e,u){let{slots:i}=u;return O(()=>l(Ce,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),Le=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=A({appendInnerIcon:k,bgColor:String,clearable:Boolean,clearIcon:{type:k,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:k,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Le.includes(e)},"onClick:clear":I(),"onClick:appendInner":I(),"onClick:prependInner":I(),...T(),...Y(),...Z(),...ee()},"VField"),Be=E()({name:"VField",inheritAttrs:!1,props:{id:String,...he(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:i,emit:Se,slots:a}=u;const{themeClasses:D}=le(e),{loaderClasses:U}=ae(e),{focusClasses:M,isFocused:P,focus:V,blur:L}=_e(e),{InputIcon:p}=pe(e),{roundedClasses:W}=ne(e),{rtlClasses:j}=te(),f=d(()=>e.dirty||e.active),b=d(()=>!e.singleLine&&!!(e.label||a.label)),q=ie(),s=d(()=>e.id||`input-${q}`),J=d(()=>`${s.value}-messages`),x=F(),g=F(),B=F(),S=d(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:K,backgroundColorStyles:N}=se(oe(e,"bgColor")),{textColorClasses:R,textColorStyles:$}=re(d(()=>e.error||e.disabled?void 0:f.value&&P.value?e.color:e.baseColor));de(f,c=>{if(b.value){const t=x.value.$el,o=g.value.$el;requestAnimationFrame(()=>{const r=Ie(t),n=o.getBoundingClientRect(),m=n.x-r.x,C=n.y-r.y-(r.height/2-n.height/2),v=n.width/.75,h=Math.abs(v-r.width)>1?{maxWidth:ve(v)}:void 0,z=getComputedStyle(t),w=getComputedStyle(o),G=parseFloat(z.transitionDuration)*1e3||150,H=parseFloat(w.getPropertyValue("--v-field-label-scale")),Q=w.getPropertyValue("color");t.style.visibility="visible",o.style.visibility="hidden",Fe(t,{transform:`translate(${m}px, ${C}px) scale(${H})`,color:Q,...h},{duration:G,easing:Pe,direction:c?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),o.style.removeProperty("visibility")})})}},{flush:"post"});const y=d(()=>({isActive:f,isFocused:P,controlRef:B,blur:L,focus:V}));function X(c){c.target!==document.activeElement&&c.preventDefault()}return O(()=>{var m,C,v;const c=e.variant==="outlined",t=a["prepend-inner"]||e.prependInnerIcon,o=!!(e.clearable||a.clear),r=!!(a["append-inner"]||e.appendInnerIcon||o),n=()=>a.label?a.label({...y.value,label:e.label,props:{for:s.value}}):e.label;return l("div",me({class:["v-field",{"v-field--active":f.value,"v-field--appended":r,"v-field--center-affix":e.centerAffix??!S.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":t,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!n(),[`v-field--variant-${e.variant}`]:!0},D.value,K.value,M.value,U.value,W.value,j.value,e.class],style:[N.value,e.style],onClick:X},i),[l("div",{class:"v-field__overlay"},null),l(fe,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),t&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(p,{key:"prepend-icon",name:"prependInner"},null),(m=a["prepend-inner"])==null?void 0:m.call(a,y.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&b.value&&l(_,{key:"floating-label",ref:g,class:[R.value],floating:!0,for:s.value,style:$.value},{default:()=>[n()]}),l(_,{ref:x,for:s.value},{default:()=>[n()]}),(C=a.default)==null?void 0:C.call(a,{...y.value,props:{id:s.value,class:"v-field__input","aria-describedby":J.value},focus:V,blur:L})]),o&&l(ke,{key:"clear"},{default:()=>[be(l("div",{class:"v-field__clearable",onMousedown:h=>{h.preventDefault(),h.stopPropagation()}},[a.clear?a.clear():l(p,{name:"clear"},null)]),[[ge,e.dirty]])]}),r&&l("div",{key:"append",class:"v-field__append-inner"},[(v=a["append-inner"])==null?void 0:v.call(a,y.value),e.appendInnerIcon&&l(p,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",R.value],style:$.value},[c&&l(ye,null,[l("div",{class:"v-field__outline__start"},null),b.value&&l("div",{class:"v-field__outline__notch"},[l(_,{ref:g,floating:!0,for:s.value},{default:()=>[n()]})]),l("div",{class:"v-field__outline__end"},null)]),S.value&&b.value&&l(_,{ref:g,floating:!0,for:s.value},{default:()=>[n()]})])])}),{controlRef:B}}});function Te(e){const u=Object.keys(Be.props).filter(i=>!ce(i)&&i!=="class"&&i!=="style");return ue(e,u)}export{Be as V,Te as f,xe as m};
