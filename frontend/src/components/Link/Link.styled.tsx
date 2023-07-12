import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StLink = styled(Link)`
    text-underline-offset: 0.1rem;
    transition: 0.3s ease-in;

    &:hover {
        cursor: pointer;
    }
`