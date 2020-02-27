require('dotenv').config()

const app = require('./config/server')

app.listen(process.env.PORT, ()=>{
    console.log(`Node server running on ${process.env.PORT}`)
})