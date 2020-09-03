import React, { Component, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types'

class BasicList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const { items } = this.props.item;
        
        return(
            <Container>
                <ListGroup>
                    <h2>Items</h2>
                    <Row>
                        <Col md={4}>
                            <h5>Purchased</h5>
                        </Col>
                        <Col md={4}>
                            <h5>Product</h5>
                        </Col>
                        <Col md={4}>
                            <h5>Quantity</h5>
                        </Col>
                    </Row>
                    <TransitionGroup className="shopping-list">
                        {/* {items.map(({ _id, name, department, quantity, repeat }) => ( */}
                        {items.map(({ _id, name, department, quantity, repeat }) => (        
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Row>
                                        <Col md={4}>
                                            <Button
                                                className="remove-btn"
                                                color="danger"
                                                size="sm"
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                            >
                                                &times;
                                            </Button>
                                        </Col>
                                        <Col md={4}>
                                            {name}
                                        </Col>
                                        <Col md={4}>
                                            {quantity}
                                        </Col>    
                                    </Row>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}

BasicList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(BasicList);