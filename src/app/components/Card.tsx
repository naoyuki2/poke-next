import { Pokemon } from 'pokenode-ts'

type CardProps = {
    pokemon: Pokemon
}

const Card = ({ pokemon }: CardProps) => {
    return (
        <div className="bg-white shadow p-3 rounded text-center">
            <div>
                <img src={pokemon.sprites.front_default!} className="mx-auto" />
            </div>
            <h3>
                No.{pokemon.id} {pokemon.name}
            </h3>
        </div>
    )
}

export default Card
