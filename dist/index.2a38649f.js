function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},o=n.parcelRequire621c;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequire621c=o);var l=o("fmRoT");const d=document.getElementById("card-wrapper");var c;!async function(){try{const e=await t(l).get("https://character-database.becode.xyz/characters");console.log(e);for(let t=0;t<e.data.length;t++){let n=e.data[t],a=document.createElement("div"),r=document.createElement("img"),o=document.createElement("h2"),l=document.createElement("p"),c=document.createElement("p"),i=document.createElement("a");a.setAttribute("class","card bg-slate-500 rounded-2xl pt-5"),r.setAttribute("src","data:image/gif;base64,"+n.image),r.setAttribute("class","-y-5 rounded-full mx-auto w-20"),o.setAttribute("class","text-2xl font-bold"),l.setAttribute("class","my-5"),i.setAttribute("href","./character.html"),c.setAttribute("class","rounded-full bg-cyan-600 mb-5 py-3 px-3 inline-block"),c.setAttribute("id",`${n.id}`),o.textContent=n.name,l.textContent=n.shortDescription,c.textContent="View the Character Panel",a.appendChild(r),a.appendChild(o),a.appendChild(l),i.appendChild(c),a.appendChild(i),d.appendChild(a)}}catch(e){console.error(e)}}(),buttonCharacter.addEventListener("click",(c=e,void console.log(c.target.id)));
//# sourceMappingURL=index.2a38649f.js.map
