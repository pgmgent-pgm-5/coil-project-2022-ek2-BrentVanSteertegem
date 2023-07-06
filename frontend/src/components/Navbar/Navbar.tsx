import { Container } from '../Container'
import { StNavbar, StCategories, StCategory, StCategoryLink, StCategoryName } from './Navbar.styled'

export const Navbar = () => {
    return (
        <StNavbar>
            <Container>
                <StCategories>
                    <StCategory>
                        <StCategoryLink
                            href='/Bricks'
                        >
                            <StCategoryName>
                                Bricks
                            </StCategoryName>
                        </StCategoryLink>
                    </StCategory>
                    <StCategory>
                        <StCategoryLink
                            href='/Plates'
                        >
                            <StCategoryName>
                                Plates
                            </StCategoryName>
                        </StCategoryLink>
                    </StCategory>
                    <StCategory>
                        <StCategoryLink
                            href='/Minifigs'
                        >
                            <StCategoryName>
                                Minifigs
                            </StCategoryName>
                        </StCategoryLink>
                    </StCategory>
                    <StCategory>
                        <StCategoryLink
                            href='/Other'
                        >
                            <StCategoryName>
                                Other
                            </StCategoryName>
                        </StCategoryLink>
                    </StCategory>
                </StCategories>
            </Container>
        </StNavbar>
    )
}