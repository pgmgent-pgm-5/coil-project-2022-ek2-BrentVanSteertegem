import { useState } from 'react'
import { Navbar } from '../Navbar'
import { Button, MenuButton } from '../Button'
import { Container } from '../Container'
import { Searchbar } from '../Searchbar'
import { Icon } from '../Icon'
import { StCategory, StHeader, StHeaderButton, StHeaderButtons, StHeaderLink, StLogo, StLogoLink, StMenu, StSection } from './Header.styled'
import { Variables } from '../../style'
import { Link } from '../Link'

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
                        <StLogoLink
                            to='/'
                        >
                            <StLogo>Brick Store</StLogo>
                        </StLogoLink>
                        {innerWidth < Variables.breakpoints.mobile * 16 ? 
                            <StHeaderButtons>
                                 <StHeaderButton
                                    onClick={() => console.log('search')}
                                >
                                    <Icon 
                                        name='magnifying-glass'
                                    />
                                </StHeaderButton>
                                <Link
                                    to='/cart'
                                >
                                    <StHeaderButton>
                                        <Icon 
                                            name='shopping-cart'
                                            />
                                    </StHeaderButton>
                                </Link>
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
                                            to='/bricks'
                                        >
                                            Bricks
                                        </StCategory>
                                    </li>
                                    <li>
                                        <StCategory
                                            to='/plates'
                                        >
                                            Plates
                                        </StCategory>
                                    </li>
                                    <li>
                                        <StCategory
                                            to='/minifigs'
                                        >
                                            Minifigs
                                        </StCategory>
                                    </li>
                                    <li>
                                        <StCategory
                                            to='/other-products'
                                        >
                                            Other
                                        </StCategory>
                                    </li>
                                </StMenu>
                            </StHeaderButtons>
                        :
                            <>
                                <Searchbar />
                                <StHeaderLink
                                    to='/cart'
                                >
                                    <Button
                                        faIconLeft='shopping-cart'
                                        type='secondary'
                                        onClick={() => {}}
                                    >
                                        Cart
                                    </Button>
                                </StHeaderLink>
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