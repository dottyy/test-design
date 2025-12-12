# CODING STANDARDS

## Core Principles
1.  **Readability over cleverness**: Write code that is easy to understand.
2.  **Type Safety**: TypeScript is here to help, not to be bypassed.
3.  **Consistency**: Follow the existing patterns (React Query, TaildwindCSS).

## TypeScript
- **No `any`**: Explicitly define types.
- **No `as` casting**: Unless absolutely necessary (e.g., interacting with 3rd party untyped libs).

## React
- **Functional Components**: Use functional components with hooks.
- **Hooks**: Follow the Rules of Hooks stricty.
- **State**:
    - Server state -> React Query
    - Client global state -> Zustand/Context
    - Local state -> useState/useReducer

## formatting
- use Prettier (configured in project).
- Run `npm run lint` before committing.

## Git Workflow
- Commits will be blocked if linting fails.
- Do not bypass verification (`--no-verify`) unless authorized.
