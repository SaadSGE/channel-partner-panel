import{ao as R}from"./main-p-5DQ3fZ.js";import{$ as N}from"./api-SbiBdIjk.js";const te=R({id:"activityLog",state:()=>({activityLogs:[],totalLogs:0,currentPage:1,perPage:10,sortBy:"created_at",sortOrder:"desc",activityType:null,searchQuery:"",dateFrom:null,dateTo:null}),actions:{async fetchUserActivityLogs(e){try{const t=await N(`/users/${e}/activity-logs`,{method:"GET",params:{page:this.currentPage,per_page:this.perPage,sort_by:this.sortBy,sort_order:this.sortOrder,activity_type:this.activityType,search:this.searchQuery,date_from:this.dateFrom,date_to:this.dateTo}});return this.activityLogs=t.data.data,this.totalLogs=t.data.total,t}catch(t){throw console.error("Error fetching user activity logs:",t),t}},setPage(e){this.currentPage=e},setPerPage(e){this.perPage=e},setSorting(e,t){this.sortBy=e,this.sortOrder=t},setActivityType(e){this.activityType=e},setSearchQuery(e){this.searchQuery=e},setDateFrom(e){this.dateFrom=e},setDateTo(e){this.dateTo=e},async fetchApplicationActivityLogs(e){try{const t=await N(`/applications/${e}/activity-logs`,{method:"GET",params:{page:this.currentPage,per_page:this.perPage,sort_by:this.sortBy,sort_order:this.sortOrder,activity_type:this.activityType,search:this.searchQuery}});return this.activityLogs=t.data.data,this.totalLogs=t.data.total,t}catch(t){throw console.error("Error fetching application activity logs:",t),t}}}}),A=6048e5,V=864e5,x=Symbol.for("constructDateFrom");function b(e,t){return typeof e=="function"?e(t):typeof e=="object"&&x in e?e[x](t):e instanceof Date?new e.constructor(t):new Date(t)}function m(e,t){if(t)return t(e);const r=Object.prototype.toString.call(e);return typeof e=="object"&&x in e?e[x](e):e instanceof Date||typeof e=="object"&&r==="[object Date]"?new e.constructor(+e):typeof e=="number"||r==="[object Number]"||typeof e=="string"||r==="[object String]"?new Date(e):new Date(NaN)}let I={};function S(){return I}function D(e,t){var c,u,d,f;const r=S(),n=(t==null?void 0:t.weekStartsOn)??((u=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:u.weekStartsOn)??r.weekStartsOn??((f=(d=r.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,a=m(e,t==null?void 0:t.in),i=a.getDay(),s=(i<n?7:0)+i-n;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function W(e,t){return D(e,{...t,weekStartsOn:1})}function B(e,t){const r=m(e,t==null?void 0:t.in),n=r.getFullYear(),a=b(r,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const i=W(a),s=b(r,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const c=W(s);return r.getTime()>=i.getTime()?n+1:r.getTime()>=c.getTime()?n:n-1}function _(e){const t=m(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function $(e,...t){const r=b.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}function L(e,t){const r=m(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function J(e,t,r){const[n,a]=$(r==null?void 0:r.in,e,t),i=L(n),s=L(a),c=+i-_(i),u=+s-_(s);return Math.round((c-u)/V)}function U(e,t){const r=B(e,t),n=b(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),W(n)}function z(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function K(e){return!(!z(e)&&typeof e!="number"||isNaN(+m(e)))}function Z(e,t){const r=m(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}const tt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},et=(e,t,r)=>{let n;const a=tt[e];return typeof a=="string"?n=a:t===1?n=a.one:n=a.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};function Y(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const rt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},nt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},at={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},it={date:Y({formats:rt,defaultWidth:"full"}),time:Y({formats:nt,defaultWidth:"full"}),dateTime:Y({formats:at,defaultWidth:"full"})},st={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ot=(e,t,r,n)=>st[e];function v(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,c=r!=null&&r.width?String(r.width):s;a=e.formattingValues[c]||e.formattingValues[s]}else{const s=e.defaultWidth,c=r!=null&&r.width?String(r.width):e.defaultWidth;a=e.values[c]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const ct={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ut={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ht={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ft={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},lt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},mt=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},gt={ordinalNumber:mt,era:v({values:ct,defaultWidth:"wide"}),quarter:v({values:ut,defaultWidth:"wide",argumentCallback:e=>e-1}),month:v({values:dt,defaultWidth:"wide"}),day:v({values:ht,defaultWidth:"wide"}),dayPeriod:v({values:ft,defaultWidth:"wide",formattingValues:lt,defaultFormattingWidth:"wide"})};function k(e){return(t,r={})=>{const n=r.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const s=i[0],c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(c)?wt(c,g=>g.test(s)):yt(c,g=>g.test(s));let d;d=e.valueCallback?e.valueCallback(u):u,d=r.valueCallback?r.valueCallback(d):d;const f=t.slice(s.length);return{value:d,rest:f}}}function yt(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function wt(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function bt(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=r.valueCallback?r.valueCallback(s):s;const c=t.slice(a.length);return{value:s,rest:c}}}const Pt=/^(\d+)(th|st|nd|rd)?/i,Ot=/\d+/i,Mt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},vt={any:[/^b/i,/^(a|c)/i]},kt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Dt={any:[/1/i,/2/i,/3/i,/4/i]},xt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Wt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},St={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Tt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Yt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ft={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Et={ordinalNumber:bt({matchPattern:Pt,parsePattern:Ot,valueCallback:e=>parseInt(e,10)}),era:k({matchPatterns:Mt,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any"}),quarter:k({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:k({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:Wt,defaultParseWidth:"any"}),day:k({matchPatterns:St,defaultMatchWidth:"wide",parsePatterns:Tt,defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:Yt,defaultMatchWidth:"any",parsePatterns:Ft,defaultParseWidth:"any"})},Ct={code:"en-US",formatDistance:et,formatLong:it,formatRelative:ot,localize:gt,match:Et,options:{weekStartsOn:0,firstWeekContainsDate:1}};function qt(e,t){const r=m(e,t==null?void 0:t.in);return J(r,Z(r))+1}function Nt(e,t){const r=m(e,t==null?void 0:t.in),n=+W(r)-+U(r);return Math.round(n/A)+1}function G(e,t){var f,g,O,M;const r=m(e,t==null?void 0:t.in),n=r.getFullYear(),a=S(),i=(t==null?void 0:t.firstWeekContainsDate)??((g=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((M=(O=a.locale)==null?void 0:O.options)==null?void 0:M.firstWeekContainsDate)??1,s=b((t==null?void 0:t.in)||e,0);s.setFullYear(n+1,0,i),s.setHours(0,0,0,0);const c=D(s,t),u=b((t==null?void 0:t.in)||e,0);u.setFullYear(n,0,i),u.setHours(0,0,0,0);const d=D(u,t);return+r>=+c?n+1:+r>=+d?n:n-1}function _t(e,t){var c,u,d,f;const r=S(),n=(t==null?void 0:t.firstWeekContainsDate)??((u=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:u.firstWeekContainsDate)??r.firstWeekContainsDate??((f=(d=r.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,a=G(e,t),i=b((t==null?void 0:t.in)||e,0);return i.setFullYear(a,0,n),i.setHours(0,0,0,0),D(i,t)}function Lt(e,t){const r=m(e,t==null?void 0:t.in),n=+D(r,t)-+_t(r,t);return Math.round(n/A)+1}function o(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const y={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return o(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):o(r+1,2)},d(e,t){return o(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return o(e.getHours()%12||12,t.length)},H(e,t){return o(e.getHours(),t.length)},m(e,t){return o(e.getMinutes(),t.length)},s(e,t){return o(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),a=Math.trunc(n*Math.pow(10,r-3));return o(a,t.length)}},P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Q={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return y.y(e,t)},Y:function(e,t,r,n){const a=G(e,n),i=a>0?a:1-a;if(t==="YY"){const s=i%100;return o(s,2)}return t==="Yo"?r.ordinalNumber(i,{unit:"year"}):o(i,t.length)},R:function(e,t){const r=B(e);return o(r,t.length)},u:function(e,t){const r=e.getFullYear();return o(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return o(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return o(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return y.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return o(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const a=Lt(e,n);return t==="wo"?r.ordinalNumber(a,{unit:"week"}):o(a,t.length)},I:function(e,t,r){const n=Nt(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):o(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):y.d(e,t)},D:function(e,t,r){const n=qt(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):o(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const a=e.getDay(),i=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return o(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const a=e.getDay(),i=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return o(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),a=n===0?7:n;switch(t){case"i":return String(a);case"ii":return o(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let a;switch(n===12?a=P.noon:n===0?a=P.midnight:a=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let a;switch(n>=17?a=P.evening:n>=12?a=P.afternoon:n>=4?a=P.morning:a=P.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return y.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):y.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):o(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):o(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):y.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):y.s(e,t)},S:function(e,t){return y.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return j(n);case"XXXX":case"XX":return w(n);case"XXXXX":case"XXX":default:return w(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return j(n);case"xxxx":case"xx":return w(n);case"xxxxx":case"xxx":default:return w(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+H(n,":");case"OOOO":default:return"GMT"+w(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+H(n,":");case"zzzz":default:return"GMT"+w(n,":")}},t:function(e,t,r){const n=Math.trunc(e.getTime()/1e3);return o(n,t.length)},T:function(e,t,r){const n=e.getTime();return o(n,t.length)}};function H(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),a=Math.trunc(n/60),i=n%60;return i===0?r+String(a):r+String(a)+t+o(i,2)}function j(e,t){return e%60===0?(e>0?"-":"+")+o(Math.abs(e)/60,2):w(e,t)}function w(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),a=o(Math.trunc(n/60),2),i=o(n%60,2);return r+a+t+i}const X=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},p=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Qt=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],a=r[2];if(!a)return X(e,t);let i;switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",X(n,t)).replace("{{time}}",p(a,t))},Ht={p,P:Qt},jt=/^D+$/,Xt=/^Y+$/,At=["D","DD","YY","YYYY"];function Bt(e){return jt.test(e)}function Gt(e){return Xt.test(e)}function pt(e,t,r){const n=Rt(e,t,r);if(console.warn(n),At.includes(e))throw new RangeError(n)}function Rt(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Vt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,It=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$t=/^'([^]*?)'?$/,Jt=/''/g,Ut=/[a-zA-Z]/;function ee(e,t,r){var f,g,O,M,F,E,C,q;const n=S(),a=(r==null?void 0:r.locale)??n.locale??Ct,i=(r==null?void 0:r.firstWeekContainsDate)??((g=(f=r==null?void 0:r.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??n.firstWeekContainsDate??((M=(O=n.locale)==null?void 0:O.options)==null?void 0:M.firstWeekContainsDate)??1,s=(r==null?void 0:r.weekStartsOn)??((E=(F=r==null?void 0:r.locale)==null?void 0:F.options)==null?void 0:E.weekStartsOn)??n.weekStartsOn??((q=(C=n.locale)==null?void 0:C.options)==null?void 0:q.weekStartsOn)??0,c=m(e);if(!K(c))throw new RangeError("Invalid time value");let u=t.match(It).map(l=>{const h=l[0];if(h==="p"||h==="P"){const T=Ht[h];return T(l,a.formatLong)}return l}).join("").match(Vt).map(l=>{if(l==="''")return{isToken:!1,value:"'"};const h=l[0];if(h==="'")return{isToken:!1,value:zt(l)};if(Q[h])return{isToken:!0,value:l};if(h.match(Ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:l}});a.localize.preprocessor&&(u=a.localize.preprocessor(c,u));const d={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return u.map(l=>{if(!l.isToken)return l.value;const h=l.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Gt(h)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&Bt(h))&&pt(h,t,String(e));const T=Q[h[0]];return T(c,h,a.localize,d)}).join("")}function zt(e){const t=e.match($t);return t?t[1].replace(Jt,"'"):e}export{ee as f,te as u};
