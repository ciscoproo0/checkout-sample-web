import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Content } from './styles';

function Success({ location: { state } }) {
  return (
    <Container>
      <Title>
        <h1>Transaction success!</h1>
      </Title>
      <Content>
        <strong>
          {state.payer.name.given_name}, the purchase was a success
        </strong>
        <span>
          Your transaction ID is:{' '}
          {state.purchase_units[0].payments.captures[0].id}
        </span>
      </Content>
    </Container>
  );
}

Success.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(Object),
  }).isRequired,
};

export default Success;
