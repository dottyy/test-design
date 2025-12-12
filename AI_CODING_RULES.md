# AI Coding Rules & Guidelines

This document serves as the absolute source of truth for all code generated or addressed by the AI.

## 1. Type Safety (CRITICAl)
- **NEVER** use `any`. Use `unknown` if the type is truly uncertain, then validate.
- **NEVER** use `as unknown as Type` (double assertion) to bypass the type checker. Fix the underlying type mismatch.
- **AVOID** `Record<string, unknown>` when a specific interface can be defined.
- **DO NOT** use non-null assertions (`!`) unless you have explicitly validated existence in the line before.

## 2. React Best Practices
- **HOOKS**:
    - **NEVER** call hooks inside loops, conditions, or nested functions.
    - **AUDIT** `useEffect`. 90% of `useEffect` usage for state synchronization is wrong. Use derived state, event handlers, or React Query.
- **COMPONENTS**:
    - Keep components small (< 200 lines). If larger, extract sub-components or hooks.
    - Do not define components inside other components.

## 3. Data Fetching & State
- **USE** React Query for all server state.
- **DO NOT** mix `fetch` and React Query.
- **HANDLE** loading and error states explicitly in the UI.

## 4. Error Handling
- **NEVER** leave a `catch` block empty.
- **USE** the `logger` utility, not `console.error` directly (unless inside the logger itself).
- **THROW** meaningful error objects, not strings.

## 5. Configuration & Environment
- **NEVER** hardcode secrets. Use `process.env`.
- **VALIDATE** environment variables at startup/usage.

## 6. Pre-delivery Checklist (AI MUST PERFORM THIS)
Before suggesting code:
1.  [ ] Did I misuse `any`?
2.  [ ] Are hooks at the top level?
3.  [ ] Did I remove `console.log`?
4.  [ ] Is there any dead code?
5.  [ ] Did I handle the "sad path" (errors)?


## Styling
- **Styled Components**: Components defined in `.styled.tsx` files MUST have the suffix 'Styled' (e.g., `ContainerStyled`, `CardStyled`) to clearly distinguish them from functional components.
