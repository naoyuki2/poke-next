'use client'

import React, { useEffect, useState } from 'react'
import { getAllPokemon, getPokemon } from './api/pokemon/route'
import { NamedAPIResource, Pokemon } from 'pokenode-ts'
import Card from './components/Card'
import LoadingSpinner from './loading'

export default function Home() {
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'

    const [loading, setLoading] = useState<boolean>(true)
    const [pokemonData, setPokemonData] = useState<any>([])
    const [nextURL, setNextURL] = useState<string>('')
    const [prevURL, setPrevURL] = useState<string>('')

    useEffect(() => {
        const fetchPokemonData = async () => {
            //全てのポケモンデータを取得
            const res = await getAllPokemon(initialURL)
            //各ポケモンの詳細なデータを取得
            loadPokemon(res.results)
            setNextURL(res.next!)
            setLoading(false)
        }
        fetchPokemonData()
    }, [])

    const handlePage = async (url: string) => {
        setLoading(true)
        const data = await getAllPokemon(url)
        await loadPokemon(data.results)
        setNextURL(data.next!)
        setPrevURL(data.previous!)
        setLoading(false)
    }

    const loadPokemon = async (data: NamedAPIResource[]) => {
        const _pokemonData = await Promise.all(
            data.map(async (pokemon: NamedAPIResource) => {
                let pokemonRecord = await getPokemon(pokemon.url)
                return pokemonRecord
            }),
        )
        setPokemonData(_pokemonData)
    }

    return (
        <div className="bg-gray-300 p-4">
            {loading ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
                        {pokemonData.map((pokemon: Pokemon, i: number) => {
                            return <Card key={i} pokemon={pokemon} />
                        })}
                    </div>
                    <div className="p-5 grid grid-cols-2 gap-10">
                        {prevURL ? (
                            <button
                                className="bg-cyan-200 px-4 py-2 rounded-md shadow font-bold text-gray-600 hover:bg-cyan-300"
                                onClick={() => handlePage(prevURL)}
                            >
                                前へ
                            </button>
                        ) : (
                            <div></div>
                        )}
                        {nextURL ? (
                            <button
                                className="bg-cyan-200 px-4 py-2 rounded-md shadow font-bold text-gray-600 hover:bg-cyan-300"
                                onClick={() => handlePage(nextURL)}
                            >
                                次へ
                            </button>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
