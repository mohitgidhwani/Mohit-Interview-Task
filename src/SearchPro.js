import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SearchPro() {

    const [data, setData] = useState([])




    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState([])

    const handleSearch = () => {
        let searchPrd = search.trim("-")
        console.log(searchPrd)
        data.map((value) => {
            if (searchPrd == value.title) {
                setSearched(value)
            }

        })


    }

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
                                <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
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
                    {searched == "" ? null : (
                        <div className='col-sm-3' key={searched.id}>
                            <div className="card" >
                                <img src={searched.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{searched.title}</h5>
                                    <p className="card-text">{searched.price}</p>
                                    <p className="card-text">{searched.category}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


            </div></>
    )
}

export default SearchPro
