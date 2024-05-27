const express=require('express');
const server= express();
const path = require('path');
const dotenv=require('dotenv');
dotenv.config();
const rouuterProductos= require('./src/routes/index.js');

const PORT = process.env.PORT || 5000


server.use(express.json())
server.use(express.static(path.join(__dirname, 'static')))


server.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); //Cualquier error verificar aqui plis http://127.0.0.1:5500/pages/index.html
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next()
});
server.get('/',(req,res)=>{
res.send('API Tienda');
})
server.use('/api',rouuterProductos)
server.listen(PORT,()=>{
console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
})