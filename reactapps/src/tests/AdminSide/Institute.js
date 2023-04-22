import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminHomePage from '../../components/Admin/AdminHomePage/AdminHomePage';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux'
import { store } from '../../store';

describe('Home Page', () => {
  test('fe_react_adminHomePage', () => {
    render(<Provider store={store}><MemoryRouter><AdminHomePage /></MemoryRouter></Provider>);

    const addInstitute = screen.getByTestId('addInstitute');
    const instituteName = screen.getByTestId('instituteName');

    expect(addInstitute).toBeTruthy();
    expect(instituteName).toBeTruthy();
  });
});