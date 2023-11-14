import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'
import { Image } from 'react-bootstrap'

export const BikeDetail = () => {
    const { sku } = useParams()
    const bikeSelected = data.bikes.filter(bike => bike.sku === sku)


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
