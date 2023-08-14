import { styled } from 'styled-components'
import { StButton } from '../Button/Button.styled'
import { StInputfield } from '../Inputfield/Inputfield.styled'
import { Variables } from '../../style'

export const StCartItems = styled.ul`
    display: flex;
    flex-direction: column;

    list-style-type: none;
    margin: ${Variables.spacing.medium}rem 0;
    border: 1px solid ${Variables.colors.lightGrey};
    border-radius: ${Variables.rounded.small}rem;
    width: calc(100vw - calc(26rem + 4px));
    max-width: calc(80rem - calc(26rem + 4px));
`

export const StCartItem = styled.li`
    padding: ${Variables.spacing.medium}rem;

    * {
        margin: 0;
    }

    &:nth-of-type(odd) {
        background-color: ${Variables.colors.lightGrey};
    }
`

export const StCartSection = styled.section`
    justify-content: space-between;
    align-items: center;
`

export const StCartItemImage = styled.img`
    width: 4rem;
`

export const StCartItemAmountChange = styled.section`
    gap: 0;
`

export const StCartItemAmountChangeButton = styled(StButton)`
    border-radius: ${Variables.rounded.small}rem 0 0 ${Variables.rounded.small}rem;
    padding: ${Variables.spacing.small}rem ${Variables.spacing.small}rem;
    height: 2rem;
    overflow: hidden;

    &:nth-of-type(2) {
        border-radius: 0 ${Variables.rounded.small}rem ${Variables.rounded.small}rem 0;
    }
`

export const StCartItemAmountChangeInputfield = styled(StInputfield)`
    text-align: center;
    width: 3rem;
    padding: ${Variables.spacing.xsmall}rem;
    padding-right: 0;
    border: 1px solid ${Variables.colors.primary};
    border-radius: 0;
`

export const StCartTotal = styled.li`
    padding: ${Variables.spacing.medium}rem;

    &, * {
        margin: 0;
    }
`