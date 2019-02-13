// @flow

import * as React from 'react';
import App, { Container } from 'next/app';

import AppContainer from '../Application/containers/App';

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </Container>
    );
  }
}

export default NextApp;
