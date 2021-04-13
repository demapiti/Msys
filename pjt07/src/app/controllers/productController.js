const Category = require('../models/Category');
const Product = require('../models/Product');

module.exports = {
    async create(req, res) {
        const results = await Category.all()
        const categories = results.rows;

        return res.render('products/create.njk', { categories })
    },
    async post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == "")
                return res.send('Por favor, preencha todos os campos.')
        }

        let results = await Product.create(req.body)
        const product = results.rows[0].id

        results = await Category.all()
        const categories = results.rows

        return res.render('products/create.njk', { categories, product })
    }
}