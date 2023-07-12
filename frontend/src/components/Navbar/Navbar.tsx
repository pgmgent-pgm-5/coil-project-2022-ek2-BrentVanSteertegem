import { Container } from '../Container'
import { StNavbar, StCategories, StCategory, StCategoryName } from './Navbar.styled'

export const Navbar = () => {
    return (
        <StNavbar>
            <Container>
                <StCategories>
                    <li>
                        <StCategory
                            to='/Bricks'
                        >
                            <StCategoryName>
                                Bricks
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            to='/Plates'
                        >
                            <StCategoryName>
                                Plates
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            to='/Minifigs'
                        >
                            <StCategoryName>
                                Minifigs
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            to='/Other'
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