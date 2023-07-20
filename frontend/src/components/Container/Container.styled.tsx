import styled from 'styled-components'
import { Variables } from '../../style'

export const StContainer = styled.div`
    width: calc(100vw - ${Variables.spacing.medium * 2}rem);
    padding: 0 ${Variables.spacing.medium}rem;
    margin: 0 auto;
    max-width: ${Variables.sizes.container}rem;
`

export const StAppContainer = styled(StContainer)`
    min-height: calc(100vh - 38.65rem);

    @media (min-width: ${Variables.breakpoints.mobile}rem) {
        min-height: calc(100vh - 42.21rem);
    }

    @media (min-width: ${Variables.breakpoints.tablet}rem) {
        min-height: calc(100vh - 31.39rem);
    }
`

export const StCenteredContainer = styled(StContainer)`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    min-width: inherit;
    max-width: inherit;
    height: inherit;
    min-height: inherit;
    max-height: inherit;
`