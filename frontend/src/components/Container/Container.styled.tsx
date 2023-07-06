import styled from 'styled-components'
import { Variables } from '../../style'

export const StContainer = styled.div`
    width: calc(100vw - ${Variables.spacing.medium * 2}rem);
    padding: 0 ${Variables.spacing.medium}rem;
    margin: 0 auto;
    max-width: ${Variables.sizes.container}rem;
`