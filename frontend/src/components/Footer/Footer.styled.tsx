import styled from 'styled-components'
import { Variables } from '../../style'

export const StFooter = styled.footer`
    background-color: ${Variables.colors.lightGrey};
    padding-top: 1.5rem;
`

export const StFooterItems = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > h4 {
        margin: 0 0 0.5rem 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export const StSocialIcons = styled.li`
    display: flex;
    gap: 2rem;

    a {
        color: #1188f1;
    }
`