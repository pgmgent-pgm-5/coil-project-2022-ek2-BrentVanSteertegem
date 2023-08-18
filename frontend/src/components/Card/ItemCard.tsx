import { Button } from '../Button'
import { Brick, CartItem } from '../../types'
import { StItemCard, StImage } from './Card.styled'
import { useContext } from 'react'
import { CartContext, CategoryContext, UpdateCartContext } from '../../ContextProvider'

type CardProps = {
    item: Brick
}

export const ItemCard = ({ item }: CardProps) => {
    const categories = useContext(CategoryContext)
    const category = categories && categories.find((category) => category.id == item.category.id)
    const mainCategory = categories && category && categories.find((localCategory) => localCategory.id == category.mainCategory?.id)

    const cart = useContext(CartContext)
    const updateCart = useContext(UpdateCartContext)

    const addToCart = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const localCart = cart.find((cartItem: CartItem) => cartItem.item.id == item.id) ? 
            cart.map((cartItem: CartItem) => cartItem.item.id == item.id ? { item: cartItem.item, amount: cartItem.amount + 1 } : cartItem)
        :
            [...cart, { item: item, amount: 1 }]
        updateCart && updateCart(localCart)
    }

    return item && (
        <StItemCard>
            <StImage 
                src={`/assets/images/${mainCategory?.name.toLowerCase().split(' ').join('-')}/${item.images[0]}`}
                alt={item.name}
            />
            <section>
                <p>{item!.name}</p>
                <p>&euro;{item!.price.toFixed(2)}</p>
            </section>
            <span>
                <Button
                    onClick={(event: { preventDefault: () => void }) => {
                        addToCart(event)
                    }}
                    faIconLeft='shopping-cart'
                >
                    Add to cart
                </Button>
            </span>
        </StItemCard>
    )
}
