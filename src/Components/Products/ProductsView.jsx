import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CurrencyRupee, Pencil, Search, Trash } from 'react-bootstrap-icons'
import AddProduct from './AddProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteproductAsync, getproductAsync, getproductpriceAsync, getproductsAsync } from '../../Services/Action/Products.Action';


function ProductView() {

    const [add, setAdd] = useState(true)
    const { products, isLoading, isEdit, totalPrice } = useSelector(state => state.ProductReducer)
    const [isDelete, setIsDelete] = useState(false)


    function handleButtonClick() {
        setAdd(!add);
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleIsEdit = (id) => {

        dispatch(getproductAsync(id))
    }

    const handleDelete = (id) => {

        dispatch(DeleteproductAsync(id))
        setIsDelete(!isDelete)
    }


    const back = () => {
        navigate("/")
    }

    const get = () => {
        dispatch(getproductpriceAsync())
    }

    useEffect(() => {
        dispatch(getproductsAsync())
        get();
    }, [])

    if (isEdit) {
        navigate('/updateproduct')
    } else {
        return (
            <>
                {
                    add === false ? <AddProduct />
                        :
                        <>
                            <div className="search-product mt-4 p-3">
                                <div className="d-flex">
                                    <div className="search-style-2 col-10 border-bottom border-dark border-3">
                                        <form action="#">
                                            <select className="select-active select2-hidden-accessible border-0" >
                                                <option data-select2-id={3}>All Categories</option>
                                                <option>Women's</option>
                                                <option>Men's</option>
                                                <option>Cellphones</option>
                                                <option>Computer</option>
                                                <option>Electronics</option>
                                                <option>Accessories</option>
                                                <option>Home &amp; Garden</option>
                                                <option>Luggage</option>
                                                <option>Shoes</option>
                                                <option>Mother &amp; Kids</option>
                                            </select>
                                            &nbsp;
                                            <Search />
                                            <input type="text" className='border-0 ps-3' placeholder="Search for items..." />
                                        </form>
                                    </div>
                                    <div className='col-2 d-flex justify-content-end'>
                                        <Button onClick={handleButtonClick}>Add Product</Button>
                                    </div>
                                </div>
                            </div>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>Product Details </h1>
                                    </Col>
                                </Row>
                                <Row>
                                    {
                                        isLoading ? <h2>Loading...!!!</h2>
                                            :
                                            <section className="mt-50 mb-50">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="table-responsive">
                                                                <table className="table table-bordered shopping-summery text-center">
                                                                    <thead>
                                                                        <tr className="main-heading">
                                                                            <th scope="col">Image</th>
                                                                            {/* <th scope="col">id</th> */}
                                                                            <th scope="col">Product</th>
                                                                            <th scope="col">Price</th>
                                                                            <th scope="col">Update</th>
                                                                            <th scope="col">Remove</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {
                                                                        products.map((pro, id) => {
                                                                            return (
                                                                                <>
                                                                                    <tbody className='border-1'>
                                                                                        <tr>
                                                                                            <td className="image product-thumbnail">
                                                                                                <img src={pro.img} className='w-50' alt="#" />
                                                                                            </td>

                                                                                            <td className="product-des product-name">
                                                                                                <h5 className="product-name">
                                                                                                    <a href="" className='text-decoration-none'>{pro.title}</a>
                                                                                                </h5>
                                                                                                <p className="font-xs">{pro.details}.</p>
                                                                                            </td>
                                                                                            <td className="price"><span><CurrencyRupee /> {pro.price} </span></td>

                                                                                            <td className="text-center m-0" >
                                                                                                <Button className="" onClick={() => handleIsEdit(pro.id)}>
                                                                                                    <Pencil />
                                                                                                </Button>
                                                                                            </td>
                                                                                            <td className="action" >
                                                                                                <Button className="" onClick={() => handleDelete(pro.id)}>
                                                                                                    <Trash />
                                                                                                </Button>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                    <thead>
                                                                        <tr className='main-heading'>
                                                                            <th colspan={2}>
                                                                                <h3>Total</h3>
                                                                            </th>
                                                                            <th colSpan={1}>
                                                                                <h4>{totalPrice} </h4>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                    }
                                </Row>
                                <Button variant='danger' onClick={() => { back() }}>Back</Button>
                            </Container>
                        </>
                }
            </>
        )
    }
}

export default ProductView;