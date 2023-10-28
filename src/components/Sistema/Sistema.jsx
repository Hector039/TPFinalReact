import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../context/dataContext";


export default function Sistema() {

    const { cargarProducto, modificarProducto, eliminarProducto, productosEncontrados, buscarProducto } = useContext(DataContext);

    const {
        register,
        handleSubmit,
        reset
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
        setValue,
    } = useForm({
        mode: "onBlur",
    });

    useEffect(() => {
        productosEncontrados.map((obj) => {
            setValue("id", obj.id);
            setValue("nombre", obj.nombre_producto);
            setValue("descripcion", obj.descripcion);
            setValue("imagen", obj.img_producto);
            setValue("categorias", obj.categoria);
            setValue("precio", obj.precio);
            setValue("stock", obj.stock);
        })

    }, [setValue, productosEncontrados])


    return (
        <div className="sitema-container">
            <h1>Sistema de Altas/Bajas/Modificaciones de Productos</h1>

            <div className="altas">
                <p className="sistema-titulo">Alta de Nuevos Productos:</p>
                <form onSubmit={handleSubmit(cargarProducto)} className="checkout-form">
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

                    <div className="sistema-bajas-modif-botones">
                        <button type="submit" className="sistema-boton">Cargar Producto</button>
                        <button type="reset" className="sistema-boton-eliminar" onClick={() => reset()}>Reset</button>
                    </div>


                </form>
            </div>

            <div className="sistema-bajas-modif">
                <p className="sistema-titulo">Busca el producto requerido por el nombre para Bajas y Modificaciones:</p>
                <p>Ingresá la búsqueda en minúsculas y como mínimo las tres primeras letras del nombre del producto.</p>

                <form onSubmit={handleSubmit2(buscarProducto)} className="checkout-form">
                    <input type="text" name="nombreProducto" placeholder="Ingresa el nombre del producto..." {...register2("nombreProducto", { required: true })} />
                    <button type="submit" className="sistema-boton">Buscar Producto</button>
                </form>

                    <div className="bajas-modif-main">

                    {
                        productosEncontrados.length === 0 ?

                            <p>No se realizó un búsqueda / No se encontró el producto</p> :

                            productosEncontrados.map((obj) => {
                                return (
                                
                                <div key={obj.id}>
                                    <form onSubmit={handleSubmit3(modificarProducto)} className="checkout-form">
                                        <p>ID del producto:</p>
                                        <input type="text" name="id" disabled {...register3("id")} />
                                        <input type="text" name="nombre"  {...register3("nombre", { required: true })} />
                                        <input type="text" name="descripcion" {...register3("descripcion", { required: true })} />
                                        <input type="text" name="imagen" {...register3("imagen", { required: true })} />
                                        <select name="categorias" id="category-select" {...register3("categorias", { required: true })}>
                                            <option value="Bebidas Vegetales">Bebidas Vegetales</option>
                                            <option value="Granolas y Cereales">Granolas y Cereales</option>
                                            <option value="Frutos Secos">Frutos Secos</option>
                                            <option value="Dulces y Chocolates">Dulces y Chocolates</option>
                                            <option value="Congelados">Congelados</option>
                                        </select>
                                        <input type="number" name="precio" {...register3("precio", { required: true })} />
                                        <input type="number" name="stock" {...register3("stock", { required: true })} />

                                        <div className="sistema-bajas-modif-botones">
                                            <button type="submit" className="sistema-boton">Modificar Producto</button>
                                            <button className="sistema-boton-eliminar" onClick={() => eliminarProducto(obj.id)}>Eliminar producto</button>
                                        </div>

                                    </form>
                                </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}