export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => {
                localStorage.removeItem('accessToken')
                window.location.href = '/dashboard/login'
            }}>Logout</button>
        </div>
    )
}