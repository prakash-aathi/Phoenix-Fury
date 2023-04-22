import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Review from '../../components/User/Review/Review';
import { Provider } from 'react-redux'
import { store } from '../../store';

describe('Review Component', () => {
    render(<Provider store={store}><MemoryRouter><Review /></MemoryRouter></Provider>);

    test('fe_react_userReview', () => {
        const comments = screen.queryByTestId('comments');

        expect(comments).toBeTruthy();
    })
    
})