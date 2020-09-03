import React, { Component, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuid from 'react-uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import DropDown from '../components/DropDown';
import PropTypes from 'prop-types'

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const { items } = this.props.item;
        // console.log("Items " + JSON.stringify(items));
        const produce = items.filter(item => item.department === "Produce");
        const cheeses = items.filter(item => item.department === "Cheeses");
        const meats = items.filter(item => item.department === "Meats");
        const breads = items.filter(item => item.department === "Breads");
        const chips_snacks = items.filter(item => item.department === "Chips/Snacks");
        const drinks = items.filter(item => item.department === "Drinks");
        const misc = items.filter(item => item.department === "Misc");
        const supplies = items.filter(item => item.department === "Supplies");
        const dairy = items.filter(item => item.department === "Dairy");
        const frozen = items.filter(item => item.department === "Frozen");
        // console.log("produce: " + JSON.stringify(products));
        return(
            <Container>
                <ListGroup>
                    <h2>Produce</h2>
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
                        {produce.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Cheeses</h2>
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
                        {cheeses.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Meats</h2>
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
                        {meats.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Breads</h2>
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
                        {breads.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Chips/Snacks</h2>
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
                        {chips_snacks.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Drinks</h2>
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
                        {drinks.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Misc</h2>
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
                        {misc.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Supplies</h2>
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
                        {supplies.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Dairy</h2>
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
                        {dairy.map(({ _id, name, department, quantity, repeat }) => (        
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
                <ListGroup>
                    <br></br>
                    <h2>Frozen</h2>
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
                        {frozen.map(({ _id, name, department, quantity, repeat }) => (        
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

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(ShoppingList);