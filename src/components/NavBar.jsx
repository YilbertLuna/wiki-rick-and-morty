import { NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { useContext } from "react"
import { appContext } from "../context/AppContext"

function NavBar() {

    const context = useContext(appContext)

    const activeStyle = 'underline underline-offset-4 text-blue-800'

    return(
        <div>
            <header className="flex justify-between top-0 fixed w-full py-8 px-9 md:px-12 bg-violet-50 border-b border-b-black">

                <h1 className="text-xl font-semibold"> <NavLink to="/">Rirck and Morty Wiki</NavLink> </h1>

                <button className="flex p-1 text-2xl md:hidden" onClick={() => context.handdleNavBarActive()}>
                    <AiOutlineMenu/>
                </button>

                <ul className={`hidden md:flex md:items-center md:gap-3`}>
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
            </header>

            <div className={` ${context.active ? 'h-20' : 'h-0'} flex fixed top-24 w-full bg-violet-50 shadow-lg md:hidden px-12 transition-all duration-300`}>
                <ul className={`${context.active ? null : 'hidden'} flex gap-5 justify-center items-center text-center w-full`}>
                    <li className="text-xl font-semibold"><NavLink to='/' className={({isActive}) => isActive ? activeStyle : undefined}>Characters</NavLink></li>
                    <li className="text-xl font-semibold"><NavLink to='/location' className={({isActive}) => isActive ? activeStyle : undefined}>Location</NavLink></li>
                    <li className="text-xl font-semibold"><NavLink to='/episode' className={({isActive}) => isActive ? activeStyle : undefined}>Episode</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export { NavBar }