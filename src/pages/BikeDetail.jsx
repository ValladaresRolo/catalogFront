import React from 'react'
import { useParams } from 'react-router-dom'
import { Row, Container, Image, Col, Button } from 'react-bootstrap'
import { conexionCatalog } from "../service/conexion"
import axios from 'axios'
import './BikeDetail.css'

export const BikeDetail = () => {

    const catalogs = conexionCatalog()

    const { sku } = useParams()
    const bikeSelected = catalogs.filter(catalog => catalog.sku === sku)

    console.log(bikeSelected[0])



    const functionComprar = async (bikeSelected) => {
        const response = await axios.post("https://api-server-ascm.onrender.com/mercadopago", bikeSelected)
        /* const response = await axios.post("http://localhost:3000/mercadoPago", bikeSelected)*/
        window.location.href = response.data
    }

    return (
        <>
            {bikeSelected[0] && (
                <>
                    <Container className='bikeDetail '>
                        <Row className="rowDetail ">
                            <Col><Image src={bikeSelected[0].img} fluid /></Col>


                        </Row>
                        <Row>
                            <Col> <h1>{bikeSelected[0].model}</h1>
                                <h2>{bikeSelected[0].brand}</h2>
                                <h3>${bikeSelected[0].price.toLocaleString()}</h3>
                                <h4>{bikeSelected[0].year}</h4>


                            </Col>
                            <Col>
                                <p>
                                    {bikeSelected[0].description}
                                </p>
                                <Button className='buttonShop' onClick={() => functionComprar(bikeSelected[0])}>Comprar</Button>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    )
}
