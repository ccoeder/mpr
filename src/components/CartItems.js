import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

export default class CartItems extends Component {
  render() {
    const { items } = this.props;

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={item.image_link}
                    style={{ width: 75, height: 75 }}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.brand || "-"}</td>
                <td>{item.category || "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

CartItems.propTypes = {
  items: PropTypes.array.isRequired
};
