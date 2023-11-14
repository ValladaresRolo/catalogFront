import data from '../data.json'
import React from 'react'
import './Catalogo.css'
import { Productos } from '../components/productos';

export const Catalogo = () => {
    console.log(data)
    return (
        <>
            <Productos />



        </>
    )
}
