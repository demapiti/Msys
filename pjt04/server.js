const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
    const about = {
        avatar_url: "https://www.dev-metal.com/wp-content/uploads/2014/04/html5-1.jpg",
        name: "CAP03",
        role: "HTML - CSS.",
        description: "Curso initial WEB.",
        links: [
            { name: "Github", url: "https://github.com/" },
            { name: "Twitter", url: "https://twitter.com/home" },
            { name: "Linkedin", url: "https://br.linkedin.com/" }
        ]
    }

    return res.render('about', { about })
})

server.get('/portfolio', (req, res) => {
    return res.render('portfolio', { items: videos })
})

server.get('/video', (req, res) => {
    const id = req.query.id;

    const video = videos.find((video) => {
        return video.id == id
    })

    if (!video) {
        res.send('Video not found!')
    }

    res.render('video', { item: video })
})

server.listen(5000, () => {
    console.log('Server is running.')
})