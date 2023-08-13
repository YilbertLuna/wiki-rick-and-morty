import { NavLink } from "react-router-dom"

function NavBar() {

    const activeStyle = 'underline underline-offset-4 text-blue-800' 

    return(
        <header className="flex justify-between items-center top-0 fixed w-full py-8 px-12 bg-violet-50 border-b border-b-black">

            <h1 className="text-xl font-semibold"> <NavLink to="/">Rirck and Morty Wiki</NavLink> </h1>

            <ul className="flex items-center gap-3">
                <li className="text-xl font-semibold">
                    <NavLink to="/" className={({isActive}) => isActive ? activeStyle : undefined}>Characters</NavLink> 
                </li>
                <li className="text-xl font-semibold">
                    <NavLink to="/location" className={({isActive}) => isActive ? activeStyle : undefined}>locaiton</NavLink>
                </li>
                <li className="text-xl font-semibold">
                    <NavLink to="/episode" className={({isActive}) => isActive ? activeStyle : undefined}>episode</NavLink>
                </li>
            </ul>
        </header>
    )
}

export { NavBar }