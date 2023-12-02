import { Container, Button, Card, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './Productos.css'


import { conexionCatalog } from '../service/conexion'

export const Productos = () => {

    const catalogs = conexionCatalog()



    return (
        <>
            <Container>
                <Row>
                    <Col><h3>Solo Crema nada de Salsa</h3></Col>
                </Row>
            </Container>
            <Container className='catalog'>

                <Row xs={1} md={2} className="g-4">
                    {catalogs.map(catalog => (
                        <Card key={catalog.sku} style={{ width: '18rem' }} className='cardD'>
                            <Card.Img variant="top" src={catalog.img} />
                            <Card.Body>
                                <Card.Title>{catalog.model}</Card.Title>
                                <Card.Text>
                                    $ {catalog.price.toLocaleString()} {/* Aplica el formato de separador de miles */}
                                </Card.Text>
                                <Link to={`/catalogFront/bikes/${catalog.sku}`}>
                                    <Button className='buttonD'>Ver Detalles</Button>
                                </Link>



                            </Card.Body>
                        </Card>
                    ))
                    }
                </Row></Container>


        </>
    )

}
