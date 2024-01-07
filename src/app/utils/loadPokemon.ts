import { NamedAPIResource } from 'pokenode-ts'
import { getPokemon } from '../api/pokemon/route'

export const loadPokemon = async (data: NamedAPIResource[]) => {
    const pokemonData = await Promise.all(
        data.map(async (pokemon: NamedAPIResource) => {
            const pokemonRecord = await getPokemon(pokemon.url)
            return pokemonRecord
        }),
    )
    console.log(pokemonData)
    return pokemonData
}
