import { useState, useEffect } from 'react';
import axios from 'axios'

export function conexionCatalog() {

    const [catalogs, setCatalogs] = useState([])
    const url = 'https://api-server-ascm.onrender.com/v1/catalog';

    const getCatalogs = async () => {
        const resp = await axios.get(url)
        console.log(resp.data)
        setCatalogs(resp.data.detail)
    }

    useEffect(() => {
        getCatalogs()
    }, [])

    return catalogs;
}
