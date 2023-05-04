function log() {
  localStorage.setItem('nome', '03')
  localStorage.setItem('senha', '03')

  var nome = document.getElementById('email').value
  var senha = document.getElementById('senha').value

  try{
    if (nome !== localStorage.getItem('nome') || senha !== localStorage.getItem('senha')) {
      throw 'Nome ou senha inválidas';
      //('credenciaassh')

    }
    window.location.href = '../html/main.html';
  } catch (error) {

    alert('Erro: ' + error);
  }}