import { useContext } from 'react'
import { CategoryContext } from '../ContextProvider'
import { Breadcrumb, Card, Overview } from '../components'
import { Category } from '../types'

export const ProductsPage = () => {
    const categories = useContext(CategoryContext)

    const slug = window.location.pathname.split('/')[1]
    const category = categories && categories.find((category: Category) => {
        switch (slug) { 
            case 'other-products':
                return category.name == 'Other'
            default:
                return category.name == slug.charAt(0).toUpperCase() + slug.slice(1)
        }
    }) 

    return (
        <>
            <Breadcrumb />
            <Overview />
            {
                category && category.description &&            
                    <Card>
                        <p>{category.description}</p>
                    </Card>
            }
        </>
    )
}