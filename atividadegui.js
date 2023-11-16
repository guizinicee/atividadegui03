class Pessoa {
    idade = 0;
    constructor(nome) {
        this.nome = nome;
    }

    get Idade() {
        return this.idade;
    }

    set Idade(novaIdade) {
        if (novaIdade < 0) {
            throw new Error("A idade não pode ser negativa.");
        }
        this.idade = novaIdade;
    }
}

class Aluno extends Pessoa {
    constructor(nome, id) {
        super(nome);
        this.id = id;
    }
}

let p1 = new Aluno("Rafael", 8);

try {
    p1.Idade = 5;
    document.getElementById("info").innerHTML = `${p1.nome} tem ${p1.Idade} e matrícula ${p1.id}`;
} catch (error) {
    console.error(error.message);
}