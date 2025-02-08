import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0a192f',
        'primary-light': '#112240'
      }
    }
  },
  plugins: [
    skeleton({
      themes: { preset: [ "skeleton" ] }
    })
  ]
} satisfies Config;