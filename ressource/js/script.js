import axios from "axios";
const wrapper = document.getElementById("card-wrapper");

async function getChara() {
    try {
      const response = await axios.get("https://character-database.becode.xyz/characters");
      console.log(response);
      for(let i = 0; i < response.data.length; i++) {
        //Create element
        let data = response.data[i];
        let card = document.createElement("div");
        let image = document.createElement("img"); //2ème étape
        let name = document.createElement("h2");
        let littledesc = document.createElement("p");
        let buttonCharacter = document.createElement("p");
        let characterLink = document.createElement("a");
        let idInformation = data.id;
        console.log(idInformation);

        //Set attribute and content
        card.setAttribute("class", "card bg-slate-500 rounded-2xl pt-5");
        image.setAttribute("src", "data:image/gif;base64," + data.image);//3ème étape
        image.setAttribute("class", "-y-5 rounded-full mx-auto w-20");
        name.setAttribute("class", "text-2xl font-bold")
        littledesc.setAttribute("class", "my-5");
        characterLink.setAttribute("href", "#");
        buttonCharacter.setAttribute("class", "rounded-full bg-cyan-600 mb-5 py-3 px-3 inline-block");
        buttonCharacter.setAttribute("id", `${data.id}`);
        name.textContent = data.name;
        littledesc.textContent = data.shortDescription;
        //idInformation.textContent = data.id;
        buttonCharacter.textContent = "View the Character Panel";

        //Append child
        card.appendChild(image);//4éme étape (document.body.appendChild(image))
        card.appendChild(name);
        card.appendChild(littledesc);
        //card.appendChild(idInformation);
        characterLink.appendChild(buttonCharacter)
        card.appendChild(characterLink);
        wrapper.appendChild(card);
      }

    } catch (error) {
      console.error(error);
    }
  }

  getChara();

  var btn = document.querySelector("div");
  
  btn.addEventListener("click", ()=>{
    window.location.replace("./character.html");
  })