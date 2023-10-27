
const DOMSelectors = { 
    form: document.querySelector(`#form`),
    firstName:document.querySelector(`#firstName`), 
    lastName:document.querySelector(`#lastName`), 
    DOB:document.querySelector(`#DOB`),
    school:document.querySelector(`#school`),
    grad:document.querySelector(`#grad`),
    pic:document.querySelector(`#pic`),
}
 
let firstName = DOMSelectors.firstName.value
let lastName = DOMSelectors.lastName.value
let DOB = DOMSelectors.DOB.value
let school= DOMSelectors.school.value
let grad= DOMSelectors.grad.value
let pic = DOMSelectors.pic.value

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    DOMSelectors.form.insertAdjacentHTML("beforeend", 
        `<div class="card">
        <h1 class="header">${DOMSelectors.firstName.value} ${DOMSelectors.lastName.value}</h1>
        <h2 class="header">${DOMSelectors.school.value}</h2><img class="img" src="${DOMSelectors.pic.value}" />
        <h3>Date of Birth: ${DOMSelectors.DOB.value}</h3>
        <h3>Year of Graduation: ${DOMSelectors.grad.value}</h3>
        <button class="button">REMOVE</button>
        </div>`
    );
});

function remove() {
    let buttons =  document.querySelectorAll("button");
    buttons.forEach((button)=> button.addEventListener("click" , function(event) {
        console.log(event.target.parentElement);
    }));
 }
     