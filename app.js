// assign variables
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const characterList = require("./characters.json")
const generateGibberish = require('./generate_gibberish')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set route
app.get('/', (req, res) => {
  res.render('index', { characters: characterList.results })
})

app.post('/', (req, res) => {
  const options = req.body
  console.log(options)
  const gibberish = generateGibberish(options)
  res.render('index', { characters: characterList.results, options: options, gibberish: gibberish })
})

// listen on server
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`)
})