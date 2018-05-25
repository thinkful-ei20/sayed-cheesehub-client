import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions';

export class CheeseList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const cheeses = this.props.cheeses.map((cheese, index) => {
      return (
        <li key={index}>
          {cheese}
        </li>
      );
    });

    return (
      <ul>
        {cheeses}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  cheeses: state.cheeseReducer.cheeses
});

export default connect(mapStateToProps)(CheeseList);