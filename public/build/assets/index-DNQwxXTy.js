import{_ as le}from"./AppDateTimePicker-BFPrGBmv.js";import{_ as ae}from"./AppSelect-60N9cfxq.js";import{r as p,cD as K,cE as j,cF as M,a as oe,o as f,c as x,d as l,n as i,b as e,e as t,a1 as h,v as g,a7 as r,F as E,i as R,f as G,a6 as W,x as U,R as Z,U as H,w as ie,z as se}from"./main-CGWwRiT_.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as _,V as I}from"./VRow-Bzb-aqP7.js";import{V as w,d as ne,a as re}from"./VCard-B7k9GI3s.js";import{V as C}from"./VCardText-BmGyakr4.js";import{V as de}from"./VImg-Djij_NeG.js";import{u as ce,S as ue,P as me,U as pe,E as fe}from"./index-xtBNhjb8.js";import{T as ve}from"./index-Bg1MLeq1.js";import{V as O}from"./VDivider-BBNe6FC2.js";import{_ as _e}from"./AppTextField-B3ifRZFg.js";import{V as he,a as ge}from"./VTabs-DorzpTXn.js";import{V as xe,a as D}from"./VWindowItem-CvWcfEg4.js";import{V as L,a as B}from"./VRadioGroup-BkbmoJxx.js";import{V as N}from"./VTextField-C4nfnc5x.js";import{V as z}from"./VCheckbox-2XBWMHbN.js";import{V as be}from"./VSwitch-DdGF4Amw.js";import{V as ye}from"./form-DCP4nY8j.js";import"./VField-Ccw4JNiL.js";import"./index-BOYzkDlu.js";import"./easing-CjukEv2V.js";import"./VInput-b5mEzrmC.js";import"./index-DQUQ96P0.js";import"./VSelect-CeAw6mYM.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-D-gCIxkV.js";import"./ssrBoot-BHzMJUWh.js";import"./VAvatar-DQfbjzTA.js";import"./dialog-transition-CXbOcQ9P.js";import"./VMenu-BL4z1N2z.js";import"./VOverlay-DAfdTtIn.js";import"./lazy-CTqaGN_c.js";import"./scopeId-6IEgYeE5.js";import"./VCheckboxBtn-BaqJlnsa.js";import"./VSelectionControl-xPyoBWpO.js";import"./VChip-BqeweNy2.js";import"./VSlideGroup-De2DvjAX.js";/* empty css              *//* empty css                   */import"./VCounter-fGbJU7P4.js";const J=v=>(Z("data-v-91702071"),v=v(),H(),v),Ve={class:"flex"},Ae={class:"w-full h-auto relative"},we={key:0,class:"d-flex flex-column justify-center align-center gap-y-2 pa-12 drop-zone rounded"},Ce=J(()=>l("h4",{class:"text-h4"}," Drag and drop your image here. ",-1)),ke=J(()=>l("span",{class:"text-disabled"},"or",-1)),Se={key:1,class:"d-flex justify-center align-center gap-3 pa-8 drop-zone flex-wrap"},Pe={class:"mt-2"},Te={class:"clamp-text text-wrap"},$e={__name:"DropZone",setup(v){const A=p(),u=p([]),{open:k,onChange:P}=K({accept:"image/*"});function o(m){m==null||m.forEach(a=>{if(a.type.slice(0,6)!=="image/"){alert("Only image files are allowed");return}u.value.push({file:a,url:j(a).value??""})})}return P(m=>{if(m)for(const a of m)u.value.push({file:a,url:j(a).value??""})}),M(A,o),(m,a)=>{const d=oe("IconBtn");return f(),x("div",Ve,[l("div",Ae,[l("div",{ref_key:"dropZoneRef",ref:A,class:"cursor-pointer",onClick:a[1]||(a[1]=()=>i(k)())},[i(u).length===0?(f(),x("div",we,[e(d,{variant:"tonal",class:"rounded-sm"},{default:t(()=>[e(h,{icon:"tabler-upload"})]),_:1}),Ce,ke,e(r,{variant:"tonal",size:"small"},{default:t(()=>[g(" Browse Images ")]),_:1})])):(f(),x("div",Se,[e(I,{class:"match-height w-100"},{default:t(()=>[(f(!0),x(E,null,R(i(u),(T,$)=>(f(),G(_,{key:$,cols:"12",sm:"4"},{default:t(()=>[e(w,{ripple:!1,border:""},{default:t(()=>[e(C,{class:"d-flex flex-column",onClick:a[0]||(a[0]=W(()=>{},["stop"]))},{default:t(()=>[e(de,{src:T.url,width:"200px",height:"150px",class:"w-100 mx-auto"},null,8,["src"]),l("div",Pe,[l("span",Te,U(T.file.name),1),l("span",null,U(T.file.size/1e3)+" KB ",1)])]),_:2},1024),e(ne,null,{default:t(()=>[e(r,{variant:"text",block:"",onClick:W(F=>i(u).splice($,1),["stop"])},{default:t(()=>[g(" Remove File ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]))],512)])])}}},De=q($e,[["__scopeId","data-v-91702071"]]),ze={class:"pa-6 productDescriptionEditor"},Ie={key:0,class:"d-flex gap-1 flex-wrap align-center"},Ue={__name:"ProductDescriptionEditor",props:{modelValue:{type:String,required:!0},placeholder:{type:String,required:!1}},emits:["update:modelValue"],setup(v,{emit:A}){const u=v,k=A,P=p(),o=ce({content:u.modelValue,extensions:[ue,ve.configure({types:["heading","paragraph"]}),me.configure({placeholder:u.placeholder??"Write something here..."}),pe],onUpdate(){o.value&&k("update:modelValue",o.value.getHTML())}});return ie(()=>u.modelValue,()=>{var a,d;((a=o.value)==null?void 0:a.getHTML())!==u.modelValue&&((d=o.value)==null||d.commands.setContent(u.modelValue))}),(m,a)=>(f(),x("div",ze,[i(o)?(f(),x("div",Ie,[e(r,{size:"small",icon:"",rounded:"",variant:i(o).isActive("bold")?"tonal":"text",color:i(o).isActive("bold")?"primary":"default",onClick:a[0]||(a[0]=d=>i(o).chain().focus().toggleBold().run())},{default:t(()=>[e(h,{icon:"tabler-bold",class:"font-weight-medium"})]),_:1},8,["variant","color"]),e(r,{size:"small",icon:"",rounded:"",variant:i(o).isActive("underline")?"tonal":"text",color:i(o).isActive("underline")?"primary":"default",onClick:a[1]||(a[1]=d=>i(o).commands.toggleUnderline())},{default:t(()=>[e(h,{icon:"tabler-underline"})]),_:1},8,["variant","color"]),e(r,{size:"small",icon:"",rounded:"",variant:i(o).isActive("italic")?"tonal":"text",color:i(o).isActive("italic")?"primary":"default",onClick:a[2]||(a[2]=d=>i(o).chain().focus().toggleItalic().run())},{default:t(()=>[e(h,{icon:"tabler-italic",class:"font-weight-medium"})]),_:1},8,["variant","color"]),e(r,{size:"small",icon:"",rounded:"",variant:i(o).isActive("strike")?"tonal":"text",color:i(o).isActive("strike")?"primary":"default",onClick:a[3]||(a[3]=d=>i(o).chain().focus().toggleStrike().run())},{default:t(()=>[e(h,{icon:"tabler-strikethrough",size:"20"})]),_:1},8,["variant","color"]),e(r,{size:"small",icon:"",rounded:"",variant:i(o).isActive({textAlign:"left"})?"tonal":"text",color:i(o).isActive({textAlign:"left"})?"primary":"default",onClick:a[4]||(a[4]=d=>i(o).chain().focus().setTextAlign("left").run())},{default:t(()=>[e(h,{icon:"tabler-align-left",size:"20"})]),_:1},8,["variant","color"]),e(r,{size:"small",icon:"",rounded:"",color:i(o).isActive({textAlign:"center"})?"primary":"default",variant:i(o).isActive({textAlign:"center"})?"tonal":"text",onClick:a[5]||(a[5]=d=>i(o).chain().focus().setTextAlign("center").run())},{default:t(()=>[e(h,{icon:"tabler-align-center",size:"20"})]),_:1},8,["color","variant"]),e(r,{size:"small",icon:"",rounded:"",variant:i(o).isActive({textAlign:"right"})?"tonal":"text",color:i(o).isActive({textAlign:"right"})?"primary":"default",onClick:a[6]||(a[6]=d=>i(o).chain().focus().setTextAlign("right").run())},{default:t(()=>[e(h,{icon:"tabler-align-right",size:"20"})]),_:1},8,["variant","color"]),e(r,{size:"small",icon:"",rounded:"",variant:i(o).isActive({textAlign:"justify"})?"tonal":"text",color:i(o).isActive({textAlign:"justify"})?"primary":"default",onClick:a[7]||(a[7]=d=>i(o).chain().focus().setTextAlign("justify").run())},{default:t(()=>[e(h,{icon:"tabler-align-justified",size:"20"})]),_:1},8,["variant","color"])])):se("",!0),e(O,{class:"my-4"}),e(i(fe),{ref_key:"editorRef",ref:P,editor:i(o)},null,8,["editor"])]))}},c=v=>(Z("data-v-2a046f9f"),v=v(),H(),v),Be={class:"d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"},Ee=c(()=>l("div",{class:"d-flex flex-column justify-center"},[l("h4",{class:"text-h4 font-weight-medium"}," Add a new product "),l("div",{class:"text-body-1"}," Orders placed across your store ")],-1)),Re={class:"d-flex gap-4 align-center flex-wrap"},je=c(()=>l("span",{class:"mb-1"},"Description (optional)",-1)),Fe=c(()=>l("span",{class:"text-primary font-weight-medium text-sm cursor-pointer"},"Add Media from URL",-1)),Oe={class:"pe-3"},We={class:"text-truncate font-weight-medium text-start"},Le={class:"d-flex flex-column gap-y-4 ps-3"},Ne=c(()=>l("p",{class:"mb-0"}," Options ",-1)),Ke={class:"d-flex gap-x-4 align-center"},Me=c(()=>l("div",null,[l("div",{class:"text-base text-high-emphasis pb-2"}," Product in stock now: 54 "),l("div",{class:"text-base text-high-emphasis pb-2"}," Product in transit: 390 "),l("div",{class:"text-base text-high-emphasis pb-2"}," Last time restocked: 24th June, 2022 "),l("div",{class:"text-base text-high-emphasis pb-2"}," Total stock over lifetime: 2,430 ")],-1)),Ge={class:"text-high-emphasis font-weight-medium mb-1"},Ze={class:"text-sm"},He={class:"ps-3"},qe=c(()=>l("h5",{class:"text-h5 mb-6"}," Global Delivery ",-1)),Je=c(()=>l("div",null,[l("div",{class:"text-high-emphasis font-weight-medium mb-1"}," Worldwide delivery "),l("div",{class:"text-sm"},[g(" Only available with Shipping method: "),l("span",{class:"text-primary"}," Fulfilled by Company name ")])],-1)),Ye=c(()=>l("div",{class:"text-high-emphasis font-weight-medium mb-1"}," Selected Countries ",-1)),Qe=c(()=>l("div",null,[l("div",{class:"text-high-emphasis font-weight-medium mb-1"}," Local delivery "),l("div",{class:"text-sm"},[g(" Deliver to your country of residence "),l("span",{class:"text-primary"}," Change profile address ")])],-1)),Xe={class:"ps-3"},et=c(()=>l("div",{class:"mb-6 text-h6"}," Attributes ",-1)),tt={class:"d-flex flex-column gap-y-1"},lt={class:"d-flex flex-column mb-1"},at=c(()=>l("div",null,"Frozen Product",-1)),ot={class:"d-flex flex-column mb-1"},it=c(()=>l("div",null,"Expiry Date of Product",-1)),st={class:"ps-3"},nt=c(()=>l("h5",{class:"text-h5 mb-6"}," Advanced ",-1)),rt={class:"d-flex flex-sm-row flex-column flex-wrap justify-space-between gap-x-6 gap-y-4"},dt={class:"d-flex flex-raw align-center justify-space-between"},ct=c(()=>l("span",null,"In stock",-1)),ut={class:"d-flex flex-column gap-y-4"},mt=c(()=>l("div",{class:"d-flex text-sm justify-space-between w-100"},[l("div",{class:"text-high-emphasis"}," Category ")],-1)),pt={class:"d-flex gap-x-4"},ft={__name:"index",setup(v){const A=p(1),u=p(),k=p([]),{onChange:P}=K({accept:"image/*"});function o(V){V==null||V.forEach(n=>{if(n.type.slice(0,6)!=="image/"){alert("Only image files are allowed");return}k.value.push({file:n,url:j(n).value??""})})}P(V=>{if(V)for(const n of V)k.value.push({file:n,url:j(n).value??""})}),M(u,o);const m=p(`<p>
    Keep your account secure with authentication step.
    </p>`),a=p("Restock"),d=p(!0),T=[{desc:"You'll be responsible for product delivery.Any damage or delay during shipping may cost you a Damage fee",title:"Fulfilled by Seller",value:"Fulfilled by Seller"},{desc:"Your product, Our responsibility.For a measly fee, we will handle the delivery process for you.",title:"Fulfilled by Company name",value:"Fulfilled by Company name"}],$=p("Fulfilled by Company name"),F=p("Worldwide delivery"),y=p(["Biodegradable","Expiry Date"]),Y=[{icon:"tabler-cube",title:"Restock",value:"Restock"},{icon:"tabler-car",title:"Shipping",value:"Shipping"},{icon:"tabler-map-pin",title:"Global Delivery",value:"Global Delivery"},{icon:"tabler-world",title:"Attributes",value:"Attributes"},{icon:"tabler-lock",title:"Advanced",value:"Advanced"}];return(V,n)=>{const b=_e,Q=Ue,X=De,S=ae,ee=le;return f(),x("div",null,[l("div",Be,[Ee,l("div",Re,[e(r,{variant:"tonal",color:"secondary"},{default:t(()=>[g(" Discard ")]),_:1}),e(r,{variant:"tonal",color:"primary"},{default:t(()=>[g(" Save Draft ")]),_:1}),e(r,null,{default:t(()=>[g("Publish Product")]),_:1})])]),e(I,null,{default:t(()=>[e(_,{md:"8"},{default:t(()=>[e(w,{class:"mb-6",title:"Product Information"},{default:t(()=>[e(C,null,{default:t(()=>[e(I,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[e(b,{label:"Name",placeholder:"iPhone 14"})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(b,{label:"SKU",placeholder:"FXSK123U"})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(b,{label:"Barcode",placeholder:"0123-4567"})]),_:1}),e(_,null,{default:t(()=>[je,e(Q,{modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=s=>m.value=s),placeholder:"Product Description",class:"border rounded"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{class:"mb-6"},{default:t(()=>[e(re,null,{title:t(()=>[g(" Product Image ")]),append:t(()=>[Fe]),_:1}),e(C,null,{default:t(()=>[e(X)]),_:1})]),_:1}),e(w,{title:"Variants",class:"mb-6"},{default:t(()=>[e(C,null,{default:t(()=>[(f(!0),x(E,null,R(A.value,s=>(f(),G(I,{key:s},{default:t(()=>[e(_,{cols:"12",md:"4"},{default:t(()=>[e(S,{items:["Size","Color","Weight","Smell"],placeholder:"Select Variant",label:"Options"})]),_:1}),e(_,{cols:"12",md:"8",class:"d-flex align-self-end"},{default:t(()=>[e(b,{placeholder:"38",type:"number"})]),_:1})]),_:1}))),128)),e(r,{class:"mt-6","prepend-icon":"tabler-plus",onClick:n[1]||(n[1]=s=>A.value++)},{default:t(()=>[g(" Add another option ")]),_:1})]),_:1})]),_:1}),e(w,{title:"Inventory",class:"inventory-card"},{default:t(()=>[e(C,null,{default:t(()=>[e(I,null,{default:t(()=>[e(_,{cols:"12",md:"4"},{default:t(()=>[l("div",Oe,[e(he,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=s=>a.value=s),direction:"vertical",color:"primary",class:"v-tabs-pill"},{default:t(()=>[(f(),x(E,null,R(Y,(s,te)=>e(ge,{key:te},{default:t(()=>[e(h,{icon:s.icon,class:"me-2"},null,8,["icon"]),l("div",We,U(s.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"])])]),_:1}),e(O,{vertical:!V.$vuetify.display.smAndDown},null,8,["vertical"]),e(_,{cols:"12",md:"8"},{default:t(()=>[e(xe,{modelValue:a.value,"onUpdate:modelValue":n[9]||(n[9]=s=>a.value=s),class:"w-100",touch:!1},{default:t(()=>[e(D,{value:"Restock"},{default:t(()=>[l("div",Le,[Ne,l("div",Ke,[e(b,{label:"Add to Stock",placeholder:"Quantity"}),e(r,{class:"align-self-end"},{default:t(()=>[g(" Confirm ")]),_:1})]),Me])]),_:1}),e(D,{value:"Shipping"},{default:t(()=>[e(L,{modelValue:$.value,"onUpdate:modelValue":n[3]||(n[3]=s=>$.value=s),label:"Shipping Type",class:"ms-3"},{default:t(()=>[(f(),x(E,null,R(T,s=>e(B,{key:s.value,value:s.value,class:"mb-4"},{label:t(()=>[l("div",null,[l("div",Ge,U(s.title),1),l("div",Ze,U(s.desc),1)])]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(D,{value:"Global Delivery"},{default:t(()=>[l("div",He,[qe,e(L,{modelValue:F.value,"onUpdate:modelValue":n[4]||(n[4]=s=>F.value=s),label:"Global Delivery"},{default:t(()=>[e(B,{value:"Worldwide delivery",class:"mb-4"},{label:t(()=>[Je]),_:1}),e(B,{value:"Selected Countries",class:"mb-4"},{label:t(()=>[l("div",null,[Ye,e(N,{placeholder:"USA",style:{"min-inline-size":"200px"}})])]),_:1}),e(B,null,{label:t(()=>[Qe]),_:1})]),_:1},8,["modelValue"])])]),_:1}),e(D,{value:"Attributes"},{default:t(()=>[l("div",Xe,[et,l("div",tt,[e(z,{modelValue:y.value,"onUpdate:modelValue":n[5]||(n[5]=s=>y.value=s),label:"Fragile Product",value:"Fragile Product"},null,8,["modelValue"]),e(z,{modelValue:y.value,"onUpdate:modelValue":n[6]||(n[6]=s=>y.value=s),value:"Biodegradable",label:"Biodegradable"},null,8,["modelValue"]),e(z,{modelValue:y.value,"onUpdate:modelValue":n[7]||(n[7]=s=>y.value=s),value:"Frozen Product"},{label:t(()=>[l("div",lt,[at,e(N,{placeholder:"40 C",type:"number",style:{"min-inline-size":"250px"}})])]),_:1},8,["modelValue"]),e(z,{modelValue:y.value,"onUpdate:modelValue":n[8]||(n[8]=s=>y.value=s),value:"Expiry Date"},{label:t(()=>[l("div",ot,[it,e(ee,{"model-value":"2025-06-14",placeholder:"Select a Date"})])]),_:1},8,["modelValue"])])])]),_:1}),e(D,{value:"Advanced"},{default:t(()=>[l("div",st,[nt,l("div",rt,[e(S,{label:"Product ID Type",placeholder:"Select Product Type",items:["ISBN","UPC","EAN","JAN"]}),e(b,{label:"Product Id",placeholder:"100023"})])])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{md:"4",cols:"12"},{default:t(()=>[e(w,{title:"Pricing",class:"mb-6"},{default:t(()=>[e(C,null,{default:t(()=>[e(b,{label:"Best Price",placeholder:"Price",class:"mb-6"}),e(b,{label:"Discounted Price",placeholder:"$499",class:"mb-6"}),e(z,{modelValue:d.value,"onUpdate:modelValue":n[10]||(n[10]=s=>d.value=s),label:"Charge Tax on this product"},null,8,["modelValue"]),e(O,{class:"my-2"}),l("div",dt,[ct,e(be,{density:"compact"})])]),_:1})]),_:1}),e(w,{title:"Organize"},{default:t(()=>[e(C,null,{default:t(()=>[l("div",ut,[e(S,{placeholder:"Select Vendor",label:"Vendor",items:["Men's Clothing","Women's Clothing","Kid's Clothing"]}),l("div",null,[e(ye,{class:"d-flex"},{default:t(()=>[mt]),_:1}),l("div",pt,[e(S,{placeholder:"Select Category",items:["Household","Office","Electronics","Management","Automotive"]}),e(r,{rounded:"",icon:"tabler-plus",variant:"tonal"})])]),e(S,{placeholder:"Select Collection",label:"Collection",items:["Men's Clothing","Women's Clothing","Kid's Clothing"]}),e(S,{placeholder:"Select Status",label:"Status",items:["Published","Inactive","Scheduled"]}),e(b,{label:"Tags",placeholder:"Fashion, Trending, Summer"})])]),_:1})]),_:1})]),_:1})]),_:1})])}}},ll=q(ft,[["__scopeId","data-v-2a046f9f"]]);export{ll as default};
