import { useState, useEffect } from "react";
import * as API_URL from "../services/characters"

// the "page" parameter is the number of each API page, and we give it to it in the character component
export function UseGetDataCharacters(page, searcher) {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        API_URL.getDataCharacters(page, searcher).then(setCharacter)
    }, [page, searcher])

    return {character}
}

// get data info from api, for get total pages
export function UseGetPageSearchCharacter(searcher) {
    const [pages, setPages] = useState("")

    useEffect(() => {
        API_URL.getSearchCharacterPage(searcher).then(setPages)
    }, [searcher])

    return { pages }
}