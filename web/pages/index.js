import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionTypes from '../constants/actionTypes';

class Home extends Component {
  static getInitialProps({ store }) {
    try {
      store.dispatch({ type: actionTypes.LOAD_ITEMS_LOADING });
      return {};
    } catch (e) {
      return { code: e };
    }
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <h2>NextJS</h2>
    );
  }
}

const mapStateToProps = state => ({
  data: state.items.data,
  loading: state.items.loading,
  error: state.items.error,
});

export default connect(mapStateToProps)(Home);
