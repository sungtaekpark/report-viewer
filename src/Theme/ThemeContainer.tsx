import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ContainerProps } from '../Props';
import GlobalStyle from './GlobalStyle';

const ThemeContainer = (props: ContainerProps) => {
  const { children } = props;
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContainer;
