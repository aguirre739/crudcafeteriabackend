import mongoose, {Schema, Mongoose} from 'mongoose';

//creamos una variable que contenga un objeto
const productoSchema = new Schema({
    nombreProducto: {
        type: String, //tipo de dato
        maxlength: 100, //maxima cantidad de caracteres aceptados
        required: true, //campo requerido/obligatorio
        unique: true //para que el valor sea unico
    },
    precioProducto: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
},{
    timestamps: true // para que mongo agregue la fecha de creacion
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;