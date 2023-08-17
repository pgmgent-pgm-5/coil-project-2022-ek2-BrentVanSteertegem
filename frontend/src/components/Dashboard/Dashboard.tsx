import { useState } from 'react'
import { StAuthContainer, StDashboard, StDashboardContainer, StDashboardButton, StDashboardContentContainer, StDashboardList } from './Dashboard.styled'
import { Button } from '../Button'
import { useCustomHook } from '../../hooks'
import { GET_USERS } from '../../gql/queries/getUsers'
import { User } from '../../types'

export type StDashboardButtonProps = {
    isActive: boolean
}

export const Dashboard = () => {
    const [dashboardContent, setDashboardContent] = useState<'administration' | 'customers' | 'store' | 'orders' | 'shipping'>('administration')
    const users = useCustomHook(GET_USERS).getUsers

    const renderDashBoardContent = () => {
        switch (dashboardContent) {
            case 'administration':
                return (
                    <p>Administration</p> // TODO: Add administration
                )
            case 'customers':
                return (
                    <>
                        <h4>Users</h4>
                        <StDashboardList>
                            <li>
                                <span>id</span>
                                <span>First name</span>
                                <span>Last name</span>
                                <span>Email</span>
                                <span>Role</span>
                            </li>
                            {users && users.map((user: User) => (
                                <li key={user.id}>
                                    <span>{user.id}</span>
                                    <span>{user.firstName}</span>
                                    <span>{user.lastName}</span>
                                    <span>{user.email}</span>
                                    <span>{user.role}</span>
                                </li>
                            ))}
                        </StDashboardList>
                    </>
                )
            case 'store':
                return (
                    <p>Store management</p> // TODO: Add store
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