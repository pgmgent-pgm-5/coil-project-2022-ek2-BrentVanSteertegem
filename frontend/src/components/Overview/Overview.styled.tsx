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

export const StProductsOverview = styled.ul`
    width: 100%;
    min-width: 19rem;
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: ${Variables.spacing.xsmall}rem;
    flex-wrap: wrap;
    padding: 0 ${Variables.spacing.xsmall}rem ${Variables.spacing.medium}rem ${Variables.spacing.xsmall}rem;
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