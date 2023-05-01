import React, { useEffect } from 'react'
import './MainContent.css'
import Header from '../Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Admin from '../Admin/Admin';
import User from '../User/User';
import ProductView from '../Products/ProductsView';
import UpdateProduct from '../Products/UpdateProduct';
import { useDispatch } from 'react-redux';
import { getproduct, getproductpriceAsync, getproductsAsync } from '../../Services/Action/Products.Action';

function MainContent({ handleSide, handle }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getLogindata = () => {

        let data = JSON.parse(sessionStorage.getItem("LoginData"));

        if (data === null) {
            navigate("/login")
        } else {
            navigate("/")
        }
    }


    useEffect(() => {
        getLogindata();
        dispatch(getproductsAsync())
        dispatch(getproductpriceAsync())
    }, [])

    return (
        <>
            <div className='col q' >
                <Header handleSide={handleSide} handle={handle} />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/productview' element={<ProductView />} />
                    <Route path='/updateproduct' element={<UpdateProduct />} />
                </Routes>
            </div>
        </>
    )
}

export default MainContent;