import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Footer.css'

export const Footer = () => {
    return (<>

        <footer className="sticky-footer">
            <Container fluid>
                <Row>
                    <Col xs={12} sm={4}>
                        <h5>Redes Sociales</h5>
                        <ul className='rrss'>
                            <li><a href="https://www.facebook.com"><Image src="https://valladaresrolo.github.io/trabajo01/img/002-facebook.png" fluid /></a></li>
                            <li><a href="https://www.twitter.com"><Image src="https://valladaresrolo.github.io/trabajo01/img/004-gorjeo.png" fluid /></a></li>
                            <li><a href="https://www.instagram.com"><Image src="https://valladaresrolo.github.io/trabajo01/img/003-instagram.png" fluid /></a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h5>Dirección</h5>
                        <p>123 Calle Falsa, Ciudad Ficticia</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h5>Enlaces de Interés</h5>
                        <ul className='sinV'>
                            <li><a href="#">Sernac</a></li>
                            <li><a href="#">Condorito</a></li>
                            <li><a href="#">El Huaso con Caña</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>


    </>
    )
}
