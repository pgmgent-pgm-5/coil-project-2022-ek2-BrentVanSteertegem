import { styled } from 'styled-components'
import { Variables } from '../../style'

export const StCard = styled.div`
    width: 15rem;
    box-shadow: 0 0 ${Variables.spacing.xsmall}rem #0002;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${Variables.rounded.medium}rem;
    padding: ${Variables.spacing.medium}rem;
    margin: ${Variables.spacing.xsmall}rem;
`

export const StImage = styled.img`
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
    margin: 0;
`