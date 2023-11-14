import React from 'react'
import data from '../data.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import './Productos.css'

export const Productos = () => {
    return (
        <>


            <Row xs={1} md={2} className="g-4">
                {data.bikes.map(bike => (
                    <Card key={bike.sku} style={{ width: '18rem' }} className='cardD'>
                        <Card.Img variant="top" src={bike.img} />
                        <Card.Body>
                            <Card.Title>{bike.model}</Card.Title>
                            <Card.Text>
                                $ {bike.price.toLocaleString()} {/* Aplica el formato de separador de miles */}


                            </Card.Text>
                            <Link to={`/bikes/${bike.sku}`}>
                                <Button variant="primary">Ver Detalles</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))
                }
            </Row>



        </>

    )
}
