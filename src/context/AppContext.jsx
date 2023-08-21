/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

const appContext = createContext()

function Context ({ children }) {
    const [page, setPage] = useState(1)

    function nextPage() {
        if(page < 42) setPage(page + 1)
    }

    function backPage() {
        if(page > 1) setPage(page - 1)
    }

    return(
        <appContext.Provider value={{
            page,
            nextPage,
            backPage
        }}>
            {children}
        </appContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Context, appContext }