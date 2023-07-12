import { StBar, StMenuButton } from './Button.styled'

export type StBarProps = {
    isMenuOpen: boolean
}

type MenuButtonProps = {
    onClick: () => void
    isMenuOpen: boolean
    setIsMenuOpen: (isMenuOpen: boolean) => void
}

export const MenuButton = ({ onClick, isMenuOpen, setIsMenuOpen}: MenuButtonProps) => {
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