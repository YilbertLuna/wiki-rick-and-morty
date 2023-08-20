import { useParams } from "react-router-dom"
import { UseGetCharacterInfo } from "../../hooks/UseGetCharacterInfo"

function CharacterInfo() {

    const { CharacterId } = useParams()

    const { characterInfo } = UseGetCharacterInfo(CharacterId)

    return (
        <div className="grid justify-items-center mt-40">
            <figure className="w-56 h-56">
                <img className="w-full h-full rounded-lg" src={characterInfo.image} alt="" />
            </figure>
            <div className="grid items-center">
                <p className="flex flex-col">
                    <span>Name: {characterInfo.name}</span>
                    <span>Status: {characterInfo.status}</span>
                    <span>Gender: {characterInfo.gender}</span>
                    <span>Species: {characterInfo.species}</span>
                    <span>Origin: {characterInfo.origin?.name}</span>
                    <span>Location: {characterInfo.location?.name}</span>
                </p>
            </div>
        </div>
    )
}

export { CharacterInfo }