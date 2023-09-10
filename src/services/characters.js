const API_URL = "https://rickandmortyapi.com/api"

// used function for get all data of the characters from API
// getData receives as a parameter the page number that we give it from the character component
export async function getDataCharacters(page, name) {
    try{
        // the parameter "name" is for search characters 
        const res = await fetch(`${API_URL}/character/?page=${page}&name=${name}`)
        const data = await res.json()
        // from data we return the results
        return data.results
    }catch (error) {
        console.error(error)
    }
}

// this function is for get pages for characters searched and turn the page, for this return data.info?.pages
export async function getSearchCharacterPage(name){
    try {
        const res = await fetch(`${API_URL}/character/?&name=${name}`)
        const data = await res.json()
        // return data.info for get total pages
        return data.info
    } catch (error) {
        console.error(error)
    }
}

// define character search function for Id
export async function getDataCharacterDetail(characterId) {
    try{
        const res = await fetch(`${API_URL}/character/${characterId}`)
        const data = await res.json()
        return data
    }catch(error){
        console.error(error)
    }
}

// used function for get data location from API
export async function getDataLocaiton(page) {
    try {
        const res = await fetch(`${API_URL}/location/${page}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// used function for get all character data of location from API
export async function getDataResidentsLocation(page) {
    try {
        const res = await fetch(`${API_URL}/location/${page}`).then((res) => res.json())
        let residents = Promise.all(
            res.residents.map(
                async (data) => {
                    const res = await fetch(data)
                    return await res.json()
                }
            )
        )
        return residents
    } catch (error) {
        console.error(error)
    }
}

// function for get data info of episode from API
export async function getDataEpisode(page) {
    try {
        const res = await fetch(`${API_URL}/episode/${page}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// used funciton for get all characters data of episode from API
export async function getDataCharactersEpisode(page){
    try {
        const res = await fetch(`${API_URL}/episode/${page}`).then((res) => res.json())
        const characters = Promise.all(
            res.characters.map(
                async (data) => {
                    const res = await fetch(data)
                    return await res.json()
                }
            )
        )
        return characters
    } catch (error) {
        console.error(error)
    }
}