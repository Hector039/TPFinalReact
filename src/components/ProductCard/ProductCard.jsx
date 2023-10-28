import Producto from "../Producto/Producto";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function ProductCard({ productos }) {

    const { proxItems, setProxItems } = useContext(DataContext)

    function handleMostrarMas() {
        setProxItems(proxItems + 3);
    }

    return (
        <div>


            <div className="product-main">

                {
                    productos.map((obj, indice) => {
                        if (indice < proxItems) {
                            return <Producto key={obj.id} producto={obj} />
                        }
                    })
                }


            </div>
            <div className="ver-mas-seccion">
                <button className="boton-ver-mas" onClick={handleMostrarMas}>Ver Más</button>
            </div>
        </div>

    )
}
