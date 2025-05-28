function login() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const erro = document.getElementById('erro');

  if (usuario === '08073154943' && senha === 'admin123') {
    window.location.href = 'dashboard.html'; // Aqui irá para o painel do admin
  } else {
    erro.textContent = 'Usuário ou senha incorretos.';
  }
}
