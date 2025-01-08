import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@shadcn/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      position: {
        unset: 'unset',
      },
      fontFamily: {
        estedad: ['Estedad'],
      },
      boxShadow: {
        'content-cards':
          '0px 42px 17px rgba(0, 0, 0, 0.01), 0px 24px 14px rgba(0, 0, 0, 0.05), 0px 11px 11px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        cards:
          '0px 16px 6px rgba(0, 0, 0, 0.01), 0px 9px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        cardFood: '0 25px 7px 0 rgba(0,0,0,0%), 0 16px 6px 0 rgba(0,0,0,1%),0 9px 5px 0 rgba(0,0,0,5%),  0 4px 4px 0 rgba(0,0,0,9%), 0 1px 2px 0 rgba(0,0,0,10%), 0 0 0 0 rgba(0,0,0,10%)',
        'shadow-10': '0 0 10px 0 rgba(0,0,0,15%)',
      },
      dropShadow: {
        'shadow-2': '0 2px 2px rgba(0,0,0,25%)',
        'shadow-4': '0 4px 4px rgba(0,0,0,25%)',
        'shadow-6': '0 6px 6px rgba(0,0,0,25%)',
        'shadow-8': '0 8px 8px rgba(0,0,0,25%)',
        'shadow-12': '0 12px 12px rgba(0,0,0,25%)',
        'shadow-16': '0 16px 16px rgba(0,0,0,25%)',
      },
      colors: {
        'background-1': '#232b33',
        'background-2': '#2d3743',
        'primary': '#417F56',
        'shade-1': '#396F4B',
        'shade-2': '#315F41',
        'shade-3': '#294F36',
        'shade-4': '#21402B',
        'shade-5': '#183020',
        'shade-6': '#102016',
        'shade-7': '#08100B',
        'tint-1': '#E5F2E9',
        'tint-2': '#CAE4D3',
        'tint-3': '#B0D7BD',
        'tint-4': '#96C9A7',
        'tint-5': '#7CBC91',
        'tint-6': '#61AE7B',
        'tint-7': '#4E9968',
        withe: '#FFFFFF',
        'gray-1': '#F9F9F9',
        'gray-2': '#E1E1E1',
        'gray-3': '#EDEDED',
        'gray-4': '#CBCBCB',
        'gray-5': '#ADADAD',
        'gray-6': '#757575',
        'gray-7': '#717171',
        'gray-8': '#353535',
        black: '#0C0C0C',
        error: '#C30000',
        'error-light': '#ED2E2E',
        'error-extralight': '#FFF2F2',
        success: '#00966D',
        'success-light': '#00BA88',
        'success-extralight': '#F3FDFA',
        warning: '#A9791C',
        'warning-light': '#F4B740',
        'warning-extralight': '#FFF8E1',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        '3xl': '64px',
        '2xl': '32px',
        xl: '24px',
        lg: '16px',
        md: '8px',
        sm: '4px',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
