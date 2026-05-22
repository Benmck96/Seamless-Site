/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bone: '#FAFAF7',
        ink: '#0A0A0A',
        cedar: '#D4451F',
        smoke: '#444444',
        ash: '#888888',
        line: '#D4D2CC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.045em',
        'tighter-2': '-0.025em',
        'wider-1': '0.08em',
        'wider-2': '0.12em',
        'wider-3': '0.18em',
      },
    },
  },
  plugins: [],
};
