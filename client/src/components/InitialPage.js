import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from '../components/auth/RegisterModal';
import LoginModal from '../components/auth/LoginModal';
import { Container } from 'reactstrap';



class InitialPage extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const guestLinks = (
            <Container className='login'>
                <h1>Welcome To Your Shopping List</h1>
                <p>Please Sign In or Register To Continue</p>
                <br />
                <br />
                <LoginModal buttonLabel='Login' style={{ marginTop: 100 }} />
                <RegisterModal buttonLabel='New User?' style={{ marginTop: 100 }} />
            </Container>
        )

        const authLinks = (
            <Container className='login'>
                <h1>{ user ? `Welcome ${user.userName}` : `` }</h1>
                <br />
                <h3>Enjoy your Shopping List</h3>
            </Container>
        )

        return (
            <div className='App'>
               
                { isAuthenticated ? authLinks : guestLinks }
                
            </div>
        );
    }
        
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(InitialPage);