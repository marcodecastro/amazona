import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Entrar</Col>
      <Col className={props.step2 ? 'active' : ''}>Envio</Col>
      <Col className={props.step3 ? 'active' : ''}>Pagamento</Col>
      <Col className={props.step4 ? 'active' : ''}>Faça a Encomenda</Col>
    </Row>
  );
}
