import { fireEvent, render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card tests', () => {
  const product = {
    author: 'Alberto',
    price: 30,
    liked: false,
    likes_count: 40,
    main_attachment: {
      small: 'https://via.placeholder.com/150',
    },
    title: 'test',
  };

  it('should render', () => {
    const handleLike = () => {};

    render(<Card product={product} handleLike={handleLike} />);

    screen.getByText('test');
  });

  it('should has properties indicated', () => {
    const handleLike = () => {};

    render(<Card product={product} handleLike={handleLike} />);

    screen.getByText('test');
    screen.getByText('by Alberto');
    screen.getByText('30 €');
    screen.getByText('40');

  });
  
  it('clicking the button calls event like handle once', () => {
    const mockHandle = jest.fn();
    
    render(<Card product={product} handleLike={mockHandle} />);
    
    const button = screen.getByRole('button', { class: 'card__likes__button' });
    expect(button).toHaveClass('card__likes__button--unliked');
  
    fireEvent.click(button);
    
    expect(mockHandle).toHaveBeenCalledTimes(1);
    expect(mockHandle).not.toHaveBeenCalledTimes(3);
    
  });
});
