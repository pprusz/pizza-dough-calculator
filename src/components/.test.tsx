import { render, fireEvent } from '@testing-library/react';
import { Recipes } from './Recipes';

test('changes recipe and portion on button click', () => {
  const { getByText, getByPlaceholderText } = render(<Recipes />);

  // Sprawdzenie, czy domyślnie wyświetlana jest pierwsza opcja
  expect(getByText('Napoletana').classList.contains('active')).toBe(true);
  expect(getByPlaceholderText('5').getAttribute('value')).toBe('1');

  // Kliknięcie w przycisk "Classica"
  fireEvent.click(getByText('Classica'));

  // Sprawdzenie, czy zmieniono opcję na "Classica" i czy wartość porcji nadal jest 1
  expect(getByText('Classica').classList.contains('active')).toBe(true);
  expect(getByPlaceholderText('5').getAttribute('value')).toBe('1');

  // Zmiana wartości porcji na 5
  fireEvent.change(getByPlaceholderText('5'), { target: { value: '5' } });

  // Sprawdzenie, czy wartość porcji została zmieniona na 5
  expect(getByPlaceholderText('5').getAttribute('value')).toBe('5');
});
