// component for each character
function Card(data) {
    return(
        <div className="flex flex-col items-center p-3 mt-4 cursor-pointer">
            <figure className="w-56 h-56">
                <img className="w-full rounded-full justify-center border-2 border-black" src={data.data.image}/>
            </figure>
            <div className="mt-2">
                <p className="grid justify-center text-start text-lg">
                    <strong>{data.data.name}</strong>
                </p>
            </div>
        </div>
    )
}

export { Card }