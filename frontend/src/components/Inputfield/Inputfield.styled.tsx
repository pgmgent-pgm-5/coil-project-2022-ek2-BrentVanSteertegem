import styled from 'styled-components'
import { Variables } from '../../style'

export const StInputfield = styled.input`
    padding: 0.5rem;
    border: 0;
    border-radius: 0.25rem;
    width: 100%;
    font-size: 0.9rem;
    line-height: 0.9rem;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${Variables.colors.placeHolder};
    }
`