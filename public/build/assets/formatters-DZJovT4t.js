import{i as a}from"./helpers-DK5QwNv0.js";const m=t=>t?t.split(" ").map(n=>n.charAt(0).toUpperCase()).join(""):"",i=(t,r={month:"short",day:"numeric",year:"numeric"})=>t&&new Intl.DateTimeFormat("en-US",r).format(new Date(t)),s=(t,r=!0)=>{const n=new Date(t);let e={month:"short",day:"numeric"};return r&&a(n)&&(e={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",e).format(new Date(t))},c=t=>t>0?`+${t}`:t;export{m as a,i as b,s as f,c as p};
