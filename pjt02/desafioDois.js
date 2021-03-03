const empresa = {
    nome: 'JavaScript',
    cor: 'amarelo',
    foco: 'linguagem',
    endereco: 'Rua JavaScript, 180'
}

console.log(`A empresa ${empresa.nome} esta localizada na ${empresa.endereco}.`)

const programador = {
    nome: 'Gabriel',
    idade: 30,
    tecnologia: 1
}

const linguagens = {
    propriedades: [
        { nome: 'C#', especialidade: 'Desktop' },
        { nome: 'Java', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O programador ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${linguagens.propriedades[programador.tecnologia].nome} com especialidade em ${linguagens.propriedades[programador.tecnologia].especialidade}.`)
