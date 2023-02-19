"use strict";(self.webpackChunk_hootsoft_frontend_framework=self.webpackChunk_hootsoft_frontend_framework||[]).push([[547],{19547:function(n,t,r){let e;r.r(t),r.d(t,{NIL:function(){return S},parse:function(){return g},stringify:function(){return a},v1:function(){return y},v3:function(){return C},v4:function(){return R},v5:function(){return M},validate:function(){return i},version:function(){return T}});const o=new Uint8Array(16);function c(){if(!e&&(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(n){return"string"==typeof n&&u.test(n)};const s=[];for(let n=0;n<256;++n)s.push((n+256).toString(16).slice(1));function f(n,t=0){return(s[n[t+0]]+s[n[t+1]]+s[n[t+2]]+s[n[t+3]]+"-"+s[n[t+4]]+s[n[t+5]]+"-"+s[n[t+6]]+s[n[t+7]]+"-"+s[n[t+8]]+s[n[t+9]]+"-"+s[n[t+10]]+s[n[t+11]]+s[n[t+12]]+s[n[t+13]]+s[n[t+14]]+s[n[t+15]]).toLowerCase()}var a=function(n,t=0){const r=f(n,t);if(!i(r))throw TypeError("Stringified UUID is invalid");return r};let l,d,p=0,h=0;var y=function(n,t,r){let e=t&&r||0;const o=t||new Array(16);let u=(n=n||{}).node||l,i=void 0!==n.clockseq?n.clockseq:d;if(null==u||null==i){const t=n.random||(n.rng||c)();null==u&&(u=l=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==i&&(i=d=16383&(t[6]<<8|t[7]))}let s=void 0!==n.msecs?n.msecs:Date.now(),a=void 0!==n.nsecs?n.nsecs:h+1;const y=s-p+(a-h)/1e4;if(y<0&&void 0===n.clockseq&&(i=i+1&16383),(y<0||s>p)&&void 0===n.nsecs&&(a=0),a>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=s,h=a,d=i,s+=122192928e5;const g=(1e4*(268435455&s)+a)%4294967296;o[e++]=g>>>24&255,o[e++]=g>>>16&255,o[e++]=g>>>8&255,o[e++]=255&g;const v=s/4294967296*1e4&268435455;o[e++]=v>>>8&255,o[e++]=255&v,o[e++]=v>>>24&15|16,o[e++]=v>>>16&255,o[e++]=i>>>8|128,o[e++]=255&i;for(let n=0;n<6;++n)o[e+n]=u[n];return t||f(o)},g=function(n){if(!i(n))throw TypeError("Invalid UUID");let t;const r=new Uint8Array(16);return r[0]=(t=parseInt(n.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(n.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(n.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(n.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(n.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};function v(n,t,r){function e(n,e,o,c){var u;if("string"==typeof n&&(n=function(n){n=unescape(encodeURIComponent(n));const t=[];for(let r=0;r<n.length;++r)t.push(n.charCodeAt(r));return t}(n)),"string"==typeof e&&(e=g(e)),16!==(null===(u=e)||void 0===u?void 0:u.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let i=new Uint8Array(16+n.length);if(i.set(e),i.set(n,e.length),i=r(i),i[6]=15&i[6]|t,i[8]=63&i[8]|128,o){c=c||0;for(let n=0;n<16;++n)o[c+n]=i[n];return o}return f(i)}try{e.name=n}catch(n){}return e.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",e.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",e}function U(n){return 14+(n+64>>>9<<4)+1}function w(n,t){const r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function m(n,t,r,e,o,c){return w((u=w(w(t,n),w(e,c)))<<(i=o)|u>>>32-i,r);var u,i}function I(n,t,r,e,o,c,u){return m(t&r|~t&e,n,t,o,c,u)}function A(n,t,r,e,o,c,u){return m(t&e|r&~e,n,t,o,c,u)}function b(n,t,r,e,o,c,u){return m(t^r^e,n,t,o,c,u)}function k(n,t,r,e,o,c,u){return m(r^(t|~e),n,t,o,c,u)}var C=v("v3",48,(function(n){if("string"==typeof n){const t=unescape(encodeURIComponent(n));n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n[r]=t.charCodeAt(r)}return function(n){const t=[],r=32*n.length,e="0123456789abcdef";for(let o=0;o<r;o+=8){const r=n[o>>5]>>>o%32&255,c=parseInt(e.charAt(r>>>4&15)+e.charAt(15&r),16);t.push(c)}return t}(function(n,t){n[t>>5]|=128<<t%32,n[U(t)-1]=t;let r=1732584193,e=-271733879,o=-1732584194,c=271733878;for(let t=0;t<n.length;t+=16){const u=r,i=e,s=o,f=c;r=I(r,e,o,c,n[t],7,-680876936),c=I(c,r,e,o,n[t+1],12,-389564586),o=I(o,c,r,e,n[t+2],17,606105819),e=I(e,o,c,r,n[t+3],22,-1044525330),r=I(r,e,o,c,n[t+4],7,-176418897),c=I(c,r,e,o,n[t+5],12,1200080426),o=I(o,c,r,e,n[t+6],17,-1473231341),e=I(e,o,c,r,n[t+7],22,-45705983),r=I(r,e,o,c,n[t+8],7,1770035416),c=I(c,r,e,o,n[t+9],12,-1958414417),o=I(o,c,r,e,n[t+10],17,-42063),e=I(e,o,c,r,n[t+11],22,-1990404162),r=I(r,e,o,c,n[t+12],7,1804603682),c=I(c,r,e,o,n[t+13],12,-40341101),o=I(o,c,r,e,n[t+14],17,-1502002290),e=I(e,o,c,r,n[t+15],22,1236535329),r=A(r,e,o,c,n[t+1],5,-165796510),c=A(c,r,e,o,n[t+6],9,-1069501632),o=A(o,c,r,e,n[t+11],14,643717713),e=A(e,o,c,r,n[t],20,-373897302),r=A(r,e,o,c,n[t+5],5,-701558691),c=A(c,r,e,o,n[t+10],9,38016083),o=A(o,c,r,e,n[t+15],14,-660478335),e=A(e,o,c,r,n[t+4],20,-405537848),r=A(r,e,o,c,n[t+9],5,568446438),c=A(c,r,e,o,n[t+14],9,-1019803690),o=A(o,c,r,e,n[t+3],14,-187363961),e=A(e,o,c,r,n[t+8],20,1163531501),r=A(r,e,o,c,n[t+13],5,-1444681467),c=A(c,r,e,o,n[t+2],9,-51403784),o=A(o,c,r,e,n[t+7],14,1735328473),e=A(e,o,c,r,n[t+12],20,-1926607734),r=b(r,e,o,c,n[t+5],4,-378558),c=b(c,r,e,o,n[t+8],11,-2022574463),o=b(o,c,r,e,n[t+11],16,1839030562),e=b(e,o,c,r,n[t+14],23,-35309556),r=b(r,e,o,c,n[t+1],4,-1530992060),c=b(c,r,e,o,n[t+4],11,1272893353),o=b(o,c,r,e,n[t+7],16,-155497632),e=b(e,o,c,r,n[t+10],23,-1094730640),r=b(r,e,o,c,n[t+13],4,681279174),c=b(c,r,e,o,n[t],11,-358537222),o=b(o,c,r,e,n[t+3],16,-722521979),e=b(e,o,c,r,n[t+6],23,76029189),r=b(r,e,o,c,n[t+9],4,-640364487),c=b(c,r,e,o,n[t+12],11,-421815835),o=b(o,c,r,e,n[t+15],16,530742520),e=b(e,o,c,r,n[t+2],23,-995338651),r=k(r,e,o,c,n[t],6,-198630844),c=k(c,r,e,o,n[t+7],10,1126891415),o=k(o,c,r,e,n[t+14],15,-1416354905),e=k(e,o,c,r,n[t+5],21,-57434055),r=k(r,e,o,c,n[t+12],6,1700485571),c=k(c,r,e,o,n[t+3],10,-1894986606),o=k(o,c,r,e,n[t+10],15,-1051523),e=k(e,o,c,r,n[t+1],21,-2054922799),r=k(r,e,o,c,n[t+8],6,1873313359),c=k(c,r,e,o,n[t+15],10,-30611744),o=k(o,c,r,e,n[t+6],15,-1560198380),e=k(e,o,c,r,n[t+13],21,1309151649),r=k(r,e,o,c,n[t+4],6,-145523070),c=k(c,r,e,o,n[t+11],10,-1120210379),o=k(o,c,r,e,n[t+2],15,718787259),e=k(e,o,c,r,n[t+9],21,-343485551),r=w(r,u),e=w(e,i),o=w(o,s),c=w(c,f)}return[r,e,o,c]}(function(n){if(0===n.length)return[];const t=8*n.length,r=new Uint32Array(U(t));for(let e=0;e<t;e+=8)r[e>>5]|=(255&n[e/8])<<e%32;return r}(n),8*n.length))})),D={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},R=function(n,t,r){if(D.randomUUID&&!t&&!n)return D.randomUUID();const e=(n=n||{}).random||(n.rng||c)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,t){r=r||0;for(let n=0;n<16;++n)t[r+n]=e[n];return t}return f(e)};function E(n,t,r,e){switch(n){case 0:return t&r^~t&e;case 1:case 3:return t^r^e;case 2:return t&r^t&e^r&e}}function _(n,t){return n<<t|n>>>32-t}var M=v("v5",80,(function(n){const t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof n){const t=unescape(encodeURIComponent(n));n=[];for(let r=0;r<t.length;++r)n.push(t.charCodeAt(r))}else Array.isArray(n)||(n=Array.prototype.slice.call(n));n.push(128);const e=n.length/4+2,o=Math.ceil(e/16),c=new Array(o);for(let t=0;t<o;++t){const r=new Uint32Array(16);for(let e=0;e<16;++e)r[e]=n[64*t+4*e]<<24|n[64*t+4*e+1]<<16|n[64*t+4*e+2]<<8|n[64*t+4*e+3];c[t]=r}c[o-1][14]=8*(n.length-1)/Math.pow(2,32),c[o-1][14]=Math.floor(c[o-1][14]),c[o-1][15]=8*(n.length-1)&4294967295;for(let n=0;n<o;++n){const e=new Uint32Array(80);for(let t=0;t<16;++t)e[t]=c[n][t];for(let n=16;n<80;++n)e[n]=_(e[n-3]^e[n-8]^e[n-14]^e[n-16],1);let o=r[0],u=r[1],i=r[2],s=r[3],f=r[4];for(let n=0;n<80;++n){const r=Math.floor(n/20),c=_(o,5)+E(r,u,i,s)+f+t[r]+e[n]>>>0;f=s,s=i,i=_(u,30)>>>0,u=o,o=c}r[0]=r[0]+o>>>0,r[1]=r[1]+u>>>0,r[2]=r[2]+i>>>0,r[3]=r[3]+s>>>0,r[4]=r[4]+f>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]})),S="00000000-0000-0000-0000-000000000000",T=function(n){if(!i(n))throw TypeError("Invalid UUID");return parseInt(n.slice(14,15),16)}}}]);