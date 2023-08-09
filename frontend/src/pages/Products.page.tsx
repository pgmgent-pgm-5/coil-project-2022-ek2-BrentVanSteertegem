import { useContext } from 'react'
import { BrickContext, CategoryContext } from '../ContextProvider.tsx'
import { Brick, Category } from '../types.ts'
import { Overview } from '../components/Overview/Overview.tsx'

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
    
    // Check if subcategory is selected
    const subCategory = window.location.pathname.split('/')[2]
            
    return (
        <>
            <h2>{'Breadcrumb : '}{mainCategory && mainCategory.name}{subCategory && ` → ${subCategory}`}</h2> {/* TODO: Implement breadcrumb */}
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