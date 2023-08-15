import { useState, useEffect } from "react";
import * as API_URL from "../services/characters"

// the "page" parameter is the number of each API page, and we give it to it in the character component
export function UseGetDataCharacters(page) {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        API_URL.getDataCharacters(page).then(setCharacter)
    }, [page])

    return {character}
}