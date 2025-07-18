const BASE_URL = 'http://localhost:2000/myclontra/api'

export async function fetchData(endpoint) {
    try{
        const response = await fetch(`${BASE_URL}/${endpoint}`);

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error('Error while fetching data from API: ', err);
        throw err;
    }
}