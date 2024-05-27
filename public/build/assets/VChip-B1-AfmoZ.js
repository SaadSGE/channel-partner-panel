import{aH as E,bc as Y,aI as R,bB as Z,aJ as T,aZ as z,a_ as F,aK as $,b1 as w,bC as ee,bg as ae,$ as r,aQ as le,b as l,q as K,aP as C,aS as G,aT as te,aU as ne,aW as se,bD as ie,aX as ce,aY as de,bl as oe,a$ as ue,bt as re,b2 as ve,b3 as fe,b4 as pe,b6 as me,b7 as be,bm as ke,aL as he,bE as ye,b0 as Ce,a4 as V,J as _,b9 as Ve,ba as Ie,a0 as v,aR as f,K as Pe,F as x}from"./main--Sxm5_s2.js";import{a as ge}from"./index-CGqMMtXP.js";import{m as Se,V as D}from"./VSlideGroup-DDUY1mOj.js";import{V as L}from"./VAvatar-YOWsFQVe.js";const M=Symbol.for("vuetify:v-chip-group"),Ae=E({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Y},...Se(),...R(),...Z({selectedClass:"v-chip--selected"}),...T(),...z(),...F({variant:"tonal"})},"VChipGroup");$()({name:"VChipGroup",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:c}=p;const{themeClasses:o}=w(e),{isSelected:t,select:m,next:b,prev:k,selected:h}=ee(e,M);return ae({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),le(()=>{const y=D.filterProps(e);return l(D,K(y,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style}),{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:m,next:b,prev:k,selected:h.value})]}})}),{}}});const Be=E({activeClass:String,appendAvatar:String,appendIcon:C,closable:Boolean,closeIcon:{type:C,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:G(),onClickOnce:G(),...te(),...R(),...ne(),...se(),...ie(),...ce(),...de(),...oe(),...T({tag:"span"}),...z(),...F({variant:"tonal"})},"VChip"),Le=$()({name:"VChip",directives:{Ripple:ue},props:Be(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,p){let{attrs:c,emit:o,slots:t}=p;const{t:m}=re(),{borderClasses:b}=ve(e),{colorClasses:k,colorStyles:h,variantClasses:y}=fe(e),{densityClasses:u}=pe(e),{elevationClasses:O}=me(e),{roundedClasses:q}=be(e),{sizeClasses:J}=ke(e),{themeClasses:X}=w(e),I=he(e,"modelValue"),a=ye(e,M,!1),s=Ce(e,c),j=V(()=>e.link!==!1&&s.isLink.value),i=V(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),H=V(()=>({"aria-label":m(e.closeLabel),onClick(n){n.stopPropagation(),I.value=!1,o("click:close",n)}}));function P(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function N(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),P(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),Q=!!(d||t.append),U=!!(t.close||e.closable),g=!!(t.filter||e.filter)&&a,S=!!(e.prependIcon||e.prependAvatar),W=!!(S||t.prepend),A=!a||a.isSelected.value;return I.value&&_(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":g,"v-chip--pill":e.pill},X.value,b.value,A?k.value:void 0,u.value,O.value,q.value,J.value,y.value,a==null?void 0:a.selectedClass.value,e.class],style:[A?h.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:P,onKeydown:i.value&&!j.value&&N},{default:()=>{var B;return[Ie(i.value,"v-chip"),g&&l(ge,{key:"filter"},{default:()=>[_(l("div",{class:"v-chip__filter"},[t.filter?l(f,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):l(v,{key:"filter-icon",icon:e.filterIcon},null)]),[[Pe,a.isSelected.value]])]}),W&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(f,{key:"prepend-defaults",disabled:!S,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(x,null,[e.prependIcon&&l(v,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(L,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content"},[((B=t.default)==null?void 0:B.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),Q&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(f,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(x,null,[e.appendIcon&&l(v,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(L,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),U&&l("button",K({key:"close",class:"v-chip__close",type:"button"},H.value),[t.close?l(f,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(v,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ve("ripple"),i.value&&e.ripple,null]])}}});export{Le as V};
