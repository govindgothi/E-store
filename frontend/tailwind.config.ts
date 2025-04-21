/** @type {import('tailwindcss').Config} */


export default {
    content: [
      "./index.html",
        "./src/**/*.{html,ts,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          
            cream: "#fefdf7",
                      primary:{
                yellow: '#F8C027', // Replace with your custom color     
                blue:'#00ff' 
            },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                sans: ['"Merriweather Sans"', 'sans-serif'],
              },
              
        },
        screens: {
          'xp':'340px',
          'xt':'415px',
          'xs': '480px', // Example: custom "xs" breakpoint
          'xr': '580px',
          'ms':'910px'
        },
      },
    },
    plugins: [],
  }