import React from 'react'
import './Sidebar.css'
import { Box, Chat, ChatRight, ChevronBarDown, ChevronDown, ChevronRight, File, FolderMinus, GearFill, Icon0Square, Map, MicrosoftTeams, People, PeopleFill, Person, PersonCircle, PersonFill, Speedometer, Speedometer2, WindowDash } from 'react-bootstrap-icons';
import { Accordion, useAccordionButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <a href='javascript:;' className='text-decoration-none'
            onClick={decoratedOnClick}
        >
            {children}
        </a>
    );
}

function Sidebar({ show }) {

    return (
        <>
            <div className={show ? ' sidebar bg-primary vh-100 hide' : 'sidebar bg-primary'}>
                <div className='logo text-center  p-2'>
                    <a href="#" className=' text-black text-decoration-none text-white fs-4'>
                        Dipak Nimavat
                    </a>
                </div>
                <nav className='mt-3 p-3 '>
                    <h6 className='text-secondary'>Menu</h6>
                    <ul className='list-unstyled'>
                        <Accordion defaultActiveKey='0'>
                            <li className='p-2'>
                                <NavLink to='/' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <Speedometer2 />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Dashboard
                                        </span>
                                    </div>
                                    <div className='arrow'>
                                        <ChevronRight />
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <CustomToggle eventkey='0'>
                                    <NavLink to='/users' className='text-decoration-none d-flex align-items-center navlink text-white position-relative'>
                                        <div className='icon col-1'>
                                            <PeopleFill />
                                        </div>
                                        <div className='content col ms-2'>
                                            <span>
                                                Users
                                            </span>
                                        </div>
                                        <div className='arrow'>
                                            <ChevronBarDown />
                                        </div>
                                    </NavLink>
                                </CustomToggle>
                                <Accordion.Collapse eventkey='1'>
                                    <ul className='dropdownMenu list-unstyled p-3'>
                                        <li className='p-2'>
                                            <NavLink to='/admin' className='text-decoration-none d-flex align-items-center navlink'>
                                                <div className='icon col-1'>
                                                    <PersonCircle />
                                                </div>
                                                <div className='content col ms-2'>
                                                    <span>
                                                        Admin
                                                    </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className='p-2'>
                                            <NavLink to='/user' className='text-decoration-none d-flex align-items-center navlink'>
                                                <div className='icon col-1'>
                                                    <PersonFill />
                                                </div>
                                                <div className='content col ms-2'>
                                                    <span>
                                                        User
                                                    </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </Accordion.Collapse>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/productview' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <Box />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Product
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <GearFill />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Setting
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <Person />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Authentication
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <File />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Pages
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <FolderMinus />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Forms
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <ChatRight />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Charts
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <Icon0Square />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Icons
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <Map />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Map
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <WindowDash />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Widgets
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <WindowDash />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Widgets
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/setting' className='text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <WindowDash />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Widgets
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                        </Accordion>
                    </ul>
                </nav>
            </div >
        </>
    )
}

export default Sidebar;