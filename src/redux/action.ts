import { createAction } from '@reduxjs/toolkit';
import { Film, Genre, PromoFilmType } from '../const.ts';

export const setActiveGenre = createAction<Genre>('setActiveGenre');
export const setGenres = createAction<Genre[]>('genre/setGenres');
export const addShowedFilms = createAction('films/addShowedFilms');
export const loadFilms = createAction<Film[]>('films/loadFilms');
export const loadPromoFilm = createAction<PromoFilmType>('films/loadPromoFilm');
