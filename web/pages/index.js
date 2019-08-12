import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchItemsRequest,
} from '../reducers/items';

class Home extends Component {
  static getInitialProps({ store }) {
    try {
      store.dispatch(fetchItemsRequest());
      return {};
    } catch (e) {
      return { code: e };
    }
  }

  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <h2>NextJS</h2>
    );
  }
}

const mapStateToProps = state => ({
  data: state.items.data,
  isLoading: state.items.isLoading,
  error: state.items.error,
});

export default connect(mapStateToProps)(Home);
