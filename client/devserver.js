const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors({credentials: true, origin: true}));
const port = 44358;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (request, response) => response.send(''))


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

/**
 * mocks
 */

app.post('/api/authentication/token',(request, response) => {
    const payload = {
        username: request.body.username
    }
    response.send(payload)
})



