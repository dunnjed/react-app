import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import data from "./data"
import './index.css';

import MyComponent from "./MyComponent";

ReactDOM.render(
  //<CommentBox data={data}/>,
  <MyComponent name="Joe" />,
  document.getElementById('root')
);
