import { useState } from 'react'
import { StAuthContainer, StDashboard, StDashboardContainer, StDashboardButton, StDashboardContentContainer } from './Dashboard.styled'
import { Button } from '../Button'

export type StDashboardButtonProps = {
    isActive: boolean
}

export const Dashboard = () => {
    const [dashboardContent, setDashboardContent] = useState<'administration' | 'customers' | 'store' | 'orders' | 'shipping'>('administration')

    const renderDashBoardContent = () => {
        switch (dashboardContent) {
            case 'administration':
                return (
                    <p>Administration</p> // TODO: Add administration
                )
            case 'customers':
                return (
                    <p>Customer management</p> // TODO: Add reviews
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
                    <h4>{dashboardContent.charAt(0).toUpperCase()+dashboardContent.slice(1)}</h4>
                    {renderDashBoardContent()}
                </StDashboardContentContainer>
            </StDashboard>
        </StDashboardContainer>
    )
}