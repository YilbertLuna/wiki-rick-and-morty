// component for each character
function Card(data) {
    return(
        <div className="grid justify-center items-center mt-4">
            <img className="w-56 h-56 rounded-full" src={data.data?.image}/>
            <p className="text-center">i am: {data.data?.name}</p>
        </div>
    )
}

export { Card }