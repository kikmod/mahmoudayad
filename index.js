require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mahmoudali:kikmod@cluster0.olpza7c.mongodb.net/flutter?retryWrites=true&w=majority').then((result) => {
    app.listen(process.env.PORT || 3020, () =>
        console.log('connected:)'));
}).catch((e) => { console.log(e); });

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))