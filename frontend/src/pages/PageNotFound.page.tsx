import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <>
            <h4>Seems like the page you are looking for does not exist.</h4>
            <Link
                to='/'
            >
                Click here to return to the home page
            </Link>
        </>
    )
}