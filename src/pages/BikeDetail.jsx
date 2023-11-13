import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'

export const BikeDetail = () => {
    const { sku } = useParams()
    const bikeSelected = data.bikes.filter(bike => bike.sku === sku)


    console.log(bikeSelected)
    return (
        <>
            <h1>{bikeSelected[0].brand}</h1>

        </>
    )
}
