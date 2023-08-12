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
export const UpdateCartContext = createContext<((cart: CartItem[]) => void) | undefined>(undefined)

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const bricks = useCustomHook(GET_BRICKS).getBricks
    const categories = useCustomHook(GET_CATEGORIES).getCategories

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'))

    const updateCart = (cart: CartItem[]) => {
        setCart(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
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