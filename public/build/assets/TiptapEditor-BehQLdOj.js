import{u as p,S as A,P as x,U as y,E as k}from"./index-DwfWH0oh.js";import{T as C}from"./index-CVC4y5Ey.js";import{r as b,w as V,a as h,o as d,c as u,n as t,b as n,e as r,a1 as o,z}from"./main-cX0WqYxM.js";import{V as T}from"./VDivider-nun6oEDR.js";const $={key:0,class:"d-flex gap-2 py-2 px-6 flex-wrap align-center editor"},j={__name:"TiptapEditor",props:{modelValue:{type:String,required:!0},placeholder:{type:String,required:!1}},emits:["update:modelValue"],setup(c,{emit:f}){const s=c,m=f,v=b(),e=p({content:s.modelValue,extensions:[A,C.configure({types:["heading","paragraph"]}),x.configure({placeholder:s.placeholder??"Write something here..."}),y],onUpdate(){e.value&&m("update:modelValue",e.value.getHTML())}});return V(()=>s.modelValue,()=>{var i,l;((i=e.value)==null?void 0:i.getHTML())!==s.modelValue&&((l=e.value)==null||l.commands.setContent(s.modelValue))}),(g,i)=>{const l=h("IconBtn");return d(),u("div",null,[t(e)?(d(),u("div",$,[n(l,{size:"small",rounded:"",variant:t(e).isActive("bold")?"tonal":"text",color:t(e).isActive("bold")?"primary":"default",onClick:i[0]||(i[0]=a=>t(e).chain().focus().toggleBold().run())},{default:r(()=>[n(o,{icon:"tabler-bold"})]),_:1},8,["variant","color"]),n(l,{size:"small",rounded:"",variant:t(e).isActive("underline")?"tonal":"text",color:t(e).isActive("underline")?"primary":"default",onClick:i[1]||(i[1]=a=>t(e).commands.toggleUnderline())},{default:r(()=>[n(o,{icon:"tabler-underline"})]),_:1},8,["variant","color"]),n(l,{size:"small",rounded:"",variant:t(e).isActive("italic")?"tonal":"text",color:t(e).isActive("italic")?"primary":"default",onClick:i[2]||(i[2]=a=>t(e).chain().focus().toggleItalic().run())},{default:r(()=>[n(o,{icon:"tabler-italic",class:"font-weight-medium"})]),_:1},8,["variant","color"]),n(l,{size:"small",rounded:"",variant:t(e).isActive("strike")?"tonal":"text",color:t(e).isActive("strike")?"primary":"default",onClick:i[3]||(i[3]=a=>t(e).chain().focus().toggleStrike().run())},{default:r(()=>[n(o,{icon:"tabler-strikethrough"})]),_:1},8,["variant","color"]),n(l,{size:"small",rounded:"",variant:t(e).isActive({textAlign:"left"})?"tonal":"text",color:t(e).isActive({textAlign:"left"})?"primary":"default",onClick:i[4]||(i[4]=a=>t(e).chain().focus().setTextAlign("left").run())},{default:r(()=>[n(o,{icon:"tabler-align-left"})]),_:1},8,["variant","color"]),n(l,{size:"small",rounded:"",color:t(e).isActive({textAlign:"center"})?"primary":"default",variant:t(e).isActive({textAlign:"center"})?"tonal":"text",onClick:i[5]||(i[5]=a=>t(e).chain().focus().setTextAlign("center").run())},{default:r(()=>[n(o,{icon:"tabler-align-center"})]),_:1},8,["color","variant"]),n(l,{size:"small",rounded:"",variant:t(e).isActive({textAlign:"right"})?"tonal":"text",color:t(e).isActive({textAlign:"right"})?"primary":"default",onClick:i[6]||(i[6]=a=>t(e).chain().focus().setTextAlign("right").run())},{default:r(()=>[n(o,{icon:"tabler-align-right"})]),_:1},8,["variant","color"]),n(l,{size:"small",rounded:"",variant:t(e).isActive({textAlign:"justify"})?"tonal":"text",color:t(e).isActive({textAlign:"justify"})?"primary":"default",onClick:i[7]||(i[7]=a=>t(e).chain().focus().setTextAlign("justify").run())},{default:r(()=>[n(o,{icon:"tabler-align-justified"})]),_:1},8,["variant","color"])])):z("",!0),n(T),n(t(k),{ref_key:"editorRef",ref:v,editor:t(e)},null,8,["editor"])])}}};export{j as _};
