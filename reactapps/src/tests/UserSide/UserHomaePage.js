import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import HomePage from '../../components/User/HomePage/HomePage';
import { Provider } from 'react-redux'
import { store } from '../../store';

describe('HomePage', () => {
    
    render(<Provider store={store}><MemoryRouter><HomePage /></MemoryRouter></Provider>);

    test('fe_react_userHomePage', () => {
       const  instituteName = screen.queryByTestId('instituteName');
       const  courseName = screen.queryByTestId('courseName');
	   
	   expect(instituteName).toBeTruthy();
       expect(courseName).toBeTruthy();
    })

})