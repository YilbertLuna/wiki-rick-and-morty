// this component is for change location and episode

// eslint-disable-next-line react/prop-types
function InputGroup({name, changeId, total}) {

    return(
        <div className="grid justify-items-center mt-5 mb-10">
            <select className="border border-black rounded-md w-72 sm:w-96 h-8 sm:h-11 sm:text-lg text-center focus:outline-none" onChange={(e) => changeId(e.target.value)}  id="name">
                <option value="1">Locations...</option>
                {[...Array(total).keys()].map((x, index) => {
                    return(
                        <option key={index} value={x + 1}>
                            {`${name} - ${x + 1}`}
                        </option>
                    )
                })}
            </select>
        </div>
    )

}

export { InputGroup }