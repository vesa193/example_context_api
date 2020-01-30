import React from 'react';
import { createContext, useReducer } from 'react'

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const initialState = {
        list: [],
        text: ''
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_ITEM':
                console.log(state);
                let updatedState = {
                    ...state,
                    list: [...state.list, { text: action.value, id: Math.random() * 100000 }]
                }
                console.log(updatedState)
                return updatedState;
                break;

            case 'DELETE_ITEM':
                let updatedList = state.list.filter(item => item.id !== action.value)
                return {
                    ...state,
                    list: updatedList
                }
                break;

            case 'INPUT_CHANGE':
                return {
                    ...state,
                    text: action.value
                }
                break;

            default:
                return state
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider