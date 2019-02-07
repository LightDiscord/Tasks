/* eslint-disable no-console */

import { register } from 'register-service-worker';

const ready = () => {
  console.log('App is being served from cache by a service worker.');
}

const registered = () => {
  console.log('Service worker has been registered.');
}

const cached = () => {
  console.log('Content has been cached for offline use.');
}

const updatefound = () => {
  console.log('New content is downloading.');
}

const updated = () => {
  console.log('New content is available; please refresh.');
}

const offline = () => {
  console.log('No internet connection found. App is running in offline mode.');
}

const error = (error: any) => {
  console.error('Error during service worker registration.', error);
}

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready,
    registered,
    cached,
    updatefound,
    updated,
    offline,
    error
  });
}
