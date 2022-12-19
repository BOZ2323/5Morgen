import React from 'react';
import { shallow } from 'enzyme'
import { render, screen, act } from '@testing-library/react';
import { SubwayDetailPage } from './SubwayDetailPage';



test('renders "back to menu" link', () => {
  render(<SubwayDetailPage />);
  const divElement = screen.getByText(/Back to menu/i);
  expect(divElement).toBeInTheDocument();
});


// test('renders content', () => {
//   const wrapper = shallow(<SubwayDetailPage />)
//   const divElement = screen.getByRole(/contentinfo/i);
//   // expect(wrapper.exists(PaymentStatusButton)).toBe(true)
//   expect(wrapper.exists(divElement)).toBeInTheDocument();
  

 
// });
// test('renders content', () => {
//   createRoot(<SubwayDetailPage />);
//   const divElement = screen.getByRole(/contentinfo/i);
//   expect(divElement).toBeInTheDocument();
// });

// const { getByText, getAllByText, getByTestId, findByText } = createTestApp(<Invoices />)