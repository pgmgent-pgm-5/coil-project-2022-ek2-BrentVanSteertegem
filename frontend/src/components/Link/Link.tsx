import { ReactNode } from 'react'
import { StLink } from './Link.styled'

type LinkProps = {
    children: ReactNode
    to: string
    target?: '_blank' | '_self'
}

export const Link = ({ children, to, target }: LinkProps) => {
    return (
        <StLink
            to={to}
            target={target}
        >
            {children}
        </StLink>
    )
}