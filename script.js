const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");

const profile = document.getElementById("profile");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

async function getGitHubUser() {

    const username = usernameInput.value.trim();

    if(username === ""){
        error.classList.remove("hidden");
        error.innerText = "Please enter a username";
        return;
    }

    loading.classList.remove("hidden");

    error.classList.add("hidden");

    profile.innerHTML = "";

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if(!response.ok){
            throw new Error("User not found");
        }

        const data = await response.json();

        profile.innerHTML = `
        
            <div class="profile-card">

                <img src="${data.avatar_url}" alt="profile image">

                <h2>${data.name || data.login}</h2>

                <p>${data.bio || "No bio available"}</p>

                <p>Public Repos: ${data.public_repos}</p>

                <p>Followers: ${data.followers}</p>

                <p>Following: ${data.following}</p>

                <a href="${data.html_url}" target="_blank">
                    Visit Profile
                </a>

            </div>

        `;

    } catch(err){

        error.classList.remove("hidden");

        error.innerText = err.message;

    } finally {

        loading.classList.add("hidden");

    }

}

searchBtn.addEventListener("click", getGitHubUser);

usernameInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){
        getGitHubUser();
    }

});