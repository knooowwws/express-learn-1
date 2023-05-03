import express from 'express'
import mongoose from "mongoose";
import Post from "./models/Post.js";
import router from "./routers/router.js";
import fileUpload from 'express-fileupload'

const PORT = 1414
const DB_URL = 'mongodb://localhost:27017'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)


async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log('server was started'))
  } catch (e) {
    console.log(e)
  }
}

startApp()
