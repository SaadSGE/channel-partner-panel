import{i as t,c as s,d as a}from"./helpers-CVYrDZ_r.js";const n=i=>t(i)||s(i)||i===!1?"This field is required":!!String(i).trim().length||"This field is required",o=i=>{if(a(i))return!0;const r=/^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-\d]+\.)+[a-z]{2,})$/i;return Array.isArray(i)?i.every(e=>r.test(String(e)))||"The Email field must be a valid email":r.test(String(i))||"The Email field must be a valid email"},m=(i,r)=>i===r||"The Confirm Password field confirmation does not match";export{m as c,o as e,n as r};