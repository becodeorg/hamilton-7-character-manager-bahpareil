import axios from "axios";

const image_input = document.getElementById("image-input");
let display_image = document.getElementById("displayImage");
const create = document.getElementById("create-character");
const del = document.getElementById("delete-character");
const desc = document.getElementById("x");
const name = document.getElementById("firstname");
const shortDesc = document.getElementById("short-description")
let uploaded_img = document.getElementById("uploaded_img");
let image = document.createElement("img");
let character = {description: "", image: "", name: "", shortDescription: ""};
let imgUrl = "";

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    //imgUrl = reader.readAsDataURL(this.files[0]);

    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        image.setAttribute("src", `${uploaded_image}`);
        image.setAttribute("class", "mx-auto rounded-full w-28 h-28");
        image.setAttribute("id", "uploaded_img");
        display_image.appendChild(image);
    });   
});

create.addEventListener("click", createCharacter)
del.addEventListener("click", delCharacter);

function delCharacter(e) {
    desc.value="";
    name.value="";
    shortDesc.value="";
    image_input.value="";
}


function createCharacter(e) {
    character.description = desc.value;
    character.image = uploaded_img.readAsDataURL;
    character.name = name.value;
    character.shortDescription = shortDesc.value;

    sendCharacter();
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
