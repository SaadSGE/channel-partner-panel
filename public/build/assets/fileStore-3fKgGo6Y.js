import{am as n}from"./main--Sxm5_s2.js";import{$ as d}from"./api-j-2iTHQQ.js";const h=()=>Date.now().toString(36)+Math.random().toString(36).substr(2,9),u=n("fileStore",{state:()=>({files:[],filePaths:[],errors:[]}),actions:{addFile(t){this.files.push(t)},updateFileProgress(t,i){const e=this.files.find(s=>s.id===t);e&&(e.progress=i)},removeFile(t){var i=this.filePaths.indexOf(t);i!==-1&&this.filePaths.splice(i,1);const e=this.files.find(s=>s.id===t);e&&(this.filePaths=this.filePaths.filter(s=>s!==e.path),this.files=this.files.filter(s=>s.id!==t))},updateFilePath(t,i){const e=this.files.find(s=>s.id===t);e&&(e.path=i,this.filePaths.push(i))},async uploadFile(t,i){const e=h(),s={id:e,filename:i.name,progress:0,path:""};this.addFile(s);const a=new FormData;a.append(t,i);try{const r=await d("/student-document-upload",{method:"POST",body:a,onUploadProgress:o=>{if(o.lengthComputable){const l=Math.round(o.loaded/o.total*100);this.updateFileProgress(e,l)}}});return this.updateFilePath(e,r.data),r.data}catch(r){throw console.error("Error uploading file:",r),this.errors.push(r.response?r.response.data.errors:["An unexpected error occurred"]),r}}}});export{u};