import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import ErrorBoundary from './ErrorBoundary';

const TaskList = React.lazy(() => import('./TaskList'));

const Root = () => (
  <ErrorBoundary>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.Suspense fallback="... Loading">
        <TaskList />
      </React.Suspense>
    </ThemeProvider>
  </ErrorBoundary>
);

export default Root;
