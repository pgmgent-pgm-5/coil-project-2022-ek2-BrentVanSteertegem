import { styled } from 'styled-components'
import { Variables } from '../../style'

export const StPagination = styled.section`
    align-items: center;
    gap: 0;

    button, p {
        padding: ${Variables.spacing.medium}rem;
        margin: 0;
    }

    button:hover {
        transition: 0.3s ease-in;
        color: ${Variables.colors.primary};
    }
`

export const StCurrentPage = styled.p`
    font-weight: bold;
    color: ${Variables.colors.primary} !important;
`