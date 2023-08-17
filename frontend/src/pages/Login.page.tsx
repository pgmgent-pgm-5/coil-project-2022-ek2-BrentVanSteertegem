import { useMutation } from '@apollo/client'
import { CenteredContainer, Form } from '../components'
import { LOGIN } from '../gql/mutations/login'

export const LoginPage = () => {
    const [login, { data, loading, error }] = useMutation(LOGIN)

    return (
        <CenteredContainer>
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
                    console.log(data.login, loading, error)
                    setSubmitting(false)
                }}
                submitText='Login'
            />
        </CenteredContainer>
    )
}