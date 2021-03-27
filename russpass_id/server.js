const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        // Pass to next layer of middleware
        next();
    });
}


app.post('/auth', (req, res) => {
    return res.json({
        status: 200,
        response: {
            data: {
                auth: {
                    login: 'Пользователь Пользовательский',
                    email: 'test@test.test'
                }
            }
        }
    });
})

app.post('/confirmation', (req, res) => {
    return res.json({
        status: 200,
        response: {
            data: {
                token: 'token token'
            }
        }
    });
})

app.post('/registration', (req, res) => {
    return res.json({
        status: 200,
        response: {
            data: {
                token: 'token token'
            }
        }
    });
})


// Serve only the static files form the build directory
app.use(express.static(__dirname + '/build'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);