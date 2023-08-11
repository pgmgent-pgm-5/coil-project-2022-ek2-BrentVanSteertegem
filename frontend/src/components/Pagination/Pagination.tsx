import { Button } from '../Button'
import { StPagination, StCurrentPage } from './Pagination.styled'

type PaginationProps = {
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    amountOfPages: number
}

export const Pagination = ({ currentPage, setCurrentPage, amountOfPages }: PaginationProps) => {
    return (
        <StPagination>
            {
                currentPage > 1 &&
                <>
                    <Button
                        type='text'
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        &lt;
                    </Button>
                    <Button
                        type='text'
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </Button>
                    {
                        currentPage == 4 &&
                            <Button
                                type='text'
                                onClick={() => setCurrentPage(2)}
                            >
                                2
                            </Button>
                    }
                    {
                        currentPage > 4 && 
                            <p>...</p>
                    }
                    {
                        currentPage > 2 &&
                            <Button
                                type='text'
                                onClick={() => setCurrentPage(currentPage - 1)}
                                >
                                {currentPage - 1}
                            </Button>
                    }
                </>
            }
            <StCurrentPage>{currentPage}</StCurrentPage>
            {
                currentPage < amountOfPages &&
                <>
                    {
                        currentPage < amountOfPages - 1 &&
                            <Button
                                type='text'
                                onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                {currentPage + 1}
                            </Button>
                    }
                    {
                        currentPage < amountOfPages - 3 &&
                            <p>...</p>
                    }
                    {
                        currentPage == amountOfPages - 3 &&
                            <Button
                                type='text'
                                onClick={() => setCurrentPage(amountOfPages - 1)}
                            >
                                {amountOfPages - 1}
                            </Button>
                    }
                    <Button
                        type='text'
                        onClick={() => setCurrentPage(amountOfPages)}
                    >
                        {amountOfPages}
                    </Button>
                    <Button
                        type='text'
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        &gt;
                    </Button>
                </>
            }
        </StPagination>
    )
}