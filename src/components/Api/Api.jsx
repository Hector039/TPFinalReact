import axios from "axios";

const getProductos = async () => {
        const respuesta = await axios.get("productos.json");
    return respuesta.data
}

export default getProductos;