import { useContext, useEffect, useState } from 'react'
import { Brick, Category } from '../../types'
import { ItemCard } from '../Card'
import { StCardLink, StNotification, StSearchOverview, StPageItems, StPaginationContainer, StProductsList, StProductsOverview } from './Overview.styled'
import { BrickContext, CategoryContext } from '../../ContextProvider'
import { Pagination } from '../Pagination'
import { useParams } from 'react-router-dom'

export const SearchOverview = () => {
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

    const { search } = useParams()
    const searchPieces = search && search.toLowerCase().split(' ') || []

    const bricks = allBricks && allBricks.filter((brick) => {
        const brickPieces = brick.name.toLowerCase().split(' ')
        brickPieces.push(brick.category.name.toLowerCase())
        brickPieces.push(brick.color.toLowerCase())
        mainCategory && brickPieces.push(mainCategory.name.toLowerCase())

        return searchPieces?.some((searchPiece: string) => brickPieces.includes(searchPiece))
    })

    const itemsPerPage = 12
    const [currentPage, setCurrentPage] = useState<number>(1)
    const pageBricks = bricks && bricks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])

    return (
        <StSearchOverview>
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
        </StSearchOverview>
    )
}