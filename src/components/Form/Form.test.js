import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('<Form /> tests', () => {
  
  it('should render', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    render(
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        wordSearched=""
      />
    );

    screen.getByPlaceholderText('You´re looking for something?');
  });

  it('should have been called functions when type in input', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const utils = render(
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        wordSearched=""
      />
    );

    const input = utils.getByPlaceholderText('You´re looking for something?');
    userEvent.type(input, 'something');
    expect(handleChange).toHaveBeenCalled();
    
    fireEvent.submit(input);
    expect(handleSubmit).toHaveBeenCalled();

  });
});
