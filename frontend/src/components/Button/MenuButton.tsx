import { useState } from 'react'
import { StBar, StMenu } from './Button.styled'

export type StBarProps = {
    menuOpen: boolean
}

type MenuButtonProps = {
    onClick: () => void
}

export const MenuButton = ({ onClick }: MenuButtonProps) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!menuOpen)
        onClick()
    }

    return (
        <StMenu
            onClick={handleClick}
        >
            <StBar
                menuOpen={menuOpen}
            />
            <StBar
                menuOpen={menuOpen}
            />
            <StBar
                menuOpen={menuOpen}
            />
            <StBar
                menuOpen={menuOpen}
            />
        </StMenu>
    )
}