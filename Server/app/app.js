const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const routes = require('./routes')

app.use('/',routes);

app.get('/',(req, res) =>{
    res.send('Hola, mundo!');
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
