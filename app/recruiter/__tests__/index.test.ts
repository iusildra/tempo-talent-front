import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Companies from '../companies';

describe('Companies', () => {
  it('renders the search input and the card view', () => {
    const { getByTestId } = render(<Companies/>);
    const searchInput = getByTestId('company-search-input');
    const cardView = getByTestId('company-card-view');
    expect(searchInput).toBeDefined();
    expect(cardView).toBeDefined();
  });

  it('fetches companies when search is submitted', async () => {
    const { getByTestId } = render(<Companies/>);
    const searchInput = getByTestId('company-search-input');
    const submitButton = getByTestId('company-search-submit');
    const mockFetch = jest.fn(() =>
      Promise.resolve(
        new Response(JSON.stringify({ data: [] }), {
          status: 200,
          headers: { 'Content-type': 'application/json' },
        })
      )
    );
    global.fetch = mockFetch;
    fireEvent.changeText(searchInput, 'test');
    fireEvent.press(submitButton);
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    expect(mockFetch).toHaveBeenCalledWith(expect.any(String), {
      body: JSON.stringify({ keywords: 'test', location: '' }),
    });
  });

  it('renders the fetched companies', async () => {
    const { getByTestId } = render(<Companies/>);
    const searchInput = getByTestId('company-search-input');
    const submitButton = getByTestId('company-search-submit');
    const mockFetch = jest.fn(() =>
      Promise.resolve(
        new Response(JSON.stringify({ data: [{ id: 1, name: 'Test Company' }] }), {
          status: 200,
          headers: { 'Content-type': 'application/json' },
        })
      )
    );
    global.fetch = mockFetch;
    fireEvent.changeText(searchInput, 'test');
    fireEvent.press(submitButton);
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    const cardView = getByTestId('company-card-view');
    expect(cardView.props.data).toEqual([{ id: 1, name: 'Test Company' }]);
  });
});