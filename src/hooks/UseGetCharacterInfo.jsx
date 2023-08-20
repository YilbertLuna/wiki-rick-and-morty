import { useState, useEffect } from "react";
import * as API_URL from "../services/characters"

export function UseGetCharacterInfo(characterId) {
    const [characterInfo, setCharacterInfo] = useState([]) 

    useEffect(() => {
        API_URL.getDataCharacterDetail(characterId).then(setCharacterInfo)
    }, [characterId])
    
    return { characterInfo }
}