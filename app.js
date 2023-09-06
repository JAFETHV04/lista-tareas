const express = require('express');
const app = express();
//app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');// Ruta a tu archivo HTML
  });
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(3001, ()=>{
    console.log('SERVER corriendo en http://localhost:3001');
});