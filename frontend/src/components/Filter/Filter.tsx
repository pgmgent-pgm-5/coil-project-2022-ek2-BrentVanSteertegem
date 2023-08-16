import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { StFilter, StFilterItem, StFilterValue, StFilterValues } from './Filter.styled'

export type FilterProps = {
    filters: Map<string, string[]>
    activeFilters: Map<string, string[]>
    setActiveFilters: (activeFilterIds: Map<string, string[]>) => void
}

export const Filter = ({ filters, activeFilters, setActiveFilters }: FilterProps) => {
    const onFilterClick = (filter: string, value: string) => {
        const filters = activeFilters.get(filter)
        filters && filters.includes(value) ? 
            filters.splice(filters.indexOf(value), 1) :
            filters && filters.push(value)
        const activeFiltersCopy = new Map(activeFilters)
        activeFiltersCopy.set(filter, filters!)
        setActiveFilters(activeFiltersCopy)
    }

    useEffect(() => {
        document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
            (checkbox as HTMLInputElement).checked = false
        })
    }, [useLocation()])

    return (
        <StFilter>
            {filters && [...filters.keys()].map((filter, index) => (
                <StFilterItem
                    key={filter}
                >
                    <h4>{filter}</h4>
                    <StFilterValues>
                        {[...filters.values()][index].sort((a, b) => a.localeCompare(b)).map((value) => (
                            <StFilterValue
                                key={value}
                            >
                                <input 
                                    type='checkbox' 
                                    value='false'
                                    onClick={() => onFilterClick(filter, value)}
                                />
                                <p>{value}</p>
                            </StFilterValue>
                        ))}
                    </StFilterValues>
                </StFilterItem>
            ))}
        </StFilter>
    )
}