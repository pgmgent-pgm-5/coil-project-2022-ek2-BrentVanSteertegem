import { ReactNode, useState } from 'react'
import { Navbar } from '../Navbar'
import { MenuButton } from '../Button'
import { Container } from '../Container'
import { Searchbar } from '../Searchbar'
import { StCategory, StHeader, StLogo, StMenu, StSection } from './Header.styled'

export type MenuProps = {
    children?: ReactNode
    isMenuOpen: boolean
}

export const Header = () => {
    const { innerWidth } = window
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <StHeader>
                <Container>
                    <StSection>
                        <StLogo>Brick Store</StLogo>
                        {innerWidth < 480 ? 
                            <>
                                <MenuButton 
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                />
                                <StMenu
                                    isMenuOpen={isMenuOpen}
                                >
                                    <li>
                                        <StCategory
                                            href='/Bricks'
                                        >
                                            Bricks
                                        </StCategory>
                                    </li>
                                    <li>
                                        <StCategory
                                            href='/Plates'
                                        >
                                            Plates
                                        </StCategory>
                                    </li>
                                    <li>
                                        <StCategory
                                            href='/Minifigs'
                                        >
                                            Minifigs
                                        </StCategory>
                                    </li>
                                    <li>
                                        <StCategory
                                            href='/Other'
                                        >
                                            Other
                                        </StCategory>
                                    </li>
                                </StMenu>
                            </>
                        :
                            <>
                                <Searchbar
                                    onSearch={(e) => console.log(e)}
                                />
                                <p>Cart</p>
                            </>
                        }
                    </StSection>
                </Container>
            </StHeader>
            {innerWidth >= 480 && 
                <Navbar />
            }
        </>
    )
}