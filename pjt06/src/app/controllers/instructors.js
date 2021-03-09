const { age, date } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        return res.render('instructors/index', { instructors: data.instructors })
    },
    create(req, res) {
        return res.render('instructors/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            // req.body.NOME == ""
            if (req.body[key] == "")
                return res.send('Por favor, preencha todos os campos.')
        }

        let {avatar_url, birth, name, services, gender} = req.body
        
        return
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            // req.body.NOME == ""
            if (req.body[key] == "")
                return res.send('Por favor, preencha todos os campos.')
        }
        
        return
    },
    delete(req, res) {
        return
    },
}