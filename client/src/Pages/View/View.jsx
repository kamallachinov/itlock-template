import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from 'react-router-dom';
import styles from './View.module.scss'
import Button from '@mui/material/Button';
function View() {
    let { supId } = useParams()
    const [view, setView] = useState([])

    const getDataById = async (supId) => {
        const data = await axios.get(`http://localhost:5000/products/${supId}`)
        setView(data.data)
    }

    useEffect(() => {
        getDataById(supId)
    }, [])
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>View Page</title>
                <link rel="icon" type="image/png" href='https://t3.ftcdn.net/jpg/02/97/98/40/360_F_297984037_iuijYMhcLkt2nNW8niNbkvvUeOwtU8b3.jpg' sizes="16x16" />
            </Helmet>
            <div className={styles.centeredDiv}>
                <img src={view.imgUrl} />
                <h2>{view.title}</h2>
                <h3>{view.subTitle}</h3>
                <Button variant="contained" color="success" onClick={()=>navigate("/")} >
                Go Home Page
      </Button>
                
            </div>
        </>
    )
}

export default View