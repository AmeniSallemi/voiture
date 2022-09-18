var btnCard = document.querySelectorAll(".btnCartaa");
var contenuDeCard = document.querySelectorAll(".info");
for (let i = 0; i < btnCard.length; i++) {
  btnCard[i].addEventListener("click", function () {
    var newDiv = document.createElement("div");
    var newButton = document.createElement("button")
    newButton.setAttribute("id","Res")
     var text = document.createTextNode("Reserver")
     newButton.appendChild(text)
    var newForm = document.createElement("form");
    newForm.setAttribute('class',"classReserv")
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "datetime-local");
    newForm.appendChild(newInput);
    newForm.appendChild(newButton)
    newDiv.appendChild(newForm);
    contenuDeCard[i].appendChild(newDiv);
    btnCard[i].remove();
    var btnRes = document.querySelector("#Res")
    btnRes.addEventListener("click", function(){
        
        alert("Thank You !")
    
    })

  });
}
var box = document.querySelectorAll(".box")
console.log(box)
var btnContanct = document.querySelector(".btnContact")
btnContanct.addEventListener("click" , function(){
    alert("Thank you for applying i will contact you as soon possible")
})