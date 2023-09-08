import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Spinner from './Spinner';

test('Spinner renders when "on" is true', () => {
  // Render the Spinner component with the "on" prop set to true
  const { getByText } = render(<Spinner on={true} />);

  expect(getByText(/Please wait.../)).toBeInTheDocument();
});


test('Spinner does not render when "on" is false', () => {
  // Render the Spinner component with the "on" prop set to false
  const { container } = render(<Spinner on={false} />);

  expect(container.firstChild).toBeNull();
});

