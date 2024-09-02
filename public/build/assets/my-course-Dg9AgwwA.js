import{_ as D}from"./AppTextField-I5UKlFC7.js";import{R as P}from"./videojs-player.esm-CGTZs1GS.js";import{_ as G}from"./AppSelect-BU0A07f2.js";import{u as N}from"./useApi-DH1vi0H5.js";import{c as Q}from"./createUrl-COmG91s7.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as X}from"./VSwitch-BfwotbkF.js";import{V as B,a as w}from"./VRow-DZV-I3wT.js";import{V as f}from"./VCard-BoF5Se1H.js";import{V as O}from"./VImg-BIXW4ypZ.js";import{V as h}from"./VCardText-DociP0vQ.js";import{V as Y}from"./VChip-D-BI3-AX.js";import{r as _,ad as H,a5 as z,w as J,a as K,o as i,f as k,e as s,b as t,d as e,n as a,a3 as T,c as V,i as F,v as y,x as n,a1 as v,a4 as Z,a7 as C,z as ee,F as S,R as te,U as se,y as A}from"./main-C3aczJNT.js";import{V as oe}from"./VPagination-CkqzN_bH.js";import{V as ae}from"./VAvatar-BM8r58xX.js";import"./form-DXUotdvJ.js";import"./VTextField-D1okVibP.js";/* empty css                   */import"./VCounter-DAsHO5of.js";import"./index-D3sZMnWI.js";import"./index-Ci2pHsMa.js";import"./VField-BBoh8nI9.js";import"./easing-CjukEv2V.js";import"./VInput-DvThVAav.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-Cw7rSbey.js";import"./VList-ceCjrQSh.js";import"./ssrBoot-NmuqpgkZ.js";import"./VDivider-DdRZAoVo.js";import"./dialog-transition-JvXzrIWR.js";import"./VMenu-B8h2e246.js";import"./VOverlay-5L4FjIyo.js";import"./lazy-Bwi8doWD.js";import"./scopeId-Coc7ZcXg.js";import"./VCheckboxBtn-CpzlI66m.js";import"./VSelectionControl-xLF5omUn.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VSlideGroup-DEAEgikf.js";const R=g=>(te("data-v-3115a565"),g=g(),se(),g),le={class:"d-flex justify-space-between align-center flex-wrap gap-4 mb-6"},re=R(()=>e("div",null,[e("h5",{class:"text-h5"}," My Courses "),e("div",{class:"text-body-1"}," Total 6 course you have purchased ")],-1)),ie={class:"d-flex flex-wrap gap-x-6 gap-y-4 align-center"},ne={class:"mb-6"},ce={class:"px-2 pt-2"},de={class:"d-flex justify-space-between align-center mb-4"},ue={class:"d-flex"},pe={class:"text-h6 text-medium-emphasis align-center me-1"},me={class:"text-body-1"},_e={class:"text-h5 mb-1"},fe={key:0,class:"d-flex align-center mb-1"},he={class:"text-body-1 my-auto"},ye={key:1,class:"mb-1"},ge=R(()=>e("span",{class:"text-success text-body-1"},"Completed",-1)),xe={class:"d-flex flex-wrap gap-4"},ve={__name:"AcademyMyCourses",props:{searchQuery:{type:String,required:!0}},async setup(g){let r,c;const b=g,$=_(6),l=_(1),U=_(),x=_(),u=_(!1),p=_("All Courses"),{data:I}=([r,c]=H(()=>N(Q("/apps/academy/courses",{query:{q:()=>b.searchQuery,hideCompleted:u,label:p,itemsPerPage:$,page:l,sortBy:U,orderBy:x}}))),r=await r,c(),r),j=z(()=>I.value.courses),E=z(()=>I.value.total);J([u,p,()=>b.searchQuery],()=>{l.value=1});const L=m=>{if(m==="Web")return"primary";if(m==="Art")return"success";if(m==="UI/UX")return"error";if(m==="Psychology")return"warning";if(m==="Design")return"info"};return(m,d)=>{const M=G,q=K("RouterLink");return i(),k(f,{class:"mb-6"},{default:s(()=>[t(h,null,{default:s(()=>[e("div",le,[re,e("div",ie,[t(M,{modelValue:a(p),"onUpdate:modelValue":d[0]||(d[0]=o=>T(p)?p.value=o:null),items:[{title:"Web",value:"web"},{title:"Art",value:"art"},{title:"UI/UX",value:"ui/ux"},{title:"Psychology",value:"psychology"},{title:"Design",value:"design"},{title:"All Courses",value:"All Courses"}],style:{"min-inline-size":"260px"}},null,8,["modelValue"]),t(X,{modelValue:a(u),"onUpdate:modelValue":d[1]||(d[1]=o=>T(u)?u.value=o:null),label:"Hide Completed"},null,8,["modelValue"])])]),e("div",ne,[t(B,null,{default:s(()=>[(i(!0),V(S,null,F(a(j),o=>(i(),k(w,{key:o.id,cols:"12",md:"4",sm:"6"},{default:s(()=>[t(f,{flat:"",border:""},{default:s(()=>[e("div",ce,[t(O,{src:o.tutorImg,class:"cursor-pointer",onClick:d[2]||(d[2]=()=>m.$router.push({name:"apps-academy-course-details"}))},null,8,["src"])]),t(h,null,{default:s(()=>[e("div",de,[t(Y,{variant:"tonal",color:L(o.tags),density:"comfortable"},{default:s(()=>[y(n(o.tags),1)]),_:2},1032,["color"]),e("div",ue,[e("h6",pe,n(o.rating),1),t(v,{icon:"tabler-star-filled",color:"warning",size:"24",class:"me-2"}),e("div",me," ("+n(o.ratingCount)+") ",1)])]),e("h5",_e,[t(q,{to:{name:"apps-academy-course-details"},class:"course-title"},{default:s(()=>[y(n(o.courseTitle),1)]),_:2},1024)]),e("p",null,n(o.desc),1),o.completedTasks!==o.totalTasks?(i(),V("div",fe,[t(v,{icon:"tabler-clock",size:"20",class:"me-1"}),e("span",he,n(o.time),1)])):(i(),V("div",ye,[t(v,{icon:"tabler-check",size:"20",color:"success",class:"me-1"}),ge])),t(Z,{"model-value":o.completedTasks/o.totalTasks*100,rounded:"",color:"primary",height:"8",class:"mb-4"},null,8,["model-value"]),e("div",xe,[t(C,{variant:"tonal",color:"secondary",class:"flex-grow-1",to:{name:"apps-academy-course-details"}},{prepend:s(()=>[t(v,{icon:"tabler-rotate-clockwise-2",class:"flip-in-rtl"})]),default:s(()=>[y(" Start Over ")]),_:1}),o.completedTasks!==o.totalTasks?(i(),k(C,{key:0,variant:"tonal",class:"flex-grow-1",to:{name:"apps-academy-course-details"}},{append:s(()=>[t(v,{icon:"tabler-chevron-right",class:"flip-in-rtl"})]),default:s(()=>[y(" Continue ")]),_:1})):ee("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(oe,{modelValue:a(l),"onUpdate:modelValue":d[3]||(d[3]=o=>T(l)?l.value=o:null),"active-color":"primary","first-icon":"tabler-chevrons-left","last-icon":"tabler-chevrons-right","show-first-last-page":"",length:Math.ceil(a(E)/a($))},null,8,["modelValue","length"])]),_:1})]),_:1})}}},be=W(ve,[["__scopeId","data-v-3115a565"]]),we="/build/assets/boy-app-academy-DuT4zNXw.png",Ve="/build/assets/girl-app-academy-sUE7coxR.png",Ce="/build/assets/academy-course-illustration1-3jA_I8wV.png",$e="/build/assets/academy-course-illustration2-P0fad4nP.png",Ae="/build/assets/guitar-course-poster-Yygh9Sa0.png",ke="/build/assets/singing-course-poster-BcE4AhBB.png",Te=e("span",{class:"text-primary text-no-wrap"}," All in one place.",-1),Ue=e("p",{class:"text-center text-wrap text-body-1 mx-auto mb-0"}," Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science. ",-1),Be={class:"d-flex justify-center align-center gap-4 flex-wrap"},Ie={class:"flex-grow-1",style:{"max-inline-size":"350px"}},Pe=["src"],ze=["src"],Fe={class:"mb-6"},Se={class:"d-flex justify-space-between gap-4 flex-column-reverse flex-sm-row"},Re={class:"text-center text-sm-start"},je={class:"d-flex justify-space-between gap-4 flex-column-reverse flex-sm-row"},Ee={class:"text-center text-sm-start"},Le={class:"text-body-1 mx-auto",style:{"max-inline-size":"300px"}},Me={class:"align-self-center"},qe={class:"align-self-center"},De=["src"],Ge={class:"d-flex flex-column align-center gap-y-4 h-100 justify-center"},Ne=e("h4",{class:"text-h4 font-weight-medium"}," Today's Free Courses ",-1),Qe=e("p",{class:"text-body-1 text-center mb-0"}," We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today! ",-1),We={class:"px-2 pt-2"},Xe=e("h5",{class:"text-h5 mb-2"}," Your First Singing Lesson ",-1),Oe=e("p",{class:"text-body-1 mb-0"}," In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ",-1),Ye={class:"px-2 pt-2"},He=e("h5",{class:"text-h5 mb-2"}," Guitar for Beginners ",-1),Je=e("p",{class:"text-body-1 mb-0"}," The Fender Acoustic Guitar is best choice for beginners and professionals. ",-1),jt={__name:"my-course",setup(g){const r=_("");return(c,b)=>{const $=D;return i(),V("div",null,[t(f,{class:"mb-6"},{default:s(()=>[t(h,{class:"py-12 position-relative"},{default:s(()=>[e("div",{class:A(["d-flex flex-column gap-y-4 mx-auto",c.$vuetify.display.mdAndUp?"w-50":c.$vuetify.display.xs?"w-100":"w-75"])},[e("h4",{class:A(["text-h4 text-center text-wrap mx-auto",c.$vuetify.display.mdAndUp?"w-75":"w-100"])},[y(" Education, talents, and career opportunities. "),Te],2),Ue,e("div",Be,[e("div",Ie,[t($,{modelValue:a(r),"onUpdate:modelValue":b[0]||(b[0]=l=>T(r)?r.value=l:null),placeholder:"Find your course"},null,8,["modelValue"])]),t(C,{color:"primary",density:"comfortable",icon:"tabler-search",class:"rounded"})])],2),e("img",{src:a(Ce),class:"illustration1 d-none d-md-block",height:"180"},null,8,Pe),e("img",{src:a($e),class:"illustration2 d-none d-md-block",height:"100"},null,8,ze)]),_:1})]),_:1}),t(be,{"search-query":a(r)},null,8,["search-query"]),e("div",Fe,[t(B,null,{default:s(()=>[(i(!0),V(S,null,F([{title:"Earn a Certificate",description:"Get the right professional certificate program for you.",btnText:"View Programs",color:"primary",image:a(we)},{title:"Best Rated Courses",description:"Enroll now in the most popular and best rated courses.",btnText:"View Courses",color:"error",image:a(Ve)}],({title:l,btnText:U,color:x,description:u,image:p})=>(i(),k(w,{key:l,cols:"12",md:"6"},{default:s(()=>[t(f,{flat:"",color:`rgba(var(--v-theme-${x}), var(--v-selected-opacity))`},{default:s(()=>[t(h,null,{default:s(()=>[e("div",Se,[e("div",Re,[e("h5",{class:A(["text-h5 mb-1",`text-${x}`])},[e("div",je,[e("div",Ee,[e("h5",{class:A(["text-h5 mb-1",`text-${x}`])},n(l),3)])])],2),e("p",Le,n(u),1),t(C,{color:x},{default:s(()=>[y(n(U),1)]),_:2},1032,["color"])]),e("div",Me,[e("div",qe,[e("img",{src:p,height:"127",class:"flip-in-rtl"},null,8,De)])])])]),_:2},1024)]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),t(f,null,{default:s(()=>[t(h,null,{default:s(()=>[t(B,null,{default:s(()=>[t(w,{cols:"12",md:"4"},{default:s(()=>[e("div",Ge,[t(ae,{variant:"tonal",size:"52",rounded:"",color:"primary"},{default:s(()=>[t(v,{icon:"tabler-gift",size:"36"})]),_:1}),Ne,Qe,t(C,null,{default:s(()=>[y("Get Premium Courses")]),_:1})])]),_:1}),t(w,{cols:"12",md:"4",sm:"6"},{default:s(()=>[t(f,{flat:"",border:""},{default:s(()=>[e("div",We,[t(a(P),{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",poster:a(Ae),controls:"","plays-inline":"",height:c.$vuetify.display.mdAndUp?200:150,class:"w-100 rounded"},null,8,["poster","height"])]),t(h,null,{default:s(()=>[Xe,Oe]),_:1})]),_:1})]),_:1}),t(w,{cols:"12",md:"4",sm:"6"},{default:s(()=>[t(f,{flat:"",border:""},{default:s(()=>[e("div",Ye,[t(a(P),{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",poster:a(ke),controls:"","plays-inline":"",height:c.$vuetify.display.mdAndUp?200:150,class:"w-100 rounded"},null,8,["poster","height"])]),t(h,null,{default:s(()=>[He,Je]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{jt as default};
