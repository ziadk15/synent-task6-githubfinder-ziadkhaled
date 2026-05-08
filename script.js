const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");

const profile = document.getElementById("profile");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

searchBtn.addEventListener("click", async () => {

    const username = usernameInput.value;

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

                <h2>${data.name}</h2>

                <p>Public Repos: ${data.public_repos}</p>

                <p>Followers: ${data.followers}</p>

            </div>

        `;

    } catch(err){

        error.classList.remove("hidden");

        error.innerText = err.message;

    } finally {

        loading.classList.add("hidden");

    }

});