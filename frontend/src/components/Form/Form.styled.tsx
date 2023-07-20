import styled from 'styled-components'
import { Form } from 'formik'
import { Variables } from '../../style'
import { StInputfield } from '../Inputfield/Inputfield.styled'
import { StButton } from '../Button/Button.styled'

export const StForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${Variables.spacing.medium}rem;
    width: fit-content;
    margin: 1rem 0;
`

export const StFormSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${Variables.spacing.xsmall}rem;
`

export const StLabel = styled.label`
    margin: 0 0 0 ${Variables.spacing.xsmall}rem;
`

export const StFormInputField = styled(StInputfield)`
    border: 1px solid ${Variables.colors.lightGrey};
    width: calc(calc(100vw - ${2 * Variables.spacing.medium + 2 * Variables.spacing.xsmall}rem) - 2px);
    max-width: 20rem;
    margin: 0;
`

export const StFormButton = styled(StButton)`
    width: fit-content;
    margin: ${Variables.spacing.medium}rem 0 0 0;
`