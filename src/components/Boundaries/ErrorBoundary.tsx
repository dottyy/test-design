'use client';

import { Component, ErrorInfo } from 'react';
import { logger } from '@/lib/logger';
import { Props, State } from './ErrorBoundary.d';
import { When } from 'vizonomy';
import {
  ContainerStyled,
  CardStyled,
  TitleStyled,
  TextStyled,
  ErrorPreStyled,
  RetryButtonStyled,
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
        <ContainerStyled>
          <CardStyled>
            <TitleStyled>Something went wrong</TitleStyled>
            <TextStyled>
              We apologize for the inconvenience. An unexpected error has occurred.
            </TextStyled>
            <When condition={error}>
              <ErrorPreStyled>
                <code>{error?.message}</code>
              </ErrorPreStyled>
            </When>
            <RetryButtonStyled onClick={() => this.setState({ hasError: false, error: null })}>
              Try again
            </RetryButtonStyled>
          </CardStyled>
        </ContainerStyled>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
