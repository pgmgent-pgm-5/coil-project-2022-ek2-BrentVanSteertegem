import { Icon } from '../Icon'
import { Container } from '../Container'
import { StFooter, StFooterItems, StSocialIcons } from './Footer.styled'

export const Footer = () => {
    return (
        <StFooter>
            <Container>
                <section>
                    <StFooterItems>
                        <h4>Contact Us</h4>
                        <li>
                            Industrieweg 232
                            <br />
                            9030 Gent
                        </li>
                        <li>
                            <a href='tel:' target='_blank'>
                                +32 471 23 45 67
                            </a>
                        </li>
                        <li>
                            <a
                                href='mailto:brent.vansteertegem@student.arteveldehs.be'
                                target='_blank'
                            >
                                brent.vansteertegem@student.arteveldehs.be
                            </a>
                        </li>
                        <StSocialIcons>
                            <a
                                href='https://www.facebook.com/'
                                target='_blank'
                            >
                                <Icon
                                    isBrandIcon={true}
                                    name='facebook-f'
                                />
                            </a>
                            <a
                                href='https://www.messenger.com/'
                                target='_blank'
                            >
                                <Icon
                                    isBrandIcon={true}
                                    name='facebook-messenger'
                                />
                            </a>
                            <a
                                href='https://www.twitter.com/'
                                target='_blank'
                            >
                                <Icon
                                    isBrandIcon={true}
                                    name='twitter'
                                />
                            </a>
                            <a
                                href='https://www.instagram.com/'
                                target='_blank'
                            >
                                <Icon
                                    isBrandIcon={true}
                                    name='instagram'
                                />
                            </a>
                        </StSocialIcons>
                    </StFooterItems>
                </section>
            </Container>
        </StFooter>
    )
}