import { styled } from 'styled-components'
import { StLink } from '../Link/Link.styled'
import { Variables } from '../../style'

export const StBreadcrumb = styled.section`
    padding: ${Variables.spacing.medium}rem 0;
`

export const StBreadcrumbLink = styled(StLink)`
    text-decoration: none;
    color: inherit;
    transition: 0.3s ease-in;

    &:hover {
        color: ${Variables.colors.primary};
    }
`