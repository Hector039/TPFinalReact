import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../context/dataContext";


export default function Sistema() {

    const { cargarProducto, modificarProducto, eliminarProducto, productosEncontrados, buscarProducto } = useContext(DataContext);

    const {
        register,
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const {
        register: register2,
        handleSubmit: handleSubmit2,
    } = useForm({
        mode: "onBlur",
    });


    const {
        register: register3,
        handleSubmit: handleSubmit3,
    } = useForm({
        mode: "onBlur",
    });


    return (
        <div>
            <h1>Sistema de Altas/Bajas/Modificaciones de Productos</h1>

            <div>
                <h2>Alta de Nuevos Productos:</h2>
                <form onSubmit={handleSubmit(cargarProducto)}>
                    <input type="text" name="nombre" placeholder="Nombre" {...register("nombre", { required: true })} />
                    <input type="text" name="descripcion" placeholder="Descripción" {...register("descripcion", { required: true })} />
                    <input type="text" name="imagen" placeholder="Link Imagen" {...register("imagen", { required: true })} />
                    <select name="categorias" id="category-select" {...register("categorias", { required: true })}>
                        <option value="Bebidas Vegetales">Bebidas Vegetales</option>
                        <option value="Granolas y Cereales">Granolas y Cereales</option>
                        <option value="Frutos Secos">Frutos Secos</option>
                        <option value="Dulces y Chocolates">Dulces y Chocolates</option>
                        <option value="Congelados">Congelados</option>
                    </select>
                    <input type="number" name="precio" placeholder="Precio" {...register("precio", { required: true })} />
                    <input type="number" name="stock" placeholder="Stock" {...register("stock", { required: true })} />
                    <button type="submit">Cargar Producto</button>
                </form>
            </div>

            <div>
                <h3>Busca el producto requerido por el nombre para Bajas y Modificaciones:</h3>

                <form onSubmit={handleSubmit2(buscarProducto)}>
                    <input type="text" name="nombre-producto" placeholder="Ingresa el nombre del producto..." {...register2("nombre-producto", { required: true })} />
                    <button type="submit">Buscar Producto</button>
                </form>
                
                <div>

                    {
                        productosEncontrados.length === 0 ?

                            <p>No se encontró el producto. Intente nuevamente.</p> :

                            <div>
                                <form onSubmit={handleSubmit3(modificarProducto)}>
                                    <p>ID del producto: {productosEncontrados.id}</p>
                                    <input type="text" name="nombre" value={productosEncontrados.nombre_producto} {...register3("nombre", { required: true })} />
                                    <input type="text" name="descripcion" value={productosEncontrados.descripcion} {...register3("descripcion", { required: true })} />
                                    <input type="text" name="imagen" value={productosEncontrados.img_producto} {...register3("imagen", { required: true })} />
                                    <select name="categorias" id="category-select" {...register3("categorias", { required: true })}>
                                        <option value={productosEncontrados.categoria}>{productosEncontrados.categoria}</option>
                                        <option value="Bebidas Vegetales">Bebidas Vegetales</option>
                                        <option value="Granolas y Cereales">Granolas y Cereales</option>
                                        <option value="Frutos Secos">Frutos Secos</option>
                                        <option value="Dulces y Chocolates">Dulces y Chocolates</option>
                                        <option value="Congelados">Congelados</option>
                                    </select>
                                    <input type="number" name="precio" value={productosEncontrados.precio} {...register3("precio", { required: true })} />
                                    <input type="number" name="stock" value={productosEncontrados.stock} {...register3("stock", { required: true })} />
                                    <button type="submit">Cargar Producto</button>

                                </form>
                                <button className="cart-button" onClick={() => eliminarProducto(productosEncontrados.id)}>Eliminar producto</button>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}