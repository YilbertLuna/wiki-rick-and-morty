import { useState, useEffect } from "react";
import * as API_URL from "../services/characters"

export function UseGetDataLocationResidents(page) {
    const [characterLocationInfo, setCharacterLocationInfo] = useState([])
   
    useEffect(() => {
        API_URL.getDataResidentsLocation(page).then(setCharacterLocationInfo)  
    }, [page]);

    return { characterLocationInfo }
}

export function UseGetDataLocationInfo(page) {
    const [info, setInfo] = useState([])

    useEffect(() => {
        API_URL.getDataLocaiton(page).then(setInfo)
    }, [page])
    return { info }
}