import { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { DataContext } from "../context/dataContext";

export default function ItemListContainer() {

    const { productos } = useContext(DataContext);
    console.log(productos);

    const [filtroCategoria, setFiltroCategoria] = useState([]);
    const [targetIn, setTargetIn] = useState("todos");
    const [eventIn, setEventIn] = useState("todos");

    function filtrarPorCategoria(e) {
        setTargetIn(e.target.value);
    }

    function filtrarPrecio(e) {
        setEventIn(e.target.value);
    }

    useEffect(() => {
        const productosFiltrados = productos.filter((elemento) => {
            if (elemento.categoria === targetIn) {
                return (elemento);
            }else if(elemento.categoria === "todos"){
                return (productos);
            }
        });

        const productosOrdenados = productosFiltrados.sort(function (a, b) {
            if (eventIn === "menor") {
                return (a.precio - b.precio);
            } else if (eventIn === "mayor") {
                return (b.precio - a.precio);
            } else if (eventIn === "todos") {
                return (productosFiltrados);
            }

        });
        
        console.log(productosOrdenados);
        setFiltroCategoria(productosOrdenados);

    }, [targetIn, eventIn, productos]);

        
        console.log(filtroCategoria);
    return (
        <div className="item-list-container">
            <h1>Bienvenidos a nuestro Mercadito Verde</h1>

            <div className="filter-container">
                <div className="category-filter">
                    <label htmlFor="category-select">Categoria:</label>
                    <select name="categorias" id="category-select" onChange={filtrarPorCategoria}>
                        <option value="todos">--Todos los productos--</option>
                        <option value="Bebidas Vegetales">Bebidas Vegetales</option>
                        <option value="Granolas y Cereales">Granolas y Cereales</option>
                        <option value="Frutos Secos">Frutos Secos</option>
                        <option value="Dulces y Chocolates">Dulces y Chocolates</option>
                        <option value="Congelados">Congelados</option>
                    </select>
                </div>

                
            <div className="filter-filter">
                    <label htmlFor="filter-select">Filtrar:</label>
                    <select name="filter" id="filter-select" onChange={filtrarPrecio}>
                        <option value="todos">--Elige el Filtro/Ninguno--</option>
                        <option value="menor">Menor Precio</option>
                        <option value="mayor">Mayor precio</option>
                    </select>
                </div>

            </div>
            {
                filtroCategoria.length > 0 ?
                    <ProductCard key={filtroCategoria.id} productos={filtroCategoria} /> :
                    <ProductCard key={productos.id} productos={productos} />
            }
        </div>
    )
}