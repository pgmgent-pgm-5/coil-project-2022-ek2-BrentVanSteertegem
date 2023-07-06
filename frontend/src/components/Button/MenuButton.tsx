import { useState } from 'react'
import { StBar, StMenuButton } from './Button.styled'

export type StBarProps = {
    isMenuOpen: boolean
}

type MenuButtonProps = {
    onClick: () => void
}

export const MenuButton = ({ onClick }: MenuButtonProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
        onClick()
    }

    return (
        <StMenuButton
            onClick={handleClick}
        >
            <StBar
                isMenuOpen={isMenuOpen}
            />
            <StBar
                isMenuOpen={isMenuOpen}
            />
            <StBar
                isMenuOpen={isMenuOpen}
            />
            <StBar
                isMenuOpen={isMenuOpen}
            />
        </StMenuButton>
    )
}