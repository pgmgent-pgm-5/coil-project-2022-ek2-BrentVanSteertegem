import { useState, ChangeEvent } from 'react'
import { Icon } from '../Icon'
import { StSearchButton, StSearchbar, StForm } from './Searchbar.styled'

type SearchbarProps = {
    onSearch: (search: string) => void
}

export const Searchbar = ({ onSearch }: SearchbarProps) => {
    const [search, setSearch] = useState('')

    return (
        <StForm
            onSubmit={(e: ChangeEvent) => {
                e.preventDefault()
                onSearch(search)
            }}
        >
            <StSearchbar
                name='searchbar'
                type='text'
                value={search}
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