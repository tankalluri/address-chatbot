const express = require('express');
const bodyParser = require('body-parser');
const ssnValidator = require('ssn-validator')

const app = express();
const port = process.env.PORT || 4041;
const users = [{name : "Tanmayee", email : "tanmayee7@gmail.com"}]

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

app.get('/', (req, res) => {
        res.send('Server is up and running')
})

app.post('/validateSSN', (req, res) => {
    if(req.body && req.body.queryResult && req.body.queryResult.parameters){
    let valid = ssnValidator.isValid(req.body.queryResult.parameters['ssn']) === true ? "SSN is correct" : "SSN is wrong";
    let respObj = {
        "fulfillmentText" : " ",
        "fulfillmentMessages" : [{"text" : {"text" : [valid]}}],
        "source" : ""
    }
    res.json(respObj);
}
})

app.post('/validatePin', (req, res) => {
    if(req.body && req.body.queryResult && req.body.queryResult.parameters){
        let valid = req.body.queryResult.parameters['pin'].length === 4 ? "Pin is correct" : "Pin is wrong";
        let respObj = {
            "fulfillmentText" : " ",
            "fulfillmentMessages" : [{"text" : {"text" : [valid]}}],
            "source" : ""
        }
        res.json(respObj);
    }
})