var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire621c;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire621c=o),o("fmRoT");const i=document.getElementById("image-input");let r=document.getElementById("displayImage");const d=document.getElementById("create-character"),l=document.getElementById("x"),a=document.getElementById("firstname"),s=document.getElementById("short-description");let c=document.createElement("img");const u={description:"",image:"",name:"",shortDescription:""};i.addEventListener("change",(function(){const e=new FileReader;e.readAsDataURL(this.files[0]),e.addEventListener("load",(()=>{const t=e.result;c.setAttribute("src",`${t}`),c.setAttribute("class","mx-auto rounded-full w-28 h-28"),r.appendChild(c)}))})),d.addEventListener("click",(function(){u.description=l.value,u.name=a.value,u.shortDescription=s.value}));
//# sourceMappingURL=form.57b7ccb5.js.map