import { Container } from '../Container'
import { StNavbar, StCategories, StCategory, StCategoryName } from './Navbar.styled'

export const Navbar = () => {
    return (
        <StNavbar>
            <Container>
                <StCategories>
                    <li>
                        <StCategory
                            to='/bricks'
                        >
                            <StCategoryName>
                                Bricks
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            to='/plates'
                        >
                            <StCategoryName>
                                Plates
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            to='/minifigs'
                        >
                            <StCategoryName>
                                Minifigs
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            to='/other-products'
                        >
                            <StCategoryName>
                                Other
                            </StCategoryName>
                        </StCategory>
                    </li>
                </StCategories>
            </Container>
        </StNavbar>
    )
}