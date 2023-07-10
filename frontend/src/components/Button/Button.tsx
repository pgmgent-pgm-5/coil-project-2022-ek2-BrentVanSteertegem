import { ReactNode } from 'react'
import { Icon } from '../Icon'
import { StButton, StButtonSecondary } from './Button.styled'
import { IconName } from '@fortawesome/fontawesome-svg-core'

type ButtonProps = {
    children?: ReactNode
    faIconLeft?: IconName
    faIconRight?: IconName
    type?: 'primary' | 'secondary'
    onClick?: () => void
}

export const Button = ({ children, faIconLeft, faIconRight, type, onClick }: ButtonProps) => {
    return type && type == 'secondary' ? 
        <StButtonSecondary
            onClick={onClick}
        >
            {faIconLeft && <Icon name={faIconLeft} />}
            {children && children}
            {faIconRight && <Icon name={faIconRight} />}
        </StButtonSecondary>
    :
        <StButton
            onClick={onClick}
        >
            {faIconLeft && <Icon name={faIconLeft} />}
            {children && children}
            {faIconRight && <Icon name={faIconRight} />}
        </StButton>
}