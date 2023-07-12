import { useState } from 'react'
import { Navbar } from '../Navbar'
import { Button, MenuButton } from '../Button'
import { Container } from '../Container'
import { Searchbar } from '../Searchbar'
import { Icon } from '../Icon'
import { StCategory, StHeader, StHeaderButton, StHeaderButtons, StLogo, StMenu, StSection } from './Header.styled'
import { Variables } from '../../style'

export type StMenuProps = {
    isMenuOpen: boolean
}

export const Header = () => {
    const { innerWidth } = window
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <>
            <StHeader>
                <Container>
                    <StSection>
                        <StLogo>Brick Store</StLogo>
                        {innerWidth < Variables.breakpoints.mobile * 16 ? 
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
                                    isMenuOpen={isMenuOpen}
                                    setIsMenuOpen={setIsMenuOpen}
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
            {innerWidth >= Variables.breakpoints.mobile * 16 && 
                <Navbar />
            }
        </>
    )
}