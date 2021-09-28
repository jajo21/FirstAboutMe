const experienceClick = function () {
    const emp = document.querySelector(".emp");
    const textEmp = document.querySelector(".textEmp");
    const shortEmp = document.querySelector(".shortEmp");
    const textShortEmp = document.querySelector(".textShortEmp");
    const education = document.querySelector(".education");
    const eduText = document.querySelector(".eduText");
    const other = document.querySelector(".other");
    const otherText = document.querySelector(".otherText");

    function onOff(a, b) {
        a.addEventListener("click", function () {
            b.classList.toggle("hideText");
        });
    }

    onOff(emp, textEmp);
    onOff(shortEmp, textShortEmp);
    onOff(education, eduText);
    onOff(other, otherText);
};
experienceClick();