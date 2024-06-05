import{b as Se,V as _e}from"./form-Cof7gYfN.js";import{m as Ie,u as Ae,a as Fe}from"./VSelect-BJdoV_9a.js";import{m as Pe,V as X}from"./VTextField-BRS8HhxH.js";import{aK as De,bh as Re,aN as Te,bw as Me,r as L,ar as F,aO as Y,a5 as h,be as Ee,cf as Ne,w as P,aA as Z,bK as Le,aT as Oe,b as o,F as $,s as D,a1 as ee,cw as Be,aU as $e,v as Ke,cy as Ue,d1 as ze,cx as le,o as te,c as je,n as O,f as He,z as qe,ac as We,i as Ge,e as Je,A as Qe,av as ae,aw as ne,y as Xe}from"./main-46fJF4Ly.js";import{m as Ye,u as Ze}from"./filter-WqfgxIFp.js";import{f as el}from"./forwardRefs-C-GTDzx5.js";import{u as ll,t as B,V as tl,a as ue}from"./VList-CG2BG0Du.js";import{m as al}from"./index-CAksEt0X.js";import{V as nl}from"./VMenu-8Xy30vKo.js";import{V as ul}from"./VCheckboxBtn-CUr3L21I.js";import{V as ol}from"./VAvatar-DBcKRZVo.js";import{V as sl}from"./VChip-BHBhRfUm.js";function il(e,m,C){if(m==null)return e;if(Array.isArray(m))throw new Error("Multiple matches is not implemented");return typeof m=="number"&&~m?o($,null,[o("span",{class:"v-combobox__unmask"},[e.substr(0,m)]),o("span",{class:"v-combobox__mask"},[e.substr(m,C)]),o("span",{class:"v-combobox__unmask"},[e.substr(m+C)])]):e}const rl=De({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...Ye({filterKeys:["title"]}),...Ie({hideNoData:!0,returnObject:!0}),...Re(Pe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...al({transition:!1})},"VCombobox"),cl=Te()({name:"VCombobox",props:rl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,m){var G;let{emit:C,slots:a}=m;const{t:k}=Me(),x=L(),b=F(!1),g=F(!0),R=F(!1),H=L(),q=L(),K=Y(e,"menu"),r=h({get:()=>K.value,set:l=>{var n;K.value&&!l&&((n=H.value)!=null&&n.ΨopenChildren)||(K.value=l)}}),s=F(-1);let U=!1;const oe=h(()=>{var l;return(l=x.value)==null?void 0:l.color}),W=h(()=>r.value?e.closeText:e.openText),{items:se,transformIn:ie,transformOut:re}=ll(e),{textColorClasses:ce,textColorStyles:ve}=Ee(oe),u=Y(e,"modelValue",[],l=>ie(Ne(l)),l=>{const n=re(l);return e.multiple?n:n[0]??null}),I=Se(),A=F(e.multiple?"":((G=u.value[0])==null?void 0:G.title)??""),c=h({get:()=>A.value,set:l=>{var n;if(A.value=l??"",e.multiple||(u.value=[B(e,l)]),l&&e.multiple&&((n=e.delimiters)!=null&&n.length)){const i=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));i.length>1&&(i.forEach(d=>{d=d.trim(),d&&V(B(e,d))}),A.value="")}l||(s.value=-1),g.value=!l}}),de=h(()=>typeof e.counterValue=="function"?e.counterValue(u.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?u.value.length:c.value.length);P(A,l=>{U?Z(()=>U=!1):b.value&&!r.value&&(r.value=!0),C("update:search",l)}),P(u,l=>{var n;e.multiple||(A.value=((n=l[0])==null?void 0:n.title)??"")});const{filteredItems:T,getMatches:fe}=Ze(e,se,()=>g.value?"":c.value),p=h(()=>e.hideSelected?T.value.filter(l=>!u.value.some(n=>n.value===l.value)):T.value),me=h(()=>u.value.map(l=>l.value)),M=h(()=>{var n;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&c.value===((n=p.value[0])==null?void 0:n.title))&&p.value.length>0&&!g.value&&!R.value}),z=h(()=>e.hideNoData&&!p.value.length||e.readonly||(I==null?void 0:I.isReadonly.value)),j=L(),{onListScroll:be,onListKeydown:he}=Ae(j,x);function ge(l){U=!0,e.openOnClear&&(r.value=!0)}function pe(){z.value||(r.value=!0)}function xe(l){z.value||(b.value&&(l.preventDefault(),l.stopPropagation()),r.value=!r.value)}function Ve(l){var d;if(ze(l)||e.readonly||I!=null&&I.isReadonly.value)return;const n=x.value.selectionStart,i=u.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(r.value=!0),["Escape"].includes(l.key)&&(r.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(M.value&&["Enter","Tab"].includes(l.key)&&V(T.value[0]),g.value=!0),l.key==="ArrowDown"&&M.value&&((d=j.value)==null||d.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(s.value<0){l.key==="Backspace"&&!c.value&&(s.value=i-1);return}const t=s.value,v=u.value[s.value];v&&!v.props.disabled&&V(v,!1),s.value=t>=i-1?i-2:t}if(l.key==="ArrowLeft"){if(s.value<0&&n>0)return;const t=s.value>-1?s.value-1:i-1;u.value[t]?s.value=t:(s.value=-1,x.value.setSelectionRange(c.value.length,c.value.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const t=s.value+1;u.value[t]?s.value=t:(s.value=-1,x.value.setSelectionRange(0,0))}l.key==="Enter"&&c.value&&(V(B(e,c.value)),c.value="")}}function ye(){var l;b.value&&(g.value=!0,(l=x.value)==null||l.focus())}function V(l){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(e.multiple){const i=u.value.findIndex(t=>e.valueComparator(t.value,l.value)),d=n??!~i;if(~i){const t=d?[...u.value,l]:[...u.value];t.splice(i,1),u.value=t}else d&&(u.value=[...u.value,l]);e.clearOnSelect&&(c.value="")}else{const i=n!==!1;u.value=i?[l]:[],A.value=i?l.title:"",Z(()=>{r.value=!1,g.value=!0})}}function Ce(l){b.value=!0,setTimeout(()=>{R.value=!0})}function ke(l){R.value=!1}function we(l){(l==null||l===""&&!e.multiple)&&(u.value=[])}return P(b,(l,n)=>{l||l===n||(s.value=-1,r.value=!1,M.value&&!R.value&&!u.value.some(i=>{let{value:d}=i;return d===p.value[0].value})?V(p.value[0]):e.multiple&&c.value&&V(B(e,c.value)))}),P(r,()=>{if(!e.hideSelected&&r.value&&u.value.length){const l=p.value.findIndex(n=>u.value.some(i=>e.valueComparator(i.value,n.value)));Le&&window.requestAnimationFrame(()=>{var n;l>=0&&((n=q.value)==null||n.scrollToIndex(l))})}}),P(p,(l,n)=>{b.value&&(!l.length&&e.hideNoData&&(r.value=!1),!n.length&&l.length&&(r.value=!0))}),Oe(()=>{const l=!!(e.chips||a.chip),n=!!(!e.hideNoData||p.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),i=u.value.length>0,d=X.filterProps(e);return o(X,D({ref:x},d,{modelValue:c.value,"onUpdate:modelValue":[t=>c.value=t,we],focused:b.value,"onUpdate:focused":t=>b.value=t,validationValue:u.externalValue,counterValue:de.value,dirty:i,class:["v-combobox",{"v-combobox--active-menu":r.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!a.selection,"v-combobox--selecting-index":s.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:i?void 0:e.placeholder,"onClick:clear":ge,"onMousedown:control":pe,onKeydown:Ve}),{...a,default:()=>o($,null,[o(nl,D({ref:H,modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,activator:"parent",contentClass:"v-combobox__content",disabled:z.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ye},e.menuProps),{default:()=>[n&&o(tl,D({ref:j,selected:me.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onKeydown:he,onFocusin:Ce,onFocusout:ke,onScrollPassive:be,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var t,v,y;return[(t=a["prepend-item"])==null?void 0:t.call(a),!p.value.length&&!e.hideNoData&&(((v=a["no-data"])==null?void 0:v.call(a))??o(ue,{title:k(e.noDataText)},null)),o(Fe,{ref:q,renderless:!0,items:p.value},{default:w=>{var Q;let{item:f,index:S,itemRef:_}=w;const J=D(f.props,{ref:_,key:S,active:M.value&&S===0?!0:void 0,onClick:()=>V(f,null)});return((Q=a.item)==null?void 0:Q.call(a,{item:f,index:S,props:J}))??o(ue,J,{prepend:E=>{let{isSelected:N}=E;return o($,null,[e.multiple&&!e.hideSelected?o(ul,{key:f.value,modelValue:N,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&o(ol,{image:f.props.prependAvatar},null),f.props.prependIcon&&o(ee,{icon:f.props.prependIcon},null)])},title:()=>{var E,N;return g.value?f.title:il(f.title,(E=fe(f))==null?void 0:E.title,((N=c.value)==null?void 0:N.length)??0)}})}}),(y=a["append-item"])==null?void 0:y.call(a)]}})]}),u.value.map((t,v)=>{function y(_){_.stopPropagation(),_.preventDefault(),V(t,!1)}const w={"onClick:close":y,onMousedown(_){_.preventDefault(),_.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=l?!!a.chip:!!a.selection,S=f?Be(l?a.chip({item:t,index:v,props:w}):a.selection({item:t,index:v})):void 0;if(!(f&&!S))return o("div",{key:t.value,class:["v-combobox__selection",v===s.value&&["v-combobox__selection--selected",ce.value]],style:v===s.value?ve.value:{}},[l?a.chip?o($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:t.title}}},{default:()=>[S]}):o(sl,D({key:"chip",closable:e.closableChips,size:"small",text:t.title,disabled:t.props.disabled},w),null):S??o("span",{class:"v-combobox__selection-text"},[t.title,e.multiple&&v<u.value.length-1&&o("span",{class:"v-combobox__selection-comma"},[Ke(",")])])])})]),"append-inner":function(){var w;for(var t=arguments.length,v=new Array(t),y=0;y<t;y++)v[y]=arguments[y];return o($,null,[(w=a["append-inner"])==null?void 0:w.call(a,...v),(!e.hideNoData||e.items.length)&&e.menuIcon?o(ee,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:xe,onClick:Ue,"aria-label":k(W.value),title:k(W.value)},null):void 0])}})}),el({isFocused:b,isPristine:g,menu:r,search:c,selectionIndex:s,filteredItems:T,select:V},x)}}),kl=Object.assign({name:"AppCombobox",inheritAttrs:!1},{__name:"AppCombobox",setup(e){const m=h(()=>{const a=le(),k=a.id||a.label;return k?`app-combobox-${k}-${Math.random().toString(36).slice(2,7)}`:void 0}),C=h(()=>le().label);return(a,k)=>(te(),je("div",{class:Xe(["app-combobox flex-grow-1",a.$attrs.class])},[O(C)?(te(),He(_e,{key:0,for:O(m),class:"mb-1 text-body-2",text:O(C)},null,8,["for","text"])):qe("",!0),o(cl,ae(ne({...a.$attrs,class:null,label:void 0,variant:"outlined",id:O(m),menuProps:{contentClass:["app-inner-list","app-combobox__content","v-combobox__content",a.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),We({_:2},[Ge(a.$slots,(x,b)=>({name:b,fn:Je(g=>[Qe(a.$slots,b,ae(ne(g||{})))])}))]),1040)],2))}});export{cl as V,kl as _};
