function buscarCEP() {
  var cep = document.getElementById("cep").value;

  cep = cep.replace(/\D/g, '');

  if(cep.length !== 8 ){
    alert('Por favor digite o CEP novamente');
    return;
  }

  var url = 'https://viacep.com.br/ws/' + cep + '/json/';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      Object.keys(data).forEach(key => {
        if (!data[key]) {
          data[key] = "Não informado"
        }
      });

      document.getElementById('logradouro').value = data.logradouro;
      document.getElementById('complemento').value = data.complemento;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('localidade').value = data.localidade;
      document.getElementById('uf').value = data.uf;
      document.getElementById('ddd').value = data.ddd;    
      
      console.log(data);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      alert('Erro ao buscar o CEP. Por favor, tente novamente');
    });
}