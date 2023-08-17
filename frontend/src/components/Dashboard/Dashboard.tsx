import { useState } from 'react'
import { StAuthContainer, StDashboard, StDashboardContainer, StDashboardButton, StDashboardContentContainer, StDatshboardListTitle, StDashboardList, StDashboardAdministration } from './Dashboard.styled'
import { Button } from '../Button'
import { useCustomHook } from '../../hooks'
import { GET_USERS } from '../../gql/queries/getUsers'
import { Brick, Category, User } from '../../types'
import { GET_BRICKS, GET_CATEGORIES } from '../../gql/queries'

export type StDashboardButtonProps = {
    isActive: boolean
}

export type StDashboardListProps = {
    columns?: string
}

export const Dashboard = () => {
    const [dashboardContent, setDashboardContent] = useState<'administration' | 'customers' | 'store' | 'orders' | 'shipping'>('administration')
    const users = useCustomHook(GET_USERS).getUsers
    const bricks = useCustomHook(GET_BRICKS).getBricks
    const categories = useCustomHook(GET_CATEGORIES).getCategories

    const renderDashBoardContent = () => {
        switch (dashboardContent) {
            case 'administration':
                return (
                    <StDashboardAdministration>
                        <div>
                            <h4>Users</h4>
                            <p>There {users && users.length !== 1 ? `are ${users.length} users` : 'is 1 user'} registered.</p>
                        </div>
                        <div>
                            <h4>Bricks</h4>
                            <p>There are {bricks && [...bricks].filter((brick: Brick) => brick.quantity > 0).length} bricks available.</p>
                            <p>{bricks && [...bricks].filter((brick: Brick) => brick.quantity < 200).length} bricks have got less than 200 pieces available.</p>
                        </div>
                        <div>
                            <h4>Categories</h4>
                            <p>There {categories && categories.length !== 1 ? `are ${categories.length} categories` : 'is 1 category'} available.</p>
                        </div>
                        <div>
                            <h4>Orders</h4>
                            <p>There are 0 orders.</p> // TODO: Add orders
                        </div>
                    </StDashboardAdministration>
                )
            case 'customers':
                return (
                    <StDashboardList
                        columns='2rem repeat(4, 1fr)'
                    >
                        <StDatshboardListTitle>Users</StDatshboardListTitle>
                        <li>
                            <span>id</span>
                            <span>First name</span>
                            <span>Last name</span>
                            <span>Email</span>
                            <span>Role</span>
                        </li>
                        <ul>
                            {
                                users && users.map((user: User) => (
                                    <li key={user.id}>
                                        <span>{user.id}</span>
                                        <span>{user.firstName}</span>
                                        <span>{user.lastName}</span>
                                        <span>{user.email}</span>
                                        <span>{user.role}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </StDashboardList>
                )
            case 'store':
                return (
                    <StDashboardList
                        columns='2rem 2fr 2fr 1fr 1fr 1fr 1fr 1fr'
                    >
                        <StDatshboardListTitle>Bricks</StDatshboardListTitle>
                        <li>
                            <span>id</span>
                            <span>Name</span>
                            <span>Description</span>
                            <span>Price</span>
                            <span>Color</span>
                            <span>Quantity</span>
                            <span>Category</span>
                            <span>Image</span>
                        </li>
                        <ul>
                            {
                                bricks && [...bricks].sort((a: Brick, b: Brick) => a.id - b.id).map((brick: Brick) => {
                                    const category = categories && categories.find((category: Category) => category.id == brick.category.id)

                                    return (
                                        <li key={brick.id}>
                                            <span>{brick.id}</span>
                                            <span>{brick.name}</span>
                                            <span>{brick.description}</span>
                                            <span>&euro;{brick.price.toFixed(2)}</span>
                                            <span>{brick.color}</span>
                                            <span>{brick.quantity}</span>
                                            <span>{brick.category.name}</span>
                                            <img src={`/assets/images/${category.mainCategory.name.toLowerCase().split(' ').join('_')}/${brick.images[0]}`} alt={brick.name} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </StDashboardList>
                )
            case 'orders':
                return (
                    <p>Order management</p> // TODO: Add orders
                )
            case 'shipping':
                return (
                    <p>Shipping management</p> // TODO: Add shipping
                )
        }
    }

    return (
        <StDashboardContainer>
            <StAuthContainer>
                <h4>Admin Dashboard</h4>
                <Button 
                    onClick={() => {
                        localStorage.removeItem('accessToken')
                        window.location.href = '/dashboard/login'
                    }}
                    faIconRight='sign-out-alt'
                >
                    Logout
                </Button>
            </StAuthContainer>
            <StDashboard>
                <div>
                    <StDashboardButton
                        isActive={dashboardContent == 'administration'}
                        onClick={() => {
                            setDashboardContent('administration')
                        }}
                    >
                        Administration
                    </StDashboardButton>
                    <StDashboardButton
                        isActive={dashboardContent == 'customers'}
                        onClick={() => {
                            setDashboardContent('customers')
                        }}
                    >
                        Customer management
                    </StDashboardButton>
                    <StDashboardButton
                        isActive={dashboardContent == 'store'}
                        onClick={() => {
                            setDashboardContent('store')
                        }}
                    >
                        Store management
                    </StDashboardButton>
                    <StDashboardButton
                        isActive={dashboardContent == 'orders'}
                        onClick={() => {
                            setDashboardContent('orders')
                        }}
                    >
                        Orders management
                    </StDashboardButton>
                    <StDashboardButton
                        isActive={dashboardContent == 'shipping'}
                        onClick={() => {
                            setDashboardContent('shipping')
                        }}
                    >
                        Shipping management
                    </StDashboardButton>
                </div>
                <StDashboardContentContainer>
                    {renderDashBoardContent()}
                </StDashboardContentContainer>
            </StDashboard>
        </StDashboardContainer>
    )
}