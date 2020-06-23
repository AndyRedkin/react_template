// import App from '../components/App';
import React from 'react';
import MainPage from '../pages/main';

export const ROUTES_LINKS = {
  ROOT: '/',
}

export const ROUTES = {
  ROOT: {
    path: ROUTES_LINKS.ROOT,
    component: MainPage,
    exact: true,
  },
  NOT_FOUND: {
    path: '*',
    component: () => <div>not found</div>,
  },
};