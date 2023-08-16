import { ItemCard } from '..'
import { Brick } from '../../types'
import { StCardLink, StRelatedProducts, StRelatedProductsSection } from './Product.styled'

type RelatedProductsProps = {
    title: string
    relatedProducts: Brick[]
}

export const RelatedProducts = ({ title, relatedProducts }: RelatedProductsProps) => {
    const screenWidth = window.innerWidth / 16

    return (
        <StRelatedProductsSection>
            {
                title && 
                    <h4>{title}</h4>
            }
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
                            <ItemCard
                                item={relatedBrick}
                            />
                        </StCardLink>
                    ))
                }
            </StRelatedProducts>
        </StRelatedProductsSection>
    )
}