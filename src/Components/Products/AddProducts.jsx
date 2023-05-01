import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createproductAsync } from '../../Services/Action/Products.Action'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const [initial, setInitial] = useState({
        img: "",
        title: "",
        details: "",
        price: ""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(createproductAsync(initial));

        navigate('/productview');
        setInitial({
            img: "",
            title: "",
            details: "",
            price: ""
        })
    }

    return (
        <>
            <div className='form-wrapper d-flex justify-content-center align-items-center'>
                <Container className='wrapper'>

                    <h1>
                        Add Product
                    </h1>

                    <Form onSubmit={(e) => { handleSubmit(e) }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Image</Form.Label>
                            <Form.Control placeholder="Add Image Url" name='img' value={initial.img} onChange={(e) => { handleChange(e) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter  title" name='title' value={initial.title} onChange={(e) => { handleChange(e) }} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>details</Form.Label>
                            <Form.Control type="text" placeholder="enter initials details" name='details' value={initial.details} onChange={(e) => { handleChange(e) }} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="text" placeholder="initial price" name='price' value={initial.price} onChange={(e) => { handleChange(e) }} />
                        </Form.Group>

                        <div className='d-flex justify-content-center'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default AddProduct;