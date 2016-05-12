const React = require('react');
const GloceryItem = require('../component/GloceryItem.jsx');
// const PropTypes = React.PropTypes;

// import React, { PropTypes } from 'react'


const GloceryItemList = (props) =>
   (
  <div>
    <h1> GloceryList listify</h1>
    <div>
      {props.items.map((item, index) =>
        <GloceryItem item={item} key={index} />
      )}
    </div>
  </div>
  );

GloceryItemList.PropTypes = {
  items: React.PropTypes.string,
};

module.exports = GloceryItemList;
