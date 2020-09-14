import express from "express";
// const express = require("express");
import morgan from "morgan";
// const morgan = require("morgan");
import cors from "cors";
// const cors = require('cors');
import path from "path";
import productoRouter from './routes/productos.routes';
import './database';

//configuracion basica
const app = express(); //creamos una instancia de express
//crear una variable port
app.set('port', process.env.PORT || 4000)

// const port = 4000;

app.listen(app.get('port'), () =>{
    console.log(path.join(__dirname, "../public"));
    console.log("estoy escuchando el puerto "+app.get('port'));
})

//middlewares
app.use(morgan('dev'));
app.use(cors());
//lo siquiente es para que entienda a los JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//aqui agrego la carpeta public con los archivos estaticos
app.use(express.static(path.join(__dirname, "../public")))

// app.get('/', (req, res) =>{
//     res.send("Hola Mundo")
// });
app.use('/api/cafeteria', productoRouter)

app.get('/usuarios', (req, res)=>{
    res.send("estoy en la pagina de usuarios")
})