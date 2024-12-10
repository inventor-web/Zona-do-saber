document.addEventListener("DOMContentLoaded", function () {
    const formComentarios = document.getElementById("form-comentarios");
    const comentariosLista = document.querySelector(".comentarios-lista");
    const mensagemVazia = document.getElementById("mensagem-vazia");

    // Carregar comentários salvos no localStorage
    const carregarComentarios = () => {
        const comentariosSalvos = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosSalvos.forEach(comentario => adicionarComentario(comentario.nome, comentario.email, comentario.texto));
    };

    const salvarComentario = (nome, email, texto) => {
        const comentariosSalvos = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosSalvos.push({ nome, email, texto });
        localStorage.setItem("comentarios", JSON.stringify(comentariosSalvos));
    };

    const adicionarComentario = (nome, email, texto) => {
        const comentarioWrapper = document.createElement("div");
        comentarioWrapper.classList.add("comentario-wrapper");

        const nomeElemento = document.createElement("p");
        nomeElemento.classList.add("comentario-nome");
        nomeElemento.textContent = nome;

        const emailElemento = document.createElement("p");
        emailElemento.classList.add("comentario-email");
        emailElemento.textContent = email;

        const textoElemento = document.createElement("p");
        textoElemento.classList.add("comentario-texto");
        textoElemento.textContent = texto;

        comentarioWrapper.appendChild(nomeElemento);
        comentarioWrapper.appendChild(emailElemento);
        comentarioWrapper.appendChild(textoElemento);
        comentariosLista.appendChild(comentarioWrapper);

        if (mensagemVazia) {
            mensagemVazia.style.display = "none";
        }
    };

    formComentarios.addEventListener("submit", function (event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const comentario = document.getElementById("comentario").value.trim();

        if (nome === "" || email === "" || comentario === "") {
            alert("Por favor, preencha todos os campos antes de enviar seu comentário.");
            return;
        }

        adicionarComentario(nome, email, comentario);
        salvarComentario(nome, email, comentario);
        formComentarios.reset();
    });

    carregarComentarios();
});
