/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

const appContext = createContext()

function Context ({ children }) {

    // next and back page
    const [page, setPage] = useState(1)

    function nextPage() {
        if(page < 42) setPage(page + 1)
    }

    function backPage() {
        if(page > 1) setPage(page - 1)
    }

    // menu and menu burger responsive
    const [menuBurger, setMenuBurger] = useState(true)
    const [menu, setMenu] = useState(false)

    function handleMenu() {
        if(menu === false) setMenu(true)
        else setMenu(false)

        if(menuBurger === true) setMenuBurger(false)
        else setMenuBurger(true)
    }

    return(
        <appContext.Provider value={{
            page,
            nextPage,
            backPage,
            menuBurger,
            menu,
            setMenu,
            handleMenu,
            setMenuBurger
        }}>
            {children}
        </appContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Context, appContext }