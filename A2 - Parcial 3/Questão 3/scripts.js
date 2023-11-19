function calcularIdade() {
    var dataNascimento = new Date(document.getElementById("data-nascimento").value);
    var dataAtual = new Date();
    var diferenca = dataAtual.getTime() - dataNascimento.getTime();
    var idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("idade").innerHTML = "Sua idade é " + idade + " anos.";
  }
  