import{i as n}from"./helpers-DK5QwNv0.js";const s=t=>t?t.split(" ").map(e=>e.charAt(0).toUpperCase()).join(""):"",i=t=>{const r=/\B(?=(\d{3})+(?!\d))/g;return Math.abs(t)>9999?`${Math.sign(t)*+(Math.abs(t)/1e3).toFixed(1)}k`:Math.abs(t).toFixed(0).replace(r,",")},m=(t,r={month:"short",day:"numeric",year:"numeric"})=>t&&new Intl.DateTimeFormat("en-US",r).format(new Date(t)),c=(t,r=!0)=>{const e=new Date(t);let a={month:"short",day:"numeric"};return r&&n(e)&&(a={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",a).format(new Date(t))},h=t=>t>0?`+${t}`:t;export{s as a,m as b,c as f,i as k,h as p};
