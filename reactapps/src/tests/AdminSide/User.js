import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from '../../components/Admin/User/User';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux'
import { store } from '../../store';

describe('AddDetails', () => {
  test('fe_react_adminUser', () => {
    render(<Provider store={store}><MemoryRouter><User /></MemoryRouter></Provider>);


    const userName = screen.getByTestId('userName');
    const mobile = screen.getByTestId('mobile');
    const qualification = screen.getByTestId('qualification');

    expect(userName).toBeTruthy();
    expect(mobile).toBeTruthy();
    expect(qualification).toBeTruthy();

  });
});