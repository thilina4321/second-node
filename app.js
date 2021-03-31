const express = require('express')
const body_parser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

const app = express()

app.use(body_parser.urlencoded({extended:false}))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(userRoutes)


app.listen(3000) 