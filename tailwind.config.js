const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#DBFBD6",
          200: "#B0F8AF",
          300: "#83EA8B",
          400: "#60D574",
          500: "#32BA57",
          600: "#249F52",
          700: "#19854B",
          800: "#0F6B43",
          900: "#09593E",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addComponents, theme }) {
      const colors = theme('colors');

      Object.keys(colors).forEach((clr) => {
        const color = colors[clr];
        const mainColor = color[500] || color?.main || color;
        const hoverColor = color[600] || color?.dark || color;
        const extraLightColor = color[50] || color[100];
        const lightColor = color[100] || color?.light || color;
        const contrastColor = color?.contrastColor || '#fff';

        addComponents({
          '._tw_btn': {
            // Colors
            [`&.${clr}`]: {
              background: mainColor,
              color: contrastColor,
              borderColor: mainColor,

              '&:hover, &:focus': {
                background: hoverColor,
              },
              '&:focus': {
                boxShadow: `inset 0px 0px 0px 1.5px #ffffffc7`
              }
            },

            // Outlined Varient
            [`&.${clr}.outlined`]: {
              'border-color': mainColor,
              color: mainColor,
              background: 'transparent',

              '&:hover': {
                background: extraLightColor,
              },
              '&:focus': {
                boxShadow: `inset 0px 0px 5px 1px ${lightColor}`
              }
            },

            // Text Varient
            [`&.${clr}.text`]: {
              'border-color': extraLightColor,
              color: hoverColor,
              background: extraLightColor,

              '&:hover,&:focus': {
                background: lightColor,
              },
              '&:focus': {
                'border-color': mainColor,
              }
            },
          },
        });
      });
    }),
  ],
}