const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        const uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    //    image_input.style.display = "none<";
    });
    reader.readAsDataURL(this.files[0]);
});

//# sourceMappingURL=form.5d0a5e81.js.map
