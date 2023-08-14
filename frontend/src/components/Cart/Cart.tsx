import { useContext } from 'react'
import { CartContext, UpdateCartContext, CategoryContext } from '../../ContextProvider'
import { Brick, CartItem } from '../../types'
import { Form } from '../Form'
import { StCartItem, StCartItemAmountChange, StCartItemAmountChangeButton, StCartItemAmountChangeInputfield, StCartItemImage, StCartItems, StCartTotal, StCartSection } from './Cart.styled'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../Icon'

export const Cart = () => {
    const navigate = useNavigate()

    const cart = useContext(CartContext)
    const updateCart = useContext(UpdateCartContext)

    const categories = useContext(CategoryContext)
    const getBrickMainCategory = (brick: Brick) => {
        const brickCategory = categories && categories.find(category => category.id == brick.category.id)
        return brickCategory && brickCategory.mainCategory && brickCategory.mainCategory.name.toLowerCase().split(' ').join('-')
    }

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
                submitText='Confirm order'
            />
            <StCartItems>
                {
                    cart && cart.map((cartItem: CartItem, index: number) => {
                        return (
                            <StCartItem
                                key={index}
                            >
                                <StCartSection>
                                    <StCartSection>
                                        <StCartItemImage src={`/assets/images/${getBrickMainCategory(cartItem.item)}/${cartItem.item.images[0]}`} alt={cartItem.item.name} />
                                        <div>
                                            <p>{cartItem.item.name}</p>
                                            <p>&euro;{cartItem.item.price}</p>
                                        </div>
                                    </StCartSection>
                                    <StCartSection>
                                        <p>&euro;{cartItem.item.price * cartItem.amount}</p>
                                        <StCartItemAmountChange>
                                            <StCartItemAmountChangeButton
                                                onClick={() => {onCartItemAmountChange(cartItem, cartItem.amount - 1)}}
                                                >
                                                <Icon name='minus' />
                                            </StCartItemAmountChangeButton>
                                            <StCartItemAmountChangeInputfield 
                                                type='number'
                                                value={cartItem.amount}
                                                onChange={(event) => {onCartItemAmountChange(cartItem, parseInt(event.target.value))}}
                                                />
                                            <StCartItemAmountChangeButton
                                                onClick={() => {onCartItemAmountChange(cartItem, cartItem.amount + 1)}}
                                            >
                                                <Icon name='plus' />
                                            </StCartItemAmountChangeButton>
                                        </StCartItemAmountChange>
                                    </StCartSection>
                                </StCartSection>
                            </StCartItem>
                        )
                    })
                }
                <StCartTotal>
                <StCartSection>
                        <p>Subtotal</p>
                        <p>&euro;{cart && cart.reduce((total: number, cartItem: CartItem) => total + (cartItem.item.price * cartItem.amount), 0)}</p>
                    </StCartSection>
                    <StCartSection>
                        <p>Shipping</p>
                        <p>&euro;4.99</p>
                    </StCartSection>
                    <StCartSection>
                        <p>Total</p>
                        <p>&euro;{cart && cart.reduce((total: number, cartItem: CartItem) => total + (cartItem.item.price * cartItem.amount), 4.99)}</p>
                    </StCartSection>
                </StCartTotal>
            </StCartItems>
        </section>
    )
}