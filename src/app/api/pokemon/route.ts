import { NamedAPIResourceList, Pokemon } from 'pokenode-ts'

export const getAllPokemon = async (
    url: string,
): Promise<NamedAPIResourceList> => {
    const res = await fetch(url, { next: { revalidate: 0 } })
    return res.json()
}

export const getPokemon = async (url: string): Promise<Pokemon> => {
    const res = await fetch(url, { next: { revalidate: 0 } })
    return res.json()
}
