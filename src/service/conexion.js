import axios from 'axios'
import React, { useState, useEffect } from 'react';


const [catalogs, setCatalogs] = useState([])

const getCatalogs = async () => {
    const resp = await axios.get('http://localhost:3000/v1/catalog')
    /* console.log(resp.data)
    ver consola
    */
    setCatalogs(resp.data.detail)
}