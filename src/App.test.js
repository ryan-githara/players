import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the FIFA players list', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /fifa players/i })).toBeInTheDocument();
  expect(screen.getByText('Lionel Messi')).toBeInTheDocument();
  expect(screen.getByText('Kylian Mbappé')).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Kylian Mbappé' })).toHaveAttribute(
    'src',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Kylian_Mbappe_2017.jpg'
  );
  expect(screen.getByRole('img', { name: 'Erling Haaland' })).toHaveAttribute(
    'src',
    'https://upload.wikimedia.org/wikipedia/commons/8/82/Erling_Haaland_2020_%28cropped%29.jpg'
  );
  expect(screen.getByRole('img', { name: 'Kylian Mbappé' })).toHaveStyle({ objectPosition: 'center top' });
  expect(screen.getByRole('img', { name: 'Erling Haaland' })).toHaveStyle({ objectPosition: 'center top' });
});
