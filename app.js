const express = require("express");
// const { fstat } = require("fs");
const path = require("path");
const app = express();
const port = 8000;


// app.use(express.static('static', options))
// express

app.use('/static', express.static('static'));
app.use(express.urlencoded())


//  pug
//set the templete engine as pug
app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

//our pug demo endpoint

app.get('/',(req, res)=>{
    const params = { }
    res.status(200).render('index.pug', params);
})


//star the server
app.listen(port, () => {
    console.log(`the application started sucessfully on port ${port}`);
});