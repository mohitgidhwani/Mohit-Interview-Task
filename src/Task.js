import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Task() {

    const [data, setData] = useState([])




    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")


    const [searched, setSearched] = useState([])

    // const handleSearch = () => {
    //     data.map((value) => {
    //         if (search == value.title) {
    //             setSearched(value)
    //         }

    //     })


    // }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => { return res.json() })
            .then((data) => { setData(data) })
    }, [])



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/search'} className="nav-link active" aria-current="page" href="#">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/allprd'} className="nav-link" href="#">All Products</Link>
                            </li>
                            <select onChange={(e) => { setCategory(e.target.value) }}>
                                <option>Select category</option>
                                <option>men's clothing</option>
                                <option>jewelery</option>
                                <option>electronics</option>
                                <option>women's clothing</option>
                            </select>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Men's</a></li>
                                    <li><a className="dropdown-item" href="#">jewelery</a></li>
                                    <li><a className="dropdown-item" href="#">electronics</a></li>
                                    <li><a className="dropdown-item" href="#">women's</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* <input className="form-control me-2" value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>

            <div className='container'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item">
                        </li>
                    </ul>
                </nav>
                <div className='row justify-content-center gap-2'>
                    {data.map((value) => {
                        if (category == "") {
                            return (
                                <div className='col-sm-3' key={value.id} >
                                    <div className="card" >
                                        <img src={value.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.price}</p>
                                            <p className="card-text">{value.category}</p>
                                        </div>
                                    </div>
                                </div>
                            )

                        }
                        else if (category == value.category) {
                            return (
                                <div className='col-sm-3' key={value.id} >
                                    <div className="card" >
                                        <img src={value.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.price}</p>
                                            <p className="card-text">{value.category}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>


            </div></>
    )
}

export default Task
// <div className = 'col-sm-3' key = { value.id } >
//     <div className="card" >
//         <img src={value.image} className="card-img-top" alt="..." />
//         <div className="card-body">
//             <h5 className="card-title">{value.title}</h5>
//             <p className="card-text">{value.price}</p>
//             <p className="card-text">{value.category}</p>
//         </div>
//     </div>
//</div>