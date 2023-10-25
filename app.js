
const DOMSelectors = { 
    form: document.querySelector(`#form`),
    firstName:document.querySelector(`#firstName`), 
    lastName:document.querySelector(`#lastName`), 
    DOB:document.querySelector(`#DOB`),
    school:document.querySelector(`#school`),
    grad:document.querySelector(`#grad`),
}
 
let firstName = DOMSelectors.firstName.value
let lastName = DOMSelectors.lastName.value
let DOB = DOMSelectors.DOB.value
let school= DOMSelectors.school.value
let grad= DOMSelectors.grad.value

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    DOMSelectors.form.insertAdjacentHTML("beforeend", 
        `<div class="card"><h2 class="card-header">${DOMSelectors.firstName.value} ${DOMSelectors.lastName.value}</h2></div>`
    );
});

/* DOMSelectors.firstName.addEventListener("click", function() {
    let firstName = DOMSelectors.firstName.value
    console.log(firstName)
}); */