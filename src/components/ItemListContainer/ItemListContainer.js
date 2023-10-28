import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { DataContext } from "../context/dataContext";

export default function ItemListContainer() {

    const { filtrarPorCategoria, filtroCategoria, filtrarPrecio } = useContext(DataContext);

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
            <ProductCard productos={filtroCategoria} />
        </div>
    )
}