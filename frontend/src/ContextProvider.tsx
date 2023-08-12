import { ReactNode, createContext, useState } from 'react'
import { useCustomHook } from './hooks'
import { GET_BRICKS, GET_CATEGORIES } from './gql/queries'
import { Brick, CartItem, Category } from './types'

type ContextProviderProps = {
    children: ReactNode
}

export const CategoryContext = createContext<Category[] | undefined>(undefined)
export const BrickContext = createContext<Brick[] | undefined>(undefined)

export const CartContext = createContext<CartItem[]>([])
export const UpdateCartContext = createContext<((brick: Brick, amount: number) => void) | undefined>(undefined)

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const bricks = useCustomHook(GET_BRICKS).getBricks
    const categories = useCustomHook(GET_CATEGORIES).getCategories

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'))

    const updateCart = (brick: Brick, amount: number) => {
        const localCart = cart.find((cartItem: CartItem) => cartItem.item.id == brick.id) ? 
            cart.map((cartItem: CartItem) => cartItem.item.id == brick.id ? { item: cartItem.item, amount: cartItem.amount + amount } : cartItem)
        :
            [...cart, { item: brick, amount }]
        setCart(localCart)
        localStorage.setItem('cart', JSON.stringify(localCart))
    }

    return (
        <CartContext.Provider value={cart}>
            <UpdateCartContext.Provider value={updateCart}>
                <CategoryContext.Provider value={categories}>
                    <BrickContext.Provider value={bricks}>
                        {children}
                    </BrickContext.Provider>
                </CategoryContext.Provider>
            </UpdateCartContext.Provider>
        </CartContext.Provider>
    )
}