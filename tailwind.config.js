export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        dark: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          text: '#c9d1d9',
          'text-secondary': '#8b949e',
        },
        light: {
          bg: '#ffffff',
          surface: '#f6f8fa',
          border: '#d0d7de',
          text: '#24292e',
          'text-secondary': '#656d76',
        }
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};
