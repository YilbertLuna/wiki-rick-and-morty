/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";
import { UseGetDataCharacters, UseGetPageSearchCharacter } from "../hooks/UseGetDataCharacters"

const appContext = createContext()

function Context ({ children }) {
    
    // state for the change page
    const [page, setPage] = useState(1)
    // state for search character
    const [searcher, setSearch] = useState("")
    // state for the menu and menu burger responsive
    const [menuBurger, setMenuBurger] = useState(true)
    const [menu, setMenu] = useState(false)
    //----------------------------------------------------------------------------------------//

    //using custom hooks for get cahracter and info from API
    // we give it as property the page number that we want it to visualize
    const { pages } = UseGetPageSearchCharacter(searcher)
    const { character } = UseGetDataCharacters(page, searcher)
    //----------------------------------------------------------------------------------------//

    // function for search character
    function searchCharacter(e) {
        //every time a character is searched, the value page is 1 
        setPage(1)
        setSearch(e.target.value)
    }
    // filter character
    // when searched for a character that does not exit, the conditional has to return null 
    character ? character.filter((item => item.name.toLowerCase().includes(searcher.toLowerCase()))) : null
    //----------------------------------------------------------------------------------------//
    
    // functions to change page
    function nextPage() {
        if(page < pages?.pages) setPage(page + 1)
    }

    function backPage() {
        if(page > 1) setPage(page - 1)
    }
    //----------------------------------------------------------------------------------------//

    // function to menu responsive
    function handleMenu() {
        if(menu === false) setMenu(true)
        else setMenu(false)

        if(menuBurger === true) setMenuBurger(false)
        else setMenuBurger(true)
    }

    return(
        <appContext.Provider value={{
            page,
            setPage,
            nextPage,
            backPage,
            menuBurger,
            menu,
            setMenu,
            handleMenu,
            setMenuBurger,
            character,
            searchCharacter,
            pages,
        }}>
            {children}
        </appContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Context, appContext }