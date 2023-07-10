import styled from 'styled-components'
import { Variables } from '../../style'

export const StContainer = styled.div`
    width: calc(100vw - ${Variables.spacing.medium * 2}rem);
    padding: 0 ${Variables.spacing.medium}rem;
    margin: 0 auto;
    max-width: ${Variables.sizes.container}rem;
`

export const StAppContainer = styled(StContainer)`
    min-height: calc(100vh - 22.26rem);

    @media (min-width: ${Variables.breakpoints.mobile}rem) {
        min-height: calc(100vh - 25.82rem);
    }

`