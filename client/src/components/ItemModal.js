import React, { Component } from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Col
 } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import uuid from 'react-uuid'

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        department: '',
        quantity: '',
        data: 'no'
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name,
            department: this.state.select,
            quantity: this.state.quantity,
            data: this.state.repeatable
        }

        // Add item via addItem action
        this.props.addItem(newItem);

        // Close Modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="deptSelect">Select</Label>
                                    <Input type="select" name="select" id="deptSelect" onChange={this.onChange}>
                                        <option hidden>Choose One</option>
                                        <option>Vegetables</option>
                                        <option>Cheeses</option>
                                        <option>Meats</option>
                                        <option>Bread</option>
                                        <option>Chips/Snacks</option>
                                        <option>Drinks</option>
                                        <option>Misc</option>
                                        <option>Supplies</option>
                                        <option>Dairy</option>
                                        <option>Frozen</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="quantityText" sm={2}>Quantity Needed</Label>
                                    <Col sm={10}>
                                    <   Input type="textarea" name="quantity" id="quantityText" onChange={this.onChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="checkboxRepeatable" sm={10}>Repeatable Weekly?</Label>
                                    <Col sm={{ size: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="repeatable" id="checkboxRepeatable" value="yes" onChange={this.onChange} />{' '}
                                                    Yes
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="repeatable" id="checkboxRepeatable" value="no" onChange={this.onChange} />{' '}
                                                    No
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>    
                            <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                            >
                                Add Item
                            </Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);
