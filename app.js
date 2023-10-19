
const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName:document.querySelector(".firstName"), 
    lastName:document.querySelector(".lastName"), 
    DOB:document.querySelector(".DOB"),
    school:document.querySelector(".school"),
    grad:document.querySelector(".gradyr"),
};
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault(); //when submit happens, don't refresh page


    DOMSelectors.form.insertAdjacentHTML(
        "afterbegin", 
        '<div class="card"><h2 class="card-header">${DOMSelectors.firstName.value}</h2></div>'
    );
});
