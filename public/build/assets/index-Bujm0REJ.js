import{a as n}from"./index-BAtoe-vw.js";const r=n.create({name:"textAlign",addOptions(){return{types:[],alignments:["left","center","right","justify"],defaultAlignment:"left"}},addGlobalAttributes(){return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:t=>t.style.textAlign||this.options.defaultAlignment,renderHTML:t=>t.textAlign===this.options.defaultAlignment?{}:{style:`text-align: ${t.textAlign}`}}}}]},addCommands(){return{setTextAlign:t=>({commands:e})=>this.options.alignments.includes(t)?this.options.types.every(i=>e.updateAttributes(i,{textAlign:t})):!1,unsetTextAlign:()=>({commands:t})=>this.options.types.every(e=>t.resetAttributes(e,"textAlign"))}},addKeyboardShortcuts(){return{"Mod-Shift-l":()=>this.editor.commands.setTextAlign("left"),"Mod-Shift-e":()=>this.editor.commands.setTextAlign("center"),"Mod-Shift-r":()=>this.editor.commands.setTextAlign("right"),"Mod-Shift-j":()=>this.editor.commands.setTextAlign("justify")}}});export{r as T};
