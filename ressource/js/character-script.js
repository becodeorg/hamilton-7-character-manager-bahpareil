var btn=document.createElement("button");
      btn.innerText = "Click me";
      btn.addEventListener("click", ()=>{
         window.location.replace(URL);
      });
      document.getElementById("only_div").appendChild(btn);