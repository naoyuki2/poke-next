import React from 'react'
import { getAllPokemon } from './api/pokemon/route'
import { Pokemon } from 'pokenode-ts'
import Card from './components/Card'
import Button from './components/Button'
import { loadPokemon } from './utils/loadPokemon'

export default async function Home() {
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'
    const res = await getAllPokemon(initialURL)
    const pokemonData = await loadPokemon(res.results)

    return (
        <div className="bg-gray-300 p-4">
            <>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
                    {pokemonData.map((pokemon: Pokemon, i: number) => {
                        return <Card key={i} pokemon={pokemon} />
                    })}
                </div>
                <div className="p-5 grid grid-cols-2 gap-10">
                    <Button label="前へ" url={res.previous!} />
                    <Button label="次へ" url={res.next!} />
                </div>
            </>
        </div>
    )
}
