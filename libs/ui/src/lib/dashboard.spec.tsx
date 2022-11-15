import { render } from '@testing-library/react';

import Dashboard from './dashboard';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Dashboard
        user={{
          name: 'John Doe',
          username: 'jdoe',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
