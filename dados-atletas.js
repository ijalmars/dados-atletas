class Atleta {
  constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
      }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade === 12 || this.idade === 13) {
      return "Juvenil";
    } else if (this.idade === 14 || this.idade === 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }


  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    if (!this.notas || this.notas.length === 0) return 0;

    const sortedNotas = [...this.notas].sort((a, b) => a - b);

    sortedNotas.pop();     // remove maior
    sortedNotas.shift();   // remove menor

    const soma = sortedNotas.reduce((total, nota) => total + nota, 0);
    const media = soma / sortedNotas.length;

    return media;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

const atleta = new Atleta(
  "Ijalmar dos Santos",
  42,
  78,
  1.68,
  [10, 9.34, 8.42, 10, 7.88]
);

console.log("Nome:", atleta.obtemNomeAtleta());

console.log("Idade:", atleta.obtemIdadeAtleta());

console.log("Peso:", atleta.obtemPesoAtleta());

console.log("Altura:", atleta.obtemAlturaAtleta());

console.log("Notas:", atleta.obtemNotasAtleta().join(","));

console.log("Categoria:", atleta.obtemCategoria());

console.log("IMC:", atleta.obtemIMC());

console.log("Média válida:", atleta.obtemMediaValida());