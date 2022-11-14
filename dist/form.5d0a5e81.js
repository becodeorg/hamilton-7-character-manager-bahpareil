<<<<<<< HEAD
=======
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
let text = document.getElementById("firstname");
let logText = document.getElementById("display-firstname");
text.addEventListener("keyup", logKey);
function logKey(e) {
    logText.textContent += `${e.key}`;
}
>>>>>>> 142a8d3c696f0ce14bd09a8afacf16cd4d1b68bf

//# sourceMappingURL=form.5d0a5e81.js.map
