import{bJ as at,aL as w,aP as B,a5 as x,bV as Pe,P as F,aQ as xe,w as Se,V as O,bU as Y,aO as _,bx as ae,aU as H,b as f,s as D,cs as lt,bt as C,r as V,aK as nt,ct as rt,bg as we,cg as Z,a0 as T,cu as q,cv as R,aT as ce,bA as ot,bC as ut,bj as st,bE as it,F as G,a1 as dt,a7 as ke,v as fe,a6 as ge,x as ct,aW as ee,bh as M,bk as ft}from"./main-kzKK1XE4.js";import{V as ve}from"./VPagination-woXwbF1u.js";import{V as gt}from"./VSelect-B-OkTK7V.js";import{V as le}from"./VCheckboxBtn-DO-m-uTG.js";import{m as vt,V as me}from"./VTable-Bn8Sveon.js";import{m as mt,u as ht}from"./filter-BqVARIH-.js";import{V as bt}from"./VDivider-BRvIS9W0.js";function he(e,a,l){return Object.keys(e).filter(t=>at(t)&&t.endsWith(a)).reduce((t,n)=>(t[n.slice(0,-a.length)]=r=>e[n](r,l(r)),t),{})}const yt=w({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Te=Symbol.for("vuetify:data-table-pagination");function pt(e){const a=B(e,"page",void 0,t=>+(t??1)),l=B(e,"itemsPerPage",void 0,t=>+(t??10));return{page:a,itemsPerPage:l}}function Pt(e){const{page:a,itemsPerPage:l,itemsLength:t}=e,n=x(()=>l.value===-1?0:l.value*(a.value-1)),r=x(()=>l.value===-1?t.value:Math.min(t.value,n.value+l.value)),s=x(()=>l.value===-1||t.value===0?1:Math.ceil(t.value/l.value));Pe(()=>{a.value>s.value&&(a.value=s.value)});function u(d){l.value=d,a.value=1}function o(){a.value=Y(a.value+1,1,s.value)}function i(){a.value=Y(a.value-1,1,s.value)}function c(d){a.value=Y(d,1,s.value)}const g={page:a,itemsPerPage:l,startIndex:n,stopIndex:r,pageCount:s,itemsLength:t,nextPage:o,prevPage:i,setPage:c,setItemsPerPage:u};return F(Te,g),g}function xt(){const e=O(Te);if(!e)throw new Error("Missing pagination!");return e}function St(e){const a=xe("usePaginatedItems"),{items:l,startIndex:t,stopIndex:n,itemsPerPage:r}=e,s=x(()=>r.value<=0?l.value:l.value.slice(t.value,n.value));return Se(s,u=>{a.emit("update:currentItems",u)}),{paginatedItems:s}}const De=w({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),be=_()({name:"VDataTableFooter",props:De(),setup(e,a){let{slots:l}=a;const{t}=ae(),{page:n,pageCount:r,startIndex:s,stopIndex:u,itemsLength:o,itemsPerPage:i,setItemsPerPage:c}=xt(),g=x(()=>e.itemsPerPageOptions.map(d=>typeof d=="number"?{value:d,title:d===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(d)}:{...d,title:t(d.title)}));return H(()=>{var b;const d=ve.filterProps(e);return f("div",{class:"v-data-table-footer"},[(b=l.prepend)==null?void 0:b.call(l),f("div",{class:"v-data-table-footer__items-per-page"},[f("span",null,[t(e.itemsPerPageText)]),f(gt,{items:g.value,modelValue:i.value,"onUpdate:modelValue":y=>c(Number(y)),density:"compact",variant:"outlined","hide-details":!0},null)]),f("div",{class:"v-data-table-footer__info"},[f("div",null,[t(e.pageText,o.value?s.value+1:0,u.value,o.value)])]),f("div",{class:"v-data-table-footer__pagination"},[f(ve,D({modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},d),null)])])}),{}}}),ne=lt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,a)=>{let{slots:l}=a;const t=e.tag??"td";return f(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:C(e.height),width:C(e.width),left:C(e.fixedOffset||null)}},{default:()=>{var n;return[(n=l.default)==null?void 0:n.call(l)]}})}),wt=w({headers:Array},"DataTable-header"),Ie=Symbol.for("vuetify:data-table-headers"),Ve={title:"",sortable:!1},kt={...Ve,width:48};function Tt(){const a=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(l=>({element:l,priority:0}));return{enqueue:(l,t)=>{let n=!1;for(let r=0;r<a.length;r++)if(a[r].priority>t){a.splice(r,0,{element:l,priority:t}),n=!0;break}n||a.push({element:l,priority:t})},size:()=>a.length,count:()=>{let l=0;if(!a.length)return 0;const t=Math.floor(a[0].priority);for(let n=0;n<a.length;n++)Math.floor(a[n].priority)===t&&(l+=1);return l},dequeue:()=>a.shift()}}function te(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)a.push(e);else for(const l of e.children)te(l,a);return a}function Ce(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const l of e)l.key&&a.add(l.key),l.children&&Ce(l.children,a);return a}function Dt(e){if(e.key){if(e.key==="data-table-group")return Ve;if(["data-table-expand","data-table-select"].includes(e.key))return kt}}function re(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(a,...e.children.map(l=>re(l,a+1))):a}function It(e){let a=!1;function l(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(s&&(r.fixed=!0),r.fixed)if(r.children)for(let u=r.children.length-1;u>=0;u--)l(r.children[u],!0);else a?isNaN(+r.width)&&rt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,a=!0;else if(r.children)for(let u=r.children.length-1;u>=0;u--)l(r.children[u]);else a=!1}for(let r=e.length-1;r>=0;r--)l(e[r]);function t(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return s;if(r.children){r.fixedOffset=s;for(const u of r.children)s=t(u,s)}else r.fixed&&(r.fixedOffset=s,s+=parseFloat(r.width||"0")||0);return s}let n=0;for(const r of e)n=t(r,n)}function Vt(e,a){const l=[];let t=0;const n=Tt(e);for(;n.size()>0;){let s=n.count();const u=[];let o=1;for(;s>0;){const{element:i,priority:c}=n.dequeue(),g=a-t-re(i);if(u.push({...i,rowspan:g??1,colspan:i.children?te(i).length:1}),i.children)for(const d of i.children){const b=c%1+o/Math.pow(10,t+2);n.enqueue(d,t+g+b)}o+=1,s-=1}t+=1,l.push(u)}return{columns:e.map(s=>te(s)).flat(),headers:l}}function Be(e){const a=[];for(const l of e){const t={...Dt(l),...l},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,s={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?Be(t.children):void 0};a.push(s)}return a}function Ct(e,a){const l=V([]),t=V([]),n=V({}),r=V({}),s=V({});Pe(()=>{var v,m,P;const i=(e.headers||Object.keys(e.items[0]??{}).map(p=>({key:p,title:nt(p)}))).slice(),c=Ce(i);(v=a==null?void 0:a.groupBy)!=null&&v.value.length&&!c.has("data-table-group")&&i.unshift({key:"data-table-group",title:"Group"}),(m=a==null?void 0:a.showSelect)!=null&&m.value&&!c.has("data-table-select")&&i.unshift({key:"data-table-select"}),(P=a==null?void 0:a.showExpand)!=null&&P.value&&!c.has("data-table-expand")&&i.push({key:"data-table-expand"});const g=Be(i);It(g);const d=Math.max(...g.map(p=>re(p)))+1,b=Vt(g,d);l.value=b.headers,t.value=b.columns;const y=b.headers.flat(1);for(const p of y)p.key&&(p.sortable&&(p.sort&&(n.value[p.key]=p.sort),p.sortRaw&&(r.value[p.key]=p.sortRaw)),p.filter&&(s.value[p.key]=p.filter))});const u={headers:l,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:s};return F(Ie,u),u}function U(){const e=O(Ie);if(!e)throw new Error("Missing headers!");return e}const Bt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:a,value:l}=e;return new Set(l?[(t=a[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:a}=e;return a}},Fe={showSelectAll:!0,allSelected:e=>{let{currentPage:a}=e;return a},select:e=>{let{items:a,value:l,selected:t}=e;for(const n of a)l?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:a,currentPage:l,selected:t}=e;return Fe.select({items:l,value:a,selected:t})}},Oe={showSelectAll:!0,allSelected:e=>{let{allItems:a}=e;return a},select:e=>{let{items:a,value:l,selected:t}=e;for(const n of a)l?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:a,allItems:l,selected:t}=e;return Oe.select({items:l,value:a,selected:t})}},Ft=w({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:we}},"DataTable-select"),_e=Symbol.for("vuetify:data-table-selection");function Ot(e,a){let{allItems:l,currentPage:t}=a;const n=B(e,"modelValue",e.modelValue,m=>new Set(Z(m).map(P=>{var p;return((p=l.value.find(S=>e.valueComparator(P,S.value)))==null?void 0:p.value)??P})),m=>[...m.values()]),r=x(()=>l.value.filter(m=>m.selectable)),s=x(()=>t.value.filter(m=>m.selectable)),u=x(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Bt;case"all":return Oe;case"page":default:return Fe}});function o(m){return Z(m).every(P=>n.value.has(P.value))}function i(m){return Z(m).some(P=>n.value.has(P.value))}function c(m,P){const p=u.value.select({items:m,value:P,selected:new Set(n.value)});n.value=p}function g(m){c([m],!o([m]))}function d(m){const P=u.value.selectAll({value:m,allItems:r.value,currentPage:s.value,selected:new Set(n.value)});n.value=P}const b=x(()=>n.value.size>0),y=x(()=>{const m=u.value.allSelected({allItems:r.value,currentPage:s.value});return!!m.length&&o(m)}),v={toggleSelect:g,select:c,selectAll:d,isSelected:o,isSomeSelected:i,someSelected:b,allSelected:y,showSelectAll:u.value.showSelectAll};return F(_e,v),v}function z(){const e=O(_e);if(!e)throw new Error("Missing selection!");return e}const _t=w({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Ae=Symbol.for("vuetify:data-table-sort");function At(e){const a=B(e,"sortBy"),l=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:a,mustSort:l,multiSort:t}}function Et(e){const{sortBy:a,mustSort:l,multiSort:t,page:n}=e,r=o=>{if(o.key==null)return;let i=a.value.map(g=>({...g}))??[];const c=i.find(g=>g.key===o.key);c?c.order==="desc"?l.value?c.order="asc":i=i.filter(g=>g.key!==o.key):c.order="desc":t.value?i=[...i,{key:o.key,order:"asc"}]:i=[{key:o.key,order:"asc"}],a.value=i,n&&(n.value=1)};function s(o){return!!a.value.find(i=>i.key===o.key)}const u={sortBy:a,toggleSort:r,isSorted:s};return F(Ae,u),u}function $t(){const e=O(Ae);if(!e)throw new Error("Missing sort!");return e}function Nt(e,a,l,t,n){const r=ae();return{sortedItems:x(()=>l.value.length?Gt(a.value,l.value,r.current.value,{...e.customKeySort,...t==null?void 0:t.value},n==null?void 0:n.value):a.value)}}function Gt(e,a,l,t,n){const r=new Intl.Collator(l,{sensitivity:"accent",usage:"sort"});return[...e].sort((s,u)=>{for(let o=0;o<a.length;o++){const i=a[o].key,c=a[o].order??"asc";if(c===!1)continue;let g=q(s.raw,i),d=q(u.raw,i),b=s.raw,y=u.raw;if(c==="desc"&&([g,d]=[d,g],[b,y]=[y,b]),n!=null&&n[i]){const v=n[i](b,y);if(!v)continue;return v}if(t!=null&&t[i]){const v=t[i](g,d);if(!v)continue;return v}if(g instanceof Date&&d instanceof Date)return g.getTime()-d.getTime();if([g,d]=[g,d].map(v=>v!=null?v.toString().toLocaleLowerCase():v),g!==d)return R(g)&&R(d)?0:R(g)?-1:R(d)?1:!isNaN(g)&&!isNaN(d)?Number(g)-Number(d):r.compare(g,d)}return 0})}const Ee=w({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:ce,default:"$sortAsc"},sortDescIcon:{type:ce,default:"$sortDesc"},headerProps:{type:Object},...ot()},"VDataTableHeaders"),ye=_()({name:"VDataTableHeaders",props:Ee(),setup(e,a){let{slots:l}=a;const{toggleSort:t,sortBy:n,isSorted:r}=$t(),{someSelected:s,allSelected:u,selectAll:o,showSelectAll:i}=z(),{columns:c,headers:g}=U(),{loaderClasses:d}=ut(e);function b(S,h){if(!(!e.sticky&&!S.fixed))return{position:"sticky",left:S.fixed?C(S.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${h})`:void 0}}function y(S){const h=n.value.find(I=>I.key===S.key);return h?h.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:v,backgroundColorStyles:m}=st(e,"color"),P=x(()=>({headers:g.value,columns:c.value,toggleSort:t,isSorted:r,sortBy:n.value,someSelected:s.value,allSelected:u.value,selectAll:o,getSortIcon:y})),p=S=>{let{column:h,x:I,y:A}=S;const K=h.key==="data-table-select"||h.key==="data-table-expand",W=D(e.headerProps??{},h.headerProps??{});return f(ne,D({tag:"th",align:h.align,class:["v-data-table__th",{"v-data-table__th--sortable":h.sortable,"v-data-table__th--sorted":r(h),"v-data-table__th--fixed":h.fixed,"v-data-table__th--sticky":e.sticky},d.value],style:{width:C(h.width),minWidth:C(h.minWidth),...b(h,A)},colspan:h.colspan,rowspan:h.rowspan,onClick:h.sortable?()=>t(h):void 0,fixed:h.fixed,lastFixed:h.lastFixed,noPadding:K},W),{default:()=>{var L;const E=`header.${h.key}`,j={column:h,selectAll:o,isSorted:r,toggleSort:t,sortBy:n.value,someSelected:s.value,allSelected:u.value,getSortIcon:y};return l[E]?l[E](j):h.key==="data-table-select"?((L=l["header.data-table-select"])==null?void 0:L.call(l,j))??(i&&f(le,{modelValue:u.value,indeterminate:s.value&&!u.value,"onUpdate:modelValue":o},null)):f("div",{class:"v-data-table-header__content"},[f("span",null,[h.title]),h.sortable&&f(dt,{key:"icon",class:"v-data-table-header__sort-icon",icon:y(h)},null),e.multiSort&&r(h)&&f("div",{key:"badge",class:["v-data-table-header__sort-badge",...v.value],style:m.value},[n.value.findIndex(Q=>Q.key===h.key)+1])])}})};H(()=>f(G,null,[l.headers?l.headers(P.value):g.value.map((S,h)=>f("tr",null,[S.map((I,A)=>f(p,{column:I,x:A,y:h},null))])),e.loading&&f("tr",{class:"v-data-table-progress"},[f("th",{colspan:c.value.length},[f(it,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:l.loader})])])]))}}),Ht=w({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),$e=Symbol.for("vuetify:data-table-group");function jt(e){return{groupBy:B(e,"groupBy")}}function Lt(e){const{groupBy:a,sortBy:l}=e,t=V(new Set),n=x(()=>a.value.map(i=>({...i,order:i.order??!1})).concat(l.value));function r(i){return t.value.has(i.id)}function s(i){const c=new Set(t.value);r(i)?c.delete(i.id):c.add(i.id),t.value=c}function u(i){function c(g){const d=[];for(const b of g.items)"type"in b&&b.type==="group"?d.push(...c(b)):d.push(b);return d}return c({type:"group",items:i,id:"dummy",key:"dummy",value:"dummy",depth:0})}const o={sortByWithGroups:n,toggleGroup:s,opened:t,groupBy:a,extractRows:u,isGroupOpen:r};return F($e,o),o}function Ne(){const e=O($e);if(!e)throw new Error("Missing group!");return e}function Rt(e,a){if(!e.length)return[];const l=new Map;for(const t of e){const n=q(t.raw,a);l.has(n)||l.set(n,[]),l.get(n).push(t)}return l}function Ge(e,a){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!a.length)return[];const n=Rt(e,a[0]),r=[],s=a.slice(1);return n.forEach((u,o)=>{const i=a[0],c=`${t}_${i}_${o}`;r.push({depth:l,id:c,key:i,value:o,items:s.length?Ge(u,s,l+1,c):u,type:"group"})}),r}function He(e,a){const l=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&l.push(t),(a.has(t.id)||t.value==null)&&l.push(...He(t.items,a))):l.push(t);return l}function Mt(e,a,l){return{flatItems:x(()=>{if(!a.value.length)return e.value;const n=Ge(e.value,a.value.map(r=>r.key));return He(n,l.value)})}}const qt=w({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Ut=_()({name:"VDataTableGroupHeaderRow",props:qt(),setup(e,a){let{slots:l}=a;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=Ne(),{isSelected:s,isSomeSelected:u,select:o}=z(),{columns:i}=U(),c=x(()=>r([e.item]));return()=>f("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(g=>{var d,b;if(g.key==="data-table-group"){const y=t(e.item)?"$expand":"$next",v=()=>n(e.item);return((d=l["data-table-group"])==null?void 0:d.call(l,{item:e.item,count:c.value.length,props:{icon:y,onClick:v}}))??f(ne,{class:"v-data-table-group-header-row__column"},{default:()=>[f(ke,{size:"small",variant:"text",icon:y,onClick:v},null),f("span",null,[e.item.value]),f("span",null,[fe("("),c.value.length,fe(")")])]})}if(g.key==="data-table-select"){const y=s(c.value),v=u(c.value)&&!y,m=P=>o(c.value,P);return((b=l["data-table-select"])==null?void 0:b.call(l,{props:{modelValue:y,indeterminate:v,"onUpdate:modelValue":m}}))??f("td",null,[f(le,{modelValue:y,indeterminate:v,"onUpdate:modelValue":m},null)])}return f("td",null,null)})])}}),zt=w({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),je=Symbol.for("vuetify:datatable:expanded");function Kt(e){const a=T(e,"expandOnClick"),l=B(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function t(u,o){const i=new Set(l.value);o?i.add(u.value):i.delete(u.value),l.value=i}function n(u){return l.value.has(u.value)}function r(u){t(u,!n(u))}const s={expand:t,expanded:l,expandOnClick:a,isExpanded:n,toggleExpand:r};return F(je,s),s}function Le(){const e=O(je);if(!e)throw new Error("foo");return e}const Wt=w({index:Number,item:Object,cellProps:[Object,Function],onClick:ee(),onContextmenu:ee(),onDblclick:ee()},"VDataTableRow"),Qt=_()({name:"VDataTableRow",props:Wt(),setup(e,a){let{slots:l}=a;const{isSelected:t,toggleSelect:n}=z(),{isExpanded:r,toggleExpand:s}=Le(),{columns:u}=U();H(()=>f("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&u.value.map((o,i)=>{const c=e.item,g=`item.${o.key}`,d={index:e.index,item:c.raw,internalItem:c,value:q(c.columns,o.key),column:o,isSelected:t,toggleSelect:n,isExpanded:r,toggleExpand:s},b=typeof e.cellProps=="function"?e.cellProps({index:d.index,item:d.item,internalItem:d.internalItem,value:d.value,column:o}):e.cellProps,y=typeof o.cellProps=="function"?o.cellProps({index:d.index,item:d.item,internalItem:d.internalItem,value:d.value}):o.cellProps;return f(ne,D({align:o.align,fixed:o.fixed,fixedOffset:o.fixedOffset,lastFixed:o.lastFixed,noPadding:o.key==="data-table-select"||o.key==="data-table-expand",width:o.width},b,y),{default:()=>{var v,m;return l[g]?l[g](d):o.key==="data-table-select"?((v=l["item.data-table-select"])==null?void 0:v.call(l,d))??f(le,{disabled:!c.selectable,modelValue:t([c]),onClick:ge(()=>n(c),["stop"])},null):o.key==="data-table-expand"?((m=l["item.data-table-expand"])==null?void 0:m.call(l,d))??f(ke,{icon:r(c)?"$collapse":"$expand",size:"small",variant:"text",onClick:ge(()=>s(c),["stop"])},null):ct(d.value)}})})]))}}),Re=w({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),pe=_()({name:"VDataTableRows",inheritAttrs:!1,props:Re(),setup(e,a){let{attrs:l,slots:t}=a;const{columns:n}=U(),{expandOnClick:r,toggleExpand:s,isExpanded:u}=Le(),{isSelected:o,toggleSelect:i}=z(),{toggleGroup:c,isGroupOpen:g}=Ne(),{t:d}=ae();return H(()=>{var b,y;return e.loading&&(!e.items.length||t.loading)?f("tr",{class:"v-data-table-rows-loading",key:"loading"},[f("td",{colspan:n.value.length},[((b=t.loading)==null?void 0:b.call(t))??d(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?f("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[f("td",{colspan:n.value.length},[((y=t["no-data"])==null?void 0:y.call(t))??d(e.noDataText)])]):f(G,null,[e.items.map((v,m)=>{var S;if(v.type==="group"){const h={index:m,item:v,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:o,toggleSelect:i,toggleGroup:c,isGroupOpen:g};return t["group-header"]?t["group-header"](h):f(Ut,D({key:`group-header_${v.id}`,item:v},he(l,":group-header",()=>h)),t)}const P={index:m,item:v.raw,internalItem:v,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:o,toggleSelect:i},p={...P,props:D({key:`item_${v.key??v.index}`,onClick:r.value?()=>{s(v)}:void 0,index:m,item:v,cellProps:e.cellProps},he(l,":row",()=>P),typeof e.rowProps=="function"?e.rowProps({item:P.item,index:P.index,internalItem:P.internalItem}):e.rowProps)};return f(G,{key:p.props.key},[t.item?t.item(p):f(Qt,p.props,t),u(v)&&((S=t["expanded-row"])==null?void 0:S.call(t,P))])})])}),{}}}),Jt=w({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Xt(e,a,l,t){const n=e.returnObject?a:M(a,e.itemValue),r=M(a,e.itemSelectable,!0),s=t.reduce((u,o)=>(o.key!=null&&(u[o.key]=M(a,o.value)),u),{});return{type:"item",key:e.returnObject?M(a,e.itemValue):n,index:l,value:n,selectable:r,columns:s,raw:a}}function Yt(e,a,l){return a.map((t,n)=>Xt(e,t,n,l))}function Zt(e,a){return{items:x(()=>Yt(e,e.items,a.value))}}function ea(e){let{page:a,itemsPerPage:l,sortBy:t,groupBy:n,search:r}=e;const s=xe("VDataTable"),u=x(()=>({page:a.value,itemsPerPage:l.value,sortBy:t.value,groupBy:n.value,search:r.value}));let o=null;Se(u,()=>{we(o,u.value)||((o==null?void 0:o.search)!==u.value.search&&(a.value=1),s.emit("update:options",u.value),o=u.value)},{deep:!0,immediate:!0})}const ta=w({...Re(),width:[String,Number],search:String,...zt(),...Ht(),...wt(),...Jt(),...Ft(),..._t(),...Ee(),...vt()},"DataTable"),aa=w({...yt(),...ta(),...mt(),...De()},"VDataTable"),da=_()({name:"VDataTable",props:aa(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,a){let{attrs:l,slots:t}=a;const{groupBy:n}=jt(e),{sortBy:r,multiSort:s,mustSort:u}=At(e),{page:o,itemsPerPage:i}=pt(e),{columns:c,headers:g,sortFunctions:d,sortRawFunctions:b,filterFunctions:y}=Ct(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:v}=Zt(e,c),m=T(e,"search"),{filteredItems:P}=ht(e,v,m,{transform:$=>$.columns,customKeyFilter:y}),{toggleSort:p}=Et({sortBy:r,multiSort:s,mustSort:u,page:o}),{sortByWithGroups:S,opened:h,extractRows:I,isGroupOpen:A,toggleGroup:K}=Lt({groupBy:n,sortBy:r}),{sortedItems:W}=Nt(e,P,S,d,b),{flatItems:E}=Mt(W,n,h),j=x(()=>E.value.length),{startIndex:L,stopIndex:Q,pageCount:Me,setItemsPerPage:qe}=Pt({page:o,itemsPerPage:i,itemsLength:j}),{paginatedItems:J}=St({items:E,startIndex:L,stopIndex:Q,itemsPerPage:i}),X=x(()=>I(J.value)),{isSelected:Ue,select:ze,selectAll:Ke,toggleSelect:We,someSelected:Qe,allSelected:Je}=Ot(e,{allItems:v,currentPage:X}),{isExpanded:Xe,toggleExpand:Ye}=Kt(e);ea({page:o,itemsPerPage:i,sortBy:r,groupBy:n,search:m}),ft({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const k=x(()=>({page:o.value,itemsPerPage:i.value,sortBy:r.value,pageCount:Me.value,toggleSort:p,setItemsPerPage:qe,someSelected:Qe.value,allSelected:Je.value,isSelected:Ue,select:ze,selectAll:Ke,toggleSelect:We,isExpanded:Xe,toggleExpand:Ye,isGroupOpen:A,toggleGroup:K,items:X.value.map($=>$.raw),internalItems:X.value,groupedItems:J.value,columns:c.value,headers:g.value}));return H(()=>{const $=be.filterProps(e),Ze=ye.filterProps(e),et=pe.filterProps(e),tt=me.filterProps(e);return f(me,D({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},tt),{top:()=>{var N;return(N=t.top)==null?void 0:N.call(t,k.value)},default:()=>{var N,oe,ue,se,ie,de;return t.default?t.default(k.value):f(G,null,[(N=t.colgroup)==null?void 0:N.call(t,k.value),f("thead",null,[f(ye,Ze,t)]),(oe=t.thead)==null?void 0:oe.call(t,k.value),f("tbody",null,[(ue=t["body.prepend"])==null?void 0:ue.call(t,k.value),t.body?t.body(k.value):f(pe,D(l,et,{items:J.value}),t),(se=t["body.append"])==null?void 0:se.call(t,k.value)]),(ie=t.tbody)==null?void 0:ie.call(t,k.value),(de=t.tfoot)==null?void 0:de.call(t,k.value)])},bottom:()=>t.bottom?t.bottom(k.value):f(G,null,[f(bt,null,null),f(be,$,{prepend:t["footer.prepend"]})])})}),{}}});export{da as V,ta as a,De as b,jt as c,At as d,pt as e,Ct as f,Lt as g,Pt as h,Mt as i,Ot as j,Kt as k,ea as l,yt as m,be as n,ye as o,Et as p,pe as q,Zt as u};
