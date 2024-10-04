import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'content-cards': '0px 42px 17px rgba(0, 0, 0, 0.01), 0px 24px 14px rgba(0, 0, 0, 0.05), 0px 11px 11px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'cards': '0px 16px 6px rgba(0, 0, 0, 0.01), 0px 9px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'
      },
      dropShadow:{
        'shadow-2':'0 2px 2px rgba(0,0,0,25%)',
        'shadow-4':'0 4px 4px rgba(0,0,0,25%)',
        'shadow-6':'0 6px 6px rgba(0,0,0,25%)',
        'shadow-8':'0 8px 8px rgba(0,0,0,25%)',
        'shadow-12':'0 12px 12px rgba(0,0,0,25%)',
        'shadow-16':'0 16px 16px rgba(0,0,0,25%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#417F56",
        
        'shade-1': "#396F4B",
        'shade-2': "#315F41",
        'shade-3': "#294F36",
        'shade-4': "#21402B",
        'shade-5': "#183020",
        'shade-6': "#102016",
        'shade-7': "#08100B",

        'tint-1': "#E5F2E9",
        'tint-2': "#CAE4D3",
        'tint-3': "#B0D7BD",
        'tint-4': "#96C9A7",
        'tint-5': "#7CBC91",
        'tint-6': "#61AE7B",
        'tint-7': "#4E9968",
        
        withe:"#FFFFFF",
        'gray-1':"#F9F9F9",
        'gray-2':"#E1E1E1",
        'gray-3':"#EDEDED",
        'gray-4':"#CBCBCB",
        'gray-5':"#ADADAD",
        'gray-6':"#757575",
        'gray-7':"#717171",
        'gray-8':"#353535",
         black  :"#0C0C0C",

        'error':"#C30000",
        'error-light':"#ED2E2E",
        'error-extralight':"#FFF2F2",
        
        'success':"#00966D",
        'success-light':"#00BA88",
        'success-extralight':"#F3FDFA",

        'warning':"#A9791C",
        'warning-light':"#F4B740",
        'warning-extralight':"#FFF8E1",

      },
    },
  },
  plugins: [],
};
export default config;
