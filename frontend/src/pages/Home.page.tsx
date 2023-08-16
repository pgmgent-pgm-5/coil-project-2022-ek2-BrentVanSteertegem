import { Hero } from '../components'

export const HomePage = () => {
    return (
        <Hero
            image='/assets/images/bricks_mixed.jpg'
        >
            <div>
                <h3>Welcome to THE Brick Store!</h3>
                <p>
                    We've got all sorts of bricks, plates, minifigure pieces and much more. We strive to provide the best assortiment of bricks at the best prices.
                    <br />
                    As fellow builders we know how frustrating it can be if you're trying to put together a set again, only to notice you're missing a brick or two. Or maybe you're trying to build something completely new, but you're missing that one piece that you need to finish it.
                    <br />
                    Either way, we've got you covered! Just search for the part on our website, add it your cart, place your order and we'll ship it to you as soon as possible.
                </p>
            </div>
        </Hero>
    )
}