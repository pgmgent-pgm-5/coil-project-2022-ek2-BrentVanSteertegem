import { useContext, useState } from 'react'
import { Button } from '../Button'
import { Card } from '../Card'
import { Brick } from '../../types'
import { StExtraInfo, StExtraInfoButton, StExtraInfoContainer, StMainInfo, StProduct, StProductImage, StQuantitySelector, StRelatedProducts, StRelatedProductsSection } from './Product.styled'
import { BrickContext } from '../../ContextProvider'
import { Variables } from '../../style'

type ProductProps = {
    brick: Brick
}

export type StExtraInfoButtonProps = {
    isActive: boolean
}

export const Product = ({ brick }: ProductProps) => { 
    const addToCart = (brick: Brick) => {
        console.log('add to cart')
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

    const bricks = useContext(BrickContext)
    const relatedProducts = bricks && bricks.filter((relatedBrick: Brick) => relatedBrick.category == brick.category && relatedBrick.id != brick.id)
    const screenWidth = window.innerWidth / 16

    return (
        <StProduct>
            <StProductImage
                src={brick && brick.images.length > 0 ? `/assets/images/${window.location.pathname.split('/')[1]}/${brick.images[0]}` : ''}
            />
            <StMainInfo>
                <h4>{brick && brick.name}</h4>
                <p>&euro;{brick && brick.price}</p>
                <StQuantitySelector>
                    <p>Quantity :</p>
                    <select>
                        {
                            [...Array(10)].map((_, i) => (
                                brick && brick.quantity > i &&
                                <option value={i + 1}>{i + 1}</option>
                            ))
                        }                        
                    </select>
                </StQuantitySelector>
                <Button
                    onClick={() => {
                        addToCart(brick)
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
                            <Card
                                key={index}
                                item={relatedBrick}
                            />
                        ))
                    }
                </StRelatedProducts>
            </StRelatedProductsSection>
        </StProduct>
    )
}