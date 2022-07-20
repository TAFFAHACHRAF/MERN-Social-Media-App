import express, { application } from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
import users from './routes/Users.js'
import docses from './routes/Docses.js'

// Midlwares
app.use(bodyParser.json({ limit : "30mb", extended : true}))
app.use(bodyParser.urlencoded({ limit : "30mb", extended : true}))
app.use(cors())
app.use('/users',users)
app.use('/docses',docses)

// Connect to db 
mongoose.connect("mongodb+srv://achraf:achraf1234@cluster0.gzpxglp.mongodb.net/?retryWrites=true&w=majority", function(err) {
    if (err) { 
      console.log(err);
      } else {
      console.log("connected to db!")
    }
  });

app.listen(3000)