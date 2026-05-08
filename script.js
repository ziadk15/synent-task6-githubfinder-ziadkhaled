const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {

    const username = usernameInput.value;

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    const data = await response.json();

    console.log(data);

});