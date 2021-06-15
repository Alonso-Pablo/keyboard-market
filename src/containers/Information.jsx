import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/containers/Information.css';

const Information = () => {

   const { state, addToBuyer } = useContext(AppContext);
   const form = useRef(null);
   const history = useHistory();
   const { cart } = state;

   const handleSubmit = () => {
      const formData = new FormData(form.current);
      const buyer = {
         'name': formData.get('name'),
         'email': formData.get('email'),
         'address': formData.get('address'),
         'department': formData.get('department'),
         'floor': formData.get('floor'),
         'city': formData.get('city'),
         'country': formData.get('country'),
         'state': formData.get('state'),
         'pc': formData.get('pc'),
         'phone': formData.get('phone'),
      }
      addToBuyer(buyer);
      history.push('/checkout/payment');
   }

   return (
      <div className="Information">
         <div className="Information-content">
            <div className="Information-head">
               <h2>Contact Information:</h2>
            </div>
               <div className="Information-form">
                  <form ref={form}>
                     <input type="text" placeholder="Full Name" name="name"/>
                     <input type="text" placeholder="Email" name="email"/>
                     <input type="text" placeholder="Address" name="address"/>
                     <input type="text" placeholder="Department" name="department"/>
                     <input type="text" placeholder="Floor" name="floor"/>
                     <input type="text" placeholder="City" name="city"/>
                     <input type="text" placeholder="Country" name="country"/>
                     <input type="text" placeholder="State" name="state"/>
                     <input type="text" placeholder="Postal code" name="pc"/>
                     <input type="text" placeholder="Phone Number" name="phone"/>
                  </form>
               </div>
               <div className="Information-buttons">
                  <div className="Information-back">
                     <Link to="/checkout">
                        Return
                     </Link>
                  </div>
                  <div className="Information-next">
                     <button type="button" onClick={handleSubmit}>
                        Pay
                     </button>
                  </div>
               </div>
         </div>
         <div className="Information-sidebar">
            <h3>Order:</h3>
            { cart.map(item => (
               <div className="Information-item" key={item.idCart}>
                  <div className="Information-element">
                     <h4>{item.title}</h4>
                     <span>${item.price}</span>
                  </div>
               </div>
            ))}
            
         </div>
      </div>
   )
}

export default Information;