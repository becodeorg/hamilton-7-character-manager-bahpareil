const image_input=document.getElementById("image-input");let display_image=document.getElementById("displayImage"),image=document.createElement("img");image_input.addEventListener("change",(function(){const e=new FileReader;e.addEventListener("load",(()=>{const t=e.result;image.setAttribute("src",`url(${t})`),image.setAttribute("class","w-20 bg-cover rounded-full"),display_image.appendChild(image)})),e.readAsDataURL(this.files[0])}));
//# sourceMappingURL=form.2511fef4.js.map
