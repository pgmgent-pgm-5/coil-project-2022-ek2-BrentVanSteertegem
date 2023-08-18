import { styled } from 'styled-components'
import { Variables } from '../../style'
import { StLink } from '../Link/Link.styled'

export const StOverview = styled.section`
    gap: 0.5rem;
    width: 100%;
    max-width: calc(100vw - ${Variables.spacing.medium * 2}rem);
    flex-wrap: wrap;
    
    @media (min-width: 33.5rem) {
        flex-wrap: nowrap;
    }
`

export const StProductsOverview = styled.div`
    width: 100%;
`

export const StPageItems = styled.section`
    justify-content: center;
    
    p {
        margin: 0 ${Variables.spacing.xsmall}rem;
        color: ${Variables.colors.grey};
        font-size: ${Variables.textSizes.small}rem;
    }
`

export const StNotification = styled.section`
    flex-direction: column;
    align-items: center;
`

export const StPaginationContainer = styled.section`
    justify-content: center;
    padding-bottom: ${Variables.spacing.medium}rem;
`

export const StProductsList = styled.ul`
    width: calc(100% - ${Variables.spacing.xsmall * 2}rem);
    min-width: 19rem;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    gap: ${Variables.spacing.xsmall}rem;
    flex-wrap: wrap;
    padding: 0 ${Variables.spacing.xsmall}rem;
`

export const StCardLink = styled(StLink)`
    text-decoration: none;
    color: inherit;
    
    &:hover {
        p {
            color: ${Variables.colors.primary};
            transition: 0.3s ease-in;
        }
    }
`

export const StSearchOverview = styled.div`
    margin: ${Variables.spacing.large}rem 0 0 0;
`