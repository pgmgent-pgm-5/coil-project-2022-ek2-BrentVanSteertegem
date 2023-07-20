import { StInputfield } from './Inputfield.styled'

type InputfieldProps = {
    name: string
    type?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Inputfield = ({ name, type, placeholder, onChange }: InputfieldProps) => {
    return (
        <StInputfield
            name={name}
            type={type || 'text'}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}