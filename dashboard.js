document.getElementById('cadastro-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const cpf = document.getElementById('cpf').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (cpf && senha) {
    // Aqui você enviaria os dados ao backend. Esta é uma simulação:
    document.getElementById('mensagem').innerText = 'Usuário cadastrado com sucesso!';
    this.reset();
  } else {
    document.getElementById('mensagem').innerText = 'Preencha todos os campos.';
  }
});
