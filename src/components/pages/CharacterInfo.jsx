import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { UseGetCharacterInfo } from "../../hooks/UseGetCharacterInfo"

function CharacterInfo() {

    const { CharacterId } = useParams()

    const { characterInfo } = UseGetCharacterInfo(CharacterId)

    // function for character status styles
    function status () {
        if(characterInfo.status === 'Alive') return 'bg-green-500'
        else if(characterInfo.status === 'Dead') return 'bg-red-500'
        else if(characterInfo.status === 'unknown') return 'bg-gray-500'
    }

    return (
        <div className="grid justify-items-center mt-28">
            <div className="flex flex-col rounded-md">
                <figure className="w-80 h-60">
                    <img className="w-full h-full rounded-lg" src={characterInfo.image} alt="" />
                </figure>
                <div>
                    <p className="flex flex-col">
                        <span className={`${status()} w-ful text-lg grid justify-items-center rounded-lg mt-3 mb-3`}>{characterInfo.status}</span>
                        <span className="grid justify-items-center text-2xl mb-2"><strong>{characterInfo.name}</strong></span>
                        <span className="font-medium">Gender: {characterInfo.gender}</span>
                        <span className="font-medium">Species: {characterInfo.species}</span>
                        <span className="font-medium">Origin: {characterInfo.origin?.name}</span>
                        <span className="font-medium">Location: {characterInfo.location?.name}</span>
                    </p>
                </div>
                <div className="grid justify-items-center border border-blue-700 bg-blue-700 rounded-lg mt-4">
                    <Link to='/'>
                        <button className="p-1">Bakc</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { CharacterInfo }