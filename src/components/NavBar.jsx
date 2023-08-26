import { NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { useContext } from "react"
import { appContext } from "../context/AppContext"

function NavBar() {

    const context = useContext(appContext)

    const activeStyle = 'underline underline-offset-4 text-blue-800'

    return(
        // normal menu
        <header className="flex justify-between items-center top-0 fixed w-full py-8 px-9 sm:px-12 bg-violet-50 border-b border-b-black">

            <h1 className="text-xl font-semibold"> <NavLink to="/">Rirck and Morty Wiki</NavLink> </h1>

            <ul className="hidden sm:flex sm:items-center sm:gap-3">
                <li className="text-xl font-semibold">
                    <NavLink to="/" className={({isActive}) => isActive ? activeStyle : undefined}>Characters</NavLink> 
                </li>
                <li className="text-xl font-semibold">
                    <NavLink to="/location" className={({isActive}) => isActive ? activeStyle : undefined}>location</NavLink>
                </li>
                <li className="text-xl font-semibold">
                    <NavLink to="/episode" className={({isActive}) => isActive ? activeStyle : undefined}>episode</NavLink>
                </li>
            </ul>

            <ul onClick={() => context.handleMenu()} className={`sm:hidden`}>
                <AiOutlineMenu/>
            </ul>
        </header>
    )
}

export { NavBar }