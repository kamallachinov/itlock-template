import React, { useState, useEffect, useContext } from 'react'
import styles from './Brands.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import { FavouriteContext } from '../../Pages/Context/FavouriteContext'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Brands() {
    const [works, setWorks] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [sort, setSort] = useState(false)
    const [input, setInput] = useState("")
    const { fav, setFav } = useContext(FavouriteContext)
    const { favCounter, setFavCounter } = useContext(FavouriteContext)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setWorks(res.data))
        setIsloading(false)
    }, [])
    if (isLoading) {
        return <h2>Loading Datas...Please wait...</h2>
    }

    const handleSort = () => {
        setSort(!sort)
    }
    const search = (e) => {
        setInput(e.target.value)
    }
    const handleDelete = (id) => {
        if (window.confirm("Delete the item?")) {
            axios.delete(`http://localhost:5000/products/${id}`)
            const deleteItem = works.filter(item => item._id != id)
            setWorks(deleteItem)
        }
    }

    const handleView = (_id) => {
        navigate(`/view/${_id}`)
    }
    const handleFav = (favItem) => {
        if (fav.find(item => item._id == favItem._id)) {
            alert("Already fav")
        } else {
            setFav([...fav, favItem])
        }
        setFavCounter(fav.length)
    }
    return (
        <>
            <section className={styles.section}>
                <div className={styles.textCenter}>
                    <span>Our Case Study</span>
                    <h2>We work with global brands</h2>
                    <input onChange={search} value={input} placeholder='Search for items...' />
                    <button onClick={handleSort} className={styles.btn}>Sort by name</button>
                </div>
                <div className={styles.cards}>
                    <Container>
                        <Row>
                            {
                                works
                                    .filter(item => input == "" ? works : item.title.toLowerCase().includes(input.toLowerCase()))
                                    .sort((a, b) => sort == false ? a.title.localeCompare(b.title) : null)
                                    .map(work => (
                                        <Col key={work._id}>
                                            <div className={styles.card}>
                                                <img src={work.imgUrl} alt='img' />
                                                <h5>{work.title} </h5>
                                                <p>{work.subTitle}</p>
                                                <div className={styles.btns}> <Button variant="outlined" color="error" onClick={() => handleDelete(work._id)}>
                                                    Delete
                                                </Button>
                                                    <Button variant="outlined" onClick={() => handleView(work._id)}>View Detailed</Button>
                                                    <Button variant="outlined" onClick={() => handleFav(work)}>Add to fav</Button></div>
                                            </div>
                                        </Col>
                                    ))
                            }
                        </Row>
                    </Container>

                </div>
            </section>

        </>
    )
}

export default Brands