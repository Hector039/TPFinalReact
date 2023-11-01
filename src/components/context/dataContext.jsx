import { createContext } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, limit, query, where, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { DataBase } from "../../Firebase/config";

import { auth, googleProvider } from "../../Firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

export const DataContext = createContext([]);
const carritoEnLs = JSON.parse(localStorage.getItem("carrito")) || [];

export const DataProvider = ({ children }) => {

    const MySwal = withReactContent(Swal);

    const [carrito, setCarrito] = useState(carritoEnLs);

    const carritoNumero = () => {
        return carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    }

    const [proxItems, setProxItems] = useState(3);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    function handleAgregar(producto, cantidad) {
        const productoSel = { ...producto, cantidad };
        const carritoCopia = [...carrito];
        const prodEncontradoCarrito = carritoCopia.find((item) => item.id === productoSel.id);

        if (prodEncontradoCarrito) {
            prodEncontradoCarrito.cantidad += cantidad;
        } else {
            carritoCopia.push(productoSel)
        }
        setCarrito(carritoCopia);

        toast.success("Producto agregado al Carrito!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const handleVaciar = () => {
        setCarrito([]);

        toast.success("Carrito Vaciado!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    function eliminarItem(id) {
        const itemId = carrito.find((item) => item.id === id);
        const carritoNuevo = carrito.filter((item) => item.id !== itemId.id);
        setCarrito(carritoNuevo);

        toast.success("Producto eliminado.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

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
        const q = targetIn === "todos" ? query(collection(DataBase, "productos"), limit(proxItems)) :
            query(collection(DataBase, "productos"), where("categoria", "==", targetIn), limit(proxItems));

        getDocs(q)
            .then((resp) => {

                const productosFiltrados = resp.docs.map((obj) => {
                    return { ...obj.data(), id: obj.id }
                })

                if (eventIn === "menor") {
                    setFiltroCategoria(productosFiltrados.sort((a, b) => a.precio - b.precio));
                } else if (eventIn === "mayor") {
                    setFiltroCategoria(productosFiltrados.sort((a, b) => b.precio - a.precio));
                } else if (eventIn === "todos") {
                    setFiltroCategoria(productosFiltrados);
                }
            })


    }, [targetIn, proxItems, eventIn])

    console.log(filtroCategoria);

    /* seccion usuarios y administración*/

    const [userState, setUserState] = useState(null);
    const [productosEncontrados, setProductosEncontrados] = useState([]);

    const login = async (e) => {
        await signInWithEmailAndPassword(auth, e.ecorreo, e.pass);
        MySwal.fire({
            icon: "success",
            title: "Usuario Existente",
            text: "Se inició sesión correctamente"
        })
        setUserState(auth.currentUser);
    }

    const accederConGoogle = async () => {
        await signInWithPopup(auth, googleProvider);
        setUserState(auth.currentUser);
    }

    const newRegister = async (e) => {
        await createUserWithEmailAndPassword(auth, e.email, e.password);
        MySwal.fire({
            icon: "success",
            title: "Usuario Nuevo",
            text: "Se registró el usuario correctamente"
        })
        setUserState(auth.currentUser);
    }

    const {
        register,
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const cargarProducto = async (e) => {

        await addDoc(collection(DataBase, "productos"), {
            categoria: e.categorias, descripcion: e.descripcion,
            img_producto: e.imagen, nombre_producto: e.nombre, precio: e.precio, stock: e.stock
        })

        toast.success("Producto cargado con éxito!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        reset();
    }

    const eliminarProducto = async (id) => {
        console.log(id);

        const item = doc(DataBase, "productos", id);
        await deleteDoc(item);

        toast.success("Producto eliminado con éxito!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        setProductosEncontrados([]);
    }

    const modificarProducto = async (e) => {
        console.log(e);

        const item = doc(DataBase, "productos", e.id);
        await updateDoc(item, {
            categoria: e.categorias, descripcion: e.descripcion,
            img_producto: e.imagen, nombre_producto: e.nombre, precio: e.precio, stock: e.stock
        });

        toast.success("Producto modificado con éxito!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        setProductosEncontrados([]);
    }

    const buscarProducto = (e) => {

        const q = query(collection(DataBase, "productos"), where("nombre_producto", ">=", e.nombreProducto), where("nombre_producto", "<=", e.nombreProducto + '~'));

        getDocs(q)
            .then((resp) => {
                setProductosEncontrados(

                    resp.docs.map((obj) => {
                        return { ...obj.data(), id: obj.id }
                    })
                )
            })
        console.log(productosEncontrados);
    }

    const logOut = async () => {
        await signOut(auth);
        setUserState(auth.currentUser);

        toast.success("Sesión cerrada correctamente.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    console.log(userState);



    return (
        <DataContext.Provider value={{
            carrito, setCarrito,
            carritoNumero, handleAgregar, filtroCategoria,
            handleVaciar, eliminarItem, filtrarPrecio,
            filtrarPorCategoria, proxItems, setProxItems,
            login, accederConGoogle, newRegister, userState, setUserState,
            cargarProducto, eliminarProducto, modificarProducto,
            productosEncontrados, buscarProducto, logOut,  register,
            handleSubmit,reset
        }}>
            {children}
        </DataContext.Provider>
    )
}
