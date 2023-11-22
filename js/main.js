function buscarCEP() {
    const cep = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then((response) => response.json())
      .then((dados) => {
        document.querySelector("#resultados").innerHTML = dados.logradouro + ", " + dados.bairro + ", " + dados.localidade + ", " + dados.uf;
      });
      console.log(response.json())
  }
  
  document.querySelector("#submit").addEventListener("click", buscarCEP);
  