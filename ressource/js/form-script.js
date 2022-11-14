import axios from "axios";

const image_input = document.getElementById("image-input");
let display_image = document.getElementById("displayImage");
let image = document.createElement("img");

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        image.setAttribute("src", `${uploaded_image}`);
        image.setAttribute("class", "mx-auto rounded-full w-28 h-28");
        display_image.appendChild(image);
        
    });
    
});
