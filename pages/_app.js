import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas, fab);
config.autoAddCss = false;

import { theme, GlobalStyles } from 'config/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
