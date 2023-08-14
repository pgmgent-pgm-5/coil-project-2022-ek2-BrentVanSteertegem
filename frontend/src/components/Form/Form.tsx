import { Formik } from 'formik'
import { StForm, StFormButton, StFormInputField, StFormInputfieldError, StFormLabelSection, StFormPart, StFormPartDropdown, StFormPartDropdownButton, StFormSection, StLabel } from './Form.styled'
import { Icon } from '../Icon'
import { ReactNode, isValidElement } from 'react'

type Inputfield = {name: string, type: string, label?: string, placeholder?: string}

type FormProps = {
    inputfields: {name: string, type: string, label?: string, placeholder?: string}[] | Map<string, (Inputfield | ReactNode)[]>
    validationSchema?: object,
    onSubmit: (values: object, setSubmitting: (isSubmitting: boolean) => void) => void,
    submitText: string,
}

export type StFormInputFieldProps = {
    hasError?: boolean
}

export const Form = ({inputfields, validationSchema, onSubmit, submitText}: FormProps) => {
    const localInputfields: Inputfield[] = inputfields instanceof Array ? 
        inputfields 
    : 
        Array.from(inputfields.values()).flat().filter((inputfield): inputfield is Inputfield => {
            return (inputfield as Inputfield).name !== undefined
        })

    const initialValues = localInputfields.reduce((prevValues, currentValue) => {
            return {
                ...prevValues,
                [currentValue.name]: currentValue.type === 'checkbox' ? false : ''
            }
        }, {})

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}
        >
            {({ values, handleChange, errors, touched }) => (
                <StForm>
                    {
                        inputfields instanceof Array ?
                            inputfields.map((inputfield) => {
                                const error: string = errors && Object.values(errors)[Object.keys(errors).findIndex((error) => error == (inputfield as Inputfield).name)] as string
                                const isTouched: boolean = touched && Object.values(touched)[Object.keys(touched).findIndex((touched) => touched == (inputfield as Inputfield).name)] as boolean

                                return(
                                    <StFormSection
                                        key={inputfield.name}
                                    >
                                        <StFormLabelSection>
                                            <StLabel
                                                htmlFor={(inputfield as Inputfield).name}
                                                >
                                                {(inputfield as Inputfield).label}
                                            </StLabel>
                                            {
                                                error && isTouched && 
                                                    <StFormInputfieldError>
                                                        {error}
                                                    </StFormInputfieldError>
                                            }
                                        </StFormLabelSection>
                                        <StFormInputField
                                            placeholder={(inputfield as Inputfield).placeholder}
                                            type={
                                                (inputfield as Inputfield).type === 'checkbox' ? 'checkbox' : 
                                                (inputfield as Inputfield).type === 'password' ? 'password' : 'text'
                                            }
                                            name={(inputfield as Inputfield).name} 
                                            onChange={handleChange}
                                            onKeyDown={(e) => {
                                                if(e.key == 'Enter' && localInputfields.findIndex((localInputfield) => localInputfield.name == (inputfield as Inputfield).name) < localInputfields.length - 1) {
                                                    e.preventDefault()
                                                    // @ts-ignore
                                                    document.querySelector(`[name='${localInputfields[localInputfields.findIndex((localInputfield) => localInputfield.name == (inputfield as Inputfield).name) + 1].name}']`)!.focus()
                                                } 
                                            }}
                                            // @ts-ignore
                                            value={values[inputfield.name]}
                                            hasError={error && isTouched ? true : false}
                                        />
                                    </StFormSection>
                                )
                            })
                        :
                            <>
                                {
                                    [...inputfields.keys()].map((key) => {
                                        return(
                                            <StFormPart
                                                id={key.split(' ').join('')}
                                                key={key}
                                            >
                                                {
                                                    key.trim() !== '' && 
                                                        <StFormPartDropdown>
                                                            <h4>{key}</h4>
                                                            <StFormPartDropdownButton
                                                                type='button'
                                                                onClick={() => document.querySelector(`#${key.split(' ').join('')}`)?.classList.toggle('closed')}
                                                            >
                                                                <Icon
                                                                    name='chevron-up'
                                                                    />
                                                            </StFormPartDropdownButton>
                                                        </StFormPartDropdown>
                                                }
                                                {
                                                    inputfields.get(key)?.map((inputfield) => {
                                                        const error: string = errors && Object.values(errors)[Object.keys(errors).findIndex((error) => error == (inputfield as Inputfield).name)] as string
                                                        const isTouched: boolean = touched && Object.values(touched)[Object.keys(touched).findIndex((touched) => touched == (inputfield as Inputfield).name)] as boolean

                                                        return(
                                                            !isValidElement(inputfield) ?
                                                                <StFormSection
                                                                    key={(inputfield as Inputfield).name}
                                                                >
                                                                    <StFormLabelSection>
                                                                        <StLabel
                                                                            htmlFor={(inputfield as Inputfield).name}
                                                                            >
                                                                            {(inputfield as Inputfield).label}
                                                                        </StLabel>
                                                                        {
                                                                            error && isTouched && 
                                                                                <StFormInputfieldError>
                                                                                    {error}
                                                                                </StFormInputfieldError>
                                                                        }
                                                                    </StFormLabelSection>
                                                                    <StFormInputField
                                                                        placeholder={(inputfield as Inputfield).placeholder}
                                                                        type={
                                                                            (inputfield as Inputfield).type === 'checkbox' ? 'checkbox' : 
                                                                            (inputfield as Inputfield).type === 'password' ? 'password' : 'text'
                                                                        }
                                                                        name={(inputfield as Inputfield).name} 
                                                                        onChange={handleChange}
                                                                        onKeyDown={(e) => {
                                                                            if(e.key == 'Enter' && localInputfields.findIndex((localInputfield) => localInputfield.name == (inputfield as Inputfield).name) < localInputfields.length - 1) {
                                                                                e.preventDefault()
                                                                                // @ts-ignore
                                                                                document.querySelector(`[name='${localInputfields[localInputfields.findIndex((localInputfield) => localInputfield.name == (inputfield as Inputfield).name) + 1].name}']`)!.focus()
                                                                            } 
                                                                        }}
                                                                        // @ts-ignore
                                                                        value={values[inputfield.name]}
                                                                        hasError={error && isTouched ? true : false}
                                                                    />
                                                                </StFormSection>
                                                            :
                                                                inputfield
                                                        )
                                                    })
                                                }
                                            </StFormPart>
                                        )
                                    })
                                }
                            </>
                    }
                    <StFormButton
                        id='form-btn'
                        type='submit'
                    >
                        {submitText}
                    </StFormButton>
                </StForm>
            )}
        </Formik>
    )
}