import{g as we,h as Se,a as X,V as xe}from"./VTextField-DsBnAchm.js";import{m as _e,u as Ae,V as Fe}from"./VSelect-Ax2TYqix.js";import{a9 as Ie,aa as Pe,ab as De,at as Re,r as T,az as I,ac as K,a5 as C,au as Me,bV as Te,w as L,aF as G,bB as Le,ae as Be,b as o,F as N,s as P,a1 as Q,bW as Ne,aV as Oe,v as Ee,bX as $e,bP as Y,aJ as Z,o as ee,c as ze,n as B,f as Ke,z as Ue,ak as He,i as We,e as je,A as qe,aK as le,aL as te,y as Je}from"./main-Cp2POdXb.js";import{m as Xe,u as Ge}from"./filter-D-tUSS7Z.js";import{f as Qe}from"./forwardRefs-D9kYFWgq.js";import{u as Ye,V as Ze,a as ae}from"./VList-Cacr4NmG.js";import{m as el}from"./index-ClsSkh9w.js";import{V as ll}from"./VMenu-D59SCE8_.js";import{c as tl}from"./VCheckboxBtn-D1rA0Sil.js";import{V as al}from"./VAvatar-DP4U1kqO.js";import{V as nl}from"./VChip-ihqZWhi4.js";function ul(e,p,t){if(p==null)return e;if(Array.isArray(p))throw new Error("Multiple matches is not implemented");return typeof p=="number"&&~p?o(N,null,[o("span",{class:"v-autocomplete__unmask"},[e.substr(0,p)]),o("span",{class:"v-autocomplete__mask"},[e.substr(p,t)]),o("span",{class:"v-autocomplete__unmask"},[e.substr(p+t)])]):e}const ol=Ie({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Xe({filterKeys:["title"]}),..._e(),...Pe(we({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...el({transition:!1})},"VAutocomplete"),sl=De()({name:"VAutocomplete",props:ol(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,p){let{slots:t}=p;const{t:h}=Re(),d=T(),k=I(!1),g=I(!0),_=I(!1),U=T(),H=T(),O=K(e,"menu"),i=C({get:()=>O.value,set:l=>{var a;O.value&&!l&&((a=U.value)!=null&&a.ΨopenChildren)||(O.value=l)}}),s=I(-1),ne=C(()=>{var l;return(l=d.value)==null?void 0:l.color}),W=C(()=>i.value?e.closeText:e.openText),{items:j,transformIn:ue,transformOut:oe}=Ye(e),{textColorClasses:se,textColorStyles:ie}=Me(ne),v=K(e,"search",""),u=K(e,"modelValue",[],l=>ue(l===null?[null]:Te(l)),l=>{const a=oe(l);return e.multiple?a:a[0]??null}),re=C(()=>typeof e.counterValue=="function"?e.counterValue(u.value):typeof e.counterValue=="number"?e.counterValue:u.value.length),A=Se(),{filteredItems:E,getMatches:ce}=Ge(e,j,()=>g.value?"":v.value),V=C(()=>e.hideSelected?E.value.filter(l=>!u.value.some(a=>a.value===l.value)):E.value),ve=C(()=>u.value.map(l=>l.props.value)),D=C(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((a=V.value[0])==null?void 0:a.title))&&V.value.length>0&&!g.value&&!_.value}),$=C(()=>e.hideNoData&&!V.value.length||e.readonly||(A==null?void 0:A.isReadonly.value)),z=T(),{onListScroll:de,onListKeydown:fe}=Ae(z,d);function me(l){e.openOnClear&&(i.value=!0),v.value=""}function pe(){$.value||(i.value=!0)}function he(l){$.value||(k.value&&(l.preventDefault(),l.stopPropagation()),i.value=!i.value)}function ge(l){var y,n,f;if(e.readonly||A!=null&&A.isReadonly.value)return;const a=d.value.selectionStart,c=u.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(i.value=!0),["Escape"].includes(l.key)&&(i.value=!1),D.value&&["Enter","Tab"].includes(l.key)&&w(V.value[0]),l.key==="ArrowDown"&&D.value&&((y=z.value)==null||y.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(s.value<0){l.key==="Backspace"&&!v.value&&(s.value=c-1);return}const r=s.value,b=u.value[s.value];b&&!b.props.disabled&&w(b),s.value=r>=c-1?c-2:r}if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const r=s.value>-1?s.value-1:c-1;u.value[r]?s.value=r:(s.value=-1,d.value.setSelectionRange((n=v.value)==null?void 0:n.length,(f=v.value)==null?void 0:f.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const r=s.value+1;u.value[r]?s.value=r:(s.value=-1,d.value.setSelectionRange(0,0))}}}function Ve(l){if(Y(d.value,":autofill")||Y(d.value,":-webkit-autofill")){const a=j.value.find(c=>c.title===l.target.value);a&&w(a)}}function ye(){var l;k.value&&(g.value=!0,(l=d.value)==null||l.focus())}function be(l){k.value=!0,setTimeout(()=>{_.value=!0})}function ke(l){_.value=!1}function Ce(l){(l==null||l===""&&!e.multiple)&&(u.value=[])}const F=I(!1);function w(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const c=u.value.findIndex(y=>e.valueComparator(y.value,l.value));if(c===-1)u.value=[...u.value,l];else{const y=[...u.value];y.splice(c,1),u.value=y}e.clearOnSelect&&(v.value="")}else u.value=a?[l]:[],F.value=!0,v.value=a?l.title:"",i.value=!1,g.value=!0,G(()=>F.value=!1)}return L(k,(l,a)=>{var c;l!==a&&(l?(F.value=!0,v.value=e.multiple?"":String(((c=u.value.at(-1))==null?void 0:c.props.title)??""),g.value=!0,G(()=>F.value=!1)):(!e.multiple&&v.value==null?u.value=[]:D.value&&!_.value&&!u.value.some(y=>{let{value:n}=y;return n===V.value[0].value})&&w(V.value[0]),i.value=!1,v.value="",s.value=-1))}),L(v,l=>{!k.value||F.value||(l&&(i.value=!0),g.value=!l)}),L(i,()=>{if(!e.hideSelected&&i.value&&u.value.length){const l=V.value.findIndex(a=>u.value.some(c=>a.value===c.value));Le&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=H.value)==null||a.scrollToIndex(l))})}}),L(V,(l,a)=>{k.value&&(!l.length&&e.hideNoData&&(i.value=!1),!a.length&&l.length&&(i.value=!0))}),Be(()=>{const l=!!(e.chips||t.chip),a=!!(!e.hideNoData||V.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),c=u.value.length>0,y=X.filterProps(e);return o(X,P({ref:d},y,{modelValue:v.value,"onUpdate:modelValue":[n=>v.value=n,Ce],focused:k.value,"onUpdate:focused":n=>k.value=n,validationValue:u.externalValue,counterValue:re.value,dirty:c,onChange:Ve,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":i.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:c?void 0:e.placeholder,"onClick:clear":me,"onMousedown:control":pe,onKeydown:ge}),{...t,default:()=>o(N,null,[o(ll,P({ref:U,modelValue:i.value,"onUpdate:modelValue":n=>i.value=n,activator:"parent",contentClass:"v-autocomplete__content",disabled:$.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ye},e.menuProps),{default:()=>[a&&o(Ze,P({ref:z,selected:ve.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onKeydown:fe,onFocusin:be,onFocusout:ke,onScrollPassive:de,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var n,f,r;return[(n=t["prepend-item"])==null?void 0:n.call(t),!V.value.length&&!e.hideNoData&&(((f=t["no-data"])==null?void 0:f.call(t))??o(ae,{title:h(e.noDataText)},null)),o(Fe,{ref:H,renderless:!0,items:V.value},{default:b=>{var J;let{item:m,index:S,itemRef:x}=b;const q=P(m.props,{ref:x,key:S,active:D.value&&S===0?!0:void 0,onClick:()=>w(m)});return((J=t.item)==null?void 0:J.call(t,{item:m,index:S,props:q}))??o(ae,q,{prepend:R=>{let{isSelected:M}=R;return o(N,null,[e.multiple&&!e.hideSelected?o(tl,{key:m.value,modelValue:M,ripple:!1,tabindex:"-1"},null):void 0,m.props.prependAvatar&&o(al,{image:m.props.prependAvatar},null),m.props.prependIcon&&o(Q,{icon:m.props.prependIcon},null)])},title:()=>{var R,M;return g.value?m.title:ul(m.title,(R=ce(m))==null?void 0:R.title,((M=v.value)==null?void 0:M.length)??0)}})}}),(r=t["append-item"])==null?void 0:r.call(t)]}})]}),u.value.map((n,f)=>{function r(x){x.stopPropagation(),x.preventDefault(),w(n,!1)}const b={"onClick:close":r,onMousedown(x){x.preventDefault(),x.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},m=l?!!t.chip:!!t.selection,S=m?Ne(l?t.chip({item:n,index:f,props:b}):t.selection({item:n,index:f})):void 0;if(!(m&&!S))return o("div",{key:n.value,class:["v-autocomplete__selection",f===s.value&&["v-autocomplete__selection--selected",se.value]],style:f===s.value?ie.value:{}},[l?t.chip?o(Oe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>[S]}):o(nl,P({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},b),null):S??o("span",{class:"v-autocomplete__selection-text"},[n.title,e.multiple&&f<u.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[Ee(",")])])])})]),"append-inner":function(){var b;for(var n=arguments.length,f=new Array(n),r=0;r<n;r++)f[r]=arguments[r];return o(N,null,[(b=t["append-inner"])==null?void 0:b.call(t,...f),e.menuIcon?o(Q,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:he,onClick:$e,"aria-label":h(W.value),title:h(W.value)},null):void 0])}})}),Qe({isFocused:k,isPristine:g,menu:i,search:v,filteredItems:E,select:w},d)}}),yl=Object.assign({name:"AppAutocomplete",inheritAttrs:!1},{__name:"AppAutocomplete",setup(e){const p=C(()=>{const h=Z(),d=h.id||h.label;return d?`app-autocomplete-${d}-${Math.random().toString(36).slice(2,7)}`:void 0}),t=C(()=>Z().label);return(h,d)=>(ee(),ze("div",{class:Je(["app-autocomplete flex-grow-1",h.$attrs.class])},[B(t)?(ee(),Ke(xe,{key:0,for:B(p),class:"mb-1 text-body-2",text:B(t)},null,8,["for","text"])):Ue("",!0),o(sl,le(te({...h.$attrs,class:null,label:void 0,id:B(p),variant:"outlined",menuProps:{contentClass:["app-inner-list","app-autocomplete__content","v-autocomplete__content"]}})),He({_:2},[We(h.$slots,(k,g)=>({name:g,fn:je(_=>[qe(h.$slots,g,le(te(_||{})))])}))]),1040)],2))}});export{yl as _};
