import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { Bag, Bell, FlagFill, Fullscreen, FullscreenExit, Grid, List, Moon, Search } from 'react-bootstrap-icons'
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ handleSide, handle }) {

  const { user } = useSelector(state => state.AuthReducer)
  console.log("dipak", user);


  return (
    <>
      <header className='py-2 col'>
        <div className='container-fluid'>
          <div className='d-flex'>
            <div className='col-6'>
              <div className='d-flex align-items-center'>
                <div className='togglemenu col-1 p-2'>
                  <button type='button' className='bg-transparent border-0' onClick={() => handleSide()}>
                    <List className='fs-3' />
                  </button>
                </div>
                <div className='search-filed col-4'>
                  <Form>
                    <InputGroup className="bg-info rounded">
                      <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
                        <Search />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className='bg-transparent border-0'
                      />
                    </InputGroup>
                  </Form>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='col d-flex justify-content-end align-items-center '>
                <ul className='nav'>
                  <li>
                    <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                      <FlagFill />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                      <Grid />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                      <Bag />
                    </a>
                  </li>
                  {
                    handle.active == false ?
                      <li>
                        <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5' onClick={handle.enter}>
                          <Fullscreen />
                        </a>
                      </li>
                      :
                      <li>
                        <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5' onClick={handle.exit}>
                          <FullscreenExit />
                        </a>
                      </li>
                  }

                  <li>
                    <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                      <Moon />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                      <Bell />
                    </a>
                  </li>
                </ul>
                <div className='col-3 me-3 bg-info profile'>
                  <div className='d-flex align-items-center'>
                    <img className="rounded-circle header-profile-user" src={user && `${user.photoURL}`} alt='Dipak' />
                    <span class="text-start ms-xl-2">
                      <span class="d-inline-block ms-1 fw-medium user-name-text">{user && `${user.displayName}`}</span>
                      {/* <span class="d-block ms-1 fs-12 text-muted user-name-sub-text"></span> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;