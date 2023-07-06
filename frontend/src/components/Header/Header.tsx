import { MenuButton } from '../Button'
import { Container } from '../Container'
import { StHeader, StLogo, StSection } from './Header.styled'

export const Header = () => {
    const { innerWidth } = window

    return (
        <StHeader>
            <Container>
                <StSection>
                    <StLogo>Brick Store</StLogo>
                    {innerWidth < 480 && 
                        <MenuButton 
                            onClick={() => console.log('Menu button clicked')}
                        />
                    }
                </StSection>
            </Container>
        </StHeader>
    )
}