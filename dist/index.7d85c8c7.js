function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},l=n.parcelRequire621c;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},n.parcelRequire621c=l);var o=l("fmRoT");const d=document.getElementById("card-wrapper");var c;!async function(){try{const e=await t(o).get("https://character-database.becode.xyz/characters");console.log(e);for(let t=0;t<e.data.length;t++){let n=e.data[t],r=document.createElement("div"),a=document.createElement("img"),l=document.createElement("h2"),o=document.createElement("p"),c=document.createElement("p"),i=document.createElement("a");r.setAttribute("class","card bg-slate-500 rounded-2xl pt-5"),a.setAttribute("src","data:image/gif;base64,"+n.image),a.setAttribute("class","-y-5 rounded-full mx-auto w-20"),l.setAttribute("class","text-2xl font-bold"),o.setAttribute("class","my-5"),i.setAttribute("href","./character.html"),c.setAttribute("class","rounded-full bg-cyan-600 mb-5 py-3 px-3 inline-block"),c.setAttribute("id",`${n.id}`),l.textContent=n.name,o.textContent=n.shortDescription,c.textContent="View the Character Panel",r.appendChild(a),r.appendChild(l),r.appendChild(o),i.appendChild(c),r.appendChild(i),d.appendChild(r)}}catch(e){console.error(e)}}(),document.querySelectorAll("button").addEventListener("click",(c=e,void console.log(c.target.id)));
//# sourceMappingURL=index.7d85c8c7.js.map