import App from 'next/app';
import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import configureStore  from '../store';

export const AppContext = createContext({});

class TestApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <AppContext.Provider value={{ location: pageProps.location }}>
          <Component {...pageProps} />
        </AppContext.Provider>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(TestApp))
