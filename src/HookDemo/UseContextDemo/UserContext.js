import { createContext } from "react";

const AppContext = createContext();
const AppProvider = ({children})=>{
        const userData={
            firstName:"Shiva",
            lastName:"Ram"
        };
    return <AppContext.Provider value={userData}>{children}</AppContext.Provider>
}

export {AppContext,AppProvider} ;