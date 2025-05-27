function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario === "admin" && senha === "123") {
        window.location.href = "formulario.html";
    } else {
        mensagem.style.color = "yellow";
        mensagem.textContent = "Usuário ou senha incorretos.";
    }
}
