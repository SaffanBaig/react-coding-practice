import axios from 'axios'
import React, {useEffect, useState} from 'react'

const LazyContent = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {

            setData(res.data)
        }).catch((err) => alert(err))
    }, [])
    return(
        data?.map((dt) => (
            <>
            <h1>{dt.title}</h1>
            <h1>{dt.id}</h1>
            </ >
        ))
        
    );
}

export default LazyContent