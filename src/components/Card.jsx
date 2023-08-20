// component for each character
import { Link } from "react-router-dom"

function Card(data) {
    return(
        <div className="flex flex-col items-center p-3 mt-4">
            <Link to={`/character/${data.data.id}`}>
                <figure className="w-56 h-56 cursor-pointer">
                    <img className="w-full rounded-full justify-center" src={data.data.image}/>
                </figure>
            </Link>
            <div className="mt-2">
                <p className="grid justify-center text-start text-lg">
                    <strong>{data.data.name}</strong>
                </p>
            </div>
        </div>
    )
}

export { Card }