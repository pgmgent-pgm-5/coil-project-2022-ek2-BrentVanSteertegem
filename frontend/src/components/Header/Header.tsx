import { ReactNode, useState } from 'react'
import { Navbar } from '../Navbar'
import { Button, MenuButton } from '../Button'
import { Container } from '../Container'
import { Searchbar } from '../Searchbar'
import { Icon } from '../Icon'
import { StCategory, StHeader, StHeaderButton, StHeaderButtons, StLogo, StMenu, StSection } from './Header.styled'

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
                            <StHeaderButtons>
                                 <StHeaderButton
                                    onClick={() => console.log('search')}
                                >
                                    <Icon 
                                        name = 'magnifying-glass'
                                    />
                                </StHeaderButton>
                                <StHeaderButton
                                    onClick={() => console.log('Cart')}
                                >
                                    <Icon 
                                        name = 'shopping-cart'
                                    />
                                </StHeaderButton>
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
                            </StHeaderButtons>
                        :
                            <>
                                <Searchbar
                                    onSearch={(e) => console.log(e)}
                                    />
                                <Button
                                    faIconLeft='shopping-cart'
                                    type='secondary'
                                    onClick={() => console.log('Cart')}
                                >
                                    Cart
                                </Button>
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