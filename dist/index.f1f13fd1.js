function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire621c;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire621c=a);var o=a("fmRoT");const l=document.getElementById("card-wrapper");document.querySelectorAll("button");!async function(){try{const t=await e(o).get("https://character-database.becode.xyz/characters");console.log(t);for(let e=0;e<t.data.length;e++){let n=t.data[e],r=document.createElement("div"),a=document.createElement("img"),o=document.createElement("h2"),d=document.createElement("p"),c=document.createElement("p"),i=document.createElement("a");r.setAttribute("class","card bg-slate-500 rounded-2xl pt-5"),a.setAttribute("src","data:image/gif;base64,"+n.image),a.setAttribute("class","-y-5 rounded-full mx-auto w-20"),o.setAttribute("class","text-2xl font-bold"),d.setAttribute("class","my-5"),i.setAttribute("href","./character.html"),c.setAttribute("class","rounded-full bg-cyan-600 mb-5 py-3 px-3 inline-block"),c.setAttribute("id",`${n.id}`),o.textContent=n.name,d.textContent=n.shortDescription,c.textContent="View the Character Panel",r.appendChild(a),r.appendChild(o),r.appendChild(d),i.appendChild(c),r.appendChild(i),l.appendChild(r)}}catch(e){console.error(e)}}();document.querySelector("div");document.addEventListener("click",(function(e){console.log(e.target.id)}));
//# sourceMappingURL=index.f1f13fd1.js.map
