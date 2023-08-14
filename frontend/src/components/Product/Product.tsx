import { useContext, useState } from 'react'
import { Button } from '../Button'
import { Card } from '../Card'
import { Brick, CartItem, Category } from '../../types'
import { StExtraInfo, StExtraInfoButton, StExtraInfoContainer, StMainInfo, StProduct, StProductImage, StSection, StRelatedProducts, StRelatedProductsSection, StVariations, StCardLink, StVariationCard, StVariationImage, StQuantitySelector } from './Product.styled'
import { BrickContext, CartContext, CategoryContext, UpdateCartContext } from '../../ContextProvider'

type ProductProps = {
    brick: Brick
}

export type StExtraInfoButtonProps = {
    isActive: boolean
}

export const Product = ({ brick }: ProductProps) => { 
    const [amount, setAmount] = useState(1)

    const cart = useContext(CartContext)
    const updateCart = useContext(UpdateCartContext)

    const addToCart = () => {
        const localCart = cart.find((cartItem: CartItem) => cartItem.item.id == brick.id) ? 
            cart.map((cartItem: CartItem) => cartItem.item.id == brick.id ? { item: cartItem.item, amount: cartItem.amount + amount } : cartItem)
        :
            [...cart, { item: brick, amount }]
        updateCart && updateCart(localCart)
    }

    const [extraInfo, setExtraInfo] = useState<'description' | 'reviews'>('description')

    const renderExtraInfo = () => {
        switch (extraInfo) {
            case 'description':
                return (
                    <p>{brick && brick.description}</p>
                )
            case 'reviews':
                return (
                    <p>Reviews</p> // TODO: Add reviews
                )
        }
    }

    const allBricks = useContext(BrickContext)
    const variations = allBricks && allBricks.filter((variationBrick: Brick) => variationBrick.name.split(' ').slice(1).join(' ') == brick.name.split(' ').slice(1).join(' ') && variationBrick.id != brick.id)

    const allCategories = useContext(CategoryContext)

    const slug = window.location.pathname.split('/')[1]
    const mainCategory = allCategories && allCategories.find((category: Category) => {
        switch (slug) { 
            case 'other-products':
                return category.name == 'Other'
            default:
                return category.name == slug.charAt(0).toUpperCase() + slug.slice(1)
        }
    }) 

    const subCategories = allCategories && mainCategory && allCategories.filter((category: Category) => category.mainCategory && category.mainCategory.name == mainCategory.name)

    const relatedProducts = allBricks && subCategories && allBricks.filter((brick: Brick) => 
            subCategories.find((category: Category) => 
                category.id == brick.category.id
            )
    ).filter((relatedBrick: Brick) => relatedBrick.id != brick.id)
    const screenWidth = window.innerWidth / 16

    return (
        <StProduct>
            <StProductImage
                src={brick && brick.images.length > 0 ? `/assets/images/${window.location.pathname.split('/')[1]}/${brick.images[0]}` : ''}
                alt={brick && brick.name}
            />
            <StMainInfo>
                <h4>{brick && brick.name}</h4>
                <p>&euro;{brick && brick.price.toFixed(2)}</p>
                <StQuantitySelector>
                    <p>Quantity :</p>
                    <select
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                        value={amount}
                    >
                        {
                            [...Array(10)].map((_, i) => (
                                brick && brick.quantity > i &&
                                <option
                                    key={i}
                                    value={i + 1}
                                >
                                    {i + 1}
                                </option>
                            ))
                        }                        
                    </select>
                </StQuantitySelector>
                <StSection>
                    <p>Color :</p>
                    <StVariations>
                        {
                            variations && variations.map((variation: Brick, index: number) => (
                                <li
                                    key={index}
                                >
                                    <StCardLink
                                        to={`${window.location.pathname.split('/').slice(0, -1).join('/')}/${variation.name.toLowerCase().split(' ').join('_')}`}
                                    >   
                                        <StVariationCard>
                                            <StVariationImage
                                                src={variation.images.length > 0 ? `/assets/images/${window.location.pathname.split('/')[1]}/${variation.images[0]}` : ''}
                                                alt={variation.name}
                                            />
                                            <p>
                                                {variation.color}
                                            </p>

                                        </StVariationCard>
                                    </StCardLink>
                                </li>
                            ))
                        }
                    </StVariations>
                </StSection>
                <Button
                    onClick={() => {
                        addToCart()
                    }}
                    faIconLeft='shopping-cart'
                >
                    Add to cart
                </Button>
            </StMainInfo>
            <StExtraInfo>
                <div>
                    <StExtraInfoButton
                        isActive={extraInfo == 'description'}
                        onClick={() => {
                            setExtraInfo('description')
                        }}
                    >
                        Description
                    </StExtraInfoButton>
                    <StExtraInfoButton
                        isActive={extraInfo == 'reviews'}
                        onClick={() => {
                            setExtraInfo('reviews')
                        }}
                    >
                        Reviews
                    </StExtraInfoButton>
                </div>
                <StExtraInfoContainer>
                    <h4>{extraInfo.charAt(0).toUpperCase()+extraInfo.slice(1)}</h4>
                    {renderExtraInfo()}
                </StExtraInfoContainer>
            </StExtraInfo>
            <StRelatedProductsSection>
                <h4>Related products</h4>
                <StRelatedProducts>
                    {
                        relatedProducts && relatedProducts.slice(0, screenWidth < 58 || screenWidth >= 77 ? 
                            4
                        :
                            3
                        ).map((relatedBrick: Brick, index: number) => (
                            <StCardLink
                                key={index}
                                to={`${window.location.pathname.split('/').slice(0, -1).join('/')}/${relatedBrick.name.toLowerCase().split(' ').join('_')}`}
                            >
                                <Card
                                    item={relatedBrick}
                                />
                            </StCardLink>
                        ))
                    }
                </StRelatedProducts>
            </StRelatedProductsSection>
        </StProduct>
    )
}