import { createContext } from "react";
import { useState, useEffect } from "react";
import getProductos from "../Api/Api";

export const DataContext = createContext([]);

const carritoEnLs = JSON.parse(localStorage.getItem("carrito")) || [];

export const DataProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState(carritoEnLs);
    
    const [productos, setProductos] = useState([]);

    const [cantidad, setCantidad] = useState(1);

    const carritoNumero = () => {
        return carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    }

    useEffect(() => {
        async function axiosData() {
            let data = await getProductos();
            
            setProductos(data);
        }
        axiosData();

    }, [])

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])



    
    function handleRestar() {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    function handleSumar(stock) {
        cantidad < stock && setCantidad(cantidad + 1);
    }
    
    function handleAgregar(producto) {
        const productoSel = {...producto, cantidad};
        const carritoCopia = [...carrito];
        const prodEncontradoCarrito = carritoCopia.find((item) => item.id === productoSel.id);
        
        if (prodEncontradoCarrito){
            prodEncontradoCarrito.cantidad += cantidad;
        } else {
            carritoCopia.push(productoSel)
        }
        setCarrito(carritoCopia);
    }



    const handleVaciar = () => {
        setCarrito([]);
    }

    function eliminarItem(id) {
        const itemId = carrito.find((item) => item.id === id);
        const carritoNuevo = carrito.filter((item) => item.id !== itemId.id);
        setCarrito(carritoNuevo);
    }

    const [filtroCategoria, setFiltroCategoria] = useState([]);
    const [targetIn, setTargetIn] = useState("todos");
    const [eventIn, setEventIn] = useState();

    function filtrarPorCategoria(e) {
        setTargetIn(e.target.value);
    }

    function filtrarPrecio(e) {
        setEventIn(e.target.value);
    }

    useEffect(() => {
        const productosFiltrados = productos.filter(function (elemento) {
            if (elemento.categoria === targetIn) {
                return true;
            }else if(targetIn === "todos"){
                return true;
            }else{
                return false;
            }
        });
        const productosOrdenados = productosFiltrados.sort(function (a, b) {
            if (eventIn === "menor") {
                return (a.precio - b.precio);
            } else if (eventIn === "mayor") {
                return (b.precio - a.precio);
            } else if (eventIn === "todos") {
                return productosFiltrados;
            }else{
                return productos;
            }
        });
        setFiltroCategoria(productosOrdenados);
}, [targetIn, eventIn, productos]);

    return (
        <DataContext.Provider value={{ productos, carrito, setCarrito, 
        carritoNumero, cantidad, setCantidad, 
        handleRestar, handleSumar, handleAgregar, 
        handleVaciar, eliminarItem, filtroCategoria,
        filtrarPorCategoria, filtrarPrecio }}>
            {children}
        </DataContext.Provider>
    )
}
