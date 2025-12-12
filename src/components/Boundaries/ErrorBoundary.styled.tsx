import { ReactNode, ComponentProps } from 'react';

interface BaseProps {
  children: ReactNode;
}

export function ContainerStyled({ children, ...props }: BaseProps & ComponentProps<'div'>) {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 text-gray-900"
      {...props}
    >
      {children}
    </div>
  );
}

export function CardStyled({ children, ...props }: BaseProps & ComponentProps<'div'>) {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6" {...props}>
      {children}
    </div>
  );
}

export function TitleStyled({ children, ...props }: BaseProps & ComponentProps<'h2'>) {
  return (
    <h2 className="text-2xl font-bold text-red-600 mb-4" {...props}>
      {children}
    </h2>
  );
}

export function TextStyled({ children, ...props }: BaseProps & ComponentProps<'p'>) {
  return (
    <p className="text-gray-600 mb-4" {...props}>
      {children}
    </p>
  );
}

export function ErrorPreStyled({ children, ...props }: BaseProps & ComponentProps<'pre'>) {
  return (
    <pre
      className="bg-gray-100 p-3 rounded text-sm overflow-auto mb-4 border border-gray-200"
      {...props}
    >
      {children}
    </pre>
  );
}

export function RetryButtonStyled({ children, ...props }: BaseProps & ComponentProps<'button'>) {
  return (
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
      {...props}
    >
      {children}
    </button>
  );
}
