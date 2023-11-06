
const DOMSelectors = { 
    form: document.querySelector(`#form`),
    firstName:document.getElementById("firstName"), 
    lastName:document.getElementById("lastName"), 
    DOB:document.getElementById("DOB"),
    school:document.getElementById("school"),
    grad:document.getElementById("grad"),
    pic:document.getElementById("pic"),
    Cards:document.getElementById("Cards"),
};
 
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    makeCard();
    clearValues();
    removeCard()
  });

function makeCard() {
    let fn = DOMSelectors.firstName.value
    let ln= DOMSelectors.lastName.value
    let sch = DOMSelectors.school.value
    let pc =DOMSelectors.pic.value
    let bd = DOMSelectors.DOB.value
    let gra = DOMSelectors.grad.value
    DOMSelectors.Cards.insertAdjacentHTML("beforeend", 
        `<div class="IDcard">
        <h1 class="header">${fn} ${ln}</h1>
        <h2 class="header">${sch}</h2>
        <img class="img" src="${pc}" />
        <h3>Date of Birth: ${bd}</h3>
        <h3>Year of Graduation: ${gra}</h3>
        <button class="clearButton">REMOVE</button>
        </div>`);
};

  function removeCard() {
    const removeButtons = document.querySelectorAll(".clearButton");
    removeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        button.parentElement.remove();
      });
    });
  };


function clearValues() {
    DOMSelectors.firstName.value=("");
    DOMSelectors.lastName.value=("");
    DOMSelectors.DOB.value=("");
    DOMSelectors.school.value=("");
    DOMSelectors.grad.value=("");
    DOMSelectors.pic.value=("");
};
