import{an as n}from"./main-Bq8deQCX.js";import{$ as d}from"./api-99WOKqi0.js";const h=()=>Date.now().toString(36)+Math.random().toString(36).substr(2,9),u=n("fileStore",{state:()=>({files:[],filePaths:[],errors:[]}),actions:{addFile(t){this.files.push(t)},updateFileProgress(t,s){const e=this.files.find(i=>i.id===t);e&&(e.progress=s)},async removeFile(t){const s=this.files.findIndex(e=>e.id===t);if(s!==-1){const e=this.files[s];this.filePaths=this.filePaths.filter(i=>i!==e.path),this.files.splice(s,1)}},updateFilePath(t,s){const e=this.files.find(i=>i.id===t);e&&(e.path=s,this.filePaths.push(s))},resetFiles(){this.files=[],this.filePaths=[],this.errors=[]},async uploadFile(t,s){const e=h(),i={id:e,filename:s.name,progress:0,path:""};this.addFile(i);const a=new FormData;a.append(t,s);try{const r=await d("/student-document-upload",{method:"POST",body:a,onUploadProgress:o=>{if(o.lengthComputable){const l=Math.round(o.loaded/o.total*100);this.updateFileProgress(e,l)}}});return this.updateFilePath(e,r.data),e}catch(r){throw console.error("Error uploading file:",r),this.errors.push(r.response?r.response.data.errors:["An unexpected error occurred"]),r}}}});export{u};