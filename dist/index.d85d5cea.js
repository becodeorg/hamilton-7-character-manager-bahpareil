function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire621c;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequire621c=a);var l=a("fmRoT");const o=document.getElementById("card-wrapper");document.querySelectorAll("button");!async function(){try{const t=await e(l).get("https://character-database.becode.xyz/characters");console.log(t);for(let e=0;e<t.data.length;e++){let n=t.data[e],r=document.createElement("div"),a=document.createElement("img"),l=document.createElement("h2"),d=document.createElement("p"),c=document.createElement("p"),i=document.createElement("a");r.setAttribute("class","card bg-slate-500 rounded-2xl pt-5"),a.setAttribute("src","data:image/gif;base64,"+n.image),a.setAttribute("class","-y-5 rounded-full mx-auto w-20"),l.setAttribute("class","text-2xl font-bold"),d.setAttribute("class","my-5"),i.setAttribute("href","#"),c.setAttribute("class","rounded-full bg-cyan-600 mb-5 py-3 px-3 inline-block"),c.setAttribute("id",`${n.id}`),l.textContent=n.name,d.textContent=n.shortDescription,c.textContent="View the Character Panel",r.appendChild(a),r.appendChild(l),r.appendChild(d),i.appendChild(c),r.appendChild(i),o.appendChild(r)}}catch(e){console.error(e)}}(),document.querySelector("div").addEventListener("click",(()=>{window.location.replace("./character.html")})),document.addEventListener("click",(function(e){alert(e.target.id)}));
//# sourceMappingURL=index.d85d5cea.js.map
