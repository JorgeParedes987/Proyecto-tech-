const express = require('express');
const  roouter = express.Router();
const Productos = require('../controller/index');
const upload= require("../../utilities/multer");



roouter.get('/productos', Productos.getAll );
roouter.get('/productos/:id', Productos.getByID );
roouter.post('/productos',upload.single('imagenproducto'), Productos.createOne);



// roouter.post('/productos');

module.exports = roouter;