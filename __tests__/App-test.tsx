import React from 'react';
import App from '../App';
import {act, within, fireEvent} from '@testing-library/react-native';
import * as codApi from '../src/api/stats';
import matches from '../__tests__/fixtures/matches.json';
import {MatchResult} from '../src/types';
import TestRenderer, {ReactTestRenderer} from 'react-test-renderer';

test('renders a list of matches correctly', async () => {
  const spy = jest
    .spyOn(codApi, 'getMatches')
    .mockResolvedValue(matches as MatchResult);
  let renderer: ReactTestRenderer;

  await act(async () => {
    renderer = TestRenderer.create(<App />);
  });
  const view = within(renderer!.root);

  //Check the api has been called
  expect(spy).toHaveBeenCalled();

  //Check line chart has rendered
  expect(view.getByText(/Kills \/ Game/i)).toBeTruthy();

  //Flatlist initially renders 10 items
  expect(view.getAllByText(/Gulag/i)).toHaveLength(10);
});

test('renders match details correctly when pressed', async () => {
  const spy = jest
    .spyOn(codApi, 'getMatches')
    .mockResolvedValue(matches as MatchResult);
  let renderer: ReactTestRenderer;

  await act(async () => {
    renderer = TestRenderer.create(<App />);
  });
  const view = within(renderer!.root);

  //Check the api has been called
  expect(spy).toHaveBeenCalled();

  const buttons = view.getAllByRole(/button/i);
  await act(async () => {
    fireEvent.press(buttons[0]);
  });

  //Check the match screen has been rendered
  expect(view.getByText(/loadout/i)).toBeTruthy();
});
