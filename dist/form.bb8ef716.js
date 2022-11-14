const image_input=document.querySelector("#image-input");image_input.addEventListener("change",(function(){const e=new FileReader;e.addEventListener("load",(()=>{const t=e.result;document.querySelector("#displayImage").style.backgroundImage=`url(${t})`})),e.readAsDataURL(this.files[0])}));
//# sourceMappingURL=form.bb8ef716.js.map
