import React from 'react'
import './Navbar.css'



const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='nav-list'>
                <li className='nav-list-items'>
                    <img className='logo' src={ require('./images/logo192.png') } alt='logo' />
                    {/* <input className='search' type='text' placeholder='Search task' /> */}
                    {/* <img className='search-icon' src={ require('./images/search.png') } alt='logo' /> */}
                    {/* <button className='task' name='addtask' onClick={newTaskButton}>Add Task</button> */}
                    <a href='#' className='home-page'>Home</a>
                    <a href='#' className='about-page'>About</a>
                    <a href='#' className='contact-page'>Contact</a>
                    {/* <img className='notify' src={ require('./images/notification.png') } alt='logo' />
                    <img className='usericon' src={ require('./images/userpic.png') } alt='logo' /> */}
                </li>
                   
            </ul>
        </div>
    );
}

export default Navbar