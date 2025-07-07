import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export { customRender as render };
