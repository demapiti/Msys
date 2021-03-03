const classA = [
    {
        name: 'Gabriel',
        grade: 9
    },
    {
        name: 'Rafael',
        grade: 8.5
    },
    {
        name: 'Uziel',
        grade: 5.5
    }
]

const classB = [
    {
        name: 'Miguel',
        grade: 10
    },
    {
        name: 'Lucifer',
        grade: 9.5
    },
    {
        name: 'Metraton',
        grade: 8
    },
    {
        name: 'Ablon',
        grade: 4
    }
]

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

sendMessage(averageA, 'A')
sendMessage(averageB, 'B')

studantsFlunkeds(classA)
studantsFlunkeds(classB)

function calculateAverage(studants) {
    let sum = 0

    for (let i = 0; i < studants.length; i++) {
        sum = sum + studants[i].grade
    }
    const average = sum / studants.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`Parabens turma ${turma}, a average eh: ${average}.`)
    }
    else {
        console.log(`A turma ${turma} precisa melhorar, a average eh: ${average}.`)
    }
}

function studantsFlunkeds(studants) {
    for (let studant of studants) {
        markAsFlunked(studant);
        sendMessageFlunked(studant);
    }
}

function markAsFlunked(studant) {
    studant.reprovado = false

    if (studant.grade < 5) {
        studant.reprovado = true
    }
}

function sendMessageFlunked(studant) {
    if (studant.reprovado) {
        console.log(`O studant ${studant.name} esta reprovado.`)
    }
}
