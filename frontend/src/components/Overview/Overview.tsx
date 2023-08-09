import { Brick, Category } from '../../types'
import { Card } from '../Card'
import { StCardLink, StOverview } from './Overview.styled'

type OverviewProps = {
    type?: 'category' | 'brick'
    categories?: Category[]
    items: Brick[]
}

export const Overview = ({ type='brick', categories, items }: OverviewProps) => {
    switch (type) {
        case 'category':
            return (
                <StOverview>
                    {categories && categories.map((category: Category) => (
                        <li
                            key={category.id}
                        >
                            <StCardLink
                                to={`${category.name.toLowerCase()}`}
                            >
                                <Card
                                    type={type}
                                    item={category}
                                    extraItem={items.filter((brick: Brick) => brick.category.id == category.id)[0]}
                                />
                            </StCardLink>
                        </li>
                    ))}
                </StOverview>
            )
    }
}