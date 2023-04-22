import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import ApplyForm from '../../components/User/ApplyForm/ApplyForm';
import { Provider } from 'react-redux'
import { store } from '../../store';

describe('HomePage Component', () => {
    
    render(<Provider store={store}><MemoryRouter><ApplyForm /></MemoryRouter></Provider>);

    test('fe_react_addStudent', () => {
       const  studentName = screen.queryByTestId('studentName');
       const  place = screen.queryByTestId('place');
       const  mobileNumber = screen.queryByTestId('mobileNumber');
       const  emailId = screen.queryByTestId('emailId');

       expect(studentName).toBeTruthy();
       expect(place).toBeTruthy();
       expect(mobileNumber).toBeTruthy();
       expect(emailId).toBeTruthy();
    })

})