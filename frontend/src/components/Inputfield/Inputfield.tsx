import { StInputfield } from './Inputfield.styled'

type InputfieldProps = {
    name: string
    type?: string
    placeholder?: string
}

export const Inputfield = ({ name, type, placeholder }: InputfieldProps) => {
    return (
        <StInputfield
            name={name}
            type={type || 'text'}
            placeholder={placeholder}
        />
    )
}