/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary-Color": "#6CC800",
        "secondary-Color": "#000000",
        "white-Color": "#ffffff",
        "submit-bg": "#B9FF66",
        "brandsbg": "rgba(0, 0, 0, 0.5)",
        "boxingbg": "#141414"
      },
      fontFamily:{
        clashBold: ["ClashDisplay-Bold"],
        clashXtraLight: ["ClashDisplay-Extralight"],
        clashLight: ["ClashDisplay-Light"],
        clashMedium: ["ClashDisplay-Medium"],
        clashNormal: ["ClashDisplay-Regular"],
        clashSemiBold: ["ClashDisplay-Semibold"]
      },
      screens: {
        'sm': { max: '632px'},
        'md': { max: '768px'},
        'med': {max: '960px'},
        'lg': { max: '1024px'},
        'xl': { max: '1280px'}
      }
    },
  },
  plugins: [],
}

