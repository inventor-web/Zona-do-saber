document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const posts = document.querySelectorAll(".post");

    // Função para normalizar texto removendo acentos e convertendo para minúsculas
    function normalizeText(text) {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "");
    }

    searchInput.addEventListener("input", function () {
        const searchText = normalizeText(searchInput.value);

        posts.forEach(post => {
            const postText = normalizeText(post.querySelector("p").innerText);
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
