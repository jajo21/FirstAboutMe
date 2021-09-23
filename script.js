const emp = document.querySelector(".emp");
const textEmp = document.querySelector(".textEmp");
const shortEmp = document.querySelector(".shortEmp");
const textShortEmp = document.querySelector(".textShortEmp");
const education = document.querySelector(".education");
const eduText = document.querySelector(".eduText");
const other = document.querySelector(".other");
const otherText = document.querySelector(".otherText");

function hide(a,b) {
a.addEventListener("click", function() { // genom ett click ändras bordern på headern
    b.classList.toggle("hideText");      // toggle istället för tex add är "av/på", (lägg till ta bort class)
});
}

hide(emp, textEmp);
hide(shortEmp, textShortEmp);
hide(education, eduText);
hide(other, otherText);