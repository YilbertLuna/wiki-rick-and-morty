const API_URL = "https://rickandmortyapi.com/api"

// used function for get all data of the characters from API
// getData receives as a parameter the page number that we give it from the character component
export async function getDataCharacters(page) {
    try{
        const res = await fetch(`${API_URL}/character/?page=${page}`)
        const data = await res.json()
        return data.results
    }catch (error) {
        console.error(error)
    }

}

// used function for get all data of the location from API
export async function getDataCharactersLocation() {
    try {
        const res = await fetch(`${API_URL}/location`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// used funciton for get all data of the episode from API
export async function getDataCharactersEpisode(){
    try {
        const res = await fetch(`${API_URL}/episode`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}