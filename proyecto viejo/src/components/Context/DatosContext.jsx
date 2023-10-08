import { createContext } from "react";
import getProductos from "../../DataProduct/getProductos";

export const DataContext = createContext();

    const data = await getProductos();

    console.log(data);

export const DatosProvider = ({children})=>{

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}