import { useCustomHook } from '../hooks'
import { GET_CATEGORIES } from '../gql/queries'

export const ProductsPage = () => {
    const allcategories = useCustomHook(GET_CATEGORIES).getCategories
    const slug = window.location.pathname.split('/')[1]
    const mainCategory = allcategories && allcategories.find((category: any) => {
        switch (slug) {
            case 'other-products':
                return category.name === 'Other'
            default:
                return category.name === slug.charAt(0).toUpperCase() + slug.slice(1)
        }
    }) 
    const categories = allcategories && allcategories.filter((category: any) => category.mainCategory && category.mainCategory.id === mainCategory.id).sort((a: any, b: any) => a.name.localeCompare(b.name))

    console.log(categories)

    return (
        <>
            <p>Products</p>
            <ul>
                {categories && categories.map((category: any) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </>
    )
}