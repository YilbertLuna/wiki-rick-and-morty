import { Card } from "../Card"
import { UseGetDataCharacters } from "../../hooks/UseGetDataCharacters"

function Character() {

    // we give it as property the page number that we want it to visualize
    const { character } = UseGetDataCharacters(1)

    return(
        <div>
            <h1 className="grid mt-44 justify-items-center text-center text-2xl">Characters</h1>

            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5*/">
                {character?.map(data => <Card key={data.id} data={data}/>)}
            </div>
        </div>
    )
}

export { Character }