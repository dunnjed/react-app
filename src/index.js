import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import data from "./data"
import './index.css';

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('root')
);
