import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {AddPost} from "./data/state";
ReactDOM.render(
    <App state={state}  AddPost={AddPost} />,
  document.getElementById('root')
);
//Add={AddPost}