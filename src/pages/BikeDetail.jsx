import React from 'react'
import { useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const BikeDetail = () => {


    const [catalogs, setCatalogs] = useState([])
    const getCatalogs = async () => {
        const resp = await axios.get('https://api-server-ascm.onrender.com/v1/catalog')
        setCatalogs(resp.data.detail)
    }

    useEffect(() => {
        getCatalogs()
    }, [])




    const { sku } = useParams()
    const bikeSelected = catalogs.filter(catalog => catalog.sku === sku)


    console.log(bikeSelected)
    return (
        <>
            <Image src={bikeSelected[0].img} fluid />
            <h1>{bikeSelected[0].model}</h1>
            <h2>{bikeSelected[0].brand}</h2>
            <h4>{bikeSelected[0].year}</h4>
            <p>{bikeSelected[0].description}</p>


        </>
    )
}
