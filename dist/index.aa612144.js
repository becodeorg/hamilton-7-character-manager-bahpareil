function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire621c;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire621c=r);var o=r("fmRoT");const l=document.getElementById("card-wrapper");!async function(){try{const t=await e(o).get("https://character-database.becode.xyz/characters");console.log(t);for(let e=0;e<t.data.length;e++){let n=t.data[e],a=document.createElement("div"),r=document.createElement("img"),o=document.createElement("h2"),d=document.createElement("p"),c=document.createElement("p"),i=document.createElement("a");a.setAttribute("class","card bg-slate-500 rounded-2xl pt-5"),r.setAttribute("src","data:image/gif;base64,"+n.image),r.setAttribute("class","-y-5 rounded-full mx-auto w-20"),o.setAttribute("class","text-2xl font-bold"),d.setAttribute("class","my-5"),i.setAttribute("href","./character.html"),c.setAttribute("class","rounded-full bg-cyan-600 mb-5 py-3 px-3 inline-block button"),c.setAttribute("id",`${n.id}`),o.textContent=n.name,d.textContent=n.shortDescription,c.textContent="View the Character Panel",a.appendChild(r),a.appendChild(o),a.appendChild(d),i.appendChild(c),a.appendChild(i),l.appendChild(a),c.addEventListener("click",(()=>{console.log(id),window.location.href=`character.html?id=${n.id}`}))}}catch(e){console.error(e)}}();
//# sourceMappingURL=index.aa612144.js.map