import { expect, test } from 'vitest';
import { render, screen } from '@test-utils';

import App from './App';

test('tests', async () => {
  // ARRANGE
  render(<App />);

  // ACT
  const content = screen.getByText('Rsbuild with React');

  // ASSERT
  expect(content).toHaveTextContent('Rsbuild with React');
});
