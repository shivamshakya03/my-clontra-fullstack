import { fetchData } from "./ServiceApi";

export async function getNavbarMenu(){
    return await fetchData('menu');
}

export async function getMegadropdown(category) {
    return await fetchData(`menu/${category}`)
}