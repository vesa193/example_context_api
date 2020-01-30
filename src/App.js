import React from 'react';
import { useContext } from 'react'
import { TodoContext } from './context/todoListContext';
import './App.css';

function App() {
  const { state, dispatch } = useContext(TodoContext)

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <ul className='list'>
        {(state.list).map((item, id) => {
          return (
            <li
              key={id}>{item.text}
              <i style={{ marginLeft: 20, cursor: 'pointer' }} onClick={dispatch({ type: 'DELETE_ITEM', value: item.id })}>X</i>
            </li>
          )
        })}
      </ul>
      <form className="main">
        <input type="text" onChange={(e) => { dispatch({ type: 'INPUT_CHANGE', value: e.target.value }) }} />
        <button type="button" onClick={() => { dispatch({ type: 'ADD_ITEM', value: state.text }) }}>ADD</button>
      </form>
    </div>
  );
}

export default App;
