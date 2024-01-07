import { NamedAPIResource, NamedAPIResourceList, Pokemon } from 'pokenode-ts'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useAllPokemon = (url: string) => {
    const { data, error, isLoading, mutate } = useSWR<NamedAPIResourceList>(
        url,
        fetcher,
    )
    return { data, error, isLoading, mutate }
}

export const usePokemon = (url: string) => {
    const { data, error, isLoading } = useSWR<Pokemon>(url, fetcher)
    return { data, error, isLoading }
}
