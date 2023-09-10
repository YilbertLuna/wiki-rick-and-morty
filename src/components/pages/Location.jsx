import { Card } from "../Card"
import { useState } from "react";
import { UseGetDataLocationResidents, UseGetDataLocationInfo } from "../../hooks/UseGetDataLocation"
import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import { InputGroup } from "../InputGroup";

function Location() {
    const [page, setPage] = useState(1)

    const { characterLocationInfo } = UseGetDataLocationResidents(page)
    const { info } = UseGetDataLocationInfo(page)
    
    const context = useContext(appContext)

    return(
        <div>
            <h1 className={`${context.menu === true ? 'mt-6' : 'mt-32'} ${context.menuBurger === false ? 'sm:mt-32' : null}  mb-6 justify-items-center text-center text-2xl font-bold`}>Location <strong className="text-blue-600">{info.name}</strong> </h1>

            <div className="grid mt-2 justify-items-center text-center text-2xl">
                <p className="flex flex-col">
                    <span className="mt-1 text-xl font-semibold">
                        Dimension: {info.dimension}
                    </span>
                    <span className="mt-1 text-lg font-semibold">
                        Type: {info.type}
                    </span>
                </p>
            </div>

           <InputGroup name='Location' changeId={setPage} total={126}/>

            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {characterLocationInfo.map(data => <Card key={data.id} data={data}/>)}
            </div>
        </div>
    )
}

export { Location }