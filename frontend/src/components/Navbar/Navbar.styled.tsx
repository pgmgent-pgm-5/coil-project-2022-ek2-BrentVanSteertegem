import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Variables } from '../../style'

export const StNavbar = styled.nav`
    background-color: ${Variables.colors.primaryDark};
    margin: 0;
    color: ${Variables.colors.white};
`

export const StCategories = styled.ul`
    display: flex;
    align-items: center;
    gap: 0;
    margin: 0 0 0 -1rem;
    list-style-type: none;

    li:last-child > a > span {
        border-right: 0;
    }
`

export const StCategory = styled(Link)`
    color: ${Variables.colors.white};
    text-decoration: none;
    padding: 1rem;
    display: block;
`

export const StCategoryName = styled.span`
    display: block;
    padding-right: 1rem;
    margin: 0 -1rem 0 0;
    border-right: 1px solid ${Variables.colors.white};
`