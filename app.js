
const DOMSelectors = { 
    form: document.querySelector(`#form`),
    firstName:document.getElementById("firstName"), 
    lastName:document.getElementById("lastName"), 
    DOB:document.getElementById("DOB"),
    school:document.getElementById("school"),
    grad:document.getElementById("grad"),
    pic:document.getElementById("pic"),
}
 
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    makeCard();
    `removeCard();`
    clearValues()
});

function makeCard() {
    DOMSelectors.form.insertAdjacentHTML("beforeend", 
    `<div class="IDcard">
    <h1 class="header">${DOMSelectors.firstName.value} ${DOMSelectors.lastName.value}</h1>
    <h2 class="header">${DOMSelectors.school.value}</h2><img class="img" src="${DOMSelectors.pic.value}" />
    <h3>Date of Birth: ${DOMSelectors.DOB.value}</h3>
    <h3>Year of Graduation: ${DOMSelectors.grad.value}</h3>
    <button id="clearButton">REMOVE</button>
    </div>`
)};

`let button = document.querySelector("#clearButton")

function removeCard() {
    button.addEventListener("click", function(event) {
        event.target.parentElement.remove()
    })};
`
function clearValues() {
    DOMSelectors.firstName.value=("")
    DOMSelectors.lastName.value=("")
    DOMSelectors.DOB.value=("")
    DOMSelectors.school.value=("")
    DOMSelectors.grad.value=("")
    DOMSelectors.pic.value=("")
};
