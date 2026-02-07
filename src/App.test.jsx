import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';

// Helper to render with Cart context
function renderWithProvider(ui) {
  return render(
    <BrowserRouter>
      <CartProvider>{ui}</CartProvider>
    </BrowserRouter>
  );
}

test('Pages render visible', () => {
  renderWithProvider(<App />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByText('Welcome to the Shopping Cart')).toBeInTheDocument();
});

test('Navigation links work', () => {
  renderWithProvider(<App />);
  userEvent.click(screen.getByRole("link", { name: /^shop$/i }));

});


// test('Products render on Shop page', async () => {
//   renderWithProvider(<App />);
//   userEvent.click(screen.getByText(/Shop/i));
//   // Wait for products to load
//   const product = await screen.findByText(/Placeholder Product|.+/);
//   expect(product).toBeInTheDocument();
// });

// test('Cart count updates when product is added', async () => {
//   renderWithProvider(<App />);
//   userEvent.click(screen.getByText(/Shop/i));
//   const addButton = await screen.findByRole('button', { name: /Add to Cart/i });
//   userEvent.click(addButton);
//   userEvent.click(screen.getByText(/Cart/i));
//   expect(screen.getByText(/Your cart/i)).toBeInTheDocument();
//   expect(screen.getByText(/Placeholder Product|.+/)).toBeInTheDocument();
// });

// test('Quantity input updates and buttons work', async () => {
//   renderWithProvider(<App />);
//   userEvent.click(screen.getByText(/Shop/i));
//   const input = await screen.findByRole('spinbutton');
//   userEvent.clear(input);
//   userEvent.type(input, '3');
//   expect(input.value).toBe('3');
//   const plusButton = screen.getByRole('button', { name: '+' });
//   userEvent.click(plusButton);
//   expect(input.value).toBe('4');
//   const minusButton = screen.getByRole('button', { name: '-' });
//   userEvent.click(minusButton);
//   expect(input.value).toBe('3');
// });

// test('Add to Cart button works with updated quantity', async () => {
//   renderWithProvider(<App />);
//   userEvent.click(screen.getByText(/Shop/i));
//   const input = await screen.findByRole('spinbutton');
//   userEvent.clear(input);
//   userEvent.type(input, '2');
//   const addButton = screen.getByRole('button', { name: /Add to Cart/i });
//   userEvent.click(addButton);
//   userEvent.click(screen.getByText(/Cart/i));
//   expect(screen.getByText(/2/)).toBeInTheDocument(); // Quantity in cart
// });