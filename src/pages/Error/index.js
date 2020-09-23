import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Content } from './styles';
import { Link } from 'react-router-dom';

function Success({ location: { state } }) {
  return (
    <Container>
      <Title>
        <h1>Transaction Error</h1>
      </Title>
      <Content>
        <strong>Unfortunatelly, your purchase could not happen =\</strong>
        <strong>Original message is:</strong>
        <pre>{JSON.stringify(state.message, null, 2)}</pre>

        <Link to="/">try again?</Link>
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
