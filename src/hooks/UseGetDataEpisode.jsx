import { useState, useEffect } from "react"
import * as API_URL from "../services/characters"

export function UseGetDataEpisode(page) {
    const [info, setInfo] = useState([])

    useEffect(() => {
        API_URL.getDataEpisode(page).then(setInfo)
    }, [page])

    return { info }
}

export function UseGetDataCharactersEpisode(page) {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        API_URL.getDataCharactersEpisode(page).then(setCharacter)
    }, [page])

    return { character }
}