import styled from 'styled-components'
import { Form } from 'formik'
import { Variables } from '../../style'
import { StInputfield } from '../Inputfield/Inputfield.styled'
import { StButton } from '../Button/Button.styled'
import { StFormInputFieldProps } from './Form'

export const StForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${Variables.spacing.medium}rem;
    width: calc(23rem + 2px);
    margin: 1rem 0;
`

export const StFormSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: ${Variables.spacing.small}rem;
`

export const StFormLabelSection = styled.section`
    align-items: center;
    justify-content: space-between;
`

export const StFormInputfieldError = styled.p`
    color: ${Variables.colors.errorText};
    font-size: ${Variables.textSizes.small}rem;
    margin: 0;
`

export const StLabel = styled.label`
    margin: 0 0 0 ${Variables.spacing.xsmall}rem;
`

export const StFormInputField = styled(StInputfield)<StFormInputFieldProps>`
    border: 1px solid ${({ hasError }) => hasError ? Variables.colors.errorText : Variables.colors.lightGrey};
    width: calc(calc(100vw - ${2 * Variables.spacing.medium + 2 * Variables.spacing.xsmall}rem) - 2px);
    max-width: 20rem;
    margin: 0;
` 

export const StFormButton = styled(StButton)`
    width: fit-content;
    margin: ${Variables.spacing.medium}rem 0 0 0;
`

export const StFormPart = styled.div`
    width: calc(100% - ${Variables.spacing.medium * 2}rem);
    max-height: fit-content;
    overflow-y: hidden;
    padding: ${Variables.spacing.small}rem;
    background-color: ${Variables.colors.lightGrey};
    border-radius: ${Variables.rounded.small}rem;
    transition: 0.3s ease-in;
    
    &.closed {
        max-height: 3.25rem;
        
        button {
            transform: rotate(-180deg);
        }
        
        > section:not(:first-child) {
            display: none;
        }
    }
`

export const StFormPartDropdown = styled.section`
    align-items: center;
    justify-content: space-between;

    & > h4 {
        margin: ${Variables.spacing.small}rem 0;
    }
`

export const StFormPartDropdownButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: ${Variables.spacing.small}rem 0;
`