import { ReactNode, createContext } from 'react'
import { useCustomHook } from './hooks'
import { GET_BRICKS, GET_CATEGORIES } from './gql/queries'
import { Brick, Category } from './types'

type ContextProviderProps = {
    children: ReactNode
}

export const CategoryContext = createContext<Category[] | undefined>(undefined)
export const BrickContext = createContext<Brick[] | undefined>(undefined)

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const bricks = useCustomHook(GET_BRICKS).getBricks
    const categories = useCustomHook(GET_CATEGORIES).getCategories

    return (
        <CategoryContext.Provider value={categories}>
            <BrickContext.Provider value={bricks}>
                {children}
            </BrickContext.Provider>
        </CategoryContext.Provider>
    )
}