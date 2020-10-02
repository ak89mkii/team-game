import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = (props) => {
    return (
<div>
<Menu tabular>
    <Menu.Item
        name='Landing Page'
        active={props.activeItem === 'Landing Page'}
        onClick={props.handleItemClick}
        />
        <Menu.Item
        name='Quiz Page'
       
        active={props.activeItem === 'Quiz Page'}
        onClick={props.handleItemClick}
        />             
</Menu>
</div>
    )}
export default NavBar