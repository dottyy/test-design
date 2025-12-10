'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '@/lib/logger';
import { Props, State } from './ErrorBoundary.d';
import {
  Container,
  Card,
  Title,
  Text,
  ErrorPre,
  RetryButton,
} from './ErrorBoundary.styled';


class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error('Uncaught error:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
    });
  }

  public render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <Container>
          <Card>
            <Title>Something went wrong</Title>
            <Text>
              We apologize for the inconvenience. An unexpected error has occurred.
            </Text>
            {error && (
              <ErrorPre>
                <code>{error.message}</code>
              </ErrorPre>
            )}
            <RetryButton onClick={() => this.setState({ hasError: false, error: null })}>
              Try again
            </RetryButton>
          </Card>
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
