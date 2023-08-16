import { ReactNode } from 'react'
import { StHeroImage, StHeroSection } from './Hero.styled'

type HeroProps = {
    image: string
    children: ReactNode
}

export const Hero = ({ image, children }: HeroProps) => {
    return (
        <StHeroSection>
            <StHeroImage
                src={image}
                alt='Hero Image'
            />
            {children}
        </StHeroSection>
    )
}