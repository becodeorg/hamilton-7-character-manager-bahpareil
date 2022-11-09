import { default as axios } from "../../node_modules/axios";
const wrapper = document.getElementById("card-wrapper");

getChara();

async function getChara() {
    try {
      const response = await axios.get("https://character-database.becode.xyz/characters");
      console.log(response);
      for(elem of response.data) {
        //Create element
        let card = document.createElement("div");
        let image = document.createElement("img"); //2ème étape
        let name = document.createElement("h2");
        let littledesc = document.createElement("p");
        let buttonCharacter = document.createElement("p");
        let characterLink = document.createElement("a");

        //Set attribute and content
        card.setAttribute("class", "card bg-slate-500 rounded-2xl");
        image.setAttribute("src", "data:image/gif;base64," + elem.image);//3ème étape
        image.setAttribute("class", "my-5 rounded-full inline-block w-20");
        name.setAttribute("class", "text-2xl font-bold")
        littledesc.setAttribute("class", "my-5");
        characterLink.setAttribute("href", "#");
        buttonCharacter.setAttribute("class", "rounded-full bg-cyan-600 mb-5 py-3 px-3 inline-block");
        name.textContent = elem.name;
        littledesc.textContent = elem.shortDescription;
        buttonCharacter.textContent = "View the Character Panel";

        //Append child
        card.appendChild(image);//4éme étape (document.body.appendChild(image))
        card.appendChild(name);
        card.appendChild(littledesc);
        characterLink.appendChild(buttonCharacter)
        card.appendChild(characterLink);
        wrapper.appendChild(card);
      }

    } catch (error) {
      console.error(error);
    }
  }