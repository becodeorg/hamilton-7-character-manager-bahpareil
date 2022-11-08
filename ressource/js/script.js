const { default: axios } = require("axios");
const wrapper = document.getElementById("card-wrapper");

getChara();

async function getChara() {
    try {
      const response = await axios.get("https://character-database.becode.xyz/characters");
      console.log(response);
      for(elem of response.data) {
        let card = document.createElement("div");
        let image = document.createElement("img"); //2ème étape
        let name = document.createElement("h2");
        let littledesc = document.createElement("p");

        card.setAttribute("class", "card");
        image.setAttribute("src", "data:image/gif;base64," + elem.image);//3ème étape
        image.setAttribute("class", "rounded-full w-10");
        name.textContent = elem.name;
        littledesc.textContent = elem.shortDescription;

        card.appendChild(image);//4éme étape (document.body.appendChild(image))
        card.appendChild(name);
        card.appendChild(littledesc);
        wrapper.appendChild(card);
      }

    } catch (error) {
      console.error(error);
    }
  }