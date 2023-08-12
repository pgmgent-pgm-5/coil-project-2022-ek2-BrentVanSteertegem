import { useContext } from 'react'
import { Breadcrumb, Product } from '../components'
import { BrickContext } from '../ContextProvider'
import { Brick } from '../types'

export const ProductPage = () => {
    const bricks = useContext(BrickContext)

    const brick = bricks && bricks.find((brick: Brick) => 
        brick.name.toLocaleLowerCase().split(' ').join('_') == window.location.pathname.split('/')[2]
    )

    return (
        <>
            <Breadcrumb />
            <Product 
                brick={brick!}
            />
        </>
    )
}