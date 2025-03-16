import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';  // Import the Register component

describe('Register Component', () => {
  test('renders the Register form', () => {
    render(<Register />);

    // Check if the heading is rendered
    const heading = screen.getByText(/create an account/i);
    expect(heading).toBeInTheDocument();

    // Check if the username field is rendered
    const usernameInput = screen.getByPlaceholderText(/enter your username/i);
    expect(usernameInput).toBeInTheDocument();

    // Check if the email/phone field is rendered
    const emailInput = screen.getByPlaceholderText(/enter your email or phone/i);
    expect(emailInput).toBeInTheDocument();

    // Check if the password field is rendered
    const passwordInput = screen.getByPlaceholderText(/create a password/i);
    expect(passwordInput).toBeInTheDocument();

    // Check if the confirm password field is rendered
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm your password/i);
    expect(confirmPasswordInput).toBeInTheDocument();

    // Check if the Register button is rendered
    const registerButton = screen.getByRole('button', { name: /register/i });
    expect(registerButton).toBeInTheDocument();
  });

  test('form submission', () => {
    render(<Register />);

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText(/enter your username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your email or phone/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/create a password/i), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByPlaceholderText(/confirm your password/i), {
      target: { value: 'password123' },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    // Check if the form data was logged to the console
    // You can mock the console.log to ensure it's called
    const consoleSpy = jest.spyOn(console, 'log');
    expect(consoleSpy).toHaveBeenCalledWith('User Registered with:', {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    });

    consoleSpy.mockRestore(); // Clean up the spy
  });
});
