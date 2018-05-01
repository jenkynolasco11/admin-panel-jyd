import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from './dealer-logo.png'
// import Icon from 'react-icons-kit'
// import { car } from 'react-icons-kit/fa/car'

import { logoutUser } from '../../actions/app'

class AdminNavigatioBar extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = { isOpen: false }
    }
    toggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/admin/">
                            <img className="logo-banner" src='/assets/images/dealer-logo.png' alt="company logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={ this.toggle }/>
                            <Collapse isOpen={ this.state.isOpen } navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Link className="nav-link" to="/admin">HOME</Link>
                                    </NavItem>
                                    <NavItem>
                                            <Link className="nav-link" to="/admin/messages"> MESSAGES </Link>
                                    </NavItem>
                                    <NavItem>
                                            <Link className="nav-link" to="/admin/car-add-edit"> ADD NEW CAR</Link>
                                    </NavItem>
                                    {/* <NavItem>
                                        <Link className="nav-link" to="/admin/messages">MESSAGES</Link>
                                    </NavItem> */}
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav caret>
                                            ADMIN
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {/* <DropdownItem>
                                                PROFILE
                                            </DropdownItem> */}
                                            <DropdownItem onClick = { e => this.props.logoutUser() }>
                                                LOGOUT
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </div>
            )
    }
}

export default connect(null, { logoutUser })(AdminNavigatioBar)
