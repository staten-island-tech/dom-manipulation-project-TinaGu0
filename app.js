
const DOMSelectors = {
    background: document.querySelector("#bg"),
    text: document.querySelector("#text"),
    form: document.querySelector("#form"),
    firstName:document.querySelector(".firstName"), 
    h2s: document.querySelectorAll("h2"),
};
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault(); //when submit happens, don't refresh page
    console.log(DOMSelectors.firstName.value); //value is the valuet hat the user types in 
});
    
function bg(background) {
    background.style.backgroundColor = "#56725c";
}
bg(DOMSelectors.background);

function txt(text) {
    text.style.backgroundColor = "#e4dfec";
    text.style.fontSize = "20px"
}
txt(DOMSelectors.text);
