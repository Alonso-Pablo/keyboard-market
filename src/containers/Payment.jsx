import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';

import '../styles/containers/Payment.css';

const Payment = () => {

    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useHistory();

    const paypaylOptions = {
        clientId: String(process.env.CLIENT_ID_PAYPAL),
        intent: 'capture',
        currency: 'USD'
    }
    const buttonStyles ={
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = (data) => {
        if(data.status === 'COMPLETED') {
           const newOrder = {
              buyer,
              product: cart,
              payment: data
           }
           addNewOrder(newOrder);
           history.pushState('/checkout/success')
        }
    }

    const handleSumTotal = () => {
        const reducer = (acc, cur) => acc + cur.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
     }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Order Summary:</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.idCart} >
                        <div className="Pay-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton 
                    paypalOptions={paypaylOptions}
                    buttonStyles={buttonStyles}
                    amount={handleSumTotal()}
                    // onPaymentStart={() => console.log('Start Payment')}
                    onPaymentSuccess={data => handlePaymentSuccess(data)}
                    // onPaymentError={error => console.log(error)}
                    // onPaymentCancel={data => console.log(data)} 
                    />
                </div>
            </div>
            <div />
        </div>
    )
}

export default Payment;