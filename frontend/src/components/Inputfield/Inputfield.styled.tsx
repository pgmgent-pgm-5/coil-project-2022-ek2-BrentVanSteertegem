import styled from 'styled-components'
import { Variables } from '../../style'

export const StInputfield = styled.input`
    padding: ${Variables.spacing.small}rem ${Variables.spacing.xsmall}rem;
    border: 0;
    border-radius: ${Variables.rounded.small}rem;
    width: 100%;
    font-size: ${Variables.textSizes.small}rem;
    line-height: ${Variables.textSizes.small}rem;
    height: ${Variables.textSizes.small}rem;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${Variables.colors.placeHolder};
    }
`