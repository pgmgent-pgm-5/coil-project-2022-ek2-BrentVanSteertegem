import { styled } from 'styled-components'
import { Variables } from '../../style'
import { StDashboardButtonProps, StDashboardListProps } from './Dashboard'
import { StButtonText } from '../Button/Button.styled'

export const StDashboardContainer = styled.div`
    width: calc(100vw - ${Variables.spacing.medium * 2}rem);
    height: calc(100vh - ${Variables.spacing.medium * 2}rem);
    padding: ${Variables.spacing.medium}rem;
    margin: 0;
    overflow: hidden;
`

export const StAuthContainer = styled.section`
    justify-content: space-between;
    align-items: center;
    height: 3rem;

    & > * {
        margin: 0;
    }
`

export const StDashboard = styled.section`
    width: 100%;
    height: calc(calc(100vh - ${Variables.spacing.medium * 2}rem) - 4rem);
    background-color: ${Variables.colors.lightGrey};
    margin: ${Variables.spacing.medium}rem 0;
    gap: 0;
    border-radius: ${Variables.rounded.small}rem 0 0 ${Variables.rounded.small}rem;
`

export const StDashboardButton = styled(StButtonText)<StDashboardButtonProps>`
    width: 15rem;
    padding: ${Variables.spacing.medium}rem;
    margin: 0 -1px 0 0;
    z-index: 10;
    font-size: ${Variables.textSizes.medium}rem;
    line-height: ${Variables.textSizes.medium}rem;
    ${({ isActive }) => isActive && `border: 1px solid ${Variables.colors.grey}b; border-right: 1px solid ${Variables.colors.lightGrey};`}
    border-radius: ${Variables.rounded.small}rem 0 0 ${Variables.rounded.small}rem;
`

export const StDashboardContentContainer = styled.div`
    height: auto;
    width: calc(100% - 17rem);
    padding: ${Variables.spacing.medium}rem;
    padding-top: ${Variables.spacing.small}rem;
    border: 1px solid ${Variables.colors.grey}b;
    border-radius: 0 ${Variables.rounded.small}rem ${Variables.rounded.small}rem 0;
    overflow: hidden;

    h4, p {
        margin: 0;
    }

    h4 {
        margin-bottom: ${Variables.spacing.xsmall}rem;
    }

    p {
        word-break: break-all;
        white-space: normal;
    }
`

export const StDashboardList = styled.div<StDashboardListProps>`
    ul {
        margin: 0;
        border: 1px solid ${Variables.colors.grey}b;

        max-height: calc(calc(100vh - 2rem) - 11.2rem);
        overflow-y: scroll;
    }

    & > li {
        &:first-of-type {
            span {
                font-weight: bold;
            }
        }
    }

    li {
        list-style-type: none;
        margin: 0;
        padding: ${Variables.spacing.small}rem;
        display: grid;

        grid-template-columns: ${({ columns }) => columns ? columns : 'repeat(5, 1fr)'};
        
        span {
            margin: 0;
        }

        &:nth-child(even) {
            background-color: ${Variables.colors.white};
        }

        img {
            width: 100%;
        }
    }
`

export const StDatshboardListTitle = styled.h4`
    padding-left: ${Variables.spacing.small}rem;
`

export const StDashboardAdministration = styled.div`
    div {
        margin-top: ${Variables.spacing.medium}rem;

        &:not(:first-of-type) {
            margin-top: ${Variables.spacing.large}rem;
        }
    }
`