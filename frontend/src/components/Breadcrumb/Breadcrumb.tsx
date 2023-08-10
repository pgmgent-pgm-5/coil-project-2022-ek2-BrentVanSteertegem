import { useContext } from 'react'
import { StBreadcrumbLink } from './Breadcrumb.styled'
import { BrickContext, CategoryContext } from '../../ContextProvider'
import { Category } from '../../types'

export const Breadcrumb = () => {
      type Breadcrumb = {
        name: string,
        url: string
    }

    const breadcrumbs: Breadcrumb[] = [
        {
            name: 'Home',
            url: '/'
        }
    ]

    const urlPieces = window.location.pathname.split('/')
    urlPieces.shift()

    const categories = useContext(CategoryContext)
    const bricks = useContext(BrickContext)
    
    urlPieces.forEach((urlPiece: string, index: number) => {
        switch (index) {
            case 0:
            case 1:
                const category = categories && index > 1 ?
                    categories.find((category: Category) => 
                        category.mainCategory && category.mainCategory.name == breadcrumbs[1].name && 
                        category.name.toLowerCase().split(' ').join('_') == urlPiece
                    )
                : 
                    categories && categories.find((category: Category) => {
                        switch (urlPiece) { 
                            case 'other-products':
                                return category.name === 'Other'
                            default:
                                return category.name === urlPiece.charAt(0).toUpperCase() + urlPiece.slice(1)
                        }
                    }) 
                        
                breadcrumbs.push({
                    name: category && category.name || 'category',
                    url: `/${urlPieces.slice(0, index + 1).join('/')}`
                })
                break
            case 2:
                const brick = bricks && bricks.find((brick: any) => 
                    brick.name.toLowerCase().split(' ').join('_') == urlPiece && 
                    brick.category.name == breadcrumbs[2].name
                )
                breadcrumbs.push({
                    name: brick && brick.name || 'brick',
                    url: `/${urlPieces.slice(0, index + 1).join('/')}`
                })
                break
        }
    })
    
    return (
        <section>
            {breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => {
                return (
                    <>
                        <StBreadcrumbLink
                            key={index}
                            to={breadcrumb.url}
                        >
                            {breadcrumb.name}
                        </StBreadcrumbLink>
                        {index < breadcrumbs.length - 1 &&
                            <span>&gt;</span>
                        }
                    </>
                )
            })}
        </section>
    )
}