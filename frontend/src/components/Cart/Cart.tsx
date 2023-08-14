import { useContext } from 'react'
import { CartContext, UpdateCartContext } from '../../ContextProvider'
import { CartItem } from '../../types'
import { Button } from '../Button'
import { Form } from '../Form'
import { StCartItems } from './Cart.styled'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
    const navigate = useNavigate()

    const cart = useContext(CartContext)
    const updateCart = useContext(UpdateCartContext)

    const onCartItemAmountChange = (cartItem: CartItem, amount: number) => {
        cartItem.amount = amount
        updateCart && updateCart([...cart])
    }

    const inputFields = new Map([
        [
            'Shipping address',
            [
                {
                    name: 'firstName',
                    type: 'text',
                    label: 'First name',
                    placeholder: 'John'
                },
                {
                    name: 'lastName',
                    type: 'text',
                    label: 'Last name',
                    placeholder: 'Doe'
                },
                {
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    placeholder: 'john.doe@gmail.com'
                },
                {
                    name: 'street',
                    type: 'text',
                    label: 'Street',
                    placeholder: 'Main street'
                },
                {
                    name: 'houseNumber',
                    type: 'text',
                    label: 'House number',
                    placeholder: '10'
                },
                {
                    name: 'zipCode',
                    type: 'text',
                    label: 'Zip code',
                    placeholder: '9000'
                },
                {
                    name: 'city',
                    type: 'text',
                    label: 'City',
                    placeholder: 'Ghent'
                }
            ]
        ],
        [
            'Payment',
            [
                {
                    name: 'promoCode',
                    type: 'text',
                    label: 'Promo code*',
                    placeholder: 'FREEGOODIE'
                },
                {
                    name: 'cardNumber',
                    type: 'number',
                    label: 'Card number',
                    placeholder: 'Card number'
                },
                {
                    name: 'month',
                    type: 'number',
                    label: 'Month',
                    placeholder: '01'
                },
                {
                    name: 'year',
                    type: 'number',
                    label: 'Year',
                    placeholder: '2023'
                },
                {
                    name: 'securityCode',
                    type: 'text',
                    label: 'Security code',
                    placeholder: 'Security code'
                }
            ]
        ],
    ])

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
        street: Yup.string().required('Required'),
        houseNumber: Yup.string().required('Required'),
        zipCode: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        promoCode: Yup.string(),
        cardNumber: Yup.string().required('Required'),
        month: Yup.string().required('Required'),
        year: Yup.string().required('Required'),
        securityCode: Yup.string().required('Required')
    })

    const placeOrder = (values: object) => {
        console.log(values, cart) // TODO: Actually create an order
        updateCart && updateCart([])
        navigate('/') // TODO: Navigate to order confirmation screen
    }

    return (
        <section>
            <Form 
                inputfields={inputFields}
                validationSchema={validationSchema}
                onSubmit={(values) => placeOrder(values)}
                submitText='Order'
            />
            <StCartItems>
                {
                    cart && cart.map((cartItem: CartItem, index: number) => {
                        return (
                            <li
                                key={index}
                            >
                                <section>
                                    <div>
                                        <p>{cartItem.item.name}</p>
                                        <p>&euro;{cartItem.item.price}</p>
                                    </div>
                                    <section>
                                        <Button
                                            faIconLeft='minus'
                                        />
                                        <input 
                                            type='number'
                                            value={cartItem.amount}
                                            onChange={(event) => {onCartItemAmountChange(cartItem, parseInt(event.target.value))}}
                                        />
                                        <Button
                                            faIconLeft='plus'
                                        />
                                    </section>
                                </section>
                            </li>
                        )
                    })
                }
            </StCartItems>
        </section>
    )
}