import React, { useState } from 'react';

import { Container, Product, CheckoutInfo, PaymentArea } from './styles';

import PayPalCheckout from '../../components/PayPalCheckout';
import history from '../../services/history';

import image from '../../assets/images/product.jpg';

function Checkout() {
  const INITIAL_PRODUCT_VALUE = [
    {
      id: '0001',
      name: 'The Last Of US part II',
      src: image,
      sku: 'UHQW-1123',
      currency: 'USD',
      value: '69.98',
      description:
        'Five years after the dangerous journey through the post-pandemic United States, Ellie and Joel settle in Jackson, Wyoming. When a violent event disrupts peace, Ellie embarks on an unforgiving journey to do justice and find a solution.',
      quantity: '1',
      shippingValue: '9.99',
    },
  ];
  const products = INITIAL_PRODUCT_VALUE;
  const [firstName, setFirstName] = useState('Paula');
  const [lastName, setLastName] = useState('Diaz');
  const [email, setEmail] = useState('pauladiaz@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('14806887004');
  const [addressLine1, setAddressLine1] = useState('4377 East Avenue');
  const [addressLine2, setAddressLine2] = useState('Apartment 29B');
  const [adminArea1, setAdminArea1] = useState('Arizona(AZ)');
  const [adminArea2, setAdminArea2] = useState('Phoenix');
  const [postalCode, setPostalCode] = useState('85034');
  const [country, setCountry] = useState('US');
  const [personPayload, setPersonPayload] = useState({});
  const [showPayment, setShowPayment] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersonPayload({
      firstName,
      lastName,
      email,
      phoneNumber,
      addressLine1,
      addressLine2,
      adminArea1,
      adminArea2,
      postalCode,
      country,
    });
    setShowPayment(true);
  };

  const handlePayment = (responsePayPal) => {
    setShowPayment(false);
    setLoading(true);
    if (responsePayPal.purchase_units[0].payments.captures[0].id) {
      history.push({ pathname: '/success', state: responsePayPal });
    }
  };

  return (
    <>
      <Container>
        {products.map((product) => (
          <Product key={product.id}>
            <div id="img-div" className="img-div">
              <img src={product.src} alt={product.name} />
            </div>
            <div id="description-div" className="description-div">
              <strong>{product.name}</strong>
              <p>{product.description}</p>
            </div>
            <div id="pricing-div" className="pricing-div">
              <span>Quantity: {product.quantity}</span>
              <span>Price: {product.value}</span>
              <span>Shipping cost: {product.shippingValue}</span>
              <span>Total:</span>
              <strong>
                U${' '}
                {parseFloat(product.value, 10) +
                  parseFloat(product.shippingValue, 10)}
              </strong>
            </div>
          </Product>
        ))}
        <CheckoutInfo>
          <h1>Checkout</h1>
          <div id="form-area" className="form-area">
            <form>
              <div id="person-info" className="person-info">
                <div id="name-area" className="name-area">
                  <label htmlFor="first-name">
                    <span>First Name</span>
                    <input
                      type="text"
                      id="first-name"
                      className="first-name"
                      placeholder="Paula"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                  <label htmlFor="last-name">
                    <span>Last Name</span>
                    <input
                      type="text"
                      id="last-name"
                      className="last-name"
                      placeholder="Diaz"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                </div>
                <div id="elseinfo-area" className="elseinfo-area">
                  <label htmlFor="email">
                    <span>Email</span>
                    <input
                      type="email"
                      id="email"
                      className="email"
                      placeholder="pauladiaz@gmail.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                  <label htmlFor="phone-number">
                    <span>Phone Number</span>
                    <input
                      type="text"
                      id="phone-number"
                      className="phone-numer"
                      placeholder="480-688-7004"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                </div>
              </div>
              <div id="shipping-info" className="shipping-info">
                <div id="address-lines" className="address-lines">
                  <label htmlFor="address-line1">
                    <span>Street</span>
                    <input
                      type="text"
                      id="address-line1"
                      className="address-line1"
                      placeholder="4377 East Avenue"
                      value={addressLine1}
                      onChange={(event) => setAddressLine1(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                  <label htmlFor="address-line2">
                    <span>Complement</span>
                    <input
                      type="text"
                      id="address-line2"
                      className="address-line2"
                      placeholder="Apartment 29B"
                      value={addressLine2}
                      onChange={(event) => setAddressLine2(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                </div>
                <div id="elseshipping-info" className="elseshipping-info">
                  <label htmlFor="admin-area2">
                    <span>City</span>
                    <input
                      type="text"
                      id="admin-area2"
                      className="admin-area2"
                      placeholder="Phoenix"
                      value={adminArea1}
                      onChange={(event) => setAdminArea2(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                  <label htmlFor="admin-area1">
                    <span>State</span>
                    <input
                      type="text"
                      id="admin-area1"
                      className="admin-area1"
                      placeholder="Arizona(AZ)"
                      value={adminArea2}
                      onChange={(event) => setAdminArea1(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                  <label htmlFor="postal-code">
                    <span>Zip</span>
                    <input
                      type="text"
                      id="postal-code"
                      className="postal-code"
                      placeholder="85034"
                      value={postalCode}
                      onChange={(event) => setPostalCode(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                  <label htmlFor="country-code">
                    <span>Country</span>
                    <input
                      type="text"
                      id="country-code"
                      className="country-code"
                      placeholder="US"
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                      disabled={showPayment}
                    />
                  </label>
                </div>
              </div>
            </form>
            {!showPayment ? (
              <button type="submit" onClick={handleSubmit}>
                <span>Go To Payment</span>
              </button>
            ) : null}
          </div>
          {showPayment ? (
            <PaymentArea>
              <h1>Pay with PayPal</h1>

              <PayPalCheckout
                personPayload={personPayload}
                products={products}
                handlePayment={handlePayment}
              />
            </PaymentArea>
          ) : null}
        </CheckoutInfo>
      </Container>
    </>
  );
}

export default Checkout;
