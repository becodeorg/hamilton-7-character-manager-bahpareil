function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},d=t.parcelRequire621c;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var d={id:e,exports:{}};return n[e]=d,t.call(d.exports,d,d.exports),d.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire621c=d);var r=d("fmRoT");const i=document.getElementById("image-input");let a,c=document.getElementById("displayImage");const l=document.getElementById("create-character"),s=document.getElementById("x"),u=(document.getElementById("desc_editor"),document.getElementById("firstname")),m=document.getElementById("short-description");document.getElementById("uploaded_img");let f=document.createElement("img"),g={description:"",image:"",name:"",shortDescription:""};i.addEventListener("change",(function(){const e=new FileReader;e.readAsDataURL(this.files[0]),e.addEventListener("load",(()=>{a=e.result,f.setAttribute("src",`${a}`),f.setAttribute("class","mx-auto rounded-full w-28 h-28"),f.setAttribute("id","uploaded_img"),c.appendChild(f),console.log(JSON.stringify(a))}))})),l.addEventListener("click",(function(e){g.description=s.value,g.image=a,g.name=u.value,g.shortDescription=m.value,p()}));const p=async()=>{try{const t=await e(r).post("https://character-database.becode.xyz/characters",g);console.log(t.data)}catch(e){console.error(e)}};
//# sourceMappingURL=form.d2b300c3.js.map