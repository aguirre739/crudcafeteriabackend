import mongoose from 'mongoose';

const url = "mongodb+srv://root:root@cluster0.d4spl.gcp.mongodb.net/test"; //cadena de conexion a la base de datos

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