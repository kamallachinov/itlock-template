import React, { useContext } from 'react'
import { Table, Container } from 'reactstrap';
import { AiFillDelete } from 'react-icons/ai'
import styles from './Favourites.module.scss'
import { FavouriteContext } from '../Context/FavouriteContext';
import { Helmet } from "react-helmet";

function Favourites() {
    const { fav, setFav } = useContext(FavouriteContext)
    const { setFavCounter } = useContext(FavouriteContext)

    const handleDeleteFromFav = (_id) => {
        if (window.confirm("Delete the item?")) {
            const deleteItem = fav.filter(x => x._id != _id)
            setFav(deleteItem)
            setFavCounter(fav.length)
        }
    }
    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Fav Page</title>
        <link rel="icon" type="image/png" href='https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg?w=2000' sizes="16x16" />
      </Helmet>
            <div className={styles.tableContainer}>
                <Container>
                    <Table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Work's title</th>
                                <th>Works's subTitle</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fav.map((favv, index) => (
                                    <tr key={index}>
                                        <td><img src={favv.imgUrl} className={styles.img} /></td>
                                        <td>{favv.title}</td>
                                        <td>{favv.subTitle}</td>
                                        <td ><AiFillDelete style={{ cursor: "pointer" }} onClick={() => { handleDeleteFromFav(favv._id) }} /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>



        </>
    )
}

export default Favourites