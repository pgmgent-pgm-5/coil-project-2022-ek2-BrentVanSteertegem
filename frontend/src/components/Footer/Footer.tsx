import { Icon } from '../Icon'
import { StFooter, StFooterBottom, StFooterContainer, StFooterItems, StSection, StSocialIcons } from './Footer.styled'

export const Footer = () => {
    return (
        <StFooter>
            <StFooterContainer>
                <StSection>
                    <StFooterItems>
                        <h4>Customer Care</h4>
                        <li>
                            <a 
                                href='/FAQ'
                            >
                                Frequently Asked Questions (FAQ)
                            </a>
                        </li>
                        <li>
                            <a 
                                href='/return-policy'
                            >
                                Return policy
                            </a>
                        </li>
                        <li>
                            <a 
                                href='/shipping'
                            >
                                Shipping information
                            </a>
                        </li>
                        <li>
                            <a
                                href='/tracking'
                            >
                                Order tracking
                            </a>
                        </li>
                    </StFooterItems>
                    <StFooterItems>
                        <h4>Contact Us</h4>
                        <li>
                            <p>
                                Industrieweg 232,
                                9030 Gent
                            </p>
                        </li>
                        <li>
                            <a 
                                href='tel:' 
                                target='_blank'
                            >
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
                    </StFooterItems>
                </StSection>
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
                <StFooterBottom>
                    <a
                        href='/terms-and-conditions'
                    >
                        Terms &nbsp; conditions
                    </a>
                    <span>|</span>
                    <a
                        href='/privacy-policy'
                    >
                        Privacy policy
                    </a>
                    <span>|</span>
                    <a
                        href='/sitemap'
                    >
                        Sitemap
                    </a>
                </StFooterBottom>
            </StFooterContainer>
        </StFooter>
    )
}