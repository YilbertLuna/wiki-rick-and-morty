import { Card } from "../Card"
import { useContext } from "react"
import { appContext } from "../../context/AppContext"
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"

function Character() {
    
    const context = useContext(appContext)
    
    // this function is for, if the condicional for searched character is null this function return a message "no character found"
    function viewCharacter() {
        if(context.character) return (
            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {context.character?.map(data => <Card key={data.id} data={data}/>)}
            </div>)
        else return (<h1 className="grid justify-center mt-11 text-center text-2xl">No character found</h1>)
    }
    
    return(
        <div>
            <h1 className={`${context.menu === true ? 'mt-6' : 'mt-32'} ${context.menuBurger === false ? 'sm:mt-32' : null} grid mb-6 justify-items-center text-center text-2xl font-bold`}>Characters</h1>

            {/* search characters */}
            <div className="grid justify-items-center mb-7">
                <input value={context.searcher} onChange={context.searchCharacter} type="text" placeholder="Search a character" className="border border-black rounded-md w-72 sm:w-96 h-8 sm:h-11 sm:text-lg text-center focus:outline-none"/>
            </div>
            
            <div className="flex justify-between items-center w-full px-8 sm:px-20 font-medium text-lg">
                <button className={`${context.page === 1 ? 'opacity-0 cursor-default' : ''} border rounded-lg bg-green-400 w-20 p-3 flex justify-between items-center`} onClick={() => context.backPage()}><GrFormPreviousLink/> Back</button>
                <h1 className="text-xl text-center justify-center">Page {context.page}</h1>
                <button className={`${context.page === context.pages?.pages ? 'opacity-0 cursor-default' : ''} border rounded-lg bg-green-400 w-20 p-3 flex justify-between items-center`} onClick={() => context.nextPage()}>next <GrFormNextLink/></button>
            </div>
            
            { viewCharacter()}
        </div>
    )
}

export { Character }