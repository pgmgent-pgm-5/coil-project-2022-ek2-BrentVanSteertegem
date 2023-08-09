import { Brick, Category } from "../../types"
import { Card } from "../Card"
import { StOverview } from "./Overview.styled"

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
                        <Card
                            key={category.id}
                            type={type}
                            item={category}
                            extraItem={items.filter((brick: Brick) => brick.category.id == category.id)[0]}
                        />
                    ))}
                </StOverview>
            )
    }
}