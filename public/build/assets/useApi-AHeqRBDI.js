import{aD as o,aa as c,aE as n}from"./main-BI5VI6i0.js";const p=o({baseUrl:"https://shabujglobal.org/api",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const a=c("accessToken").value;return a&&(e.headers={...e.headers,Authorization:`Bearer ${a}`}),{options:e}},afterFetch(e){const{data:a,response:t}=e;let r=null;try{r=n(a)}catch(s){console.error(s)}return{data:r,response:t}}}});export{p as u};