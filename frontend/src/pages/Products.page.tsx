import { useContext } from 'react'
import { BrickContext, CategoryContext } from '../ContextProvider.tsx'
import { Brick, Category } from '../types.ts'
import { Breadcrumb, Overview } from '../components'

export const ProductsPage = () => {
    const allCategories = useContext(CategoryContext)
    const urlPieces = window.location.pathname.split('/')
    const mainCategorySlug = urlPieces[1]
    const mainCategory = allCategories && allCategories.find((category: Category) => {
        switch (mainCategorySlug) { 
            case 'other-products':
                return category.name === 'Other'
                default:
                    return category.name === mainCategorySlug.charAt(0).toUpperCase() + mainCategorySlug.slice(1)
        }
    }) 
    const subCategories = allCategories && allCategories.filter((category: Category) => category.mainCategory && category.mainCategory.id === mainCategory!.id).sort((a: Category, b: Category) => a.name.localeCompare(b.name))
    const bricks = useContext(BrickContext)
    
    // Check if subcategory is selected
    const subCategory = urlPieces[2]
            
    return (
        <>
            <Breadcrumb />
            {subCategories && bricks && subCategory ?
                <Overview
                    items={bricks!.filter((brick: Brick) => brick.category.name.toLowerCase().split(' ').join('_') == subCategory)}
                />
            :
                <Overview 
                    type='category'
                    categories={subCategories}
                    items={bricks!}
                />
            }
        </>
    )
}