const image_input = document.getElementById("image-input");
let display_image = document.getElementById("displayImage");
let image = document.createElement("img");
image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        const uploaded_image = reader.result;
        image.setAttribute("src", `url(${uploaded_image})`);
        image.setAttribute("class", "w-20 bg-cover rounded-full");
        //display_image.style.backgroundImage = `url(${uploaded_image})`;
        display_image.appendChild(image);
    });
    reader.readAsDataURL(this.files[0]);
});

//# sourceMappingURL=form.5d0a5e81.js.map
