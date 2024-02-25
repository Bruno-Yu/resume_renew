/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(255, 203, 66)',
        'secondary': 'rgb(32, 80, 103)',
        'dark-primary': 'rgb(92 213 251)',
        'dark-banner': 'rgb(25 29 29)',
        'dark-bg': 'rgb(33 39 40)',
        'dark-orange': 'rgb(254 141 89)',
        'dark-gray': 'rgb(106 110 111)',
        'dark-white': 'rgb(222 227 229)',
        'dark-purple': 'rgb(165 144 255)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
		// preflight: false,
	}
};