const nome = 'Carlos'
const peso = 84
const altura = 1.88

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log('Carlos voce esta acima do peso.')
} else {
    console.log('Carlos voce nao esta acima do peso.')
}

const nome2 = 'Silvana'
const sexo = 'f'
const idade = 48
const contribuicao = 23

if (sexo == 'm') {
    if (idade + contribuicao == 95) {
        console.log(`${nome2}, voce pode se aposentar!`)
    } else {
        console.log(`${nome2}, voce ainda nao pode se aposentar!`)
    }
} else if (sexo == 'f') {
    if (idade + contribuicao == 85) {
        console.log(`${nome2}, voce pode se aposentar!`)
    } else {
        console.log(`${nome2}, voce ainda nao pode se aposentar!`)
    }
}