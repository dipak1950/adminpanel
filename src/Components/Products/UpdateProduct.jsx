import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateproductAsync } from '../../Services/Action/Products.Action'

function UpdateProduct() {


    const { product, isEdit } = useSelector(state => state.ProductReducer)
    const [initial, setInitial] = useState(product)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(updateproductAsync(initial));

    }

    if (!isEdit) {
        navigate("/productview")
    }
    else {
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
                                    Update
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </div>
            </>
        )
    }

}

export default UpdateProduct;