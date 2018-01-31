
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let app = express();

const imageApi = require('./routers/imageApiRouter');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api/image', imageApi);

mongoose.connect(
    'mongodb://localhost:27017/hotgirl',
    {
        useMongoClient: true
    },
    (err) => {
        if (err) {console.log(err)}
        else{
            console.log("dtbase connected");
        }
    }
);

app.listen(6969, (err) => {
    if (err) console.log(err);
    console.log("Listening at port 6969");
})