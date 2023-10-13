const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName:document.querySelector(".firstName"), 
    h2s: document.querySelectorAll("h2"),
};
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault(); //when submit happens, don't refresh page
    console.log(DOMSelectors.firstName.value); //value is the valuet hat the user types in 
    DOMSelectors.h2s.forEach(
        (el)=> (el.textContent = DOMSelectors.firstName.value)
    );
});