import styled from 'styled-components'
import { Variables } from '../../style'
import { StBarProps } from './MenuButton'

export const StButton = styled.button`
    display: flex;
    align-items: center;
    gap: ${Variables.spacing.small}rem;
    padding: ${Variables.spacing.small}rem ${Variables.spacing.medium}rem;
    border: 0;
    border-radius: ${Variables.rounded.small}rem;
    font-size: ${Variables.textSizes.small}rem;
    line-height: ${Variables.textSizes.small}rem;
    background-color: ${Variables.colors.primary};
    color: ${Variables.colors.white};
`

export const StButtonSecondary = styled(StButton)`
    background-color: ${Variables.colors.secondary};
    color: ${Variables.colors.text};
`

export const StButtonText = styled(StButton)`
    background-color: transparent;
    color: inherit;
`

export const StMenuButton = styled.button`
    width: 2.5rem;
    height: 1.75rem;
    padding: ${Variables.sizes.xxsmall}rem;
    border: 0;
    background-color: transparent;
    position: relative;
    transform: rotate(0deg);
    transition: .3s ease-in;
    cursor: pointer;
`

export const StBar = styled.span<StBarProps>`
    width: calc(100% - ${Variables.sizes.xxsmall * 2}rem);
    height: ${Variables.sizes.xxsmall}rem;
    padding: 0;
    margin: 0;
    display: block;
    position: absolute;
    background: ${Variables.colors.white};
    border-radius: ${Variables.sizes.xxsmall}rem;
    opacity: 1;
    left: ${Variables.sizes.xxsmall}rem;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;

    &:nth-child(1) {
        ${({ isMenuOpen }) => isMenuOpen && isMenuOpen ? `
            width: 0%;
            left: 50%;
        ` : `
            top: 0.05rem;
        `}
    }
    &:nth-child(2) {
        ${({ isMenuOpen }) => isMenuOpen && isMenuOpen ? `
            transform: rotate(45deg);
            top: 0.75rem;
        ` : `
            top: 0.75rem;
        `}
    }
    &:nth-child(3) {
        ${({ isMenuOpen }) => isMenuOpen && isMenuOpen ? `
            transform: rotate(-45deg);
            top: 0.75rem;
        ` : `
            top: 0.75rem;
        `}
    }
    &:nth-child(4) {
        ${({ isMenuOpen }) => isMenuOpen && isMenuOpen ? `
            width: 0%;
            left: 50%;
        ` : `
            top: 1.45rem;
        `}
    }
`