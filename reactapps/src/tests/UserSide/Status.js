import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Status from '../../components/User/Status/Status';
import { Provider } from 'react-redux'
import { store } from '../../store';

describe('Status Component', () => {
    
    render(<Provider store={store}><MemoryRouter><Status /></MemoryRouter></Provider>);

    test('fe_react_userStatus', () => {
       const  status = screen.queryByTestId('status');

       expect(status).toBeTruthy();
    })

})