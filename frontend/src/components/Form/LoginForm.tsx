import { useMutation } from '@apollo/client'
import { Form } from './Form'
import { useEffect } from 'react'
import { LOGIN } from '../../gql/mutations/login'
import { StError, StLoginFormContainer } from './Form.styled'

export type StErrorProps = {
    isError: boolean
}

export const LoginForm = () => {
    const [login, { data, error }] = useMutation(LOGIN)

    const jwt = JSON.parse(localStorage.getItem('accessToken') || '{}')
    if (jwt?.createdAt && Date.now() - jwt.createdAt < 3600000){
        return window.location.href = '/dashboard'
    }
    localStorage.removeItem('accessToken')

    useEffect(() => {
        const accessToken = data?.login
        if(accessToken) {
            localStorage.setItem('accessToken', JSON.stringify({accessToken, createdAt: Date.now()}))
            window.location.href = '/dashboard'
        }
    }, [data])

    return (
        <StLoginFormContainer>
            <StError
                isError={error ? true : false}
            >
                Email or password is incorrect
            </StError>
            <Form 
                inputfields={[
                    {
                        name: 'email',
                        type: 'text',
                        label: 'Email',
                        placeholder: 'john.doe@gmail.com'
                    }, 
                    {
                        name: 'password',
                        type: 'password',
                        label: 'Password',
                        placeholder: '******'
                    }
                ]}
                onSubmit={(values: object, setSubmitting: (isSubmitting: boolean) => void) =>{
                    login({ variables: values })
                    setSubmitting(false)
                }}
                submitText='Login'
            />
        </StLoginFormContainer>
    )
}