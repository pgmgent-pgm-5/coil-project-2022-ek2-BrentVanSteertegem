import { useContext } from 'react'
import { Brick, Category } from '../../types'
import { Card } from '../Card'
import { StCardLink, StOverview } from './Overview.styled'
import { BrickContext, CategoryContext } from '../../ContextProvider'

export const Overview = () => {
    const allCategories = useContext(CategoryContext)
    const allBricks = useContext(BrickContext)

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

    const bricks = allBricks && subCategories && allBricks.filter((brick: Brick) => 
        subCategories && subCategories.find((category: Category) => 
            category.id == brick.category.id
        )
    )

    return (
        <StOverview>
            {bricks && bricks.map((brick: Brick) => (
                <li
                    key={brick.id}
                >
                    <StCardLink
                        to={`${brick.name.toLocaleLowerCase().split(' ').join('_')}`}
                    >
                        <Card
                            item={brick}
                        />
                    </StCardLink>
                </li>
            ))}
        </StOverview>
    )
}