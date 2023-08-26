import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { appContext } from "../context/AppContext"

function ResponsiveMenu() {

    const context = useContext(appContext)

    const activeStyle = 'underline underline-offset-4 text-blue-800'

    return (
        // menu burguer responsive
        <ul className={`${context.menu === true ? null : 'hidden'} ${context.menuBurger != false ? null : 'sm:hidden'} flex gap-3 mt-24 p-2 items-center text-center bg-white border-b-2 border-gray-400 responsive-menu`}>
            <li className="text-xl font-semibold py-1  w-full justify-center">
                <NavLink to="/" className={({isActive}) => isActive ? activeStyle : undefined}>Character</NavLink> 
            </li>
            <li className="text-xl font-semibold py-1  w-full justify-center">
                <NavLink to="/location" className={({isActive}) => isActive ? activeStyle : undefined}>location</NavLink>
            </li>
            <li className="text-xl font-semibold py-1  w-full justify-center">
                <NavLink to="/episode" className={({isActive}) => isActive ? activeStyle : undefined}>episode</NavLink>
            </li>
        </ul>
    )
}

export { ResponsiveMenu }
