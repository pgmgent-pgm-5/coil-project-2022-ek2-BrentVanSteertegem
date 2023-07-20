import { CenteredContainer, Form } from '../components'

export const LoginPage = () => {
    return (
        <CenteredContainer>
            <Form 
                inputFields={[
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
                onSubmit={(values: object, setSubmitting: (isSubmitting: boolean) => void) => {
                    console.log(values)
                    setSubmitting(false)
                }}
                submitText='Login'
            />
        </CenteredContainer>
    )
}