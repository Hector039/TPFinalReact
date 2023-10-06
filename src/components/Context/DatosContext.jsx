import { createContext } from "react";
import getProductos from "../../DataProduct/getProductos";
import { useState } from "react";

export const DataContext = createContext();


const [productos, setProductos] = useState([]);

    async function axiosData() {
        let data = await getProductos();
        
        setProductos(data);
    }
    axiosData();



export const DatosProvider = ({children})=>{

    return (
        <DataContext.Provider value={productos}>
            {children}
        </DataContext.Provider>
    )
}