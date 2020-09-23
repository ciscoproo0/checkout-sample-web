import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { api } from '../../services/api';
import history from '../../services/history';

function PayPalCheckout({ personPayload, products, handlePayment }) {
  const ppScript = () => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=AfFJFbYOJ3aA_kojKbPoM-G_7WiB0tjq5tfZpVimd4CjMSCpJERzKCs-eb_CRAAA8-JqxhClACYiEfj-&currency=USD`;
    script.async = true;
    document.body.appendChild(script);

    return script;
  };

  useEffect(() => {
    const script = ppScript();

    script.addEventListener('load', () => {
      const body = {
        purchase_units: [
          {
            amount: {
              currency_code: products[0].currency,
              value: (
                parseFloat(products[0].value, 10) +
                parseFloat(products[0].shippingValue, 10)
              ).toString(),
              breakdown: {
                item_total: {
                  currency_code: products[0].currency,
                  value: products[0].value,
                },
                shipping: {
                  currency_code: products[0].currency,
                  value: products[0].shippingValue,
                },
              },
            },
            description: 'Purchase made in checkout-sample',
            items: [
              {
                name: products[0].name,
                quantity: products[0].quantity,
                description: `PS4 game: ${products[0].name}`,
                sku: products[0].id,
                category: 'PHYSICAL_GOODS',
                unit_amount: {
                  currency_code: products[0].currency,
                  value: products[0].value,
                },
              },
            ],
            shipping: {
              address: {
                address_line_1: personPayload.addressLine1,
                address_line_2: personPayload.addressLine2,
                admin_area_2: personPayload.adminArea2,
                admin_area_1: personPayload.adminArea1,
                postal_code: personPayload.postalCode,
                country_code: personPayload.country,
              },
            },
          },
        ],
        payer: {
          name: {
            given_name: personPayload.firstName,
            surname: personPayload.lastName,
          },
          email_address: personPayload.email,
          phone: {
            phone_type: 'MOBILE',
            phone_number: { national_number: personPayload.phoneNumber },
          },
        },
      };

      window.paypal
        .Buttons({
          createOrder: async (data, actions) => {
            try {
              const response = await api.post('/create-order', body, {
                headers: { mode: 'sandbox' },
              });

              return response.data.id;
            } catch (err) {
              console.log({
                Error: 'At Create Order',
                OriginalMessage: err,
              });

              history.push({ pathname: '/error', state: err });

              return err;
            }
          },

          onApprove: async (data, actions) => {
            try {
              const response = await api.post(
                '/capture-order',
                { orderId: data.orderID },
                { headers: { mode: 'sandbox' } }
              );

              handlePayment(response.data);

              return response.data;
            } catch (err) {
              console.log({
                Error: 'At Capture Order',
                OriginalMessage: err,
              });

              history.push({ pathname: '/error', state: err });

              return err.message;
            }
          },
        })
        .render('#paypal-button-container');
    });
  }, []);
  return (
    <>
      <div id="paypal-button-container"> </div>
    </>
  );
}

PayPalCheckout.propTypes = {
  personPayload: PropTypes.objectOf(Object).isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
  handlePayment: PropTypes.func.isRequired,
};

export default PayPalCheckout;
