import { styled } from 'styled-components'
import { Variables } from '../../style'
import { StLink } from '../Link/Link.styled'

export const StOverview = styled.ul`
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
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