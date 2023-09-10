import { Card } from "../Card"
import { useState } from "react";
import { UseGetDataEpisode, UseGetDataCharactersEpisode } from "../../hooks/UseGetDataEpisode";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import { InputGroup } from "../InputGroup";

function Episode() {

    const [page, setPage] = useState(1)

    const { info } = UseGetDataEpisode(page)
    const { character } = UseGetDataCharactersEpisode(page)

    const context = useContext(appContext)


    return(
        <div>
           <h1 className={`${context.menu === true ? 'mt-6' : 'mt-32'} ${context.menuBurger === false ? 'sm:mt-32' : null}  mb-6 justify-items-center text-center text-2xl font-bold`}>Episode Name <strong className="text-blue-600">{info.name}</strong> </h1>
        
           <div className="grid justify-items-center text-center text-2xl">
                 <p className="flex flex-col">
                     <span className="text-lg font-medium">
                        Air date: {info.air_date}
                     </span>
                 </p>
             </div>

            <InputGroup name='Episode' changeId={setPage} total={51}/>

            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {character?.map(data => <Card key={data.id} data={data}/>)}
            </div>
        </div>
    )
}

export { Episode }