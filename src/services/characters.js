const API_URL = "https://rickandmortyapi.com/api"

// used function for get all data of the characters from API
export async function getDataCharacters() {
    try{
        const res = await fetch(`${API_URL}/character`)
        const data = res.json()
        return data
    }catch(error){
        console.error(error)
    }

}

// used function for get all data of the location from API
export async function getDataCharactersLocation() {
    try {
        const res = await fetch(`${API_URL}/location`)
        const data = res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// used funciton for get all data of the episode from API
export async function getDataCharactersEpisode(){
    try {
        const res = await fetch(`${API_URL}/episode`)
        const data = res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}