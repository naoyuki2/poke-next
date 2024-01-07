'use client'

import { getAllPokemon } from '../api/pokemon/route'
import { loadPokemon } from '../utils/loadPokemon'

type ButtonProps = {
    label: string
    url: string
}

const Button = ({ label, url }: ButtonProps) => {
    const handlePage = async (url: string) => {
        const data = await getAllPokemon(url)
        await loadPokemon(data.results)
    }

    return (
        <button
            className="bg-cyan-200 px-4 py-2 rounded-md shadow font-bold text-gray-600 hover:bg-cyan-300"
            onClick={() => handlePage(url)}
        >
            {label}
        </button>
    )
}

export default Button
