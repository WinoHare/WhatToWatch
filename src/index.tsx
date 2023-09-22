import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { films } from './mocks/films.ts';
import { promoFilm } from './mocks/promoFilm.ts';
import { filmCard } from './mocks/filmCard.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App films={films} promoFilm={promoFilm} filmCard={filmCard} />
  </React.StrictMode>,
);
