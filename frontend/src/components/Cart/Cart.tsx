import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CartContext, UpdateCartContext, CategoryContext } from '../../ContextProvider'
import { Brick, CartItem } from '../../types'
import { Form } from '../Form'
import { StCartItem, StCartItemAmountChange, StCartItemAmountChangeButton, StCartItemAmountChangeInputfield, StCartItemImage, StCartItems, StCartTotal, StCartSection } from './Cart.styled'
import * as Yup from 'yup'
import { Icon } from '../Icon'
import { CREATE_ORDER } from '../../gql/mutations/createOrder'

export const Cart = () => {
    const navigate = useNavigate()

    const cart = useContext(CartContext)
    const updateCart = useContext(UpdateCartContext)

    const [shippingMethod, setShippingMethod] = useState('STANDARD')
    const [shippingPrice, setShippingPrice] = useState(4.99)

    const categories = useContext(CategoryContext)
    const getBrickMainCategory = (brick: Brick) => {
        const brickCategory = categories && categories.find(category => category.id == brick.category.id)
        return brickCategory && brickCategory.mainCategory && brickCategory.mainCategory.name.toLowerCase().split(' ').join('-')
    }

    const [createOrder, {}] = useMutation(CREATE_ORDER)

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
            'Billing address',
            [
                // {
                //     name: 'billingSameAsShipping',
                //     type: 'checkbox',
                //     label: 'Same as shipping address',
                // },
                {
                    name: 'billingFirstName',
                    type: 'text',
                    label: 'First name*',
                    placeholder: 'Leave blank to use shipping address'
                },
                {
                    name: 'billingLastName',
                    type: 'text',
                    label: 'Last name*',
                    placeholder: 'Leave blank to use shipping address'
                },
                {
                    name: 'billingStreet',
                    type: 'text',
                    label: 'Street*',
                    placeholder: 'Leave blank to use shipping address'
                },
                {
                    name: 'billingHouseNumber',
                    type: 'text',
                    label: 'House number*',
                    placeholder: 'Leave blank to use shipping address'
                },
                {
                    name: 'billingZipCode',
                    type: 'text',
                    label: 'Zip code*',
                    placeholder: 'Leave blank to use shipping address'
                },
                {
                    name: 'billingCity',
                    type: 'text',
                    label: 'City*',
                    placeholder: 'Leave blank to use shipping address'
                },
            ]
        ],
        [
            'Shipping method',
            [
                {
                    type: 'customInputfield',
                    name: 'shippingMethod',
                    value: shippingMethod,
                },
                {
                    type: 'customInputfield',
                    name: 'shippingPrice',
                    value: shippingPrice,
                },
                <>
                    <input 
                        type='radio'
                        name='shippingMethod' 
                        value='PICKUP' 
                        checked={shippingMethod == 'PICKUP'}
                        onChange={() => {
                            setShippingMethod('PICKUP')
                            setShippingPrice(3.99)
                        }} 
                    />
                    <label 
                        htmlFor='PICKUP'
                    > 
                        Pick up at your post office (+ &euro;3.99)
                    </label>
                    <br />
                    <input 
                        type='radio'
                        name='shippingMethod' 
                        value='STANDARD' 
                        checked={shippingMethod == 'STANDARD'}
                        onChange={() => {
                            setShippingMethod('STANDARD')
                            setShippingPrice(4.99)
                        }} 
                    />
                    <label 
                        htmlFor='STANDARD'
                    > 
                        Standard delivery (+ &euro;4.99)
                    </label>
                    <br />
                    <input 
                        type='radio'
                        name='NEXTDAY' 
                        value='NEXTDAY' 
                        checked={shippingMethod == 'NEXTDAY'}
                        onChange={() => {
                            setShippingMethod('NEXTDAY')
                            setShippingPrice(5.99)
                        }}
                    />
                    <label 
                        htmlFor='NEXTDAY'
                    > 
                        Next day delivery (+ &euro;5.99)
                    </label>
                </>
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
                    name: 'cardExpirationMonth',
                    type: 'number',
                    label: 'Month',
                    placeholder: '01'
                },
                {
                    name: 'cardExpirationYear',
                    type: 'number',
                    label: 'Year',
                    placeholder: '2023'
                },
                {
                    name: 'cardSecurityCode',
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
        // billingSameAsShipping: Yup.boolean(),
        // billingLastName: Yup.string().required('Required'),
        // billingStreet: Yup.string().required('Required'),
        // billingHouseNumber: Yup.string().required('Required'),
        // billingZipCode: Yup.string().required('Required'),
        // billingCity: Yup.string().required('Required'),
        promoCode: Yup.string(),
        cardNumber: Yup.string().required('Required').matches(/^\d+$/, 'Can only contain digits').length(16, 'Must contain 16 digits'),
        cardExpirationMonth: Yup.string().required('Required').matches(/^\d+$/, 'Can only contain digits').length(2, 'Must contain 2 digits'),
        cardExpirationYear: Yup.string().required('Required').matches(/^\d+$/, 'Can only contain digits').length(4, 'Must contain 4 digits'),
        cardSecurityCode: Yup.string().required('Required').length(3, 'Must contain 3 characters'),
    })

    const placeOrder = (values: object) => {
        createOrder({
            variables: {
                createOrderInput: {
                    ...values,
                    // @ts-ignore
                    cardExpirationMonth: parseInt(values.cardExpirationMonth),
                    // @ts-ignore
                    cardExpirationYear: parseInt(values.cardExpirationYear),
                    shippingMethod,
                    shippingPrice,
                    items: cart.map((cartItem: CartItem) => {
                        return JSON.stringify(cartItem)
                    }),
                    total: parseFloat(cart && cart.reduce((total: number, cartItem: CartItem) => total + (cartItem.item.price * cartItem.amount), shippingPrice).toFixed(2))
                }
            }
        })
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
                                            <p>&euro;{cartItem.item.price.toFixed(2)}</p>
                                        </div>
                                    </StCartSection>
                                    <StCartSection>
                                        <p>&euro;{(cartItem.item.price * cartItem.amount).toFixed(2)}</p>
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
                    {
                        cart && cart.length > 0 ?
                            <>
                                <StCartSection>
                                    <p>Subtotal</p>
                                    <p>&euro;{cart && cart.reduce((total: number, cartItem: CartItem) => total + (cartItem.item.price * cartItem.amount), 0).toFixed(2)}</p>
                                </StCartSection>
                                <StCartSection>
                                    <p>Shipping</p>
                                    <p>&euro;{shippingPrice}</p>
                                </StCartSection>
                                <StCartSection>
                                    <p>Total</p>
                                    <p>&euro;{cart && cart.reduce((total: number, cartItem: CartItem) => total + (cartItem.item.price * cartItem.amount), shippingPrice).toFixed(2)}</p>
                                </StCartSection>
                            </>
                        :
                            <p>Your cart is empty!</p>
                    }
                </StCartTotal>
            </StCartItems>
        </section>
    )
}