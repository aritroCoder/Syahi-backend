const express = require('express')
var bodyParser = require('body-parser')
const connectToMongo = require('./db.js')
const app = express()
const port = 3000;

//connect to mongodb
connectToMongo();


//make public folder the static directory
app.use(express.static('public'));

//endpoints
app.get('/', (req, res) => {
  res.sendFile('/index.html');
})
app.post('/', (req, res) => {
    res.send('Got a POST request')
})
app.get('/register', (req,res)=>{
  res.sendFile('/LogIn/regform.html')
})

//Available Routes
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))
app.use('/api/user', require('./Routes/users'))

//listening to port
app.listen(process.env.PORT || port, () => {
  console.log(`Backend listening at http://localhost:${process.env.PORT}`)
}) 