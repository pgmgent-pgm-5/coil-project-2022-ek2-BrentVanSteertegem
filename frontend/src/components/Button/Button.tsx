import { ReactNode } from 'react'
import { Icon } from '../Icon'
import { StButton, StButtonSecondary, StButtonText } from './Button.styled'
import { IconName } from '@fortawesome/fontawesome-svg-core'

type ButtonProps = {
    children?: ReactNode
    faIconLeft?: IconName
    faIconRight?: IconName
    type?: 'primary' | 'secondary' | 'text'
    onClick?: ((event: {    preventDefault: () => void}) => void) | (() => void)
}

export const Button = ({ children, faIconLeft, faIconRight, type, onClick }: ButtonProps) => {
    switch (type) {
        case 'secondary':
            return (
                <StButtonSecondary
                onClick={onClick}
                >
                    {faIconLeft && <Icon name={faIconLeft} />}
                    {children && children}
                    {faIconRight && <Icon name={faIconRight} />}
                </StButtonSecondary>
            )
        case 'text':
            return (
                <StButtonText
                    onClick={onClick}
                >
                    {faIconLeft && <Icon name={faIconLeft} />}
                    {children && children}
                    {faIconRight && <Icon name={faIconRight} />}
                </StButtonText>
            )
        case 'primary':
        default:
            return (
                <StButton
                    onClick={onClick}
                >
                    {faIconLeft && <Icon name={faIconLeft} />}
                    {children && children}
                    {faIconRight && <Icon name={faIconRight} />}
                </StButton>
            )
    }
}