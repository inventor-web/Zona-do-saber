
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const posts = document.querySelectorAll(".post");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        posts.forEach(post => {
            const postText = post.querySelector("p").innerText.toLowerCase();
            if (postText.includes(searchText)) {
                post.style.display = "";
            } else {
                post.style.display = "none";
            }
        });
        
        // Restaurar todos os posts quando a barra de pesquisa for limpa
        if (searchText === "") {
            posts.forEach(post => {
                post.style.display = "";
            });
        }
    });
});