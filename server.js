let users = [{id: '1', name:'Hannah', email: 'hg@jangle.com'},
{id: '2', name:'John', email: 'john@jingle.com'}]

let squabs = [{id: '1', body:'I have so many complaints', userId: '2'},
{id: '2', body:'I have so few complaints!', userId: '1'}]

const express = require('express');

let app = express();

let listUsers = (req, res) => {
    if (req.query.password === 'letmein') {
        res.send(users);
    } else {
        res.end('You shall not pass');
    }
}

let squabsByUser = (req, res) => {
    let userId = req.params.userId;
    let mySquabs = squabs.filter(squab => 
        squab.userId === userId);
    res.send(mySquabs)
}

app.get('/users', listUsers)
app.get('/users/:userId/squabs', squabsByUser)

app.listen(3002)