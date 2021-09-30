const shortEmp = document.querySelector(".textShortEmp");

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const printData = async () => {
    const shortEmpArr = await getData("info/shortemploy.json");

    for(i=0; i<shortEmpArr.length; i++) {
        makeText(shortEmpArr[i].position, shortEmpArr[i].companyTime);
    }
}

const makeText = (head, body) => {
    const myList = document.createElement("ul");
    const myHead = document.createElement("li");
    myHead.setAttribute("class", "textShortEmpHead");
    const myBody = document.createElement("li");
    myHead.innerText = head;
    myBody.innerText = body;
    shortEmp.appendChild(myList);
    myList.appendChild(myHead);
    myList.appendChild(myBody);   
}

printData();