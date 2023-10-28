

export default function Contador({ stock, cantidad, setcantidad }) {

    function handleRestar() {
        cantidad > 1 && setcantidad(cantidad - 1);
    }

    function handleSumar() {
        cantidad < stock && setcantidad(cantidad + 1);
    }

    return (
        <div className="seleccion-cantidad">
            <button onClick={handleRestar} className="botton-cantidad">-</button>
            <p className="info-cantidad">{stock === 0 ? "Sin Stock" : cantidad}</p>
            <button onClick={handleSumar} className="botton-cantidad">+</button>
        </div>
    )
}