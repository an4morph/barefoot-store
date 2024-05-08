import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#a3e635',
      }, 
    },
    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [
    plugin(({ theme, addUtilities, matchUtilities }) => {
      matchUtilities({
        hoverbg: (value) => ({
          '@apply relative overflow-hidden [&>*]:z-10': '',
          '&:after': {
            '@apply content-[""] absolute top-0 left-0 w-full h-full': '',
          },
          '&:hover:after': {
            backgroundColor: value,
            '@apply z-0': '',
          }
        })
      }, { values: flattenColorPalette(theme('colors')), type: 'color' })
    })
  ],
};
export default config;
