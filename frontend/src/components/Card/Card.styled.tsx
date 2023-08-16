import { styled } from 'styled-components'
import { Variables } from '../../style'
import { StLink } from '../Link/Link.styled'

export const StCard = styled.div`
    background-color: ${Variables.colors.lightGrey};
    border-radius: ${Variables.rounded.small}rem;
    padding: ${Variables.spacing.medium}rem;
    margin-bottom: ${Variables.spacing.large}rem;

    * {
        margin: 0;
    }
`

export const StItemCard = styled.div`
    width: 15rem;
    box-shadow: 0 0 ${Variables.spacing.xsmall}rem #0002;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${Variables.rounded.medium}rem;
    padding: ${Variables.spacing.medium}rem;
    margin: ${Variables.spacing.xsmall}rem;

    section {
        width: inherit;
        justify-content: space-between;
    }
`

export const StImage = styled.img`
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
    margin: 0;
`

export const StCallToActionCardLink = styled(StLink)`
    text-decoration: none;
    color: inherit;
`

export const StCallToActionCard = styled(StItemCard)`
    max-width: calc(100% - 3rem);

    p {
        font-size: 1.5rem;
        padding-right: 2px;
        font-family: ${Variables.fonts.logo};
    }
`

export const StCallToActionCardSection = styled.section`
    margin: ${Variables.spacing.large}rem 0;
    justify-content: space-evenly;
`