import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

type IconProps = {
    name: IconName
}

export const Icon = ({ name }: IconProps) => {
    return (
        <FontAwesomeIcon icon={name} />
    )
}