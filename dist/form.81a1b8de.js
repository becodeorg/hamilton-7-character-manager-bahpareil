var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire621c;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire621c=r),r("fmRoT");const o=document.getElementById("image-input");let d=document.getElementById("displayImage"),i=document.createElement("img");o.addEventListener("change",(function(){const e=new FileReader;e.addEventListener("load",(()=>{const t=e.result;i.setAttribute("src",`url(${t})`),i.setAttribute("class","w-20 bg-cover rounded-full"),d.appendChild(i)})),e.readAsDataURL(this.files[0])}));
//# sourceMappingURL=form.81a1b8de.js.map
