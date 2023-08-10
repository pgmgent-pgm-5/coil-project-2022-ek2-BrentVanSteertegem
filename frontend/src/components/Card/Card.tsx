import { Button } from '../Button'
import { Brick, Category } from '../../types'
import { StCard, StImage } from './Card.styled'

type CardProps = {
    type?: 'category' | 'brick'
    item: Category | Brick
    extraItem?: Brick
}

export const Card = ({ type='brick', item, extraItem }: CardProps) => {
    const slug = window.location.pathname.split('/')[1]

    switch (type) {
        case 'category':
            return item && (
                <StCard>
                    <StImage 
                        src={`/assets/images/${slug}/${extraItem && extraItem.images[0]}`}
                        alt={extraItem && extraItem.name || item.name}
                    />
                    <p>{item!.name}</p>
                </StCard>
            )
        case 'brick':
            return item && (
                <StCard>
                    <StImage 
                        src={`/assets/images/${slug}/${extraItem && extraItem.images[0]}`}
                        alt={extraItem && extraItem.name || item.name}
                    />
                    <section>
                        <p>{item!.name}</p>
                        <p>&euro;{item!.price}</p>
                    </section>
                    <span>
                        <Button
                            faIconLeft='shopping-cart'
                            >
                            Add to cart
                        </Button>
                    </span>
                </StCard>
            )
    }
}
