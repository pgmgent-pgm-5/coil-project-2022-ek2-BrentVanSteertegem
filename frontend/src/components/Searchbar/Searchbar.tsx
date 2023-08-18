import { useState, ChangeEvent, FormEvent } from 'react'
import { Icon } from '../Icon'
import { StSearchButton, StSearchbar, StForm } from './Searchbar.styled'

export const Searchbar = () => {
    const [search, setSearch] = useState<string>('')

    return (
        <StForm
            onSubmit={(e: FormEvent) => {
                e.preventDefault()
                return window.location.href = `/search/${search.trim() !== '' ? search : '*'}`
            }}
        >
            <StSearchbar
                name='searchbar'
                type='text'
                value={search && search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                placeholder='Search for bricks, plates, minifigs, etc.'
            />
            <StSearchButton
                type='submit'
            >
                <Icon name='magnifying-glass' />
            </StSearchButton>
        </StForm>
    )
}