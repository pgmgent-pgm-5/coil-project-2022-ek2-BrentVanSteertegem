import { ReactNode } from 'react'
import { StImage, StCallToActionCard, StCallToActionCardLink, StCallToActionCardSection } from './Card.styled'

type CardProps = {
    image: string
    imageAlt: string
    title: string
    href: string
}

export const CallToActionCard = ({ image, imageAlt, title, href }: CardProps) => {
    return (
        <StCallToActionCardLink
            to={href}
        >
            <StCallToActionCard>
                <StImage 
                    src={image}
                    alt={imageAlt}
                />
                <p>{title.toUpperCase()}</p>
            </StCallToActionCard>
        </StCallToActionCardLink>
    )
}

type CallToActionCardSectionProps = {
    children: ReactNode
}

export const CallToActionCardSection = ({ children }: CallToActionCardSectionProps) => {
    return (
        <StCallToActionCardSection>
            {children}
        </StCallToActionCardSection>
    )
}