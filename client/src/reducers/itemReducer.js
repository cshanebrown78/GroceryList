import uuid from 'react-uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs', area: 'Dairy', quantity: '12', data: true },
        { id: uuid(), name: 'Bacon', area: 'Meats', quantity: '2lbs', data: false },
        { id: uuid(), name: 'Chicken', area: 'Meats', quantity: '1 breast', data: false },
        { id: uuid(), name: 'Pork', area: 'Meats', quantity: '4 pork chops', data: false },
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !==action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state;    
    }
}