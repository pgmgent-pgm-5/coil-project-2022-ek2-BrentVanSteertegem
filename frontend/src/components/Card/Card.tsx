import { Button } from '../Button'
import { Brick } from '../../types'
import { StCard, StImage } from './Card.styled'

type CardProps = {
    item: Brick
}

export const Card = ({ item }: CardProps) => {
    const slug = window.location.pathname.split('/')[1]
    return item && (
        <StCard>
            <StImage 
                src={`/assets/images/${slug}/${item.images[0]}`}
                alt={item.name}
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
