import Producto from '../models/producto';
const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req, res) => {
    res.send("pame tips")
}

cafeteriaCtrl.crearProducto = async (req, res) => {
    console.log(req.body)
    try {
        const {
            nombreProducto, precioProducto, categoria
        } = req.body //desarmamos el objeto para crear uno nuevo
        //o se puede hacer req.body.nombreProducto

        //creamos un producto nuevo (objeto nuevo)
        const productoNuevo = new Producto({
            nombreProducto: nombreProducto,
            precioProducto: precioProducto,
            categoria: categoria
        })

        //quiero guardar mi producto en la BBDD
        await productoNuevo.save();
        //enviar respuesta al frontend
        res.status(201).json({
            mensaje: "El producto se agregó correctamente" //propiedad inventada para enviar mj
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrió un error"
        })
    }
}

cafeteriaCtrl.listarProductos = async (req, res) =>{
    try{
        const datos = await Producto.find(); // aqui obtengo todos los productos de mi collection
        //responder al front end
        res.status(200).json(datos);
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Ha ocurrido un error"
        })
    }
}

cafeteriaCtrl.borrarProducto = async (req, res) => {
    try{
        console.log(req.params.id) // pruebo extraer el parametro id de la url
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "Borramos un producto"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Ha ocurrido un error"
        })
    }
}

cafeteriaCtrl.editarProducto = async (req, res) => {
    try{
        //validar la estructura de req.body antes de actualizar

        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: "Se actualizó correctamente"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Ha ocurrido un error"
        })
    }
}
export default cafeteriaCtrl;