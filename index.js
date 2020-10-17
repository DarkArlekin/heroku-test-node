// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

// assets. Static JS, CSS, fonts
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// SPA default configuration
// it is important to declare this after the assets rule
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// start server
const server = app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${server.address().port}`)
})
