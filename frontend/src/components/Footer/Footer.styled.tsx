import styled from 'styled-components'
import { Variables } from '../../style'
import { StContainer } from '../Container/Container.styled'

export const StFooter = styled.footer`
    background-color: ${Variables.colors.lightGrey};
    padding-top: 1.5rem;
`

export const StFooterContainer = styled(StContainer)`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
        color: inherit;
        text-decoration: none;
        transition: 0.15s ease-in;

        &:hover {
            text-decoration: underline;
            color: ${Variables.colors.primary};
        }
    }
`

export const StSection = styled.section`
    flex-direction: column;

    @media (min-width: ${Variables.breakpoints.tablet}rem) {
        flex-direction: row;
        gap: 4rem;
    }
`

export const StFooterItems = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0;

    p {
        margin: 0;
    }

    & > h4 {
        margin: 0 0 0.5rem 0;
    }
`

export const StSocialIcons = styled.li`
    display: flex;
    gap: 2rem;
    justify-content: center;

    a {
        color: #1188f1;
    }
`

export const StFooterBottom = styled.section`
    justify-content: center;

    & > * {
        margin: 0 0 2rem 0;
    }
`