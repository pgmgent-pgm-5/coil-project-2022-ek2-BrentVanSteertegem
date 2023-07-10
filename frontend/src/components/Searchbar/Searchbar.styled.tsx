import styled from 'styled-components'
import { StInputfield } from '../Inputfield/Inputfield.styled'
import { Variables } from '../../style'

export const StForm = styled.form`
    display: flex;
    margin: 0;
    width: 30rem;
    max-width: calc(100% - 23.08rem);
    background-color: ${Variables.colors.white};
    border-radius: ${Variables.rounded.small}rem;
    margin: 1rem 0;
    align-items: center;
`

export const StSearchbar = styled(StInputfield)`
    border-radius: ${Variables.rounded.small}rem 0 0 ${Variables.rounded.small}rem;
    margin: 0;
    padding-right: 0;
`

export const StSearchButton = styled.button`
    padding: ${Variables.spacing.xsmall}rem ${Variables.spacing.small}rem ${Variables.spacing.xsmall}rem ${Variables.spacing.xsmall}rem;
    border: 0;
    border-radius: 0 ${Variables.rounded.small}rem ${Variables.rounded.small}rem 0;
    margin: 0;
    font-size: ${Variables.textSizes.small}rem;
    line-height: ${Variables.textSizes.small}rem;
    background-color: ${Variables.colors.white};
    color: ${Variables.colors.placeHolder};
`