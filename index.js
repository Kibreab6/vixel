const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();



const genres = require('./routers/genre');
const home = require('./routers/home');

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(express.static('public'));


app.use('/api/genres', genres);
app.use('/', home);

if (app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('morgan enabled...');
}

const port = 3000;

app.listen(port, ()=>{
    console.log(`The app is listening on the port ${port}`);
})