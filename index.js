
const form = document.getElementById("form");
const submit_button = document.getElementById("submit");


console.log(submit_button);
console.log(form);

submit_button.addEventListener("click", function() {
    console.log("submit");
    console.log(form);
});
