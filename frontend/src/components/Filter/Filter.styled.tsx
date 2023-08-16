import { styled } from 'styled-components'
import { Variables } from '../../style'

export const StFilter = styled.div`
    min-width: 10rem;
    width: 100%;
    max-width: ${Variables.breakpoints.mobile}rem;
    padding: 0 ${Variables.spacing.medium}rem;
    margin-bottom: ${Variables.spacing.large}rem;
    background-color: ${Variables.colors.lightGrey};
    border-radius: ${Variables.rounded.small}rem;

    @media (min-width: 33.5rem) {
        width: calc(100vw - 23.5rem);
        max-width: 15rem;
    }
`

export const StFilterItem = styled.div`
    padding-bottom: ${Variables.spacing.medium}rem;
`

export const StFilterValues = styled.ul`
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${Variables.spacing.small}rem;
`

export const StFilterValue = styled.li`
    display: flex;
    align-items: center;
    gap: ${Variables.spacing.small}rem;

    * {
        margin: 0;
    }
`