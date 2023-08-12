import { styled } from 'styled-components'
import { Variables } from '../../style'
import { StButtonText } from '../Button/Button.styled'
import { StExtraInfoButtonProps } from './Product'

export const StProduct = styled.section`
    flex-wrap: wrap;
`

export const StProductImage = styled.img`
    width: calc(50% - ${Variables.spacing.xsmall * 2 + 0.5}rem);
    box-shadow: 0 0 ${Variables.spacing.xsmall}rem #0002;
    border-radius: ${Variables.rounded.medium}rem;
    margin: ${Variables.spacing.xsmall}rem;
`

export const StMainInfo = styled.div`
    width: calc(50% - 0.5rem);
`

export const StQuantitySelector = styled.section`
    align-items: center;
    margin: ${Variables.spacing.medium}rem 0;
    margin-bottom: ${Variables.spacing.large}rem;

    p {
        margin: 0;
    }
`

export const StExtraInfo = styled.section`
    width: 100%;
    max-width: calc(100vw - ${Variables.spacing.medium * 2}rem);
    background-color: ${Variables.colors.lightGrey};
    margin: ${Variables.spacing.medium}rem 0;
    gap: 0;
    border-radius: ${Variables.rounded.small}rem 0 0 ${Variables.rounded.small}rem;
`

export const StExtraInfoButton = styled(StButtonText)<StExtraInfoButtonProps>`
    width: 9rem;
    padding: ${Variables.spacing.medium}rem;
    margin: 0 -1px 0 0;
    z-index: 10;
    font-size: ${Variables.textSizes.medium}rem;
    line-height: ${Variables.textSizes.medium}rem;
    ${({ isActive }) => isActive && `border: 1px solid ${Variables.colors.grey}b; border-right: 1px solid ${Variables.colors.lightGrey};`}
    border-radius: ${Variables.rounded.small}rem 0 0 ${Variables.rounded.small}rem;
`

export const StExtraInfoContainer = styled.div`
    height: auto;
    width: calc(100% - 11rem);
    padding: ${Variables.spacing.medium}rem;
    padding-top: ${Variables.spacing.small}rem;
    border: 1px solid ${Variables.colors.grey}b;
    border-radius: 0 ${Variables.rounded.small}rem ${Variables.rounded.small}rem 0;

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

export const StRelatedProductsSection = styled.section`
    width: 100%;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 0;
    margin-bottom: ${Variables.spacing.large}rem;
`

export const StRelatedProducts = styled.section`
    flex-wrap: wrap;
    justify-content: center;
`