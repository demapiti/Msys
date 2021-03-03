const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
    { nome: "Jane", tecnologias: ["CSS", "Node.js"] }
]

listarUsuarios(usuarios)

function listarUsuarios(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}.`)
    }
}

listarUsuariosQueTrabalhamComCSS(usuarios)

function listarUsuariosQueTrabalhamComCSS(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        let isCSS = checarCSS(usuarios[i])

        if (isCSS) {
            console.log(`O programador ${usuarios[i].nome} trabalha com CSS.`)
        }
    }
}

function checarCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] == 'CSS') {
            return true
        }
    }
}

const usuarios2 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
]

for (let usuario of usuarios2) {
    const calculo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (calculo == 0) {
        console.log(`${usuario.nome} possui ${calculo} de saldo.`)
    }
    else if (calculo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${calculo}.`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${calculo}.`)
    }
}

function calculaSaldo(receitas, despesas) {
    const receita = somaNumeros(receitas)
    const despesa = somaNumeros(despesas)

    return receita - despesa
}

function somaNumeros(numeros) {
    let soma = 0
    
    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}