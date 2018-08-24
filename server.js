let users = [{id: '1', name:'Hannah', email: 'hg@jangle.com', password:'1234'},
{id: '2', name:'John', email: 'john@jingle.com', password: '0000'}]

let squabs = [{id: '1', body:'I have so many complaints', userId: '2'},
{id: '2', body:'I have so few complaints!', userId: '1'}]

const express = require('express');
// const Router = express.Router;

let app = express();
// let router = new Router();
// let protected = new Router();

let authenticate = (req, res, next) => {
    let password = req.query.password;
    let email = req.query.email;
    users.forEach(user => {
        if (email === user.email && password === user.password) {
            next();
        }
        // } else {
        //     res.end('You shall not pass');
        // }
    })
    res.end('You shall not pass');
}

let listUsers = (req, res) => {
    res.send(users);
}

let squabsByUser = (req, res) => {
    let userId = req.params.userId
    let mySquabs = squabs.filter(squab => 
    squab.userId === userId);
    res.send(mySquabs)
}

app.get('/users', authenticate, listUsers);
app.get('/users/:userId/squabs', authenticate, squabsByUser);
// router.use(authenticate, protected);
// app.use(router);

app.listen(3002);