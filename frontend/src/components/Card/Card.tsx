import { Button } from '../Button'
import { Brick } from '../../types'
import { StCard, StImage } from './Card.styled'
import { useContext } from 'react'
import { UpdateCartContext } from '../../ContextProvider'

type CardProps = {
    item: Brick
}

export const Card = ({ item }: CardProps) => {
    const slug = window.location.pathname.split('/')[1]

    const updateCart = useContext(UpdateCartContext)

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
                    onClick={(event: { preventDefault: () => void }) => {
                        event.preventDefault()
                        updateCart && updateCart(item, 1)
                    }}
                    faIconLeft='shopping-cart'
                >
                    Add to cart
                </Button>
            </span>
        </StCard>
    )
}
