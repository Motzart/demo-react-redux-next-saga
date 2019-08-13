import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { Container, Row, Col } from 'reactstrap';
import Block from '../component/Block';
import { FETCH_ITEMS_REQUEST } from '../constants/actionTypes';

class Home extends Component {
  static getInitialProps({ store }) {
    try {
      store.dispatch({ type: FETCH_ITEMS_REQUEST });
      return {};
    } catch (e) {
      return { code: e };
    }
  }

  handlePageClick = (data) => {
    const { selected } = data.selected;
    this.props.dispatch({
      type: FETCH_ITEMS_REQUEST,
      data: { per_page: 25, currentPage: selected + 1 },
    });
  };

  render() {
    const { loading, data } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Container>
          <h2>Demo:</h2>
          <Row>
            <Col md={12}>
              { data.items && data.items.map((item, index) => (
                <Block key={index} item={item} />
              ))}
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ReactPaginate
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                pageCount={data._meta.pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName="pagination"
                subContainerClassName="page pagination"
                activeClassName="active"
              />
            </Col>
          </Row>
        </Container>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.ads.data,
  loading: state.ads.loading,
  error: state.ads.error,
});

export default connect(mapStateToProps)(Home);
