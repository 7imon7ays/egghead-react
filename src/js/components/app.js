//** @jsx React.DOM */

var React = require('react'),
    AppActions = require('../actions/app-actions.js'),
    Catalog = require('./app-catalog.js'),
    Cart = require('./app-cart.js');

var APP =
  React.createClass({
    render: function () {
              return (
                  <div>
                    <h1>Let's Shop</h1>
                    <Catalog /> 
                    <h1>Card</h1>
                    <Cart />
                  </div>
                )
            }
  });

module.exports = APP;

