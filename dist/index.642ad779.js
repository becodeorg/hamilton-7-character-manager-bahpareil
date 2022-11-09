let card = document.createElement("div");
let image = document.createElement("img");
async function getChara() {
    try {
        const response = await axios.get("https://character-database.becode.xyz/characters");
        console.log(response);
        for (elem of response.data){
            let card = document.createElement("div");
            let image = document.createElement("img");
            image.setAttribute("src", elem.image);
            card.appendChild(image);
            document.body.appendChild(card);
        }
    } catch (error) {
        console.error(error);
    }
}

//# sourceMappingURL=index.642ad779.js.map
