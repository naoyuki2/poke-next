import { Pokemon } from 'pokenode-ts'
import Image from 'next/image'

type CardProps = {
    pokemon: Pokemon
}

const Card = ({ pokemon }: CardProps) => {
    return (
        <div className="bg-white shadow p-3 rounded text-center">
            <div>
                <Image
                    src={pokemon.sprites.front_default!}
                    width={200}
                    height={200}
                    alt="pokemon"
                    className="mx-auto"
                />
            </div>
            <h3>
                No.{pokemon.id} {pokemon.name}
            </h3>
        </div>
    )
}

export default Card
