import data from '../data.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import React from 'react'

export const Catalogo = () => {
    console.log(data)
    return (
        <>
            {data.bikes.map(bike => (
                <Card key={bike.sku} style={{ width: '18rem' }}>
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
        </>
    )
}
