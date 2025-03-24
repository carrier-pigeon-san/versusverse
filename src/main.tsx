import './createPost.js';

import { Devvit } from '@devvit/public-api';
import { App } from './app/components/app.js';

Devvit.configure({
  redditAPI: true,
  redis: true,
});

// Add a custom post type to Devvit
Devvit.addCustomPostType({
  name: 'VersusVerse Game',
  height: 'tall',
  render: App,
});

export default Devvit;
