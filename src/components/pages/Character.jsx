import { Card } from "../Card"
import { UseGetDataCharacters } from "../../hooks/UseGetDataCharacters"
import { useContext } from "react"
import { appContext } from "../../context/AppContext"
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"

function Character() {

    const context = useContext(appContext)

    // we give it as property the page number that we want it to visualize
    const { character } = UseGetDataCharacters(context.page)

    return(
        <div>
            <h1 className={`${context.menu === true ? 'mt-6' : 'mt-32'} ${context.menuBurger === false ? 'sm:mt-32' : null} grid mb-6 justify-items-center text-center text-2xl font-bold`}>Characters</h1>

            <div className="flex justify-between items-center w-full px-20 font-medium text-lg">
                <button className={`${context.page === 1 ? 'opacity-0 cursor-default' : ''} border rounded-lg bg-green-400 w-20 p-3 flex justify-between items-center`} onClick={() => context.backPage()}><GrFormPreviousLink/> Back</button>
                <h1>Page {context.page}</h1>
                <button className={`${context.page === 42 ? 'opacity-0 cursor-default' : ''} border rounded-lg bg-green-400 w-20 p-3 flex justify-between items-center`} onClick={() => context.nextPage()}>next <GrFormNextLink/></button>
            </div>

            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5*/">
                {character?.map(data => <Card key={data.id} data={data}/>)}
            </div>
        </div>
    )
}

export { Character }