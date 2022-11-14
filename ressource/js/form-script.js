const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#displayImage").style.backgroundImage = `url(${uploaded_image})`;
//    image_input.style.display = "none<";
});
reader.readAsDataURL(this.files[0]);
});

// let text=document.getElementById('firstname');
// let logText = document.getElementById('display-firstname');

// text.addEventListener('keyup', logKey)

// function logKey(e) {
//     logText.textContent += `${e.key}`;
//   }