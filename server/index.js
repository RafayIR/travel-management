require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db/mongodb')
const routes = require('./routes/routes')

require('./db/passport')



app.get('/protected', (req, res) => {
    res.send('authenticate user <a href="users/logout">Logout</a>')
    // if (!req.session) {
    //     res.redirect('/');
    // }
    // res.send('authenticate user <a href="users/logout">Logout</a>')

})

app.use('/', routes)


app.listen(8080)
