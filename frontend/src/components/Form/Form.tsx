import { Formik } from 'formik'
import { StForm, StFormButton, StFormInputField, StFormSection, StLabel } from './Form.styled'

type FormProps = {
    inputFields: {name: string, type: string, label?: string, placeholder?: string}[]
    onSubmit: (values: object, setSubmitting: (isSubmitting: boolean) => void) => void,
    submitText: string,
}

export const Form = ({inputFields, onSubmit, submitText}: FormProps) => {
    const initialValues = inputFields.reduce((prevValues, currentValue) => {
        return {
            ...prevValues,
            [currentValue.name]: currentValue.type === 'checkbox' ? false : ''
        }
    }, {})

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}
        >
            {({ values, handleChange }) => (
                <StForm>
                    {inputFields.map((inputfield) => {
                        return(
                            <StFormSection>
                                <StLabel
                                    htmlFor={inputfield.name}
                                >
                                    {inputfield.label}
                                </StLabel>
                                <StFormInputField
                                    placeholder={inputfield.placeholder}
                                    type={
                                        inputfield.type === 'checkbox' ? 'checkbox' : 
                                        inputfield.type === 'password' ? 'password' : 'text'
                                    }
                                    name={inputfield.name}
                                    onChange={handleChange}
                                    // @ts-ignore
                                    value={values[inputfield.name]}
                                />
                            </StFormSection>
                        )
                    })}
                    <StFormButton>{submitText}</StFormButton>
                </StForm>
            )}
        </Formik>
    )
}