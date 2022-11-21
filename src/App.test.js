import { render, screen } from '@testing-library/react';

import Hero from './components/Main/Hero/Hero';

test('Renders Hero section title', () => {
  let res = render(<Hero />);
  console.log
  const heroTitle = screen.getByText(/More than just shorter links/i);
  expect(heroTitle).toBeInTheDocument();
});