const express = require('express');
const bodyParser = require('body-parser');
const ssnValidator = require('ssn-validator')

const app = express();
const port = process.env.port || 4041;
const users = [{name : "Tanmayee", email : "tanmayee7@gmail.com"}]

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

app.post('/validateSSN', (req, res) => {
    if(req.body.ssn){
        res.json({isValid : ssnValidator.isValid(req.body.ssn)});
    }
})

app.post('/validatePin', (req, res) => {
    if(req.body.pin){
        res.json({isValid : req.body.pin.length === 4});
    }
})