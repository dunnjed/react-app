import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import data from "./data"
import Map from "./Map";
import './index.css';
import '../node_modules/openlayers/dist/ol.css';


import MyComponent from "./MyComponent";

ReactDOM.render(
  <div>
  <MyComponent name="Joe" />
  <Map />
  </div>,
  document.getElementById('root')
);
