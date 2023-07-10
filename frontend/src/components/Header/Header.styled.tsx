import styled from 'styled-components'
import { Variables } from '../../style'
import { MenuProps } from './Header'
import { StButton } from '../Button/Button.styled'

export const StHeader = styled.header`
    background-color: ${Variables.colors.primary};
`

export const StSection = styled.section`
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`

export const StLogo = styled.h2`
    font-family: 'Legothick', 'Poppins', sans-serif;
    color: ${Variables.colors.white};
    text-transform: uppercase;
    padding: 0 0.3rem 0 0.1rem;
    width: 11.35rem;
`

export const StHeaderButtons = styled.section`
    align-items: center;
    gap: 0.5rem;
`

export const StHeaderButton = styled(StButton)`
    font-size: 1.8rem;
    line-height: 1.8rem;
    padding: 0.25rem;
`

export const StMenu = styled.ul<MenuProps>`
    width: 100vw;
    height: calc(100vh - 9.5rem);
    padding-bottom: 4.75rem;
    margin: 0;
    position: absolute;
    top: 4.75rem;
    left: ${({ isMenuOpen }: MenuProps) => isMenuOpen ? '0' : '-100vw'};
    background-color: ${Variables.colors.primary};
    transition: 0.3s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`

export const StCategory = styled.a`
    text-decoration: none;
    font-family: 'Legothick', 'Poppins', sans-serif;
    color: ${Variables.colors.white};
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2.75rem;
    display: block;
    padding: 1rem;
    margin: 0;
`