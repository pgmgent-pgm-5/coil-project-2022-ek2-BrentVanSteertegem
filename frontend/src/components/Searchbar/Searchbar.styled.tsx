import styled from 'styled-components'
import { StInputfield } from '../Inputfield/Inputfield.styled'
import { Variables } from '../../style'

export const StForm = styled.form`
    display: flex;
    margin: 0;
    width: 30rem;
    max-width: calc(100% - 17.55rem);
    background-color: ${Variables.colors.white};
    border-radius: 0.25rem;
    margin: 1rem 0;
    align-items: center;
`

export const StSearchbar = styled(StInputfield)`
    border-radius: 0.25rem 0 0 0.25rem;
    margin: 0;
    padding-right: 0;
`

export const StSearchButton = styled.button`
    padding: 0.5rem 0.75rem 0.5rem 0.5rem;
    border: 0;
    border-radius: 0 0.25rem 0.25rem 0;
    margin: 0;
    font-size: 0.9rem;
    line-height: 0.9rem;
    background-color: ${Variables.colors.white};
    color: ${Variables.colors.placeHolder};
`