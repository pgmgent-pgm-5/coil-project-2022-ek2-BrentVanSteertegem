import { styled } from 'styled-components'
import { Variables } from '../../style'

export const StHeroSection = styled.section`
    background-color: ${Variables.colors.lightGrey};
    padding: ${Variables.spacing.medium}rem;
    border-radius: ${Variables.rounded.medium}rem;
    align-items: center;
    margin: ${Variables.spacing.medium}rem 0;
`

export const StHeroImage = styled.img`
    aspect-ratio: 2/1;
    width: 100%;
    margin: 0;
    border-radius: ${Variables.rounded.medium}rem;
`