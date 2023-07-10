import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

type IconProps = {
    name: IconName
    isBrandIcon? : boolean
}

export const Icon = ({ name, isBrandIcon }: IconProps) => {
    return (
        <FontAwesomeIcon icon={[isBrandIcon && isBrandIcon ? 'fab' : 'fas', name]} />
    )
}