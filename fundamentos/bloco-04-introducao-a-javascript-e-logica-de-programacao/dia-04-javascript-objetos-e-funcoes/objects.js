const info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// Exercício 1
console.log(`Bem-vinda, ${info.personagem}`);

// Exercício 2
info.recorrente = "Sim";
console.log(info);

// Exercício 3
for (const key in info) {
  console.log(key);
}

// Exercício 4
for (const key in info) {
  console.log(info[key]);
}

// Exercício 5
const info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (const key in info) {
  if (key === "recorrente" && info[key] === "Sim" && info2[key] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(`${info[key]} e ${info2[key]}`);
  }
}

//= ---------------------------------------------------------------- =//

const leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

// Exercício 6
console.log(
  `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`
);

// Exercício 7
leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editor: "Rocco",
});

console.log(leitor);

// Exercício 8
console.log(
  `${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`
);
