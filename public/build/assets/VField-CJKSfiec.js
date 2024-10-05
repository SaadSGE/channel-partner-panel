import{aK as T,aL as A,aN as D,aT as E,b as l,aS as I,aV as k,bz as Y,a_ as Z,b0 as ee,b4 as le,bB as ae,ba as ne,b_ as te,a5 as d,aQ as ie,r as V,bi as se,a0 as oe,be as re,w as de,bI as ce,ce as ue,bs as ve,bD as fe,K as be,L as ge,F as ye,s as me}from"./main-DHHr-wHG.js";import{V as Ce,m as he,u as _e,a as pe}from"./form-DMhFGgfp.js";import{a as Ie}from"./index-D8dg9ABk.js";import{n as ke,b as Ve,s as Fe}from"./easing-CjukEv2V.js";const Pe=T({floating:Boolean,...A()},"VFieldLabel"),_=D()({name:"VFieldLabel",props:Pe(),setup(e,u){let{slots:i}=u;return E(()=>l(Ce,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),Le=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=T({appendInnerIcon:I,bgColor:String,clearable:Boolean,clearIcon:{type:I,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:I,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Le.includes(e)},"onClick:clear":k(),"onClick:appendInner":k(),"onClick:prependInner":k(),...A(),...Y(),...Z(),...ee()},"VField"),Be=D()({name:"VField",inheritAttrs:!1,props:{id:String,...he(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:i,emit:Se,slots:a}=u;const{themeClasses:O}=le(e),{loaderClasses:U}=ae(e),{focusClasses:K,isFocused:F,focus:P,blur:L}=_e(e),{InputIcon:p}=pe(e),{roundedClasses:M}=ne(e),{rtlClasses:N}=te(),f=d(()=>e.dirty||e.active),b=d(()=>!e.singleLine&&!!(e.label||a.label)),W=ie(),s=d(()=>e.id||`input-${W}`),j=d(()=>`${s.value}-messages`),x=V(),g=V(),B=V(),S=d(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:q,backgroundColorStyles:z}=se(oe(e,"bgColor")),{textColorClasses:R,textColorStyles:w}=re(d(()=>e.error||e.disabled?void 0:f.value&&F.value?e.color:e.baseColor));de(f,c=>{if(b.value){const t=x.value.$el,o=g.value.$el;requestAnimationFrame(()=>{const r=ke(t),n=o.getBoundingClientRect(),m=n.x-r.x,C=n.y-r.y-(r.height/2-n.height/2),v=n.width/.75,h=Math.abs(v-r.width)>1?{maxWidth:ve(v)}:void 0,X=getComputedStyle(t),$=getComputedStyle(o),G=parseFloat(X.transitionDuration)*1e3||150,H=parseFloat($.getPropertyValue("--v-field-label-scale")),J=$.getPropertyValue("color");t.style.visibility="visible",o.style.visibility="hidden",Ve(t,{transform:`translate(${m}px, ${C}px) scale(${H})`,color:J,...h},{duration:G,easing:Fe,direction:c?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),o.style.removeProperty("visibility")})})}},{flush:"post"});const y=d(()=>({isActive:f,isFocused:F,controlRef:B,blur:L,focus:P}));function Q(c){c.target!==document.activeElement&&c.preventDefault()}return E(()=>{var m,C,v;const c=e.variant==="outlined",t=a["prepend-inner"]||e.prependInnerIcon,o=!!(e.clearable||a.clear),r=!!(a["append-inner"]||e.appendInnerIcon||o),n=()=>a.label?a.label({...y.value,label:e.label,props:{for:s.value}}):e.label;return l("div",me({class:["v-field",{"v-field--active":f.value,"v-field--appended":r,"v-field--center-affix":e.centerAffix??!S.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":t,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!n(),[`v-field--variant-${e.variant}`]:!0},O.value,q.value,K.value,U.value,M.value,N.value,e.class],style:[z.value,e.style],onClick:Q},i),[l("div",{class:"v-field__overlay"},null),l(fe,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),t&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(p,{key:"prepend-icon",name:"prependInner"},null),(m=a["prepend-inner"])==null?void 0:m.call(a,y.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&b.value&&l(_,{key:"floating-label",ref:g,class:[R.value],floating:!0,for:s.value,style:w.value},{default:()=>[n()]}),l(_,{ref:x,for:s.value},{default:()=>[n()]}),(C=a.default)==null?void 0:C.call(a,{...y.value,props:{id:s.value,class:"v-field__input","aria-describedby":j.value},focus:P,blur:L})]),o&&l(Ie,{key:"clear"},{default:()=>[be(l("div",{class:"v-field__clearable",onMousedown:h=>{h.preventDefault(),h.stopPropagation()}},[a.clear?a.clear():l(p,{name:"clear"},null)]),[[ge,e.dirty]])]}),r&&l("div",{key:"append",class:"v-field__append-inner"},[(v=a["append-inner"])==null?void 0:v.call(a,y.value),e.appendInnerIcon&&l(p,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",R.value],style:w.value},[c&&l(ye,null,[l("div",{class:"v-field__outline__start"},null),b.value&&l("div",{class:"v-field__outline__notch"},[l(_,{ref:g,floating:!0,for:s.value},{default:()=>[n()]})]),l("div",{class:"v-field__outline__end"},null)]),S.value&&b.value&&l(_,{ref:g,floating:!0,for:s.value},{default:()=>[n()]})])])}),{controlRef:B}}});function Ae(e){const u=Object.keys(Be.props).filter(i=>!ce(i)&&i!=="class"&&i!=="style");return ue(e,u)}export{Be as V,Ae as f,xe as m};
