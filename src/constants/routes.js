import App from '../components/App';
import React from 'react';

export const ROUTES_LINKS = {
  ROOT: '/'
}

export const ROUTES = {
  ROOT: {
    path: ROUTES_LINKS.ROOT,
    component: App,
    exact: true,
  },
  NOT_FOUND: {
    path: '*',
    component: () => <div>not found</div>,
  },
};