import { useContext } from 'react'
import { ItemCard } from '..'
import { Brick } from '../../types'
import { StCardLink, StRelatedProducts, StRelatedProductsSection } from './Product.styled'
import { CategoryContext } from '../../ContextProvider'

type RelatedProductsProps = {
    title: string
    relatedProducts: Brick[]
}

export const RelatedProducts = ({ title, relatedProducts }: RelatedProductsProps) => {
    const screenWidth = window.innerWidth / 16

    const categories = useContext(CategoryContext)

    const getMainCategoryName = (brick: Brick) => {
        const category = categories && categories.find(category => category.id == brick.category.id)
        if (category) {
            return category.mainCategory && category.mainCategory.name.toLowerCase().split(' ').join('_')
        }
    }

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
                            to={`${getMainCategoryName(relatedBrick)}/${relatedBrick.name.toLowerCase().split(' ').join('_')}`}
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