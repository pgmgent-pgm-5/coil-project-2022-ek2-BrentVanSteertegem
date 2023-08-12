import { useContext } from 'react'
import { CartContext } from '../ContextProvider'

export const CartPage = () => {
    const cart = useContext(CartContext)

    return (
        <p>Shopping Cart</p>
    )
}