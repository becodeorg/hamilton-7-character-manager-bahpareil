import axios from "axios";

const image_input = document.getElementById("image-input");
let uploaded_image;
let upl_img_array = [];
let display_image = document.getElementById("displayImage");
const create = document.getElementById("create-character");
const desc = document.getElementById("x");
const desc_editor = document.getElementById("desc_editor");
const name = document.getElementById("firstname");
const shortDesc = document.getElementById("short-description")
let uploaded_img = document.getElementById("uploaded_img");
let image = document.createElement("img");
let character = {description: "", image: "", name: "", shortDescription: ""};
let imgUrl = "";

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);

    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        image.setAttribute("src", `${uploaded_image}`);
        image.setAttribute("class", "mx-auto rounded-full w-28 h-28");
        image.setAttribute("id", "uploaded_img");
        display_image.appendChild(image);
        upl_img_array = uploaded_image.split(",");
        console.log(upl_img_array[1]);
    });   
});

create.addEventListener("click", createCharacter)

function createCharacter(e) {
    character.description = desc.value.replace( /(<([^>]+)>)/ig, '');
    character.image = upl_img_array[1];
    character.name = name.value;
    character.shortDescription = shortDesc.value;

    sendCharacter();
    alert("Character saved!");
}

const sendCharacter = async () => {
    try {
        const resp = await axios.post('https://character-database.becode.xyz/characters', character);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
