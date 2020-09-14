import mongoose from 'mongoose';

const url = "mongodb://localhost:27017/cafeteria"; //cadena de conexion a la base de datos

mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("conexion exitosa a la bd");
})