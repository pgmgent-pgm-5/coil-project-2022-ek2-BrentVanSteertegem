import { useContext } from 'react'
import { BrickContext, CategoryContext } from '../ContextProvider.tsx'
import { Category } from '../types.ts'

export const ProductsPage = () => {
    const allCategories = useContext(CategoryContext)
    const slug = window.location.pathname.split('/')[1]
    const mainCategory = allCategories && allCategories.find((category: Category) => {
        switch (slug) {
            case 'other-products':
                return category.name === 'Other'
            default:
                return category.name === slug.charAt(0).toUpperCase() + slug.slice(1)
        }
    }) 
    const subCategories = allCategories && allCategories.filter((category: Category) => category.mainCategory && category.mainCategory.id === mainCategory!.id).sort((a: Category, b: Category) => a.name.localeCompare(b.name))

    const bricks = useContext(BrickContext)

    return (
        <>
            <p>Products</p>
        </>
    )
}