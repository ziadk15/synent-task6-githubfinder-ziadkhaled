const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const profile = document.getElementById("profile");

searchBtn.addEventListener("click", async () => {

    const username = usernameInput.value;

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    const data = await response.json();

    profile.innerHTML = `
    
        <div class="profile-card">

            <img src="${data.avatar_url}" alt="profile image">

            <h2>${data.name}</h2>

            <p>Public Repos: ${data.public_repos}</p>

            <p>Followers: ${data.followers}</p>

        </div>

    `;

});