import { Link } from 'react-router-dom'
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
                            <Link 
                                to='/FAQ'
                            >
                                Frequently Asked Questions (FAQ)
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to='/return-policy'
                            >
                                Return policy
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to='/shipping'
                            >
                                Shipping information
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/tracking'
                            >
                                Order tracking
                            </Link>
                        </li>
                    </StFooterItems>
                    <StFooterItems>
                        <h4>Contact Us</h4>
                        <li>
                            <p>Industrieweg 232, 9030 Gent</p>
                        </li>
                        <li>
                            <Link 
                                to='tel:' 
                                target='_blank'
                            >
                                +32 471 23 45 67
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='mailto:brent.vansteertegem@student.arteveldehs.be'
                                target='_blank'
                            >
                                brent.vansteertegem@student.arteveldehs.be
                            </Link>
                        </li>
                    </StFooterItems>
                </StSection>
                <StSocialIcons>
                    <Link
                        to='https://www.facebook.com/'
                        target='_blank'
                    >
                        <Icon
                            isBrandIcon={true}
                            name='facebook-f'
                        />
                    </Link>
                    <Link
                        to='https://www.messenger.com/'
                        target='_blank'
                    >
                        <Icon
                            isBrandIcon={true}
                            name='facebook-messenger'
                        />
                    </Link>
                    <Link
                        to='https://www.twitter.com/'
                        target='_blank'
                    >
                        <Icon
                            isBrandIcon={true}
                            name='twitter'
                        />
                    </Link>
                    <Link
                        to='https://www.instagram.com/'
                        target='_blank'
                    >
                        <Icon
                            isBrandIcon={true}
                            name='instagram'
                        />
                    </Link>
                </StSocialIcons>
                <StFooterBottom>
                    <Link
                        to='/terms-and-conditions'
                    >
                        Terms &nbsp; conditions
                    </Link>
                    <span>|</span>
                    <Link
                        to='/privacy-policy'
                    >
                        Privacy policy
                    </Link>
                    <span>|</span>
                    <Link
                        to='/sitemap'
                    >
                        Sitemap
                    </Link>
                </StFooterBottom>
            </StFooterContainer>
        </StFooter>
    )
}