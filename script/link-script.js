const getGithubData = async () => {
    const response = await fetch("https://api.github.com/users/jajo21/repos");
    const data = await response.json();
    console.log("Github API", data);
    let githubRepos = document.querySelector(".githubRepos");

    for(i=0; i<data.length; i++) {
        githubRepos.insertAdjacentHTML("beforeend", "<li><a href='" + data[i].html_url + 
        "' target='_blank'><i class='fab fa-github'></i></a>&emsp;&emsp;" + data[i].description);
        
        //+ "&emsp;&emsp;Skapad: " + data[i].created_at);


        //Annat sätt att göra samma kod på. Men fastnade lite på mellanrummen &emsp;&emsp; med koden nedanför
       /*  let listItem = document.createElement("li");
        let link = document.createElement("a");
        githubRepos.appendChild(listItem);
        listItem.appendChild(link);
        link.setAttribute("href", data[i].html_url);
        link.setAttribute("target", "_blank");
        link.innerHTML = '<i class="fab fa-github"></i>'; //&emsp;&emsp;' + data[i].description;
        let insertDesc = document.createTextNode(data[i].description);
        listItem.appendChild(insertDesc); */

    }
}
getGithubData();