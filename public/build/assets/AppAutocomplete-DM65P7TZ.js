import{b as we,V as xe}from"./form-Ca0bS9AQ.js";import{m as Se,u as Ae,a as _e}from"./VSelect-APMMrNYL.js";import{m as Fe,V as G}from"./VTextField-CWgA6buZ.js";import{aL as Ie,bi as Pe,aO as De,bx as Re,r as T,as as I,aP as z,a5 as C,bf as Me,cg as Te,w as L,aB as J,bL as Le,aU as Be,b as o,F as N,s as P,a1 as Q,cx as Ne,aV as Oe,v as Ee,cA as Ue,bZ as X,cy as Y,o as ee,c as $e,n as B,f as ze,z as Ke,ac as He,i as je,e as qe,A as We,aw as le,ax as te,y as Ze}from"./main-p-5DQ3fZ.js";import{m as Ge,u as Je}from"./filter-BR9L3Kek.js";import{f as Qe}from"./forwardRefs-C-GTDzx5.js";import{u as Xe,V as Ye,a as ae}from"./VList-O1LucjXW.js";import{m as el}from"./index-DyCmQs2G.js";import{V as ll}from"./VMenu-BE0APXIu.js";import{V as tl}from"./VCheckboxBtn-CtHYOLz9.js";import{V as al}from"./VAvatar-BXy3EmlP.js";import{V as nl}from"./VChip-sCNXMvma.js";function ul(e,p,t){if(p==null)return e;if(Array.isArray(p))throw new Error("Multiple matches is not implemented");return typeof p=="number"&&~p?o(N,null,[o("span",{class:"v-autocomplete__unmask"},[e.substr(0,p)]),o("span",{class:"v-autocomplete__mask"},[e.substr(p,t)]),o("span",{class:"v-autocomplete__unmask"},[e.substr(p+t)])]):e}const ol=Ie({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Ge({filterKeys:["title"]}),...Se(),...Pe(Fe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...el({transition:!1})},"VAutocomplete"),sl=De()({name:"VAutocomplete",props:ol(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,p){let{slots:t}=p;const{t:h}=Re(),d=T(),k=I(!1),g=I(!0),A=I(!1),K=T(),H=T(),O=z(e,"menu"),i=C({get:()=>O.value,set:l=>{var a;O.value&&!l&&((a=K.value)!=null&&a.ΨopenChildren)||(O.value=l)}}),s=I(-1),ne=C(()=>{var l;return(l=d.value)==null?void 0:l.color}),j=C(()=>i.value?e.closeText:e.openText),{items:q,transformIn:ue,transformOut:oe}=Xe(e),{textColorClasses:se,textColorStyles:ie}=Me(ne),v=z(e,"search",""),u=z(e,"modelValue",[],l=>ue(l===null?[null]:Te(l)),l=>{const a=oe(l);return e.multiple?a:a[0]??null}),re=C(()=>typeof e.counterValue=="function"?e.counterValue(u.value):typeof e.counterValue=="number"?e.counterValue:u.value.length),_=we(),{filteredItems:E,getMatches:ce}=Je(e,q,()=>g.value?"":v.value),V=C(()=>e.hideSelected?E.value.filter(l=>!u.value.some(a=>a.value===l.value)):E.value),ve=C(()=>u.value.map(l=>l.props.value)),D=C(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((a=V.value[0])==null?void 0:a.title))&&V.value.length>0&&!g.value&&!A.value}),U=C(()=>e.hideNoData&&!V.value.length||e.readonly||(_==null?void 0:_.isReadonly.value)),$=T(),{onListScroll:de,onListKeydown:fe}=Ae($,d);function me(l){e.openOnClear&&(i.value=!0),v.value=""}function pe(){U.value||(i.value=!0)}function he(l){U.value||(k.value&&(l.preventDefault(),l.stopPropagation()),i.value=!i.value)}function ge(l){var y,n,f;if(e.readonly||_!=null&&_.isReadonly.value)return;const a=d.value.selectionStart,c=u.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(i.value=!0),["Escape"].includes(l.key)&&(i.value=!1),D.value&&["Enter","Tab"].includes(l.key)&&w(V.value[0]),l.key==="ArrowDown"&&D.value&&((y=$.value)==null||y.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(s.value<0){l.key==="Backspace"&&!v.value&&(s.value=c-1);return}const r=s.value,b=u.value[s.value];b&&!b.props.disabled&&w(b),s.value=r>=c-1?c-2:r}if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const r=s.value>-1?s.value-1:c-1;u.value[r]?s.value=r:(s.value=-1,d.value.setSelectionRange((n=v.value)==null?void 0:n.length,(f=v.value)==null?void 0:f.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const r=s.value+1;u.value[r]?s.value=r:(s.value=-1,d.value.setSelectionRange(0,0))}}}function Ve(l){if(X(d.value,":autofill")||X(d.value,":-webkit-autofill")){const a=q.value.find(c=>c.title===l.target.value);a&&w(a)}}function ye(){var l;k.value&&(g.value=!0,(l=d.value)==null||l.focus())}function be(l){k.value=!0,setTimeout(()=>{A.value=!0})}function ke(l){A.value=!1}function Ce(l){(l==null||l===""&&!e.multiple)&&(u.value=[])}const F=I(!1);function w(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const c=u.value.findIndex(y=>e.valueComparator(y.value,l.value));if(c===-1)u.value=[...u.value,l];else{const y=[...u.value];y.splice(c,1),u.value=y}e.clearOnSelect&&(v.value="")}else u.value=a?[l]:[],F.value=!0,v.value=a?l.title:"",i.value=!1,g.value=!0,J(()=>F.value=!1)}return L(k,(l,a)=>{var c;l!==a&&(l?(F.value=!0,v.value=e.multiple?"":String(((c=u.value.at(-1))==null?void 0:c.props.title)??""),g.value=!0,J(()=>F.value=!1)):(!e.multiple&&v.value==null?u.value=[]:D.value&&!A.value&&!u.value.some(y=>{let{value:n}=y;return n===V.value[0].value})&&w(V.value[0]),i.value=!1,v.value="",s.value=-1))}),L(v,l=>{!k.value||F.value||(l&&(i.value=!0),g.value=!l)}),L(i,()=>{if(!e.hideSelected&&i.value&&u.value.length){const l=V.value.findIndex(a=>u.value.some(c=>a.value===c.value));Le&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=H.value)==null||a.scrollToIndex(l))})}}),L(V,(l,a)=>{k.value&&(!l.length&&e.hideNoData&&(i.value=!1),!a.length&&l.length&&(i.value=!0))}),Be(()=>{const l=!!(e.chips||t.chip),a=!!(!e.hideNoData||V.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),c=u.value.length>0,y=G.filterProps(e);return o(G,P({ref:d},y,{modelValue:v.value,"onUpdate:modelValue":[n=>v.value=n,Ce],focused:k.value,"onUpdate:focused":n=>k.value=n,validationValue:u.externalValue,counterValue:re.value,dirty:c,onChange:Ve,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":i.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:c?void 0:e.placeholder,"onClick:clear":me,"onMousedown:control":pe,onKeydown:ge}),{...t,default:()=>o(N,null,[o(ll,P({ref:K,modelValue:i.value,"onUpdate:modelValue":n=>i.value=n,activator:"parent",contentClass:"v-autocomplete__content",disabled:U.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ye},e.menuProps),{default:()=>[a&&o(Ye,P({ref:$,selected:ve.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onKeydown:fe,onFocusin:be,onFocusout:ke,onScrollPassive:de,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var n,f,r;return[(n=t["prepend-item"])==null?void 0:n.call(t),!V.value.length&&!e.hideNoData&&(((f=t["no-data"])==null?void 0:f.call(t))??o(ae,{title:h(e.noDataText)},null)),o(_e,{ref:H,renderless:!0,items:V.value},{default:b=>{var Z;let{item:m,index:x,itemRef:S}=b;const W=P(m.props,{ref:S,key:x,active:D.value&&x===0?!0:void 0,onClick:()=>w(m)});return((Z=t.item)==null?void 0:Z.call(t,{item:m,index:x,props:W}))??o(ae,W,{prepend:R=>{let{isSelected:M}=R;return o(N,null,[e.multiple&&!e.hideSelected?o(tl,{key:m.value,modelValue:M,ripple:!1,tabindex:"-1"},null):void 0,m.props.prependAvatar&&o(al,{image:m.props.prependAvatar},null),m.props.prependIcon&&o(Q,{icon:m.props.prependIcon},null)])},title:()=>{var R,M;return g.value?m.title:ul(m.title,(R=ce(m))==null?void 0:R.title,((M=v.value)==null?void 0:M.length)??0)}})}}),(r=t["append-item"])==null?void 0:r.call(t)]}})]}),u.value.map((n,f)=>{function r(S){S.stopPropagation(),S.preventDefault(),w(n,!1)}const b={"onClick:close":r,onMousedown(S){S.preventDefault(),S.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},m=l?!!t.chip:!!t.selection,x=m?Ne(l?t.chip({item:n,index:f,props:b}):t.selection({item:n,index:f})):void 0;if(!(m&&!x))return o("div",{key:n.value,class:["v-autocomplete__selection",f===s.value&&["v-autocomplete__selection--selected",se.value]],style:f===s.value?ie.value:{}},[l?t.chip?o(Oe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>[x]}):o(nl,P({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},b),null):x??o("span",{class:"v-autocomplete__selection-text"},[n.title,e.multiple&&f<u.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[Ee(",")])])])})]),"append-inner":function(){var b;for(var n=arguments.length,f=new Array(n),r=0;r<n;r++)f[r]=arguments[r];return o(N,null,[(b=t["append-inner"])==null?void 0:b.call(t,...f),e.menuIcon?o(Q,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:he,onClick:Ue,"aria-label":h(j.value),title:h(j.value)},null):void 0])}})}),Qe({isFocused:k,isPristine:g,menu:i,search:v,filteredItems:E,select:w},d)}}),bl=Object.assign({name:"AppAutocomplete",inheritAttrs:!1},{__name:"AppAutocomplete",setup(e){const p=C(()=>{const h=Y(),d=h.id||h.label;return d?`app-autocomplete-${d}-${Math.random().toString(36).slice(2,7)}`:void 0}),t=C(()=>Y().label);return(h,d)=>(ee(),$e("div",{class:Ze(["app-autocomplete flex-grow-1",h.$attrs.class])},[B(t)?(ee(),ze(xe,{key:0,for:B(p),class:"mb-1 text-body-2",text:B(t)},null,8,["for","text"])):Ke("",!0),o(sl,le(te({...h.$attrs,class:null,label:void 0,id:B(p),variant:"outlined",menuProps:{contentClass:["app-inner-list","app-autocomplete__content","v-autocomplete__content"]}})),He({_:2},[je(h.$slots,(k,g)=>({name:g,fn:qe(A=>[We(h.$slots,g,le(te(A||{})))])}))]),1040)],2))}});export{sl as V,bl as _};
