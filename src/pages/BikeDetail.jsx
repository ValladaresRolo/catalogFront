
import React from 'react'
import { useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { conexionCatalog } from "../service/conexion"
import axios from 'axios'

export const BikeDetail = () => {

    const catalogs = conexionCatalog()

    const { sku } = useParams()
    const bikeSelected = catalogs.filter(catalog => catalog.sku === sku)

    console.log(bikeSelected[0])



    const functionComprar = async (bikeSelected) => {
        const response = await axios.post("http://localhost:3000/mercadoPago", bikeSelected
        )
        window.location.href = response.data
    }




    return (
        <>
            {bikeSelected[0] && (
                <>
                    <Image src={bikeSelected[0].img} fluid />
                    <h1>{bikeSelected[0].model}</h1>
                    <h2>{bikeSelected[0].brand}</h2>
                    <h3>${bikeSelected[0].price.toLocaleString()}</h3>
                    <h4>{bikeSelected[0].year}</h4>
                    <p>{bikeSelected[0].description}</p>
                    <button onClick={() => functionComprar(bikeSelected[0])}>Comprar</button>

                </>
            )}
        </>
    )
}
