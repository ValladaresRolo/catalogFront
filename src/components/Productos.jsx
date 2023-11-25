import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './Productos.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

export const Productos = () => {

    const [catalogs, setCatalogs] = useState([])
    const getCatalogs = async () => {
        const resp = await axios.get('https://api-server-ascm.onrender.com/v1/catalog')
        setCatalogs(resp.data.detail)
    }

    useEffect(() => {
        getCatalogs()
    }, [])


    return (
        <>

            <Row xs={1} md={2} className="g-4">
                {catalogs.map(catalog => (
                    <Card key={catalog.sku} style={{ width: '18rem' }} className='cardD'>
                        <Card.Img variant="top" src={catalog.img} />
                        <Card.Body>
                            <Card.Title>{catalog.model}</Card.Title>
                            <Card.Text>
                                $ {catalog.price.toLocaleString()} {/* Aplica el formato de separador de miles */}


                            </Card.Text>
                            <Link to={`/bikes/${catalog.sku}`}>
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