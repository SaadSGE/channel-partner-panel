import{aU as d,aV as l}from"./main-D5McJ9Zv.js";const c=()=>Date.now().toString(36)+Math.random().toString(36).substr(2,9),h=d("fileStore",{state:()=>({files:[],filePaths:[],errors:[],documents:[]}),actions:{async downloadAllFiles(t=null){console.log(t);try{const e=t.map(a=>({path:a.path,file_name:a.filename})),s=new FormData;s.append("documents",JSON.stringify(e));const n=(await l("/download-all",{method:"POST",body:s,onUploadProgress:a=>{if(a.lengthComputable){const i=Math.round(a.loaded/a.total*100);console.log(`Progress: ${i}%`)}}})).data.zipUrl,r=document.createElement("a");r.href=n,r.download="documents.zip",r.click()}catch(e){console.error("Error downloading all files:",e),this.errors.push(e.response?e.response.data.errors:["An unexpected error occurred"])}},addFile(t){this.files.push(t)},updateFileProgress(t,e){const s=this.files.find(o=>o.id===t);s&&(s.progress=e)},async removeFile(t){const e=this.files.findIndex(s=>s.id===t);if(e!==-1){const s=this.files[e];this.filePaths=this.filePaths.filter(o=>o!==s.path),this.files.splice(e,1)}},updateFilePath(t,e){const s=this.files.find(o=>o.id===t);s&&(s.path=e,this.filePaths.push(e))},resetFiles(){this.files=[],this.filePaths=[],this.errors=[]},async uploadFile(t,e){const s=c(),o={id:s,filename:e.name||"unnamed_file",progress:0,path:""};this.addFile(o);const n=new FormData;n.append("student_document",e),n.append("document_name",t),n.append("filename",e.name||`${t}_document`);try{const r=await l("/student-document-upload",{method:"POST",body:n,onUploadProgress:a=>{if(a.lengthComputable){const i=Math.round(a.loaded/a.total*100);this.updateFileProgress(s,i)}}});return this.updateFilePath(s,r.data),this.addDocument(t,r.data),s}catch(r){throw console.error("Error uploading file:",r),this.errors.push(r.response?r.response.data.errors:["An unexpected error occurred"]),r}},addDocument(t,e){const s=t.split("_").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ");this.documents.push({name:s,path:e})},removeDocument(t,e){const s=this.documents.findIndex(o=>o.name===t&&o.path===e);s!==-1&&this.documents.splice(s,1)},clearDocuments(){this.documents=[]}}});export{h as u};