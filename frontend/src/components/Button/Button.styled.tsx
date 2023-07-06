import styled from 'styled-components'
import { Variables } from '../../style'
import { StBarProps } from './MenuButton'

export const StMenu = styled.button`
    width: 2rem;
    height: 1.75rem;
    padding: 0;
    border: 0;
    margin: 0;
    background-color: transparent;
    position: relative;
    transform: rotate(0deg);
    transition: .3s ease-in;
    cursor: pointer;
`

export const StBar = styled.span<StBarProps>`
    width: 100%;
    height: 0.35rem;
    padding: 0;
    margin: 0;
    display: block;
    position: absolute;
    background: ${Variables.colors.white};
    border-radius: 0.5rem;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;

    &:nth-child(1) {
        ${({ menuOpen }) => menuOpen ? `
            width: 0%;
            left: 50%;
        ` : `
            top: 0;
        `}
    }
    &:nth-child(2) {
        ${({ menuOpen }) => menuOpen ? `
            transform: rotate(45deg);
            top: 0.7rem;
        ` : `
            top: 0.7rem;
        `}
    }
    &:nth-child(3) {
        ${({ menuOpen }) => menuOpen ? `
            transform: rotate(-45deg);
            top: 0.7rem;
        ` : `
            top: 0.7rem;
        `}
    }
    &:nth-child(4) {
        ${({ menuOpen }) => menuOpen ? `
            width: 0%;
            left: 50%;
        ` : `
            top: 1.4rem;
        `}
    }
`