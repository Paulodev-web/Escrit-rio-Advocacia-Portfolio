/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada na identidade visual "ESCRITÓRIO DE ADVOCACIA"
        elegant: {
          50: '#f9f7f4',   // Bege muito claro
          100: '#f4f1ec',  // Bege claro
          200: '#ede7dc',  // Bege suave
          300: '#e3d8c8',  // Bege médio
          400: '#d4c4a8',  // Bege escuro
          500: '#c4ad8a',  // Bege acastanhado
          600: '#a68b5b',  // Marrom claro
          700: '#8b6f47',  // Marrom médio
          800: '#6d5236',  // Marrom escuro
          900: '#4a3425',  // Marrom muito escuro
        },
        accent: {
          50: '#faf8f3',   // Dourado muito claro
          100: '#f5f0e6',  // Dourado claro
          200: '#ede3cc',  // Dourado suave
          300: '#e0d0a3',  // Dourado médio
          400: '#d4bc7a',  // Dourado
          500: '#c8a851',  // Dourado intenso (cor principal)
          600: '#b8963b',  // Dourado escuro
          700: '#9a7b2f',  // Dourado muito escuro
          800: '#7d6225',  // Bronze
          900: '#614a1b',  // Bronze escuro
        },
        brown: {
          50: '#faf8f5',   // Marrom muito claro
          100: '#f1ebe0',  // Marrom claro
          200: '#e6d4c1',  // Marrom suave
          300: '#d7b896',  // Marrom médio claro
          400: '#c49969',  // Marrom médio
          500: '#a67c52',  // Marrom principal (cor da imagem)
          600: '#8b5a3c',  // Marrom escuro
          700: '#6f4530',  // Marrom muito escuro
          800: '#543427',  // Marrom profundo
          900: '#3c251b',  // Marrom quase preto
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Trajan Pro', 'Cinzel', 'Times New Roman', 'serif'],
        'display': ['Trajan Pro', 'Cinzel', 'Times New Roman', 'serif'],
      },
      backgroundImage: {
        'elegant-gradient': 'linear-gradient(135deg, #f9f7f4 0%, #ede7dc 100%)',
        'dark-gradient': 'linear-gradient(135deg, #6d5236 0%, #4a3425 100%)',
        'accent-gradient': 'linear-gradient(135deg, #c8a851 0%, #b8963b 100%)',
        'brown-gradient': 'linear-gradient(135deg, #a67c52 0%, #8b5a3c 100%)',
      }
    },
  },
  plugins: [],
};
