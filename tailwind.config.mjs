/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(255, 203, 66)',
        'secondary': 'rgb(32, 80, 103)',
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