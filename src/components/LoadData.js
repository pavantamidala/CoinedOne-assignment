import React,{useEffect} from 'react'
import axios from 'axios'
export default function LoadData(props) {
    useEffect(() => {
        axios.get("https://api.mocklets.com/mock68182/screentime").then((res) => {
            console.log(props)
        })
    }, [])
    return(
        <React.Fragment>
            
        </React.Fragment>
    )
}
