import { styled } from 'styled-components'
import { Variables } from '../../style'

export const StHeroSection = styled.section`
    background-color: ${Variables.colors.lightGrey};
    padding: ${Variables.spacing.large}rem;
    border-radius: ${Variables.rounded.medium}rem;
    align-items: center;
    margin: ${Variables.spacing.medium}rem 0;

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
    }
`

export const StHeroImage = styled.img`
    aspect-ratio: 2/1;
    width: 100%;
    margin: 0;
    border-radius: ${Variables.rounded.medium}rem;
`