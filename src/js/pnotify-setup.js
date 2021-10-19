import { Stack } from '@pnotify/core';

const defaultStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 225,
  firstpos2: 25,
});

export const errorSetup = {
  text: 'Too many matches found. Please enter a more specific query!',
  type: 'error',
  delay: 500,
  width: '320px',
  minHeight: '100px',
  animation: 'fade',
  closer: false,
  sticker: false,
  addClass: 'pnotyfy-my-setup',
  stack: defaultStack,
};

export const noticeSetup = {
  text: 'Nothing found on your request!',
  type: 'notice',
  delay: 500,
  width: '320px',
  minHeight: '100px',
  animation: 'fade',
  closer: false,
  sticker: false,
  addClass: 'pnotyfy-my-setup',
  stack: defaultStack,
};