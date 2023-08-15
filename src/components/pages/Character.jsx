import { Card } from "../Card"
import { UseGetDataCharacters } from "../../hooks/UseGetDataCharacters"

function Character() {

    // we give it as property the page number that we want it to visualize
    const { character } = UseGetDataCharacters(1)

    return(
        <div>
            <h1 className="grid mt-32 justify-items-center text-center text-2xl">Characters</h1>

            <div className="grid justify-center grid-cols-3">
                {character?.map(data => <Card key={data.id} data={data}/>)}
            </div>
        </div>
    )
}

export { Character }