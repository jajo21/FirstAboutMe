const getGithubData = async () => {
    const response = await fetch("https://api.github.com/users/jajo21/repos");
    const data = await response.json();
    console.log("Github API", data);
    data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    let githubRepos = document.querySelector(".githubRepos");

    for(i=0; i<data.length; i++) {
        githubRepos.insertAdjacentHTML("beforeend", "<li><a href='" + data[i].html_url + 
        "' target='_blank'><i class='fab fa-github'></i></a>&emsp;&emsp;" + data[i].name + 
        '</br> <p>Närmare förklaring av repo: ' + data[i].description + '</p>');
    }
}
getGithubData();