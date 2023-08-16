import { useContext } from 'react'
import { BrickContext, CategoryContext } from '../ContextProvider'
import { CallToActionCard, CallToActionCardSection, Hero, RelatedProducts } from '../components'

export const HomePage = () => {
    const allCategories = useContext(CategoryContext)
    const mainCategories = allCategories && allCategories.filter((category) => category.mainCategory == null)
    
    const bricks = useContext(BrickContext)
    const screenWidth = window.innerWidth / 16

    return (
        <>
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
            <CallToActionCardSection>
                {
                    mainCategories && mainCategories.slice(0, screenWidth < 58 || screenWidth >= 77 ? 
                        4
                    :
                        3
                    ).map((category) => {
                        const subCategories = allCategories && allCategories.filter((subCategory) => subCategory.mainCategory && subCategory.mainCategory.id == category.id)
                        const brick = bricks && bricks.find((brick) => subCategories.find((subCategory) => subCategory.id == brick.category.id))

                        return (
                            <div
                                key={category.id}
                            >
                                <CallToActionCard
                                    image={`/assets/images/${category.name.toLocaleLowerCase().split(' ').join('-')}/${brick && brick.images[0]}`}
                                    imageAlt={category.name}
                                    title={category.name}
                                    href={`/${category.name == 'Other' ? 'other-products' : category.name.toLocaleLowerCase().split(' ').join('-')}`}
                                />
                            </div>
                        )
                    })
                }
            </CallToActionCardSection>
            {
                bricks && bricks.length > 0 &&
                    <RelatedProducts
                        title='New Arrivals'
                        relatedProducts={[...bricks].sort((a, b) => b.id - a.id)}
                    />
            }
        </>
    )
}