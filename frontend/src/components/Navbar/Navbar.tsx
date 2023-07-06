import { Container } from '../Container'
import { StNavbar, StCategories, StCategory, StCategoryName } from './Navbar.styled'

export const Navbar = () => {
    return (
        <StNavbar>
            <Container>
                <StCategories>
                    <li>
                        <StCategory
                            href='/Bricks'
                        >
                            <StCategoryName>
                                Bricks
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            href='/Plates'
                        >
                            <StCategoryName>
                                Plates
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            href='/Minifigs'
                        >
                            <StCategoryName>
                                Minifigs
                            </StCategoryName>
                        </StCategory>
                    </li>
                    <li>
                        <StCategory
                            href='/Other'
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