import { useState, useEffect } from 'react';
import axios from 'axios'

export function conexionCatalog(url) {

    const [catalogs, setCatalogs] = useState([])

    const getCatalogs = async () => {
        const resp = await axios.get('https://api-server-ascm.onrender.com/v1/catalog')
        console.log(resp.data)
        setCatalogs(resp.data.detail)
    }


    useEffect(() => {
        getCatalogs()
    }, [])


}