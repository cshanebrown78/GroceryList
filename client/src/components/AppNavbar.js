import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemModal from '../components/ItemModal';
import Logout from './auth/Logout'


class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <NavLink href="/shoppinglist">
                        Main List
                    </NavLink>
                </NavItem>
                <NavItem>
                    <ItemModal />
                </NavItem>
                <NavItem>
                    <NavLink href="/basiclist">
                        Basic List
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/repeatablelist">
                        Repeatables List
                    </NavLink>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );



        return (
             <div>
            <Navbar color="dark" dark expand="sm" className="mb-5" fixed="top">
                <Container>
                    <NavbarBrand href="/">GroceryList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            { isAuthenticated ? authLinks : ''}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
       
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);