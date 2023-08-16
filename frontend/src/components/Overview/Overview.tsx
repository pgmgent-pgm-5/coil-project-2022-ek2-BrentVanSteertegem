import { useContext, useEffect, useState } from 'react'
import { Brick, Category, Color } from '../../types'
import { ItemCard } from '../Card'
import { StCardLink, StNotification, StOverview, StPageItems, StPaginationContainer, StProductsList, StProductsOverview } from './Overview.styled'
import { BrickContext, CategoryContext } from '../../ContextProvider'
import { Filter } from '../Filter'
import { Pagination } from '../Pagination'

export const Overview = () => {
    const allCategories = useContext(CategoryContext)
    const allBricks = useContext(BrickContext)

    const slug = window.location.pathname.split('/')[1]
    const mainCategory = allCategories && allCategories.find((category: Category) => {
        switch (slug) { 
            case 'other-products':
                return category.name == 'Other'
            default:
                return category.name == slug.charAt(0).toUpperCase() + slug.slice(1)
        }
    }) 

    const subCategories = allCategories && mainCategory && allCategories.filter((category: Category) => category.mainCategory && category.mainCategory.name == mainCategory.name)

    const filters = new Map<string, string[]>()
    filters.set('Category', subCategories && subCategories.map((category: Category) => category.name) || [])
    filters.set('Color', Object.values(Color).filter((v) => isNaN(Number(v))) as string[])
    
    const [activeFilters, setActiveFilters] = useState<Map<string, string[]>>(new Map<string, string[]>([[ 'Category', [] ], ['Color', [] ]]))
    
    const bricks = allBricks && subCategories && allBricks.filter((brick: Brick) => 
        activeFilters && activeFilters.get('Category')!.length > 0 ? 
            activeFilters.get('Category')!.find((category: string) => 
                category == brick.category.name
            ):
            subCategories.find((category: Category) => 
                category.id == brick.category.id
            )
        ).filter((brick: Brick) =>
            activeFilters && activeFilters.get('Color')!.length > 0 ?
                activeFilters.get('Color')!.find((color: string) =>
                    color == brick.color
                ):
                brick
        )

    const itemsPerPage = 12
    const [currentPage, setCurrentPage] = useState<number>(1)
    const pageBricks = bricks && bricks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        
    useEffect(() => {
        setCurrentPage(1)
        window.scrollTo(0, 0)
    }, [activeFilters])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])

    return (
        <StOverview>
            <Filter 
                filters={filters}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
            />
            <StProductsOverview>
                <StPageItems>
                    {
                        pageBricks && pageBricks.length > 0 ?
                            <p>Showing {(currentPage - 1) * itemsPerPage + 1}{pageBricks.length > 1 && ` - ${(currentPage - 1) * itemsPerPage +  pageBricks.length}`} of {bricks && bricks.length}</p>
                        :
                            <StNotification>
                                <p>At this moment, there are no bricks in this category.</p>
                                <p>Check again later!</p>
                            </StNotification>
                    }
                </StPageItems>
                <StProductsList>
                    {pageBricks && pageBricks.map((brick: Brick) => (
                        <li
                            key={brick.id}
                        >
                            <StCardLink
                                to={`${brick.name.toLocaleLowerCase().split(' ').join('_')}`}
                                >
                                <ItemCard
                                    item={brick}
                                />
                            </StCardLink>
                        </li>
                    ))}
                </StProductsList>
                <StPaginationContainer>
                    {
                        bricks && bricks.length > itemsPerPage &&
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                amountOfPages={Math.ceil(bricks.length / itemsPerPage)}
                            />
                    }
                </StPaginationContainer>
            </StProductsOverview>
        </StOverview>
    )
}