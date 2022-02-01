var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require('cors')
const LineAPI = require('line-api');
// npm install line-api

app.use(cors())
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 2000))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const notify = new LineAPI.Notify({
    token: "YOUTOKEN"
})


app.get('/', function(req, res) {

    res.send("hello world");

    notify.send({
        message: "TEST"
            //sticker: 'smile' // shorthan
            // sticker : { packageId: 1, id: 2 } // exact ids
            //image: 'test.jpg' // local file
            // image: { fullsize: 'http://example.com/1024x1024.jpg', thumbnail: 'http://example.com/240x240.jpg' } // remote url
    }).then(console.log)


})
app.listen(app.get('port'), function() {
    console.log('run at port', app.get('port'))
})
