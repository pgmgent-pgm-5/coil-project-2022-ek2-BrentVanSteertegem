import styled from 'styled-components'
import { Variables } from '../../style'

export const StHeader = styled.header`
    background-color: ${Variables.colors.primary};
`

export const StSection = styled.section`
    justify-content: space-between;
    align-items: center;
`

export const StLogo = styled.h2`
    font-family: 'Legothick', 'Poppins', sans-serif;
    color: ${Variables.colors.white};
    text-transform: uppercase;
`