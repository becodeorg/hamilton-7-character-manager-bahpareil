function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequire621c;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire621c=o);var r=o("fmRoT");const d=document.getElementById("image-input");let c=document.getElementById("displayImage");const l=document.getElementById("create-character"),i=document.getElementById("delete-character"),s=document.getElementById("x"),u=document.getElementById("firstname"),f=document.getElementById("short-description");let m=document.createElement("img"),p={},g="";d.addEventListener("change",(function(){const e=new FileReader;e.readAsDataURL(this.files[0]),g=e.readAsDataURL(this.files[0]),e.addEventListener("load",(()=>{const t=e.result;m.setAttribute("src",`${t}`),m.setAttribute("class","mx-auto rounded-full w-28 h-28"),c.appendChild(m)}))})),l.addEventListener("click",(function(e){p.description=s.value,p.image=g,p.name=u.value,p.shortDescription=f.value,h()})),i.addEventListener("click",(function(e){s.value="",u.value="",f="",d.value=""}));const h=async()=>{try{const t=await e(r).post("https://character-database.becode.xyz/characters",p);console.log(t.data)}catch(e){console.error(e)}};
//# sourceMappingURL=form.f50fa695.js.map
