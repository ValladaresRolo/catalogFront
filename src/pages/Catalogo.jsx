import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import './Catalogo.css'
import { Productos } from '../components/Productos';


export const Catalogo = () => {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col><h1>Excelente variedad de Bicicletas</h1></Col>
                </Row>
            </Container>

            <Productos />



        </>
    )
}
