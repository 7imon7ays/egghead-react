/** @jsx React.DOM */
var React = require('react'),
    AppStore = require('../stores/app-store.js'),
    RemoveFromCart = require('./app-removefromcart.js'),
    Increase = require('./app-increase.js'),
    Decrease = require('./app-decrease.js');

var cartItems = function () {
  return { items: AppStore.getCart() };
};

var Cart =
  React.createClass({
    getInitialState: function () {
                       return cartItems();
  },
  componentWillMount: function () {
    AppStore.addChangeListener(this._onChange);
                      },
  _onChange: function () {
    this.setState(cartItems());
  },
  render: function () {
            var total = 0,
                items = this.state.items.map(function (item, i) {
                  var subTotal = item.cost * item.qty;
                  total += subTotal;

                  return (
                    <tr key={ i }>
                      <td><RemoveFromCart index={ i } /></td>
                      <td>{ item.title }</td>
                      <td>{ item.qty }</td>
                      <td>
                        <Increase index={ i } />
                        <Decrease index={ i } />
                      </td>
                      <td>${ subTotal }</td>
                    </tr>
                  )
                });

            return (
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Item</th>
                          <th>Qty</th>
                          <th></th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        { items }
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="4" className="text-right">Total</td>
                          <td>${total}</td>
                        </tr>
                      </tfoot>
                    </table>

              )
  }
});

module.exports = Cart;

